const muse = require("custom-module"),
	colors = require("colors"),
	inquirer = require("inquirer");

async function searchPrompt(results) {
	const _displaySearchResults = results.map(result => {
		return {name: result.name, value: result.id}

	})

	return inquirer.prompt([{
		type: 'list',
		message: 'select one option to see job description',
		name: 'jobs',
		choices: _displaySearchResults
	}])
}


const _printPrint = jobWithId => {
	console.log('--------------- Job Description ----------------- ')
	const BOLD_RED_YELLOW = "\033[1;31;43m %s \033[m"
	console.log(BOLD_RED_YELLOW, `Job name: ${jobWithId.name}`)
	console.log(`Job company: ${jobWithId.company.name}`)

	console.log('Job locations:')
	jobWithId.locations.forEach((location) => {
		console.log(location.name)
	})

	console.log('Job level:')
	if (Object.values(jobWithId.levels.length === 0)) console.log('N/A')
	else {
		jobWithId.levels.forEach((level) => {
			console.log(level.name)
		})
	}
	console.log('-------------------------------------------------')
};

const search = async page => {
	if (page < 0 || page > 99){
		console.log('please enter correct page number!')
	}
	else {
		const jobs = await muse.search(page)
		const selectedJob = await searchPrompt(jobs.results)

		//selected job
		const jobWithId = await muse.lookup(selectedJob.jobs)

		_printPrint(jobWithId)
	}
};


module.exports = {
	search
};
