import React from 'react';
import Menu from './Menu';
import '../style.css'



const Layout = ({title='Title', description='Description', className, children}) => (

   <div>
       <Menu class="menu"/>
        <div className= 'jumbotron'>
    
        <h1 className="col-5" >{title}</h1>
        <p className='lead col-12 col-md-6 col-lg-5'>{description}</p>
        

    </div>
    
    <div className={className}>{children}</div>

   </div>

);

export default Layout;