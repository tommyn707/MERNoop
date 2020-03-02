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
const ninja1 = new Ninja("Hyabusa", 10);
ninja1.sayName();
ninja1.drinkSake();
ninja1.showStats();