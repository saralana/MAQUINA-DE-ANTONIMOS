//garantir que a página carrega até o final antes de iniciar o código
window.onload = function(){ 
  
    var notepad = document.getElementsByClassName('ql-editor')[0].getElementsByTagName('p')[0];
    notepad.innerHTML != '';

    fClear(); 
    var config = {childList: true,
                    subtree: true};
  
             var language = "Google português do Brasil";
           document.getElementById("voiceselect").options = language;
           console.log('fala portugues');//debug 
  
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
           var language = "Google português do Brasil";
           //var language = "Luciana";
           document.getElementById("voiceselect").options = language;
           console.log('fala portugues');//debug 
           // <option value="Google português do Brasil" data-lang="pt-br">Google português do Brasil</option>
           // desliga o microfone
           //microphone.click();
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
        for (var i = 0; i < words.length; i++) {
          if (words[i]!=''){
              if (words[i] in ants){
                var n = Math.floor(Math.random()*(ants[words[i]].length));
                words[i]=ants[words[i]][n];
              }
          }
        }
        var translation = words.join(' ');console.log(words[i]);
        return translation;
      }
}
