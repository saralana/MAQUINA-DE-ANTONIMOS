import os
import re
import rdflib
from rdflib import URIRef as URI

MY_PATH = os.path.dirname(os.path.realpath(__file__))
RDF_FILE = MY_PATH + '/../assets/OntoPTv0.6_rdf/OntoPTv0.6.rdfs'
TXT_FILE = MY_PATH + '/../assets/ICMC_USP/triplos.txt'
OUT_FILE = MY_PATH + '/../assets/ants.js/ants.js'

mGraph = rdflib.Graph()
mGraph.parse(RDF_FILE)

antonymDictionary = {}
URI_URL = u'http://ontopt.dei.uc.pt/OntoPT.owl#'
uris = [URI_URL + 'antonimoAdjDe',
        URI_URL + 'antonimoNDe',
        URI_URL + 'antonimoVDe']

def putInDict(word, antonym, dict):
  if(word not in dict):
    dict[word] = {}
  dict[word][antonym] = 1
  if(antonym not in dict):
    dict[antonym] = {}
  dict[antonym][word] = 1
  return

for uri in uris:
  for antonymPair in mGraph[:URI(uri)]:
      for word in mGraph[antonymPair[0] : URI(URI_URL + 'formaLexical')]:
        word = word.encode('utf8').decode('utf8')
        for antonym in mGraph[antonymPair[1] : URI(URI_URL + 'formaLexical')]:
          antonym = antonym.encode('utf8').decode('utf8')
          putInDict(word, antonym, antonymDictionary)

with open(TXT_FILE, 'r') as infile:
  for line in infile:
    if('ANTONIMO_DE' in line):
      line = re.sub(r'\[.*\] ','', line)
      line_arr = line.split(' ANTONIMO_DE ')
      word = line_arr[0].decode('utf8').strip()
      antonym = line_arr[1].decode('utf8').strip()
      putInDict(word, antonym, antonymDictionary)

with open(OUT_FILE, 'w') as outfile:
  outfile.write('var ants = {\n')
  for word in antonymDictionary:
    wordAntonymString = '  \'' + word.encode('utf8') + '\': ['
    for antonym in antonymDictionary[word]:
      wordAntonymString += '\n    \'' + antonym.encode('utf8') + '\','
    wordAntonymString = wordAntonymString[:-1]
    wordAntonymString += '\n  ],\n'
    outfile.write(wordAntonymString)
  outfile.write('}\n')
