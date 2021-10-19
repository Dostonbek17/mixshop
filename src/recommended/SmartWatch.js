import React from 'react';
import SmartWatchs from '../Json/SmartWatches.json'


const SmartWatch = () => {
    return (
        <div className="smartwatch"> 
            <div className="titles">
                <p>Explore Awesome Products</p>
                <h4>RECOMMENDED FOR YOU</h4>
            </div>
            <div className="cards">
                {SmartWatchs.map((post)=>{
                        return(
                            <div className="productCard">
                                <div className="forImg">
                                   <img src={post.img} />
                              </div>
                              <p>{post.name}</p>
                              <div className="price">
                                  {post.price}
                              </div>
                            </div>
                        )
                })}
            </div>
            <span className="buttonArea">
                <a href="#" className="exploreBtn">Explore Other Products</a>
            </span>
        </div>
    );
};


export default SmartWatch;