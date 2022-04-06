import './App.css';
import Greet  from './Component/Greet';
import Child from './Component/Child';
import ProductDetails from './Component/ProductDetails';
import NextChild from './Component/NextChild';

const App  = () => {
  const value = 'Data from parent';
  const employee = {
      name : 'Vamshi',
      salary : '$2323232'
  }

  const ProductList = [
     {
       name : 'Iphone',
       price  : '34534$'
     },
     {
      name : 'Samsung',
      price  : '343433434$'
    },
    {
      name : 'Mac',
      price  : '343434555$'
    },
    {
      name : 'Iphone-x',
      price  : '3453433333$'
    }
  ]



      return <>
       <h1>Hello World</h1>
       <h2>Hello Props</h2>
       <Greet name={value}  employeeName="Swapnil"/>
       <Child empprops={employee}/>
       <ProductDetails  productProps = {ProductList}/>
       <NextChild > 
          <span>
             <label for="text" >Content Projection</label>
          </span>
        </NextChild>
      </>
     
}

export default App;






























