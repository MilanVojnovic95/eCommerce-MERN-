import React from 'react';
import {Link} from 'react-router-dom';
import ShowImage from './ShowImage';
import '../style.css'
import moment from 'moment';


const Card = ({product, showViewProductButton = true}) => {

const showViewButton = (showViewProductButton) => {
    return (
            showViewProductButton && (
                <Link to={`/product/${product._id}`} className="mr-2">
                <button className="btn btn-outline-primary mt-2 mb-2">
                                View Product
                            </button>
                            </Link>
            )
    )
}
const showAddToCartButton = () => {
    return (

        <button className="btn btn-outline-warning mt-2 mb-2 ml-2">
        Add to Card
    </button>
    )

}


const showStock = (quantity) => {
        return quantity > 0 ? <span className="badge badge-default ">In Stock</span> : <span>Out of Stock</span>
}

    return (
        
                <div className="card">
                
                    <div className="card-header text-white bg-primary mb-3 "><h5>{product.name.substring(0, 20)}  </h5></div>
                    <div className="card-body  ">
                        <ShowImage  item={product} url="product"/>
                        <hr/>
                        <p className="lead mt-2">{product.description.substring(0, 3000)}...</p>
                        <hr/>
                        <p className="black-10">${product.price}</p>
                        <p className="black-9">Category: {product.category && product.category.name}</p>
                        <p className="black-8">Added on {moment(product.createdAt).fromNow()}</p>

                        <p className="black-5">{showStock(product.quantity)}</p>
                        <br/>
                        <hr/>

                        
                            {showViewButton(showViewProductButton)}
                            {showAddToCartButton()}

                        
                    </div>

                </div>
        
    )
}


export default Card;