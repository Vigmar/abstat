import { productConstants } from '../_constants';
import { userService } from '../_services';
import { alertActions } from './';
import { history } from '../_helpers';

export const productActions = {
	getData,
	showModal,
	hideModal,

};


function showModal()
{
	console.log("MODAL");
	
	  return (dispatch) => {
    dispatch({
      type: productConstants.SHOW_MODAL
    });
  }

}

function hideModal()
{
	return dispatch => 	dispatch({ type: productConstants.HIDE_MODAL });
	
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

    function request() { return { type: productConstants.GETALL_REQUEST } }
    function success(users) { return { type: productConstants.GETALL_SUCCESS, users } }
    function failure(error) { return { type: productConstants.GETALL_FAILURE, error } }
}



