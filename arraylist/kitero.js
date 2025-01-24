function fun(param){
    console.log(param.nev)
}

const ctipus = fun
fun({nev:"cirmi"})

const funa = function(param){
    console.log(param.nev)
}

const funb = function(){
    console.log(this.nev)
}

const tojas = funb.bind({nev:"tojaas"})
tojas()

const func = (pics) =>{
    console.log(pics.nev)
}

const obj = {
    funa:(param) => {console.log(param.nev)},
    puna:(param) => {console.log(param.eletkor)},
}

const pers2 = {
    kor : 10,
    nev : "Narancs Néger Nyunyi" 
}

obj.funa(pers2)
obj.puna(pers2)