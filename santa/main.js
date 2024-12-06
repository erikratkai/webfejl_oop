/**
 * @type {{
 *   firstName: string;
 *   lastName: string;
 *   products: string[];
 *   area: string;
 * }[]}
 */
const companionList = [
    {
        firstName: 'Géza',
        lastName: 'Kiss',
        area: 'plastic',
        products: ['kisauto', 'barbibaba']
    },
    {
        firstName: 'Ferenc',
        lastName: 'Tóth',
        area: 'paper',
        products: ['könyv']
    },
    {
        firstName: 'Gábor',
        lastName: 'Nagy',
        area: 'plastic',
        products: ['zokni']
    },
]
const factory = new Factory();

document.getElementById('companion').addEventListener('submit',function(e){
    e.preventDefault();
    const form =  e.currentTarget
    addCompanion(form, factory);
});

document.getElementById('product').addEventListener('submit',function(e){
    e.preventDefault();
    const form = e.currentTarget;
    addProductForm(form, factory)
});

/**
 * table render
 */
function initTable(){
    // TODO 6
    for(let i = 0; i < companionList.length; i++){
        const currentElement = companionList[i];    //beletesszük egy változóba a lista aktuális elemét
        const companion = new Companion(i, currentElement.firstName, currentElement.lastName, currentElement.area)  //Példányosítjuk a companiont. A paraméterek sorrendjét a companion class definíciónak a constructora határozza meg.
        for(const pr of currentElement.products){   // Mivel a products egy tömb, ezért végigiterálunk/lépkedünk rajta és egyesével hozzáadjuk a példány addproducts függvény segítségével.
            companion.addProduct(pr);   // a companion példánynak meghívjuk a companion addProduct függvényét
        }
        //a factoryhoz hozzaadjuk a compaiont 
        factory.addMano(companion);
        console.log(factory);
    }

}


initTable()

/**
 * 
 * eventlistener callback for the button click of companion
 * 
 * @param {EventTarget} e 
 */
function checkEventListener(e){
    const row = e.currentTarget.parentElement.parentElement;
    const companionId = row.id;
    // TODO 10
}
