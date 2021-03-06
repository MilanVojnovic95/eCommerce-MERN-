import React from "react";
import Layout from "../core/Layout";
import {isAuthenticated} from "../auth";
import {Link} from "react-router-dom";

const AdminDashboard = () => {

    const {user: {_id, name, email, role}} = isAuthenticated();

    const AdminLinks = () => {
        return (
            <div className="card">
                <h4 className="card-header">Admin LInks</h4>
                <ul className="list-group ">
                    <li className="list-group-item">
                        <Link className="nav-link" to="/create/category"> Create Category </Link>
                    </li>
                    <li className="list-group-item">
                        <Link className="nav-link" to="/create/product" >Create Product</Link>

                    </li>

                    <li className="list-group-item">
                        <Link className="nav-link" to="/admin/orders" >View Orders</Link>

                    </li>

                    <li className="list-group-item">
                        <Link className="nav-link" to="/admin/products" >Manage Products</Link>

                    </li>
                  
                </ul>
            </div>
        )
    };


    const AdminInfo = () => {
        return ( 
            
            <div className="card mb-5 ">
                <h3 className="card-header">User Information</h3>
                <ul className="list-group ">
                    <li className="list-group-item">{name}</li>
                    <li className="list-group-item">{email}</li>
                    <li className="list-group-item">{ role === 1  ? "Admin" : "Registered User"}</li>
                </ul>
            </div>
            
        )
    };

   


    return (
        <Layout title =" Admin Dashboard" description={`G'day ${name}!`}  className="container-fluid">

            <div className="row">
                <div className="col-12 col-md-3 mb-2 mb-md-0">
                    {AdminLinks()}
                </div>

            
                <div className="col-12 col-md-9">
                    {AdminInfo()}
                    
                </div>
            </div>    
            
            

        </Layout>
    );
};




export default AdminDashboard;