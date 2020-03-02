class Ninja {
    constructor(name, health){
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
}
    sayName(){
        console.log(this.name)
    }
    showStats(){
        console.log("my health is " + this.health);
        console.log("my speed is " + this.speed);
        console.log("my strength is " + this.strength);

    }
    drinkSake(){
        this.health+= 10
    }
}

class Sensei extends Ninja {
    constructor(){
            super("Master Splinter", 210, 10, 10)
        this.wisdom = 10;

    }
    speakWisdom(){
        console.log("What one programmer can do in one month, two programmers can do in two months.")
    }
}
const ninja1 = new Ninja("Hyabusa", 10);
ninja1.sayName();
ninja1.drinkSake();
ninja1.showStats();

// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"