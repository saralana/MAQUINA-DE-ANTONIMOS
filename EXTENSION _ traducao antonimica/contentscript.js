//garantir que a página carrega até o final antes de iniciar o código
window.onload = function(){ 
  
    import { ants } from 'ants'; 
  
    var notepad = document.getElementsByClassName('ql-editor')[0].getElementsByTagName('p')[0];
    notepad.innerHTML != '';

    fClear(); 
    var config = {childList: true,
                    subtree: true};

    //START _ abrir microfones
    var microphone = document.getElementsByClassName('btn__text listen')[0];
    microphone.click();
    console.log('microfones abertos..');//debug 
    antonimo = '';
  
    var callback = function(mutations){
           console.log('texto mudou');//debug
           console.log(notepad.innerHTML);//debug
           if (notepad.innerHTML != antonimo)
              antonimo = fAntonimo();
           else {
              fSpeech();
              fClear();
           }
    }
    var observer = new MutationObserver(callback);
    observer.observe(notepad, config);
  
    function fAntonimo(){     
            //Código para tradução antonimica 
            //FRASE ANTONIMIZADA SALVA NA VARIAVEL ANTONIMO
            if (notepad.innerHTML != '' && notepad.innerHTML != '<br>'){ 
              tradAntonimo = fReplace(notepad.innerHTML);
              notepad.innerHTML = tradAntonimo;
              return tradAntonimo;
            }
      }

    function fSpeech(){
           var tts = document.getElementsByClassName('btn__text btn-tts')[0];
           if (notepad.innerHTML != '' && notepad.innerHTML != '<br>'){ 
              tts.click();
           }
      }  

    function fClear(){     
           if (notepad.innerHTML != '' && notepad.innerHTML != '<br>'){ 
             notepad.innerHTML = '';
           }
      }  

    function fReplace(frase){
        var words = frase.split(" ");
        console.log(words);
        for (var i = 0; i < words.length; i++) {
          if (words[i]!='')
            words[i] = words[i].replace(words[i], "antônimo");
        }
        var translation = words.join(' ');console.log(words[i]);
        return translation;
      }
}


/*  REPLACING WORDS

http://stackoverflow.com/questions/15604140/replace-multiple-strings-with-multiple-other-strings

https://github.com/thalida/WordBird/blob/master/extension/content_script.js

String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};

function replaceAll(str, antonimos){
    for(key in antonimos){
        str = str.replaceAll(key, map[key]);
    }
    return str;
}
//testing...
var str = "bat, ball, cat";
var antonimos = {
    'bat' : 'foo',
    'ball' : 'boo',
    'cat' : 'bar'
};
var new = replaceAll(str, map);
//result: "foo, boo, bar"
*/
