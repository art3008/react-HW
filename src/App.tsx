import React, { useState } from 'react';
import './App.css';
import AddShop from './AddShop/AddShop';
import ShopList from './ShopList/ShopList';




function App() {

  const [shop, setShop] = useState([
    {
      nameShop: 'Magnum',
      timeStart: '09:00',
      timeFinish: '23:00'
    }
  ])


  console.log(shop)


  return (
    <div className="App">
      <AddShop shop={shop} setShop={setShop}></AddShop>
      <ShopList shop={shop} setShop={setShop}></ShopList>
    </div>
  );
}


export default App;
