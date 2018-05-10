#!/usr/bin/python
# -*- coding: utf-8 -*-

import json
import os
import re
import subprocess
import hunspell
import rdflib
from rdflib import URIRef as URI

spellDictionary = hunspell.HunSpell('/usr/share/hunspell/pt_BR.dic',
                                    '/usr/share/hunspell/pt_BR.aff')

MY_PATH = os.path.dirname(os.path.realpath(__file__))
RDF_FILE = MY_PATH + '/../assets/OntoPTv0.6_rdf/OntoPTv0.6.rdfs'
TXT_FILE = MY_PATH + '/../assets/ICMC_USP/triplos.txt'
OUT_FILE = MY_PATH + '/../assets/ants.js/ants.js'

mGraph = rdflib.Graph()
mGraph.parse(RDF_FILE)

antonymDictionary = {}
URI_URL = u'http://ontopt.dei.uc.pt/OntoPT.owl#'
uris = ['antonimoAdjDe', 'antonimoNDe', 'antonimoVDe']

def putInDict(word, antonym, dict, pos=''):
  word = word.replace('ü'.decode('utf8'), 'u')
  antonym = antonym.replace('ü'.decode('utf8'), 'u')

  if((pos == 'adj') and (word[-1] == 'o') and (antonym[-1] == 'o')):
    putInDict(word[:-1] + 'a', antonym[:-1] + 'a', dict)
    putInDict(word[:-1] + 'os', antonym[:-1] + 'os', dict)
    putInDict(word[:-1] + 'as', antonym[:-1] + 'as', dict)
  elif((pos == 'adj') and re.match(r'[aeo]', word[-1]) and re.match(r'[aeo]', antonym[-1])):
    putInDict(word + 's', antonym + 's', dict)

  if(spellDictionary.spell(word.decode('utf8')) and
     spellDictionary.spell(antonym).decode('utf8')):
    if(word not in dict):
      dict[word] = {}
    dict[word][antonym] = 1
    if(antonym not in dict):
      dict[antonym] = {}
    dict[antonym][word] = 1

for uri in uris:
  pos = ('adj' if 'AdjDe' in uri else
         'verb' if 'VDe' in uri else '')
  for antonymPair in mGraph[:URI(URI_URL + uri)]:
    for word in mGraph[antonymPair[0] : URI(URI_URL + 'formaLexical')]:
      word = word.encode('utf8').decode('utf8').strip()
      for antonym in mGraph[antonymPair[1] : URI(URI_URL + 'formaLexical')]:
        antonym = antonym.encode('utf8').decode('utf8').strip()
        putInDict(word, antonym, antonymDictionary, pos)

with open(TXT_FILE, 'r') as infile:
  for line in infile:
    if('ANTONIMO_DE' in line):
      pos = ('adj' if 'djetivo' in line else
             'verb' if 'erb' in line else '')
      line = re.sub(r'\[.*\] ','', line)
      line_arr = line.split(' ANTONIMO_DE ')
      word = line_arr[0].decode('utf8').strip()
      antonym = line_arr[1].decode('utf8').strip()
      putInDict(word, antonym, antonymDictionary, pos)

print "total de palavras: %s" % str(len(antonymDictionary))

for word in antonymDictionary:
  antonymDictionary[word] = [antonym for antonym in antonymDictionary[word]]

jsonDictionary = json.dumps(antonymDictionary, ensure_ascii=False, encoding='utf8')

with open(OUT_FILE, 'w') as outfile:
  outfile.write("var ants = JSON.parse('" + jsonDictionary.encode('utf8') + "')\n")
