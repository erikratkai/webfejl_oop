class ArrayList{
    /**
     * // ez tárolja el az arraylist hosszát. 
     * @type {Number}
     */
    #length
    #state

    get Count(){
        return this.#length //visszatér a length micsodájával. 
    }

    constructor(){
        this.#length = 0
        this.#state = {} 
    }
    Add(item){  
        const asd = this.#length
        this.#state[asd] = item //a belső objektum index tulajdonságának megadjuk a bemeneti paraméter értékét.
        Object.defineProperty(this, asd,{
            get: () => {
                return this.#state[asd]
            },
            set: (value) => {
                this.#state[asd] = value
            },
        })    //először a comment: mit szeretnénk csinálni? az aktuális indexen keresztül szeretnénk elérni a hozzáadott elemet a példányon keresztül.
        
        this.#length++
    }
    
    Clear(){
        this.#length = 0
        this.#state = {}
    }
}
const pers = {}
pers.a = 'Feri'
pers['a'] = 'Józsi'
pers['a'] = 'kirng'
pers[0] = 'tojás'
pers.a = 'skibnindni'
//pers.0 = 'Karl Marx'  //ez nem működik
console.log(pers)

const kakas = {}
Object.defineProperty(kakas, "nev", {
    value: 'matyi',
    writable: true
})
kakas.nev = 'magdolna'
console.log(kakas)

class arrayHtmlElement extends HTMLElement{
    #tbody
    constructor(){
        super();
    }    
    connectedCallback(){
        const table = document.createElement("table")
        this.appendChild(table)
        const thead = document.createElement("thead")
        table.appendChild(thead)
        this.#tbody = document.createElement("tbody")
        table.appendChild(this.#tbody)
    }
    /**
     * 
     * @param {{nev:string, eletkor:number}} param 
     */
    addPersonRow(param){
        const tr = document.createElement("tr")
        this.#tbody.appendChild(tr)

        const td = document.createElement("td")
        td.innerHTML = param.nev
        tr.appendChild(td)

        const td2 = document.createElement("td")
        td2.innerHTML = param.eletkor
        tr.appendChild(td2)


    }
}

customElements.define("array-table", arrayHtmlElement)
const kebab = new arrayHtmlElement()
document.body.appendChild(kebab)

kebab.addPersonRow({nev:"Karl Marx,", eletkor: 182})