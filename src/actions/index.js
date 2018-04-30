import axios from 'axios';

export const FETCH_STORE = 'fetch_store';

export const fetchStores = (data) => async dispatch => {
	const zip = data.zipcode;

	try {
		const res = await axios.get(`https://shipt-zip-code-test-api.herokuapp.com/api/zip_codes/${zip}`);
		dispatch({type: FETCH_STORE, payload: res.data.stores})
	} catch(err) {
		dispatch({type: FETCH_STORE, payload: {}})
	}
	

}

