import { userConstants } from '../_constants';
import { userService } from '../_services';
import { alertActions } from './';
import { history } from '../_helpers';

export const userActions = {
    login,
    logout,
	getData,
	getCustomerInfo,
	showModal,
	hideModal,
	moveTo,

};

function login(username, password) {
    return dispatch => {
        dispatch(request({ username }));

        userService.login(username, password)
            .then(
                user => { 
                    dispatch(success(user));
                    history.push('/');
                },
                error => {
                    dispatch(failure(error));
                    //dispatch(alertActions.error(error));
                }
            );
    };

    function request(user) { 
	console.log(user);
	return { type: userConstants.LOGIN_REQUEST, user } }
	
    function success(user) { 
	console.log(user);
	return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { 
	console.log(error);
	return { type: userConstants.LOGIN_FAILURE, error } }
}

function logout() {
    userService.logout();
    return { type: userConstants.LOGOUT };
}

function showModal()
{
	console.log("MODAL");
	
	  return (dispatch) => {
    dispatch({
      type: userConstants.SHOW_MODAL
    });
  }

}

function hideModal()
{
	return dispatch => 	dispatch({ type: userConstants.HIDE_MODAL });
	
}



function getCustomerInfo()
{
	   return dispatch => {
        dispatch(request());

        userService.getData("customer_get",{})
            .then(
                info => dispatch(success({...info})),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: userConstants.GETALL_REQUEST } }
    function success(info) { 
	
		console.log(info.data);
		return { type: userConstants.CUSTOMER_INFO, info }
	}
    function failure(error) { return { type: userConstants.GETALL_FAILURE, error } }
}

function getData(url,jsonObj) {
    return dispatch => {
        dispatch(request());

        userService.getData(url,jsonObj)
            .then(
                users => dispatch(success(users)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: userConstants.GETALL_REQUEST } }
    function success(users) { return { type: userConstants.GETALL_SUCCESS, users } }
    function failure(error) { return { type: userConstants.GETALL_FAILURE, error } }
}


function moveTo(url)
{
	console.log(url);
	history.push('/'+url);
	return dispatch => 	dispatch({ type: userConstants.MOVE_TO,url });
	
}	
