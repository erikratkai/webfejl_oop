const array = [
    {
        firstname1: 'Géza',
        firstname2: 'Ferenc',
        lastname: 'Kocsis',
    },
    {
        firstname1: 'Mária',
        firstname2: 'Júlia',
        lastname: 'Horváth',
    },
    {
        firstname1: 'Ferenc',
        lastname: 'Balogh',
    },
    {
        firstname1: 'Gábor',
        firstname2: 'Attila',
        lastname: 'Horváth'
    },
]

class Person{
    constructor(obj){
        this.firstname1 = obj.firstname1;
        this.firstname2 = obj.firstname2;
        this.lastname = obj.lastname
    }

    render(parentElement){
        const sor = document.createElement('tr')
        parentElement.appendChild(sor)

        const td = document.createElement('td')
        td.innerHTML = this.lastname
        sor.appendChild(td)

        const td1 = document.createElement('td')
        td1.innerHTML = this.firstname1  
        sor.appendChild(td1)
        
        if (this.firstname2 !== undefined){
            const td2 = document.createElement('td')
            td2.innerHTML = this.firstname2
            sor.appendChild(td2)
        } 
        else{
            td1.colSpan = 2; 
        }
        //nem html elementeknek nem lehet a colspanja 2; csak html elementnek, es ha a firstname2 undefined, akkor, hogy ne maradjon üresen a cella a td1 colspanja lesz 2.
    }
}

function init(){
    for(let i = 0; i < array.length; i++){
        const pers = new Person(array[i])
        pers.render(document.getElementById('tbodyId'));
    }
}

init();

class FormController{
    #form
    constructor(form){
        this.#form = form
    }

    #getInputById(id){
        return this.#form.querySelector('#' + id)
    }

    get lastname(){
        const lastnev = this.#getInputById('lastname')
        return lastnev.value;
    }
    get firstname1(){
        const firstnev1 = this.#getInputById('lastname')
        return firstnev1.value;
    }
    get firstname2(){
        const firstnev2 = this.#getInputById('lastname')
        return firstnev2.value;
    }
}