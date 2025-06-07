//Vanilla JavaScript: cuando se hace las funciones con el js sin librerias wow
///**el siguiente código es uno de js normal imperativo de js**/

/*
//recuperamos 1 boton
const button = document.querySelector('button')

button.addEventListener('click', function(){
    alert("hey")
    //getAttribute() devuelve el valor del atributo especificado en el elemento. Si el atributo especificado no existe, el valor retornado puede ser tanto null como "" (una cadena vacía); ver Notes para más detalles.
    const id = button.getAttribute('data-id')

    //llamar a un servicio para actualizar si me gusta toggleLike(id)
    //toggleLike(id)
    //si el boton tiene una clase que contiene 'liked' entonces
    if(button.classList.contains('liked')){
        button.classList.remove('liked')
        button.innerHTML = 'Me gusta'
    }else{
        button.classList.add('liked')
        button.innerText = 'Quitar  me gusta'
    }
})*/

//recuperamos todos los botones
const buttons = document.querySelectorAll('button')

buttons.forEach(button => {
    button.addEventListener('click', function () {
        //getAttribute() devuelve el valor del atributo especificado en el elemento. Si el atributo especificado no existe, el valor retornado puede ser tanto null como "" (una cadena vacía); ver Notes para más detalles.
        const id = button.getAttribute('data-id')

        //llamar a un servicio para actualizar si me gusta toggleLike(id)
        //toggleLike(id)
        //si el boton tiene una clase que contiene 'liked' entonces
        if (button.classList.contains('liked')) {
            button.classList.remove('liked')
            button.innerHTML = 'Me gusta'
        } else {
            button.classList.add('liked')
            button.innerText = 'Quitar  me gusta'
        }
    })
})

// react por otro lado es declarativo


