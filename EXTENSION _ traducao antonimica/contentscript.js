//garantir que a página carrega até o final antes de iniciar o código
window.onload = function(){ 
  
  console.log("oi"); //debug
  
  //START _ abrir microfones
  var start = document.getElementsByClassName('btn-mic btn btn--primary-1')[0];
 
  console.log('escuta aberta'); //debug
  start.click();
  
  /* MUTATION OBSERVER olhando notepad
     se algo mudou, comparar com as variáveis escuta e antonimo
     https://www.javascripture.com/MutationObserver
  */

  fListen();

  console.log(fListen());//debug
     
  var notepadNode = document.getElementsByClassName('ql-editor');
  console.log(notepadNode);//debug
  
  var notepad = document.getElementsByClassName('ql-editor')[0].getElementsByTagName('p')[0];
  
  console.log(notepad);//debug
  
  var config = { attributes: true, 
                childList: false };
  console.log(config); //debug
  
  var callback = function(mutationList){
       if (mutation.type == 'atributes'){
         //_debug
         console.log('texto mudou')
         var temp = fListen();
         if (temp !=antonimo()){
            speech(antonimo());
            fClear();
         }
        } 
  }

  console.log(callback); //debug
  
  var observer = new MutationObserver(callback);
 
  console.log(observer); //debug
  
  observer.observe(
    notepad, 
    config
  );
  

  function fListen(){     
        //ENCONTRA A TAG do editor de texto que armazena o conteudo stt 
        //SALVA O CONTEUDO FALADO NA VARIAVEL ESCUTA
        var notepad = document.getElementsByClassName('ql-editor')[0].getElementsByTagName('p')[0];
        var escuta = notepad.innerHTML;   
        return escuta;
  }

  function fAntonimo(listening){     
        //Código para tradução antonimica 
        // ...
        //FRASE ANTONIMIZADA SALVA NA VARIAVEL ANTONIMO
        listening = fListen();
        antonimo = listening;
        return antonimo;
  }
    
  function fSpeech(texto){
        //COPIA O TEXTO NO EDITOR DE TEXTO
        notepad.innerHTML= texto;
        //MANDA COMANDO PARA QUE O ANTONIMO SEJA PRONUNCIADO
        // dictation('tts');
        // pode usar dictation('tts') OU
        var fala = document.getElementsByClassName('btn btn--primary type--uppercase')[0];
        fala.click();
    return;
  }
  
  function fClear(){     
        notepad.innerHTML = '';     
  }
}


/* CODIGO QUE FUNCIONOU DE ACESSO ÀS TAGS E BOTOES

window.onload = function(){ 
  
  console.log("oi");
  //START
  var start = document.getElementsByClassName('btn-mic btn btn--primary-1')[0];
  //console.log(start);
  start.click();
  
  // MUTATION OBSERVER olhando notepad
  // se algo mudou, comparar com as variáveis escuta e antonimo
     https://www.javascripture.com/MutationObserver
  
    
        //ENCONTRA A TAG do editor de texto que armazena o conteudo stt 
        var notepad = document.getElementsByClassName('ql-editor')[0].getElementsByTagName('p')[0];
   
        //SALVA O CONTEUDO FALADO NA VARIAVEL ESCUTA
        var escuta = notepad.innerHTML;
            
        //CLEAR
        notepad.innerHTML = '';

            //Código para tradução antonimica 

        //FRASE ANTONIMIZADA SALVA NA VARIAVEL ANTONIMO
        var antonimo = 'outro teste';

        //COPIA O ANTONIMO NO EDITOR DE TEXTO
        notepad.innerHTML= antonimo;

        //MANDA COMANDO PARA QUE O ANTONIMO SEJA PRONUNCIADO
        // dictation('tts');
        // pode usar dictation('tts') OU
        var fala = document.getElementsByClassName('btn btn--primary type--uppercase')[0];
        fala.click();
            
        //CLEAR
        notepad.innerHTML = '';     

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
