function loadPosts(){
  document.getElementById('posts').innerHTML = 'Carregando ...'

  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(function(resultado){
    return resultado.json();
  })
  .then(function(json){
    /*
    // retorna em json
    // console.log(json);
    */
    
    // exibe a quantidade de posts
    // document.getElementById('posts').innerHTML = json.length + 'posts';

    montarBlog(json);
   
  })
  .catch(function(error){
    console.log('Ocorreu problema');
  });

}
function montarBlog(lista){
  let html = '';

  for (let i=0; i<lista.length; i++){
    html += '<h3>'+lista[i].title+'</h3>';
    html += lista[i].body+'<br>';
    html += '<hr>';
  }
  document.getElementById('posts').innerHTML = html;
}