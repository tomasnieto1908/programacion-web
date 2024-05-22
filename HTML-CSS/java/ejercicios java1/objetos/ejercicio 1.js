function createObject(name, subs) {
  const canal = {
    name: name,
    subscribers: subs,
    hash: name.length * subs,
    getstatus: () => {
      return `el canal ${name} tiene ${subs}`;
    },
  };
  return canal;
}

const nuevocanal = createObject("san lorenzo", 100);

console.log(nuevocanal.getstatus());
