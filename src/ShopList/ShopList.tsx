import React from "react";
import '/home/artem/Рабочий стол/react/lessons-1/my-app/src/App.css';


function ShopList({shop}: any, setShop: any) {

console.log(shop)

    return(
        <div>
            {shop.map((item: any, index: number) => {
                return(
                <div key={index} className='shop_list'>
                    <div>{item.nameShop} ({item.timeStart})</div>
                </div>
                )
            })}
        </div>
    )

}

export default ShopList