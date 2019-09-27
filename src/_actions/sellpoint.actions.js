import { sellpointConstants } from '../_constants';
import { userService } from '../_services';
import { alertActions } from './';
import { history } from '../_helpers';

export const sellpointActions = {
	getAll,
	showModal,
	hideModal,

};


function showModal()
{
	console.log("MODAL");
	
	  return (dispatch) => {
    dispatch({
      type: sellpointConstants.SHOW_MODAL
    });
  }

}

function hideModal()
{
	return dispatch => 	dispatch({ type: sellpointConstants.HIDE_MODAL });
	
}


function AddPoint(url,jsonObj)
{
	   return dispatch => {
        dispatch(request());

        userService.getData(url,jsonObj)
            .then(
                users => dispatch(success(users)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: sellpointConstants.ADD_REQUEST } }
    function success(info) { return { type: sellpointConstants.ADD_SUCCESS, info } }
    function failure(error) { return { type: sellpointConstants.ADD_FAILURE, error } }

}

function UpdatePoint(url,jsonObj)
{
	   return dispatch => {
        dispatch(request());

        userService.getData(url,jsonObj)
            .then(
                users => dispatch(success(users)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: sellpointConstants.UPDATE_REQUEST } }
    function success(info) { return { type: sellpointConstants.UPDATE_SUCCESS, info } }
    function failure(error) { return { type: sellpointConstants.UPDATE_FAILURE, error } }

}

function getAll(url,jsonObj) {
    return dispatch => {
        dispatch(request());

        userService.getData(url,jsonObj)
            .then(
                users => dispatch(success(users)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: sellpointConstants.GETALL_REQUEST } }
    function success(sellpoints) { console.log(sellpoints); return { type: sellpointConstants.GETALL_SUCCESS, sellpoints } }
    function failure(error) { return { type: sellpointConstants.GETALL_FAILURE, error } }
}



