import React from "https://esm.sh/react@18.2.0";
import ReactDOM from "https://esm.sh/react-dom@18.2.0/client";

const appDomElement = document.getElementById('app')
//en react lo que generamos es un arbol de elementos que creamos nuestra ui a nivel de componentes y cada componente va a tener su componente. pero tenemos que inicar desde la raíz
const root = ReactDOM.createRoot(appDomElement)
//Para crear un elemento tenemos 3 parametros. 
//1. El elemento que queremos crear ('button')
//2. Las propiedades o atributos que queremos que tenga la propiedad (null)
//2. Sigo hablando del punto dos, aquí podemos poner el id, o la class, null es cuando no quieres nada
//3. Lo que envuelve el elemento (lo que sale como el texto por decirlo asi)

//const button = React.createElement('button', null, 'Me gusta')


const button = React.createElement('button', {"data-id": 123}, 'Button 1')
const button2 = React.createElement('button', {"data-id": 456}, 'Button 2')
const button3 = React.createElement('button', {"data-id": 789}, 'Button 3')
//react.fragmente es para elementos a renderizar
const app = React.createElement(React.Fragment, null, [button, button2, button3])
//Puedes renderizar texto
//root.render('Me gusta')
//Pero no puedes renderizar html
//root.render('<button>Me gusta</button>')
root.render(app)

/*Codigo que hace exactamente lo mismo, pero con React.Fragmente anexando el JSX
<React.Fragment>
    <button data-id="123">Button 1</button>
    <button data-id="456">Button 1</button>
    <button data-id="789">Button 1</button>
</React.Fragment>
*/