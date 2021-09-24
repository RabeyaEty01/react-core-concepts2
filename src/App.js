import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  return (
    <div className="App">
      <Counter></Counter>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  //console.log(count, setCount);

  // const handleIncrease = () => {
  //   const newCount = count + 1;
  //   setCount(newCount);
  // }

  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => setCount(count - 1);


  return (
    <div>
      <h1>Count: {count} </h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  );
}

function Product(props) {
  const productStyle = {
    border: '3px solid blue',
    borderRadius: '10px'
  }
  return (
    <div className="product" style={productStyle}>
      <h2>Name: {props.name}</h2>
      <h4>Price: {props.price}</h4>
    </div>
  );
}

/* 
 const products = [
    { name: 'mobile', price: 15000 },
    { name: 'laptop', price: 150000 },
    { name: 'camera', price: 36000 },
    { name: 'watch', price: 1000 },
    { name: 'shoe', price: 1500 }
  ]
   */



/* 
{
        products.map(product => <Product name={product.name} price={product.price}></Product>)
      }

      <Product name="mobile" price="15000"></Product>
     <Product name="laptop" price="150000"></Product>
     <Product name="camera" price="30000"></Product> */





export default App;
