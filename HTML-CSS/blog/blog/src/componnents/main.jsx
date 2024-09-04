import React from "react";
import Post from "./post";

function Main2() {
  return (
    <main className="grilla">
      <Post
        title="Vimos F1 con el profe jose"
        description="Fue el viernes pasado no vino nadie y corria colapinto asi que vimos la F1 toda la clase"
        image="https://campeones.com.ar/wp-content/uploads/2023/11/WhatsApp-Image-2023-11-28-at-09.30.53-e1701180437412.jpeg"
      />
      <Post
        title="Tuvimos sesion de psicologia con el porfe de matematica"
        description="Fue el viernes pasado no vino casi nadie y al profe le pinto hablar de psicologia "
        image="https://www.saludterapia.com/images/saludterapia/glosario/psicologia/psicologia.jpg"
      />
      <Post
        title="Gano San Lorenzo"
        description="El domingo jugo san lorenzo contra  platense y gano 2 a 1 con gol de penal de  leguizamon y un golazo descomunal de irala"
        image="https://vamosciclon.com/wp-content/uploads/2024/09/irala-san-lorenzo-platense-9-24-860x573.webp"
      />
    </main>
  );
}

export default Main2;
