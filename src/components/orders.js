import React from "react";
import food from "../assets/food.jpg"

const Orders =(props)=> {
    return(
        <div style={{alignItems:"center",justifyContent:'center',display:"flex",padding:'30px'}}>
      <div className="fooddiv">
        <img className="foods" alt="foods" src={food}></img>
        <h1 className="order">{props.name}</h1>
        <h2 className="order">{props.car}</h2>
      </div>
      </div>
    )
}
export default Orders