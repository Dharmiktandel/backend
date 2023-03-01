import React from "react";

import "./zomato.css";
import download from "../assets/download.png";
import location from "../assets/location.png";
import search from "../assets/search.png"
// import food from "../assets/food.jpg"
import Orders from "./orders";

const Hello = () => {
  return (
    <div>
      <div className="hetw">
        <div className="thediv">
          <div className="maindiv">
            <button className="btnget">
              <img className="imgget" alt="hello" src={download} />
              <h1 className="geth">Get App</h1>
            </button>

            <div className="divs">
              <button className="btngeth">
                <h1 className="gethh">Investor Relation</h1>
              </button>
              <button className="btngeth">
                <h1 className="gethh">Add Restaurant</h1>
              </button>
              <button className="btngeth">
                <h1 className="gethh">Login</h1>
              </button>
              <button className="btngeth">
                <h1 className="gethh">Signup</h1>
              </button>
            </div>
          </div>

          <div className="zomatotext">
            <h1 className="zombiw">ZOMATO</h1>
            <h1>Discover the best foods & drinks in ahmedabad</h1>
            <div className="divsed">
              <div className="asdfh">
                <img className="locimgs" alt="loc" src={location}></img>
                <input type="text"/>
                {/*drop down list hai niche */}
                <select name="cars" id="cars">
                  <option value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="mercedes">Mercedes</option>
                  <option value="audi">Audi</option>
                </select> 
              </div>
              <h1 className="pipe">|</h1>
              <div className="asdfh">
                <img className="locimgs" alt="search" src={search}></img>
                <input className="textt" type="text" />
                </div>
            </div>
          </div>
        </div>
      </div>

      
           <div style={{display:'flex',flexDirection:"row",alignItems:"center",justifyContent:"space-around"}}>
           <Orders name="Order Online" car="Stay home and order to our shop"/>
            <Orders name='Dining' car="view the citys favorite dining "/>
        
           </div>

           
    </div>

  );
};
export default Hello;
