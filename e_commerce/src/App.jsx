import { useEffect, useState } from 'react'

import { Navbar } from './components/Navbar'
import { ProductCatalog } from './components/ProductCatalog'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App(props) {
const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://fakestoreapi.com/products`);
      const newData = await response.json();
      setProducts(newData);
    };

    fetchData();
  }, []);

  if (products) {
      return (
    <>
    <Navbar />
    <ProductCatalog products={products} />
    </>
  );
  } else {
    return <div>loading</div>;
  }
}
  

export default App
