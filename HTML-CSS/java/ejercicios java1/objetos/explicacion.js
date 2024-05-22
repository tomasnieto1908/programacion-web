const persona = {
  name: "tomas",
  age: 17,
  isWorking: true,
  dog: ["luna"],
  walk: () => {
    return "hola";
  },
};

console.log(persona.age);
console.log(persona["name"]);

persona.hola = "hola";

delete persona.age;
