
import { authHeader } from '../_helpers';
import axios from 'axios';

export const userService = {
    login,
    logout,
    getData,
    
};

function login(username, password) {
    const requestOptions = {
        method: 'POST',
          	headers: {
          'Content-Type': 'application/json',
          
        },
        //body: JSON.stringify({ username, password })
		body: JSON.stringify({ email:username, password:password })
		
    };

    
	return fetch('https://api.sitename.online/main/login', requestOptions)
        .then(handleResponse)
        .then(user => {
			
			
            if (user.params.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
				user.lastTime = Math.floor(new Date().getTime()/1000);
				console.log(user);
                localStorage.setItem('user', JSON.stringify(user));
				//console.log(user);
            }

            return user;
        });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}


function getData(url,jsonObj) {
    const requestOptions = {
        headers: authHeader()
    };
	
        console.log(jsonObj);
	  
		axios.defaults.headers.post['Content-Type'] ="application/json";
		axios.defaults.headers.post['SessionID'] = requestOptions.headers.SessionID;
			axios.defaults.headers.post['Token'] = requestOptions.headers.Token;	
	return axios.post('https://api.sitename.online/customer/'+url,jsonObj).then(function (response) 
									{
									console.log(response);
									return response.data;  })
								  .catch(function (error) { console.log("POST ERR: "+error);  });
}



function handleResponse(response) {

	console.log(response);
	
	if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                //location.reload(true);
            }

            const error = response.statusText;
            return Promise.reject(error);
        }
		else 
	{
		return response.text().then(text => {
		
			console.log(text);
			const data = text && JSON.parse(text);

			return data;
		});
	}
}