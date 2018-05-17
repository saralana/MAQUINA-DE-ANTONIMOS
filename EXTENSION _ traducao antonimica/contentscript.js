//garantir que a página carrega até o final antes de iniciar o código
window.onload = function(){ 

    var notepad = document.getElementsByClassName('ql-editor')[0].getElementsByTagName('p')[0];
    notepad.innerHTML != '';

    console.log(notepad);//debug
    
    fClear();
  
    var config = {childList: true,
                    subtree: true};

    console.log(config); //debug

    //START _ abrir microfones
    var microphone = document.getElementsByClassName('btn__text listen')[0];
    microphone.click();
    console.log('microfones abertos..');//debug 
    antonimo = '';
  
    var callback = function(mutations){
           console.log('texto mudou');//debug
           console.log(notepad.innerHTML);//debug
           //antonimo = fAntonimo();
           fSpeech();
           fClear();    
    }
    var observer = new MutationObserver(callback);
    observer.observe(notepad, config);
  
  function fAntonimo(){     
          //Código para tradução antonimica 
          // ...
          //FRASE ANTONIMIZADA SALVA NA VARIAVEL ANTONIMO
          tradAntonimo = 'não' + notepad.innerHTML;
          notepad.innerHTML = tradAntonimo;
          console.log(tradAntonimo);//debug
          return tradAntonimo;
    }
    
  function fSpeech(){
         console.log('entrou para a fala');//debug
         // dictation('tts');
         var tts = document.getElementsByClassName('btn__text btn-tts')[0];
         if (notepad.innerHTML != '' && notepad.innerHTML != '<br>'){ 
            tts.click();
            console.log('fSpeech' + notepad.innerHTML);//debug
         }
    }  
    
  function fClear(){     
         if (notepad.innerHTML != '' && notepad.innerHTML != '<br>'){ 
           notepad.innerHTML = '';
           console.log('clear');//debug
         }
    }  
}


           /*
           var tempAntonimo = fAntonimo(notepad.innerHTML);
           console.log(tempAntonimo);//debug
           */

            /*if (notepad.innerHTML != tempAntonimo){
                if (notepad.innerHTML != ''){
                  console.log('entrou no if');//debug
                  //var tempAntonimo = fAntonimo(notepad.innerHTML);
                  //fSpeech(tempAntonimo);
                  
                  notepad.innerHTML='';
                  console.log('saiu da fala');//debug
               }
              else {
                 console.log('texto ja antonimizado');//debug
                 return;
               } 

            }*/



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
