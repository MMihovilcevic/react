export const Promises = () => {
  const promesa = new Promise((resolve, reject) => {
    const condicion = false;

    if (condicion) {
      resolve("La condición se cumple");
    } else {
      reject("La condición no se cumple ");
    }
  });


const resolvePromise = async () => {
    try {
        const response = await promesa;
        console.log(response)

    } catch (error) {
        console.log(error);
    }
}

resolvePromise();

  return <div>Promises</div>;
};
