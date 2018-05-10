import os
import rdflib
import cPickle as pickle

MY_PATH = os.path.dirname(os.path.realpath(__file__))
RDF_IN = MY_PATH + '/OntoPTv0.6.rdfs'
RDF_OUT = MY_PATH + '/OntoPTv0.6.bin'

mGraph = rdflib.Graph()
mGraph.parse(RDF_IN)


with open(RDF_OUT, 'wb') as outFile:
    pickle.dump(mGraph, outFile, -1)

'''
with open(RDF_OUT, 'rb') as graphFile:
    mGraph = pickle.load(graphFile)
'''
