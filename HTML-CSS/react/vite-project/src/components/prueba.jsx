export function Prueba({ nombre, apellido }) {
  const products = [
    {
      title: "Col",
      id: 1,
      description:
        "es una planta comestible de la familia de las Brasicáceas, y una herbácea bienal",
    },
    {
      title: "Ajo",
      id: 2,
      description:
        "es una especie tradicionalmente clasificada dentro de la familia de las liliáceas ",
    },
    {
      title: "Manzana",
      id: 3,
      description:
        "La manzana es una de las frutas más completas y saludables que se conocen por su contenido en hidratos de carbono, fibra, vitaminas y potasio, ",
    },
  ];
  return (
    <>
      <h1>prueba</h1>
      <p>{`${nombre} ${apellido}`}</p>
      <div className="cuadrilla">
      {products.map((producto, i) => {
        return (
            <div key={producto.id}>
              <h2>title: {producto.title}</h2>
              <p>{producto.description}</p>
            </div>
          </div>
        );
      })}
    </>
  );
}
