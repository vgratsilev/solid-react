/**
 * Open–closed principle
 *
 * To add new weapon you should create new class, not change existed.
 */

interface IAttacker {
    attack: () => void;
}
class Weapon implements IAttacker {
    damage: number; // 0 - 100;
    range: number; // 0 - 100;

    constructor( damage: number, range: number) {
        this.damage = damage;
        this.range = range;
    }

    attack() {}
}

class Sword extends Weapon {
    attack() {
        console.log(`Hit by sword with damage ${this.damage}`)
    }
}

class Crossbow extends Weapon {
    attack() {
        console.log(`Shot with crossbow with damage ${this.damage}`)
    }
}

class Knife extends Weapon {
    attack() {
        console.log(`Hit by knife with damage ${this.damage}`)
    }
}

class Character {
    name: string;
    weapon: Weapon;

    constructor(name: string, weapon: Weapon) {
        this.name = name;
        this.weapon = weapon;
    }

    changeWeapon(newWeapon: Weapon) {
        this.weapon = newWeapon;
    }

    attack() {
        this.weapon.attack();
    }
}

const sword = new Sword(15, 2);
const character = new Character('Warrior', sword);
character.attack()

const crossbow = new Crossbow(40, 100);
character.changeWeapon(crossbow);
character.attack()
