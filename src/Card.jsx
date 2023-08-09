import React, { useState } from 'react'
import { IoIosStarOutline } from "react-icons/io";



function Card(props) {
  var arr=[props];
  let{cart,setCart}=props;
  var [click, setClick] = useState(false); 
  const addToCart = (product) => {
    if (!cart.includes(product)) {
      setCart([...cart, product]);
      setClick(true);
    }
  };
  
  const removeFromCart = (product) => {
    console.log(product,cart);
    const updatedCart = cart.filter(item => item.Pname !== product.Pname);
    setCart(updatedCart);
    setClick(false);
  };
//  console.log(props);
// console.log(arr);
// console.log(cart);

  return (
    <>
    
    <div className="card">
        <div className="img">
            <img src={props.Link} alt="..."/>
        </div>
        <div className="card-body">
          <h4 className="text">{props.Pname}</h4>
          <p className="text">{props.Price}</p>
          <span className="badge badge-pill badge-warning"><IoIosStarOutline/>{props.Rating}</span>
        </div>
        {arr.map(product=>(
          <div className="button"  key={product.id}>
            {click ? (
              <button onClick={() => removeFromCart(product)}>Remove from Cart</button>
            ) : (
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            )}
            
          </div>
        ))}
        <div>
        
      
    </div>
      
    </div>
    
    </>
  )
}

export default Card