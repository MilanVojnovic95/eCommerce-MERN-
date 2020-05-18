import React, { useState, useEffect } from 'react';
import Layout from './Layout';

import { read, listRelated } from './ApiCore';
import Card from './Card';




const Product = props => {
    const [product, setProduct] = useState({})
    const [relatedProduct, setRelatedProduct] = useState([])
    const [error, setError] = useState(false)

    const loadSingleProduct = productId => {
        read(productId).then(data => {
            if (data.error) {
                setError(data.error)
            } else {
                setProduct(data);
                // fetc related product
                listRelated(data._id).then(data => {
                    if (data.error) {
                        setError(data.error);

                    } else {
                        setRelatedProduct(data);
                    }
                })
            }
        })

    }

    useEffect(() => {
        const productId = props.match.params.productId;
        loadSingleProduct(productId);

    }, [props]);
    return (
        <Layout title={product && product.name} description="Details..." className="container-fluid p-2" >



        <div className="row">
            <div className="col-12 col-md-10 col-lg-8">
                {
                    product &&
                    product.description && (
                        <Card product={product} showViewProductButton={false} />
                    )}
            </div>
            <div className="col-12 col-md-2 col-lg-4">
                <h4 className="black-6">Related Product</h4>
                {relatedProduct.map((p, i) => (
                    <div className="mb-3">
                        <Card key={i} product={p} />
                    </div>

                ))}
            </div>
        </div>

              
              
          
              
        </Layout >
    );
};

export default Product;