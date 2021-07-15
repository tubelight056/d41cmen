import React, { useState } from 'react';

function Card(props) {
    const [hoverstate,sethoverstate]=useState(false);
    const onmousehandler=()=>{
        sethoverstate(!hoverstate)
    }
    console.log(props.item)
    return (
        <div className="card-container" onMouseOver={()=>onmousehandler()} onMouseOut={()=>onmousehandler()} >
            {hoverstate==true && <p className="hover-change" >Know more</p>}
 <a href={props.item.link}>
 <img className="card-img" src={props.item.img} />
     </a>            
        </div>
    );
}

export default Card;