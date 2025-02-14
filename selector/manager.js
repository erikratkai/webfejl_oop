/**
 * @callback NextCardCallback
 * @param {string} text a kirendelendo kartya szovege 
 * 
 * @callback AppendToCardSolutionCallback
 * @param {string} text a kartya szovege
 * 
 * @callback FinishCallback
 * @param {string} result ami az eredmenyt tartalmazza
 */

/**
 * A kommunikacioert felel, a deck es a solutionarea kozott
 */
class Manager{
    /**
     * @type {Card[]}
     */
    #array;
    /**
     * @type {Object} az igaznak velt allitasokat fogja tartalmazni
     */
    #solution;

    /**
     * @type {Number} az aktualis kartya szama
     */
    #currentCardNumber;

    /**
     * @type {NextCardCallback}
     */
    #nextCardCallback;

    /**
     * @type {AppendToCardSolutionCallback}
     */
    #appendCardToSolutionCallback;

    /**
     * @type {FinishCallback}
     */
    #finishCallback

    /**
     * 
     * @param {Card[]} array  a kartyak tombje
     */
    constructor(array){
        this.#array = array;
        this.#solution = {};
        this.#currentCardNumber = 0;
    }

    /**
     * beallitja a parameter alapjan a nextCardCallBacket
     * 
     * @param {NextCardCallback} callback  tartalmazza a logikat ami le fog futni amikor meghivjuk a fuggvenyunket
     */
    setNextCardCallback(callback){
        this.#nextCardCallback = callback
    }

    /**
     * beallitja a parameter alapjan a AppendToCardSolutionCallBacket
     * 
     * @param {AppendToCardSolutionCallback} callback  tartalmazza a logikat ami le fog futni amikor meghivjuk a fuggvenyunket
     */
    setAppendCardToSolutionCallback(callback){
        this.#appendCardToSolutionCallback = callback
    }

    /**
     * beallitja a parameter alapjan a finishCallbacket
     * 
     * @param {FinishCallback} callback  tartalmazza a logikat ami le fog futni amikor meghivjuk a fuggvenyunket
     */
    setFinishCallback(callback){
        this.#finishCallback = callback
    }

    /**
     * 
     * ezt a fuggvenyt akkor hivjuk majd meg ha egy uj kartyara van szuksegunk
     * 
     * @param {string?} answer 
     */
    nextCard(answer){
        if(answer){ //ha a kartyara kattintva lepunk 
            this.#solution[this.#currentCardNumber] = answer; //eltaroljuk az HAWK TUAHlis
            this.#appendCardToSolutionCallback(answer);
             
        }
        this.#currentCardNumber++;
        if(this.#currentCardNumber < this.#array.length){
            this.#nextCardCallback(this.#array[this.#currentCardNumber].text)
        }else{
            let sum = 0;
            for(const index in this.#array){
                if(this.#array[index].correct){
                    if(this.#solution[index]){
                        sum++;
                    }
                }else{
                    if(!this.#solution[index]){
                        sum++;
                    }
                }
            }
            const result = `A feladatban elert pontszam az ${this.#array.length}/${sum}`;
            this.#finishCallback(result);
        }
    }
    /**
     * felhúzza az első kártyát
     */
    start(){
        this.#nextCardCallback(this.#array[0].text)
    }
}