import { sellpointConstants } from '../_constants';

export function sellpoints(state = {}, action) {
  switch (action.type) {
  
	case sellpointConstants.SHOW_MODAL:
		return {
			...state,showModal: true
		};
	case sellpointConstants.HIDE_MODAL:
		return {
			...state,showModal: false
		};	
  
    case sellpointConstants.GETALL_REQUEST:
      return {
        loading: true
      };
    case sellpointConstants.GETALL_SUCCESS:
      return {
        items: action.sellpoints
      };
    case sellpointConstants.GETALL_FAILURE:
      return { 
        error: action.error
      };
	  
	  case sellpointConstants.GETALL_REQUEST:
      return {
        loading: true
      };
	  
    case sellpointConstants.ADD_SUCCESS:
      return {
        items: action.sellpoints
      };
    case sellpointConstants.GETALL_FAILURE:
      return { 
        error: action.error
      };
  
    default:
      return state
  }
}