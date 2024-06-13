function loadPosts(){
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(function(resultado){
    return resultado.json();
  })
  .then(function(json){
    /*
    // retorna em json
    // console.log(json);
    */

    /*
    // exibe a quantidade de posts
    document.getElementById('posts').innerHTML = json.length + 'posts';
    */
   
  })
  .catch(function(error){
    console.log('Ocorreu problema');
  });

}