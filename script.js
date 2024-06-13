function loadPosts(){
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(function(resultado){
    return resultado.json();
  })
  // retorna em json
  .then(function(json){
    console.log(json);
  })
  .catch(function(error){
    console.log('Ocorreu problema');
  });

}