import { productConstants } from '../_constants';

export function products(state = {}, action) {
  switch (action.type) {
  
	case productConstants.SHOW_MODAL:
		return {
			...state,showModal: true
		};
	case productConstants.HIDE_MODAL:
		return {
			...state,showModal: false
		};	
  
    case productConstants.GETALL_REQUEST:
      return {
        loading: true
      };
    case productConstants.GETALL_SUCCESS:
      return {
        items: action.products
      };
    case productConstants.GETALL_FAILURE:
      return { 
        error: action.error
      };
  
    default:
      return state
  }
}