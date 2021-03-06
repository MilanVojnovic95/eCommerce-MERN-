
import { API } from '../config';



// Read user information

export const read= (userId, token) => {
    return fetch(`${API}/user/${userId}`,{
        method: "GET",
        headers:{
            Accept:"application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
    },
    })
    .then(response =>{ 
       return response.json();
    })
    .catch(err => console.log(err));

    
}; 



// Update user information method

export const update  = (userId, token, user) => {
    return fetch(`${API}/user/${userId}`,{
        method: "PUT",
        headers:{
            Accept:"application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
    },

    body: JSON.stringify(user)
})
    .then(response =>{ 
       return response.json();
    })
    .catch(err => console.log(err));

    
};


export const updateUser = (user, next) => {
    if(typeof window !== 'undefined') {
        if(localStorage.getItem('jwt')) {
            let auth = JSON.parse(localStorage.getItem("jwt"));
            auth.user = user;
            localStorage.setItem('jwt', JSON.stringify(auth));
            next();
        }
    };


};


export const getPurchaseHistory = (userId, token) => {
    return fetch(`${API}/orders/by/user/${userId}`,{
        method: "GET",
        headers:{
            Accept:"application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
    },
    })
    .then(response =>{ 
       return response.json();
    })
    .catch(err => console.log(err));

    
}; 
