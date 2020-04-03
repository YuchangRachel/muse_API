/*
 *The Muse
- SEARCHING - https://www.themuse.com/api/public/jobs?page=
- DATA FETCH - https://www.themuse.com/api/public/jobs/<id number>
- NO API Key required (just register account)
 */

//module export a method for searching
//moudel export a method for fetching data by id
const config = require('./config')
const superagent = require('superagent')

const _buildQueryArgs = (options) => {
	return superagent.get(`${config.url}/jobs${options}`)
			.then(response => response.body)
			.catch(error => error.response.body)
			
}

exports.search = (page=1) => {
	return _buildQueryArgs(`?page=${page}`)
}

exports.lookup = (jobId) => {
	return _buildQueryArgs(`/${jobId}`)
}
