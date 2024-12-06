
class Factory{
 // TODO 1, 2, 3, 4, 9, 10
    constructor(){
        this.manolista = [];    // Amikor példányosítjuk a factory-t, akkor lesz egy manolista tulajdonsága, ami egy üres tömb.
    }

    addMano(mano){  // A függvénynek azért van egy manó eleme, mert manó kell.
        this.manolista.push(mano);  // A manó listához fűzünk hozzá egy elemet.
    }
}

class Companion{
 // TODO 5
    constructor(id, kernev, veznev, reszleg){   //id, veznev, kernev, reszleg - Azért kellenek ezek a constructorba, mert anélkül nem értelmezzük a példányt.
        this.id = id;
        this.kernev = kernev;
        this.veznev = veznev;
        this.reszleg = reszleg;
        this.productList = []; // Üres tömb, mert aikor beregisztrál még nem rendelkezik legyártott termékkel a manócskánk.
    }
    
    //kéne egy függvény ami az ő kernevét és veznevét adja vissza
    getName(){  //nem kell paraméter, mert a példány paraméterét látja
        return this.kernev + ' ' + this.veznev // Ez visszaadja a veznevet és a kernevet.
    }

    addProduct(product){
        this.productList.push(product); // Így adom hozzá a listához a productot.
    }
}
