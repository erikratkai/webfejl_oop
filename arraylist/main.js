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
            get: function(){
                return this.#state[asd]
            },
            set: function(value){
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