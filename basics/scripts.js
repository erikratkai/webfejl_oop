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

class Player{
    constructor(nickname){
        this.nickname = nickname;
        this.playedMatch = 0;
    }
    play(){
        this.playedMatch++;
        console.log(this.nickname,this.playedMatch);
    }
    getTierLevel(){
        if (this.playedMatch < 4){
            return "a";
        }
        else if (this.playedMatch < 7 && this.playedMatch > 3){
            return "b";
        }
        else{
            return "c";
        }
    }
}

const gomszab = new Player("gomszab");


console.log(gomszab);
gomszab.play();
gomszab.play();
gomszab.play();
gomszab.play();
gomszab.play();
gomszab.play();
gomszab.play();
console.log(gomszab.getTierLevel());