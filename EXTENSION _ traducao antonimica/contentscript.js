
window.onload = function(){ 
  console.log("oi");
  
            //START
            var start = document.getElementsByClassName('btn__text listen')[0].getElementsByTagName('p')[0];
              console.log(start);
            start.click();

            //ENCONTRA A TAG do editor de texto que armazena o conteudo stt 
            var notepad = document.getElementsByClassName('ql-editor')[0].getElementsByTagName('p')[0];

            // mutation observer olhando notepad
            // se algo mudou, comparar com as variáveis escuta e antonimo
   
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
            dictation('tts');
            /* pode usar dictation('tts') OU
              var fala = document.getElementsByClassName('btn btn--primary type--uppercase')[0];
              fala.click();
            */
  
            //CLEAR
            notepad.innerHTML = '';     
}


/* http://stackoverflow.com/questions/15604140/replace-multiple-strings-with-multiple-other-strings

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