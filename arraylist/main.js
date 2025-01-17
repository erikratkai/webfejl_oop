class ArrayList{
    /**
     * // ez tárolja el az arraylist hosszát. 
     * @type {Number}
     */
    #length
    #fityma

    get Count(){
        return this.#length //visszatér a length micsodájával. (skibidi toilet skibidi skibidi toilet toilet sigma rizz xd)
    }

    constructor(){
        this.#length = 0
        this.#fityma = {} // vörös a szalag vagy szőrös a valag
    }
    Add(item){  //a lány a lány alányal vagy a nyúl a lány alányúl
        const makk = this.#length
        this.#fityma[makk] = item //a belső objektum index tulajdonságának megadjuk a bemeneti paraméter értékét. jó //de nem mindegy az sem hogy mire fekszel egy nedves kőre vagy egy kedves nőre
        Object.defineProperty(this, makk,{
            get: function(){
                return this.#fityma[makk]
            },
            set: function(value){
                this.#fityma[makk] = value
            },
        })    //először a comment: mit szeretnénk csinálni? az aktuális indexen keresztül szeretnénk elérni a hozzáadott elemet a példányon keresztül.
        
        this.#length++
    }
    
    Clear(){
        this.#length = 0
        this.#fityma = {}
    }
}
const pers = {}
pers.a = 'Feri'
pers['a'] = 'Józsi'
pers['a'] = 'kirng'
pers[0] = 'tojás'
pers.a = 'skibnindni'
//pers.0 = 'Karl Marx'  //ez nem működik mert idióta vagy és a 0 az nem egy tulajdonság, bazdmeg. nem is lehet az i guess.
console.log(pers)

const kakas = {}
Object.defineProperty(kakas, "fity", {
    value: 'matyi',
    writable: true
})
kakas.fity = 'magdolna'
console.log(kakas)