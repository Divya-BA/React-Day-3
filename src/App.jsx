import { useState } from 'react'

import './App.css'
import Card from './Card';
import { BsCart4 } from "react-icons/bs";



function App() {
  
  var [cart, setCart] = useState([]); 

  return (
    <div className="container">
      <div className="head">
        <h1>
        Beauty Products
        </h1>
      </div>
      <div className='cart'>
          <h3><BsCart4/>Cart</h3>
          <p>Items in cart:{cart.length}</p>
          <ul>
           {cart.map(product=>(
            <li key={product.id}>{product.Pname}</li>
            ))}
          </ul>
        </div>  
      <div className="flex">
   <Card cart={cart} setCart={setCart}id="1" Pname="foundation" Price="₹450" Rating="4.2" Link="https://th.bing.com/th/id/OIP.OX_NAzj7uMptxgRBwh3YiAHaHa?pid=ImgDet&rs=1"></Card>
   <Card cart={cart} setCart={setCart}id="2" Pname="BB Cream" Price="₹349" Rating="4.0" Link="https://th.bing.com/th/id/OIP.bIAVJJ1Pp-TDdiWLSsAajQHaJ4?pid=ImgDet&rs=1"></Card>
   <Card cart={cart} setCart={setCart}id="3" Pname="CC Cream" Price="₹220" Rating="3.2" Link="https://www.byrdie.com/thmb/zOntHtN48OjTm7kQVs1sngjLsKw=/2000x2000/filters:no_upscale():max_bytes(150000):strip_icc()/s2088276-main-zoom-c7609c4a3ccf4def8fb21bd8a8ef3baa.jpg"></Card>
   <Card cart={cart} setCart={setCart}id="4" Pname="Concealer" Price="₹105" Rating="4.7" Link="https://paratistore.cl/wp-content/uploads/2020/12/l-a-girl-usa-pro-conceal-hd-high-definition-concealer-8g-p7594-27521_image.jpg"></Card>
   <Card cart={cart} setCart={setCart}id="5" Pname="Lipstick" Price="₹300" Rating="4.0" Link="https://th.bing.com/th/id/OIP.1MnmwvcI6D2koXritiNz-QHaJQ?pid=ImgDet&rs=1"></Card>
   <Card cart={cart} setCart={setCart}id="6" Pname="Lip balm" Price="₹450" Rating="4.2" Link="https://1.bp.blogspot.com/-fpSkqDXrB8E/WXMTInJaepI/AAAAAAAALdk/O2muU4R6r5QznhHOqZs11A3qTfIPJY6XgCEwYBhgL/s1600/20170722_095432.png"></Card>
   <Card cart={cart} setCart={setCart}id="7" Pname="Primer" Price="₹290" Rating="4.9" Link="https://i.pinimg.com/originals/3c/18/eb/3c18ebed7a93cf25de81a6dba2bef05e.jpg"></Card>
   <Card cart={cart} setCart={setCart}id="8" Pname="Mascara"Price="₹300" Rating="2.9" Link="https://th.bing.com/th/id/OIP.pimvL9fX9HkFOpjWrVSgBAHaHa?pid=ImgDet&rs=1"></Card>
   <Card cart={cart} setCart={setCart}id="9" Pname="Compack power"Price="₹280"Rating="4.8"Link="https://www.khushihamesha.com/wp-content/uploads/2019/01/New-Doc-2018-12-20-09.15.56_2-1024x766.jpg"></Card>
   <Card cart={cart} setCart={setCart}id="10" Pname="Eyeliner"Price="₹240"Rating="4.5"Link="https://th.bing.com/th/id/OIP.kJObj3hzqAz132MsDx3ejAHaH5?pid=ImgDet&w=560&h=597&rs=1"></Card>
   <Card cart={cart} setCart={setCart}id="11" Pname="Blush"Price="₹370"Rating="3.9"Link="https://3.bp.blogspot.com/-bFB8Se5Dl8M/UukYlaDHS1I/AAAAAAAAAMo/KKKaVh3ukPk/s1600/NYX-Powder-Blush_Peach.jpg"></Card>
   <Card cart={cart} setCart={setCart}id="12" Pname="Kajal"Price="₹450"Rating="3.0"Link="https://n1.sdlcdn.com/imgs/b/x/c/Lakme-Eyeconic-Brown-Kajal-0-SDL566815533-1-5039f.jpg"></Card>
   <Card cart={cart} setCart={setCart}id="13" Pname="Highlighter" Price="₹150" Rating="3.0" Link="https://www.temptalia.com/wp-content/uploads/2020/09/rare-beauty_positive-light-liquid-luminizer-highlight_002_product-350x350.jpg"></Card>
   <Card cart={cart} setCart={setCart} id="14" Pname="Setting Spray" Price="₹190" Rating="2.2" Link="https://th.bing.com/th/id/OIP.YE85RTuvT0Dppg3aLH9uwQHaHa?pid=ImgDet&rs=1"></Card>
   <Card cart={cart} setCart={setCart}id="15" Pname="Lip Liner"Price="₹100"Rating="4.8"Link="https://i5.walmartimages.com/asr/5c5e03e9-0c9a-46e5-8bab-abb450164986_1.2df5c1df0db855fa6ddbb50703483d9c.jpeg"></Card>
   <Card cart={cart} setCart={setCart}id="16" Pname="Eye shadow Palette"Price="₹650"Rating="4.3"Link="https://th.bing.com/th/id/OIP.UT8_wzuBsmXTJzqx_3xiVgHaHa?pid=ImgDet&rs=1"></Card>
   <Card cart={cart} setCart={setCart}id="17" Pname="Liquid Lipstick"Price="₹300"Rating="3.7"Link="https://www.makeup.com/product-and-reviews/lipstick/'/-/media/project/loreal/brand-sites/mdc/americas/us/articles/2020/08_august/17-liquid-lipstick/best-liquid-lipsticks-body04-mudc-081720.jpg?w=400&h=400&hash=7D3134AD6FEEA693ACEDB3688542681B%27"></Card>
   <Card cart={cart} setCart={setCart}id="18" Pname="Concealer" Price="₹105" Rating="4.7" Link="https://paratistore.cl/wp-content/uploads/2020/12/l-a-girl-usa-pro-conceal-hd-high-definition-concealer-8g-p7594-27521_image.jpg"></Card>
   </div>
   
        
    </div>
      
      
    
  
      
    
  )
}

export default App
