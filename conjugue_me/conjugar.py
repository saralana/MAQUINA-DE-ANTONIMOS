import re
import subprocess

verb = 'chegar'
antonym = 'partir'

def conjugateAntonyms(verb, antonym):
  tenses = ['Presente do Indicativo',
            'Perfeito do Indicativo',
            'Imperfeito do Indicativo',
            'Futuro do Presente do Indicativo']
  
  persons = ['eu', 'ele', 'nós', 'eles']
  
  antonym_pairs = []
  
  for tense in tenses:
    verb_tense = subprocess.check_output('conjugar %s | grep "^%s" -A 6'%(verb, tense), shell=True)
    antonym_tense = subprocess.check_output('conjugar %s | grep "^%s" -A 6'%(antonym, tense), shell=True)
    
    for person in persons:
      verb_tense_person = re.findall(r'.*' + person + ' (.*)\s', verb_tense)
      antonym_tense_person = re.findall(r'.*' + person + ' (.*)\s', antonym_tense)
      if (len(verb_tense_person) > 0 and len(antonym_tense_person) > 0):
        antonym_pairs.append((verb_tense_person[0], antonym_tense_person[0]))
  
  return antonym_pairs

conjugateAntonyms(verb, antonym)
