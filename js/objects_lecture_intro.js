function getRandomAttackNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const fighter = {
    name: "Ryu",
    hp: 100,
    attack: function (oponnent) {
        const randomAttack = getRandomAttackNumber(1, 20);
        oponnent.hp -= randomAttack;

        if (randomAttack > 10) {
            console.log(
                `Critical hit ${randomAttack} damage to ${oponnent.name} oponnent has ${oponnent.hp} hp left`
            );
        } else {
            console.log(
                `${this.name} attacks ${oponnent.name} with ${randomAttack} damage ${oponnent.name} has ${oponnent.hp} hp left`
            );
        }
    },
};

const goblin = {
    name: "Goblin",
    hp: 100,
    attack: function (oponnent) {
        const randomAttack = getRandomAttackNumber(1, 20);
        oponnent.hp -= randomAttack;

        if (randomAttack > 10) {
            console.log(
                `Critical hit ${randomAttack} damage to ${oponnent.name} oponnent has ${oponnent.hp} hp left`
            );
        } else {
            console.log(
                `${this.name} attacks ${oponnent.name} with ${randomAttack} damage ${oponnent.name} has ${oponnent.hp} hp left`
            );
        }
    },
};

while (fighter.hp > 0 && goblin.hp > 0) {
    fighter.attack(goblin);
    if (goblin.hp <= 0) {
        goblin.hp = 0;
        console.log(goblin.hp);
        console.log("Goblin is dead");
        break;
    }
    goblin.attack(fighter);
    if (fighter.hp <= 0) {
        fighter.hp = 0;
        console.log("Fighter is dead");
        break;
    }
}
