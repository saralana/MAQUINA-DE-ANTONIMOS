import re
import rdflib
import urllib2
from rdflib import URIRef as URI

RDF_FILE = '../assets/OntoPTv0.6_rdf/OntoPTv0.6.rdfs'
TXT_FILE = '../assets/ICMC_USP/triplos.txt'
OUT_FILE = './outputs/ants.js'

g = rdflib.Graph()
result = g.parse(RDF_FILE)

d = {}
URI_URL = u'http://ontopt.dei.uc.pt/OntoPT.owl#'
uris = [u'http://ontopt.dei.uc.pt/OntoPT.owl#antonimoAdjDe',
        u'http://ontopt.dei.uc.pt/OntoPT.owl#antonimoNDe',
        u'http://ontopt.dei.uc.pt/OntoPT.owl#antonimoVDe']

def putInDict(w, a, d):
  if(w not in d):
    d[w] = {}
  d[w][a] = 1
  if(a not in d):
    d[a] = {}
  d[a][w] = 1
  return

for u in uris:
  for ant_pair in g[:URI(u)]:
      for w in g[ant_pair[0] : URI(URI_URL + 'formaLexical')]:
        w = w.encode('utf8').decode('utf8')
        for a in g[ant_pair[1] : URI(URI_URL + 'formaLexical')]:
          a = a.encode('utf8').decode('utf8')
          putInDict(w, a, d)

with open(TXT_FILE, 'r') as infile:
  for line in infile:
    if('ANTONIMO_DE' in line):
      line = re.sub(r'\[.*\] ','', line)
      line_arr = line.split(' ANTONIMO_DE ')
      w = line_arr[0].decode('utf8').strip()
      a = line_arr[1].decode('utf8').strip()
      putInDict(w, a, d)

with open(OUT_FILE, 'w') as outfile:
  outfile.write('var ants = {\n')
  for k in d:
    s = '  \'' + k.encode('utf8') + '\': ['
    for a in d[k]:
      s += '\n    \'' + a.encode('utf8') + '\','
    s = s[:-1]
    s += '\n  ],\n'
    outfile.write(s)
  outfile.write('}\n')
