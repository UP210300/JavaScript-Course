const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const paragraph = document.querySelector('.paragraph');
const pid = document.getElementById('pid');
const input = document.querySelector('input');

console.log(input.value);

console.log(
    {
        h1,
        p,
        paragraph,
        pid,
        input,
    }
);

h1.innerHTML= 'Patito <br> Feo';
h1.innerText= 'Patito <br> Feo';

console.log(h1.getAttribute('class'));

h1.setAttribute('class','rojo')
h1.classList.add('rojo');
h1.classList.remove('verde');

input.value="456";

const img = document.createElement('img');
img.setAttribute('src','https://www.google.com/url?sa=i&url=https%3A%2F%2Fes.123rf.com%2Fphoto_7613911_debera-buscar.-imagen-3d-aislado-sobre-fondo-blanco..html&psig=AOvVaw3v_5PuwUQEESxaEdt_GwCY&ust=1672209113502000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCKC6icSWmfwCFQAAAAAdAAAAABAN');
console.log(img);

pid.append(img);