# https://github.com/blatinier/pyhunspell
import hunspell

hobj = hunspell.HunSpell('/usr/share/hunspell/pt_BR.dic', '/usr/share/hunspell/pt_BR.aff')

hobj.spell('bonite')
hobj.suggest('bonite')
