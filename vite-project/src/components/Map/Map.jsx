import { useEffect, useState } from "react";
import { getProducts } from "../../productsMock";
import { Card } from "../Card/Card";

export const Map = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getProducts()
      .then((response) => {
            setIsLoading(!isLoading); 
            setProducts(response);        
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <h2>Productos</h2>
      {
      
        isLoading ? <h2>Cargando productos ...</h2> :
      products.map((product) => (
        <Card key={product.id} {...product} />
      ))
      
      }


    </div>
  );
};
