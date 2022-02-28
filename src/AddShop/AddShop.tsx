import React, { useState } from "react";



function AddShop({shop, setShop}: any) {

    const [value, setValue] = useState('')
    const [valueTimeStart, setValueTimeS] = useState('')
    const [valueTimeFinish, setValueTimeF] = useState('')
    
    function saveShop() {
        setShop(
            [...shop, {
                nameShop: value,
                timeStart:valueTimeStart,
                timeFinish: valueTimeFinish
            }]
        )
    }
    

    return (
        <div>
            <input placeholder="Введите название магазина" value={value} onChange={(e)=>setValue(e.target.value)}/>
            <br/>
            <input placeholder="Введите время открытия" value={valueTimeStart} onChange={(e)=>setValueTimeS(e.target.value)}/>
            <br/>
            <input placeholder="Введите время открытия" value={valueTimeFinish} onChange={(e)=>setValueTimeF(e.target.value)}/>
            <br/>
            <button onClick={saveShop}>Добавить</button>
        </div>
    )
}

export default AddShop