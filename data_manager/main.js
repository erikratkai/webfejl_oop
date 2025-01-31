/**
 * @typedef {{nev: string, eletkor: number}} Person
 * @callback UpdateCallback
 * @param {Person[]} persons //ez tartalmazza a listát
 * @returns {void}
 */

class DataManager{
    /**
     * @type {Person[]}
     */
    #array
    
    /**
     * @type {UpdateCallback}
     */
    #updateCallback
    
    /**
     * @param {Person[]} param 
     */
    constructor(param = []){   //egy opcionális paraméterneve van a constructornak, annak alapértelmezett típusa tömb.
        this.#array = param
        this.#updateCallback = () => {}
    } 

    /**
     * @param {UpdateCallback} callback 
     */
    setUpdateCallback(callback){
        this.#updateCallback = callback
        this.#updateCallback(this.#array)
    }

    /**
     * @param {Person} item 
     */
    add(item){
        this.#array.push(item)
    }

    /**
     * @param {Number} kor 
     */
    filterAge(kor){
        const result_ages = []
        for(let i = 0; i < this.#array.length; i++){
            if(this.#array[i].eletkor === kor){
                result_ages.push(kor)
            }
        }
        this.#updateCallback(result_ages)
    }

    /**
     * @param {string} nev 
     */
    filterName(nev){
        const result_names = []
        for(let i = 0; i < this.#array.length; i++){
            if(this.#array[i].name === nev){
                result_names.push(nev)
            }
        }
        this.#updateCallback(result_names)
    }


}

class DataTable{
    /**
     * @param {DataManager} datamanager 
     */
    constructor(datamanager){
        const table = document.createElement("table")
        document.body.appendChild(table)

        const tbody = document.createElement("tbody")
        table.appendChild(tbody)

        datamanager.setUpdateCallback((persons) => {
            tbody.innerHTML = ""
            
            for(const pers of persons){console.log("asd")
                const tr = document.createElement("tr")
                tbody.appendChild(tr)

                const cella1 = document.createElement("td")
                tr.appendChild(cella1)
                cella1.innerHTML = pers.nev

                const cella2 = document.createElement("td")
                tr.appendChild(cella2)
                cella2.innerHTML = pers.eletkor
            }
        })
    }
}

const adat_manager = new DataManager([{eletkor:12, nev:"józsi"}])
const adat_table = new DataTable(adat_manager)