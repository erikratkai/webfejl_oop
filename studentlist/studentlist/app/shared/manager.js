class Manager{
    #array;
    #selectCallback;
    #addCallback;

    constructor(){
        this.#array = [];
    }

    setAddCallback(callback){
        this.#addCallback = callback;
    }

    setSelectCallback(callback){
        this.#selectCallback=callback;
    }

    add(student){
        this.#array.push(student);
        
    }

    select(student){
        this.#selectCallback(student);
    }

    /**
     * végigiterál a tömbön és meghívja az addCallback-et.
     */
    render(){
        for(const student of this.#array){
            this.#addCallback(student);
        }
    }
}
