import React from "react";

import CartNumber from "./cartnumber.jsx";

const SecondsCounter = (props) => {
    const numero = props.seconds;

const unidades = numero % 10 ;
const decenas = Math.floor(numero/10)%10;
const centenas = Math.floor(numero/100)%10;
const milesima = Math.floor(numero/1000)%10;
const millares = Math.floor(numero/1000)%10;
    return (
           <div className="container my-5 pt-5 ">
            <div className="card-group ">
                
                <div className="card">
                <p> <CartNumber/>
                    {millares}</p>
                </div>
                <div className="card ">
                <p> <CartNumber/>
                    {milesima}</p>
                </div>
                <div className="card ">
                    <p><CartNumber/>
                    {centenas }</p>
                </div>
                <div className="card">
                    <p><CartNumber/>
                    {decenas}</p>
                    
                </div>
                <div class="card">
                <p><CartNumber/>
                {unidades}</p>
                </div>
            </div>
            </div>

                

            
            
            

      
       
         
    
    
       

    )
}
export default SecondsCounter