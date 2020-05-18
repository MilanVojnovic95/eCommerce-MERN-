import React, {useState, useEffect} from 'react';
import Layout from'./Layout';
import {getProducts} from './ApiCore';
import Card from './Card';
import '../style.css';
import Search from './Search'




const Home = () => {
    const [productsBySell, setProductsBySell] = useState ([])
    const [productsByArrival, setProductsByArrival] = useState ([])
    const [error, setError] = useState (false)
    
    
    const loadProductsBySell = () => {
        getProducts('sold').then(data => {
            if(data.error) {
                setError(data.error)
            } else {
                setProductsBySell(data)
            }
        })
    }


    const loadProductsByArrival = () => {
        getProducts('createdAt').then(data => {
            if(data.error) {
                setError(data.error)
            } else {
                setProductsByArrival(data)
            }
        })
    }


    useEffect (() => {
        loadProductsByArrival()
        loadProductsBySell()
    }, [])


    return (
        <Layout title="Welcome to ecommerce-web-app.com" description="E-commerce solutions ranging
        from small shops to complex online payment systems." className="container-fluid p-2 ">
           

            <Search/>
            <hr/>
              
          
              <h2 className="mb-4">New Arrivals</h2>
              <hr/>
                <div className="row">
                {productsByArrival.map((product, i) => (
                    <div key={i} className="col-12 col-md-6 col-lg-3 mb-3">
                        <Card key={i} product={product}/>
                    </div>
                ))}
                </div>

              
                <hr/>
              <h2 className="mb-4">Best Sellers</h2>
              <hr/>

              <div className="row">
              {productsBySell.map((product, i) => (
                  <div key={i} className="col-12 col-md-6 col-lg-3 mb-3">
                  <Card key={i} product={product}/>
              </div>
              ))}
              </div>
          
              
        </Layout>
    );
    
}
export default Home;