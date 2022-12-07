import React from "react";
import Delivery from '../img/delivery.png';

const MainContainer = () =>{
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            
     {/*---------------------------------------BIKE DELIVERY STARTS ------------------------------- */}
            <div className="py-2 flex-1 flex flex-col items-start  justify-start gap-6" >
                <div className="flex items-center gap-2 justify-center bg-orange-100 px-2 py-1 rounded-full">
                    <p className="text-base text-orange-500 font-semibold">Bike Delivery  </p>
                        <div className="drop-shadow-xl w-8 h-8 bg-white rounded-full overflow-hidden ">
                        <img src ={Delivery} className="w-full h-full object-contain" 
                        alt="delivery"/>
                        </div>
                </div> 
                    <p className="text-[2.5rem] md:text-[4.5rem] font-bold tracking-wide text-headingColor">The Fastest delivery in {" "}  
                    <span className="text-orange-600 text-[3rem]">Your City</span></p>
                    <p className="text-base text-textColor text-center md:text-left ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <button className="md:w-auto w-full px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100 md:auto bg-gradient-to-br from-orange-400 to-orange-700 md:col-span-8" type="button">Order Now</button>
            </div>

     {/*---------------------------------------BIKE DELIVERY ENDS ------------------------------- */}
           
            <div className="py-2 bg-blue-400 flex-1 text-headingColor ">

            </div>
            
            
            </div>
    );
    
}
export default MainContainer;