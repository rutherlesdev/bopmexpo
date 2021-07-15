import { combineReducers } from 'redux';
import boReducer from './bo.reducer';

export default combineReducers({
	boletimOcorrencia: boReducer
});