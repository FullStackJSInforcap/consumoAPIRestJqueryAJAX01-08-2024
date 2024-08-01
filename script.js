let idPost = prompt('Ingresa el id');

$.ajax({
    type: "GET",
    url: `https://jsonplaceholder.typicode.com/posts/${idPost}`,
    dataType: "json",
    success: function (response) {
        let cajaUno = document.querySelector('#idUno');
        let cajaDos = document.querySelector('#idDos');
        let cajaTres = document.querySelector('#idTres');
        let cajaCuatro = document.querySelector('#idCuatro');
        cajaUno.innerHTML = response.id;
        cajaDos.innerHTML = response.userId;
        cajaTres.innerHTML = response.title;
        cajaCuatro.innerHTML = response.body;
        
    }
});