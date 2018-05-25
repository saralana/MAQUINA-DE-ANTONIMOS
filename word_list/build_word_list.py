import operator
import nltk
from nltk.corpus import mac_morpho as morpho

fd_morpho = nltk.FreqDist(w.lower() for w in morpho.words() if len(w) > 2)
fd_morpho = sorted(fd_morpho.items(), key=operator.itemgetter(1), reverse=True)

for (word, num) in fd_morpho[:20]:
  print(word, num)
