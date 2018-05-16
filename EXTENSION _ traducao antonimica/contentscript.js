//garantir que a página carrega até o final antes de iniciar o código
window.onload = function(){ 

    console.log("oi"); //debug

    var notepad = document.getElementsByClassName('ql-editor')[0].getElementsByTagName('p')[0];
    fClear();


    console.log(notepad);//debug

    var config = {childList: true,
                    subtree: true
                 };

    console.log(config); //debug

    //START _ abrir microfones
    var start = document.getElementsByClassName('btn-mic btn btn--primary-1')[0];
    start.click();
    console.log('microfones abertos..');//debug 

    /*
    var temp = fListen();
    console.log(temp);//debug
    var tempAntonimo = fAntonimo(temp);
    console.log(tempAntonimo);//debug 
    */
    //tempAntonimo = ' ';
    //teste


    var callback = function(mutations){
          
           console.log('texto mudou');//debug
           console.log(notepad.innerHTML);//debug
           fSpeech();
           if (notepad != ' ' || notepad != '' || notepad!= '<br>')
             fClear();
      
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
    }


    console.log(callback); //debug

    var observer = new MutationObserver(callback);

    console.log(observer); //debug

    observer.observe(notepad, config);

    function fAntonimo(listening){     
          //Código para tradução antonimica 
          // ...
          //FRASE ANTONIMIZADA SALVA NA VARIAVEL ANTONIMO
          antonimo = '';
          notepad.innerHTML = antonimo;
          console.log('antonimo');//debug
          return antonimo;
    }

    //function fSpeech(texto){
    function fSpeech(){
          console.log('entrou para a fala');//debug
          //COPIA O TEXTO NO notepad
          // notepad.innerHTML= texto;
          //MANDA COMANDO PARA QUE O ANTONIMO SEJA PRONUNCIADO
          // dictation('tts');

          var fala = document.getElementsByClassName('btn__text btn-tts')[0];
          fala.click();
          notepad.innerHTML = '';

          console.log('fSpeech');//debug
      return;
    }

    function fClear(){     
          notepad.innerHTML = '<br>';  
          console.log('fClear');//debug
      return;
    }
}


/*
    function fListen(){     
          //ENCONTRA A TAG do editor de texto que armazena o conteudo stt 
          //SALVA O CONTEUDO FALADO NA VARIAVEL ESCUTA
          var notepad = document.getElementsByClassName('ql-editor')[0].getElementsByTagName('p')[0];
          var escuta = notepad.innerHTML;  
          console.log('fListen');//debug
          return escuta;
    }
*/

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
