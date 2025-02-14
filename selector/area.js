class Area{
    /**
     * @type {HTMLDivElement} az adott area peldany teruletenek az eleme
     */
    #div;

    get div(){
        return this.#div
    }
    /**
     * @param {Manager} manager
     * @param {string} cssclass beallitja az adott terulet css osztalyat 
     */
    constructor(cssclass){
        const container = this.#getContainer()
        this.#div = document.createElement('div'); 
        this.#div.className = cssclass
        container.appendChild(this.#div)
        manager.setFinishCallback((eredmeny) =>{
            container.innerHTML = ""
            const div = document.createElement('div');
            div.className = 'result'
            div.textContent = eredmeny;
            container.appendChild(div)
        })
    }
    /**
     * @return {HTMLDivElement} ami az area szulo div cointanere
     */
    #getContainer(){
        let container = document.querySelector('.container');
        if(!container){
            container = document.createElement('div')
            container.className = 'container'
            document.body.appendChild(container)
        }
        return container
    }
}
/**
 * @param {string} cssclass
 * @param {Manager} manager
 * 
 * ez fogja tartalmazni a kis paklinkat, mindig egy darab kartyat jelenit meg
 */
class DeckArea extends Area{
    constructor(cssclass, manager){
        super(cssclass, manager)
        manager.setNextCardCallback((kartyaszoveg) => { // ez fog lefutni amikor uj kartyat huzunk, tehat meghivjuk a nextCardCallback-et.
            this.div.innerHTML = "";
            const skipButton = document.createElement('button');
            skipButton.textContent = 'skip';
            skipButton.addEventListener('click', ()=>{
                manager.nextCard();
            })
            this.div.appendChild(skipButton);
            const cardElement = document.createElement('div')
            cardElement.textContent = kartyaszoveg;
            cardElement.className = 'largecard';
            cardElement.addEventListener('click', ()=>{
                manager.nextCard(kartyaszoveg);
            })
            this.div.appendChild(cardElement);
        })
    }
}
/**
 * ez fogja tartalmazni az igaznak velt kartyainkat
 */
class SolutionArea extends Area{
    /**
     * 
     * @param {string} cssclass
     * @param {Manager} manager 
     */
    constructor(cssclass, manager){
        super(cssclass, manager);
        manager.setAppendCardToSolutionCallback((kartyaszoveg) =>{
            const card = document.createElement('div');
            card.className = 'card';
            card.textContent = kartyaszoveg;
            this.div.appendChild(card);
        })
    }
}