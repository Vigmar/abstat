export function authHeader() {
    // return authorization header with jwt token
    let user = JSON.parse(localStorage.getItem('user'));

    if (user && user.params.token) {
        return { 'Token': user.params.token,
		'SessionID':user.params.session_id ,  
			'Content-Type': 'application/json',
          'AppToken': '685287806dfc60df17c5ea1013f351da155e77044a017853e06801cf14432028f5dbbfd19dea1ae471bb7575661e92d779b6d5d6c3c3dea45a713adcf7badcbe',
          'AuthType': 'Customer'};
    } else {
        return {};
    }
}