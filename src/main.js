axios.get('https://api.github.com/users/pedromartinsdev/repos')
    .then(function(response){
        console.log(response.data);
    })
    .catch(function(error){
        console.warn(error);
    });

 