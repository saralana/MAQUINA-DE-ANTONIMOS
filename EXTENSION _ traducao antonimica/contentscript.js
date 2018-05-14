/* http://stackoverflow.com/questions/15604140/replace-multiple-strings-with-multiple-other-strings

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

//START
var start = document.getElementsByClassName('btn__text listen')[0].getElementsByTagName('p')[0];
start.click();


// ALGO NOVO FOI FALADO?
// MUTATION OBSERVER
// colocar o mutation observer de olho no tp.innerHTML e ver se algo mudou
// se sim, comparar com as variáveis escuta e antonimo
  
      //ENCONTRA A TAG do editor de texto que armazena o conteudo stt 
      var stt = document.getElementsByClassName('ql-editor')[0].getElementsByTagName('p')[0];

      //SALVA O CONTEUDO FALADO NA VARIAVEL ESCUTA
      var escuta = stt.innerHTML;

      //CLEAR
      stt.innerHTML = '';
  
        //Código para tradução antonimica 
      
      //FRASE ANTONIMIZADA SALVA NA VARIAVEL ANTONIMO
      var antonimo = ;
           
      //COPIA O ANTONIMO NO EDITOR DE TEXTO
      tp.innerHTML= antonimo;

      //MANDA COMANDO PARA QUE O ANTONIMO SEJA PRONUNCIADO
      dictation('tts');

      //CLEAR
      tp.innerHTML = '';     
}