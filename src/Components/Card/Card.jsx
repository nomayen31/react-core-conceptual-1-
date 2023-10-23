import React from 'react';

const Card = (props) => {
    const {title, views, another, myObj} = props;
   
    return (
        <div>
            <div className="card card-compact w-auto bg-base-100 shadow-xl p-10">
                <figure><img src="https://i.ibb.co/fDbPv7h/Noha.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <h2 className="card-title">{another}</h2>
                    {/* <p>{myObj.views}</p> */}
                    <p>{views}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div> 
            </div>
        </div>
    );
};

export default Card;