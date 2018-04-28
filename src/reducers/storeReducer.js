import { FETCH_STORE } from '../actions';
import _ from 'lodash';

export default function(state = {} , action) {
	switch(action.type) {
		case FETCH_STORE:
			return _.mapKeys(action.payload.data.stores, 'id');
		default:
			return state
	}
}