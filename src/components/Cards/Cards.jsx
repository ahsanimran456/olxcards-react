import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import hearctimg from '../images/heart.svg'


function Cards({ img,title,price }) {
    return (

            <div className="card">
                <div className="card-img">
                    <img src={img} alt="Something wrong" />
                </div>
                <div className="card-title">
                    <div className="carddescription">
                        <p>
                            {title}
                        </p>
                    </div>
                    <div className="heart">
                            <img src={hearctimg} alt="" />
                    </div>
                </div>
                <div className="price">
                        <span>{price}</span>
                </div>
            </div>
    )
}

export default Cards