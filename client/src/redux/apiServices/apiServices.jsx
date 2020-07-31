// import config from 'config';
import axios from 'axios'

export const apiServices = {
    login,
    logout,
    register,
    loginGoogle,
    fetchListOfItems
};

export function authHeader() {
    // return authorization header with jwt token
    let user = JSON.parse(localStorage.getItem('user'));

    if (user && user.token) {
        return { 'Authorization': 'Bearer ' + user.token };
    } else {
        return {};
    }
}

function login(user) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    return fetch("http://9b48ee7fcae2.ngrok.io/login/native", requestOptions)
        .then(handleResponse)
        .then(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('user', JSON.stringify(user));

            return user;
        });
}
async function fetchListOfItems(query) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader(),
        
    };
    return await fetch(`http://434072398e12.ngrok.io/listing/display?search_query=${query.search_query}&page=${query.page_no}&per_page=${20}&checkin=${query.start_date}&checkout=${query.end_date}&guests=${query.guests}`, requestOptions)
    .then( handleResponse);
}
function loginGoogle(tokenObj) {
//     const requestOptions = {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(user)
//     };
//   try {
//     let ans = await axios.post('http://9b48ee7fcae2.ngrok.io/login/google',{
//       ...tokenObj
//     })
//     console.log(ans)
//   } catch (error) {
//     console.log(error)
//   }
//     return fetch("http://9b48ee7fcae2.ngrok.io/login/native", requestOptions)
//         .then(handleResponse)
//         .then(user => {
//             // store user details and jwt token in local storage to keep user logged in between page refreshes
//             localStorage.setItem('user', JSON.stringify(user));

//             return user;
//         });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}



function register(user) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    return fetch("http://9b48ee7fcae2.ngrok.io/register/native", requestOptions).then(handleResponse);
}




function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        console.log(data)
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                // logout();
                // location.reload(true);
                console.log("res "+ 401)
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
        
    });
}