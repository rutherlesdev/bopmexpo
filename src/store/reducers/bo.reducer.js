let INITIAL_STATE = {
    new_bo: {
		
	}
};

export default  (state = INITIAL_STATE, {type, payload}) => {
	switch (type) {
	case 'BO_CREATE':
		return {...state, bo: [ ...state.bo, payload]};
    
	default:
		return state;
	}
};