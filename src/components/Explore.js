import React from 'react';
import exploreimg0 from "./IMG_20210603_163858_910-removebg-preview.png";
import exploreimg1 from "./IMG_20210513_073406_174-removebg-preview.png"
import exploreimg2 from "./IMG_20210523_084328_145-removebg-preview.png"
import exploreimg3 from "./IMG_20210524_073706_084-removebg-preview.png"
import exploreimg4 from "./IMG_20210525_124033_837-removebg-preview.png"
import exploreimg5 from "./IMG_20210530_162810_371-removebg-preview.png"
import exploreimg6 from "./ms_1_512_3262582-removebg-preview (1).png"
import Card from "./Card.js";
function Explore(props) {

    const collectionlist=[
        {
        name:"tshirts",
        price:"Rs.299/-",
        material:"cotton",
        size:"free size",
        img:exploreimg0,
        link:"https://www.instagram.com/p/CPp-OWXBN5b/?utm_source=ig_web_copy_link"
    },{
        name:"tshirts",
        price:"Rs.290/-",
        material:"cotton",
        size:"free size",
        img:exploreimg1,
        link:"https://www.instagram.com/p/COy7LKhBgA-/?utm_source=ig_web_copy_link"
    },{
        name:"tshirts",
        price:"Rs.300/-",
        material:"cotton",
        size:"free size",
        img:exploreimg2,
        link:"https://www.instagram.com/p/CPMzD-oBC-C/?utm_source=ig_web_copy_link"
    },{
        name:"tshirts",
        price:"Rs.250/-",
        material:"cotton",
        size:"free size",
        img:exploreimg3,
        link:"https://www.instagram.com/p/CPPQQ8wBnRE/?utm_source=ig_web_copy_link"
    },{
        name:"tshirts",
        price:"Rs.300/-",
        material:"cotton",
        size:"free size",
        img:exploreimg4,
        link:"https://www.instagram.com/p/CP5gVhxBZMb/?utm_source=ig_web_copy_link"
    },{
        name:"tshirts",
        price:"Rs.299/-",
        material:"cotton",
        size:"free size",
        img:exploreimg5,
        link:"https://www.instagram.com/p/CPfpxE8hITf/?utm_source=ig_web_copy_link"
    }]
    return (
        <div id="collection" className="explore-body">
            <div className="explore-container">
                <h1 className="explore-h1">
                    Let's Select
                </h1>
                <div className="explore-collection">
                 {collectionlist.map((item)=>(
                     <div className="explore-imgcontainer" >
                         <Card item={item} />
                     </div>
                    ))}
           <div className="explore-endcontainer">
               <div className="explore-text">
                   <h1>Do you want to explore more? click this</h1>
               </div>
           </div>
                </div>
            </div>
        </div>
    );
}

export default Explore;