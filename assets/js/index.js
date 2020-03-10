/*alert('Hola mundo')*/

const getDataBook = () => {
    const url = 'https://www.googleapis.com/books/v1/volumes?q=FRASE';
    /*console.log('Hola Función')*/
    return fetch(url, {method:'GET'})
    .then(responseLibrary => {
        return responseLibrary.json()
        // console.log(response. 'response, primer valor a obtener')
    })
    .catch(error => console.log(error))
}


    //console.log(container, 'container')


    //********** */
const render = (responseLibrary) => {

    /* console.log(responseLibrary.items.map((item) => {

        console.log(item.id, 'item')
    }))*/
    console.log(responseLibrary)
    const container = document.getElementById('container');

    const cards = responseLibrary.items.map((item) => {
        return `
        <div class="card" style="width: 18rem;">
            <img src=${item.volumeInfo.imageLinks.smallThumbnail} class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${item.volumeInfo.title}</h5>
                ${item.volumeInfo.description ?  `<p class="card-text">${item.volumeInfo.description}</p>` : 'Descripción de libro - No disponible'}
                
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    `;
})

    container.innerHTML = cards;

    //console.log(cards,'cards')
}

getDataBook()
.then((responseLibrary) => {
    //console.log(responseLibrary,'Valor obtenido')
    render(responseLibrary)
});



