window.onload = function(){ 
  
  console.log("oi");
  //START
  var start = document.getElementsByClassName('btn-mic btn btn--primary-1')[0];
  console.log(start);
  start.click();
  
  /* MUTATION OBSERVER olhando notepad
     se algo mudou, comparar com as variáveis escuta e antonimo
     https://www.javascripture.com/MutationObserver
  */
  
  var notepadNode = document.getElementsByClassName('ql-editor');
  
  fListen();
  console.log(fListen());
  
  var observer = new MutationObserver(function(mutations){
    if (mutations.target.getAttribute('p')!=antonimo()){
          speech(antonimo());
          clear();
    }
  });
  
  observer.observe(notepadNode, notepad);
  
  function fListen(){     
        //ENCONTRA A TAG do editor de texto que armazena o conteudo stt 
        var notepad = document.getElementsByClassName('ql-editor')[0].getElementsByTagName('p')[0];
        //SALVA O CONTEUDO FALADO NA VARIAVEL ESCUTA
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
  
  function clear(){     
        //CLEAR
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
