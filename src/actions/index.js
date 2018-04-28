import axios from 'axios';

export const FETCH_STORE = 'fetch_store';

export const fetchStores = (data) => {
	const zip = data.zipcode;
	const request = axios.get(`https://shipt-zip-code-test-api.herokuapp.com/api/zip_codes/${zip}`);

	return {
		type: FETCH_STORE,
		payload: request
	}

}