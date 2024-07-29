import CardDefault from "../Components/Card";
import { fashionEvents } from "./Events";


import React from 'react'

function PastEvents(props) {
  return (
    <div id={props.id} className="bg-[#EAE7E4]">
      <div className=" bg-black">
        <h1 className=" w-full text-center  tracking-widest font-bold text-[#EAE7E4] ">PAST EVENTS</h1>
      </div  >
      <div className=" flex justify-center items-center p-5">
      <div className="grid bg-[#EAE7E4] grid-cols-1   md:grid-cols-2 lg:grid-cols-3 gap-10">

        {
          fashionEvents.map((val)=>(
            <CardDefault des={val.description}
            title = {val.title}
            startD = {val.startDate}
            endD = {val.endDate}
            imgUrl = {val.imageURL}  
            />

          ))
        }
       
        </div>
      </div>
        
      
    </div>
  )
}

export default PastEvents