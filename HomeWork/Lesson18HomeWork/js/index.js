// Создать персонажей для игры с помощью прототипного наследования и this
// Создайте объект character, представляющий следующие характеристики и действие для всех персонажей:
// свойства name (имя), health (здоровье), level (уровень)
// метод introduce для character, который выводит в консоль информацию о персонаже, например: "Hello, my name is [name], I am at level [level], and I have [health] health." - на квадратные скобки не обращайте внимание, они для схемы, чтобы указать на переменные значения
// Создайте объект warrior, который будет наследовать свойства и методы от character, также при создании объекта добавьте в него:
// свойства name (имя), health (здоровье), level (уровень), weapon (оружие)
// метод attack, который выводит сообщение в консоль о нападении и название оружия (внутри использовать значение из weapon)
// Создайте объект wizard, наследующий свойства и методы от character, также при создании объекта добавьте в него:
// свойства name (имя), health (здоровье), level (уровень), spell (заклинание)
// метод castSpell, который выводит сообщение в консоль о том, как персонаж произносит заклинание (внутри использовать значение из spell).
// Результат должен состоять из следующих действий:
// вызова метода introduce для каждого из объектов
// вызова метода attack для объекта warrior
// вызова метода castSpell для объекта wizard



// создали через функцию объект 

function Character(name, health, level) {
  this.heroName = name;
  this.heroHealth = health;
  this.heroLevev = level;
}

// создаем функцию не внутри объекта, что бы она не пересоздавалась каждый раз при создании нового экземпляра этого объекта
introduce = function () {
  console.log("Hello,my neme is: " + this.heroName);
  console.log("I have: " + this.heroHealth + "%");
  console.log("I am at level: " + this.heroLevev);
};
Character.prototype.introduce = introduce;


function warrior(name, health, level,weapon){
  Character.call(this,name, health, level,this.weapon=weapon);

}


attack = function () {
  console.log();
}
                      
// const herro1 = new Character("mag", 100, 10);
// const herro2 = new Character("mag", 100, 10);
//  herro1.introduce();
// console.log(herro1.introduce===herro2.introduce);

