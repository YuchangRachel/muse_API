const 
	app = require('./app'),
	yargs = require('yargs')

//node cli.js search -l los angeles -p 2
const flags = yargs
    .usage('$0: Usage <cmd> [options]')
    .command({
        command: 'search',
        desc: 'search page on The Muse',
        builder: (yargs) => {
            return yargs.options('page', {
				alias: 'p',
				describe: 'show which page(0-99, total 100)'
			})
        },
        handler: (argv) => {
            app.search(argv.page)
        }
    })
    .help('help')
    .argv
