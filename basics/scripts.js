// Player konstruktor function (ES5 szintaxisban)
// function Player(nickname){
//     this.nickname = nickname;
//     this.playedMatch = 0;
// }
// Player.prototype.play = function(){
//     this.playedMatch++;
//     console.log(this.nickname,this.playedMatch);
// }
// Player.prototype.getTierLevel = function(){
//     if (this.playedMatch < 4){
//         return "a";
//     }
//     else if (this.playedMatch < 7 && this.playedMatch > 3){
//         return "b";
//     }
//     else{
//         return "c";
//     }
// }

// Player class (ES6 szintaxisban)
// Az alábbi osztály a játékosokat reprezentálja, akiknek van egy 'nickname' (becenév)
// és egy 'playedMatch' (játszott mérkőzések száma) tulajdonsága.
class Player {
    constructor(nickname) {
        this.nickname = nickname;  // A játékos beceneve
        this.playedMatch = 0;  // Kezdetben 0 játszott mérkőzés
    }

    // A 'play' függvény növeli a játszott mérkőzések számát, és kiírja a becenevet és a számot
    play() {
        this.playedMatch++;  // Növeli a mérkőzések számát
        console.log(this.nickname + " " + this.playedMatch);  // Kiírja a becenevet és a mérkőzések számát
    }

    // A 'getTierLevel' függvény visszaadja a játékos rangját a játszott mérkőzések alapján
    getTierLevel() {
        if (this.playedMatch < 4) {
            return "a";  // Ha a mérkőzések száma kisebb, mint 4, a rang A
        } 
        else if (this.playedMatch < 7 && this.playedMatch > 3) {
            return "b";  // Ha a mérkőzések száma 4 és 6 között van, a rang B
        } 
        else {
            return "c";  // Ha a mérkőzések száma 7 vagy több, a rang C
        }
    }
}

// Person és Student osztályok
// A 'Person' osztály a személyek adatait tárolja
class Person {
    constructor(name) {
        this.name = name;  // A személy neve
    }

    // A 'getName' függvény visszaadja a személy nevét
    getName() {
        return this.name;
    }
}

// A 'Student' osztály a 'Person' osztály leszármazottja (örökli annak tulajdonságait)
class Student extends Person {
    constructor(name, school) {
        super(name);  // Meghívja a szülő konstruktorát, hogy beállítsa a nevet
        this.school = school;  // A diák iskolája
    }

    // A 'getSchool' függvény visszaadja a diák iskoláját
    getSchool() {
        return this.school;
    }
}

// Animal, Bird és Mammal osztályok
// Az 'Animal' osztály alapot ad az állatoknak, akik képesek hangot adni
class Animal {
    constructor(name) {
        this.name = name;  // Az állat neve
    }

    // A 'makeSound' függvény kiírja az állat hangját
    makeSound() {
        console.log("A(z) " + this.name + " hangot ad ki.");  // Kiírja az állat nevét és hangot ad ki
    }
}

// A 'Mammal' osztály az 'Animal' osztály leszármazottja, az emlős állatokat reprezentálja
class Mammal extends Animal {
    constructor(name) {
        super(name);  // Meghívja az ősosztály konstruktorát, hogy beállítsa az állat nevét
    }

    // A 'move' függvény kiírja, hogy az emlős azonosított állat jár
    move() {
        console.log("A(z) " + this.name + " jár.");  // Kiírja, hogy az emlős jár
    }
}

// A 'Bird' osztály szintén az 'Animal' osztály leszármazottja, madarakat reprezentál
class Bird extends Animal {
    constructor(name) {
        super(name);  // Meghívja az ősosztály konstruktorát, hogy beállítsa az állat nevét
    }

    // A 'move' függvény kiírja, hogy a madár repül
    move() {
        console.log("A(z) " + this.name + " repül.");  // Kiírja, hogy a madár repül
    }
}

// Példányosítások
// Létrehozunk egy új játékost, "gomszab" névvel
const player1 = new Player("gomszab");
player1.play();  // Játékos játszik, és az állapotot kiírjuk
player1.play();  // Játékos ismét játszik, újabb állapot kiírása
player1.play();  // Játékos harmadik alkalommal játszik
player1.play();  // Játékos függő, már megint játszik (basszus)
console.log(player1.nickname + " rangja: " + player1.getTierLevel());  // Kiírja a játékos rangját

// Létrehozunk egy diákot, "Géza" névvel, és hozzárendeljük a "Bolyai" iskolát
const student1 = new Student("Géza", "Bolyai");
console.log("A diák neve: " + student1.getName());  // Kiírja a diák nevét
console.log("Iskola: " + student1.getSchool());  // Kiírja a diák iskoláját

// Létrehozunk egy madarat, "Papagáj" névvel
const bird1 = new Bird("Papagáj");
bird1.makeSound();  // Kiírja a madár hangját
bird1.move();  // Kiírja, hogy a madár repül

// Létrehozunk egy emlőst, "Oroszlán" névvel
const mammal1 = new Mammal("Oroszlán");
mammal1.makeSound();  // Kiírja az oroszlán hangját
mammal1.move();  // Kiírja, hogy az oroszlán jár
