
//Functions
function Sumar(num1,num2) {
    return(num1 + num2)
}
sumar(5,5)
console.log(sumar)

function message (name) {
    return 'Hi, my name is ' + name
}


//Arrow functions
const add = (num1,num2) => {
    return(num1 + num2)
}
add(3,7)
console.log(add)

const message = name => ('Hi, my name is' + name)
const printMessage = message('Juan')

//Template string

const number = (numb1,num2) => {
    return `The number is: ${num1 +num2}`
}

const printNumber = number(11,7)
console.log(printNumber)
  
//Objects

const petts = {
    name: 'Linda',
    age: 7,
    alive: true,
    characteristics = ['blonde', 'small' ]
}

//Destructuring objects

const petName= petts.mascota
const {age}= petts

const web = {
    name: 'bluuweb',
    links: {
        link: 'www.bluuweb.cl'
        name: 'bluuweb yt'
    },
    socialMedia: {
        youtube: {
            link: 'youtube.com/bluuweb',
            name: 'bluuweb yt'
        }
    }
}

const youtube = web.socialMedia.youtube.link
const {link} = web.socialMedia.youtube

//Fetch
fetch('https://pokeapi.co/api/v2/pokemon/')
    .(then)( res => res.json() )
    .(then)( data => {
        //console.log(data.result)
        let arrayNames = []
        data.result.forEach(element => {
            //console.log(element.name)
            arrayNames.push(element.name)
        })
        console.log(arrayNames)
    })
    .catch(error => console.log(error))

//Async await
const getPokemon = async() =>{
    try {
       const res = await fetch('https://pokeapi.co/api/v2/pokemon/')
       const data = await res.json()
        //console.log(data.result)
        const arrayNames= data.result.filter( poke => poke.name !== 'bulbasaur')
        console.log(arrayNames)
    }catch (error) {
        console.log(error)
    }
}




