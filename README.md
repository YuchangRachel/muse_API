# Fetch useful information from web API
I select job-hunting website - theMuse API, creating a custom node module and CLI(command line) app to demonstrate interacting with the custom module.

## File structure
### Custom module
 -**package.json**
npm-init npm -> install --save superagent

 -**index.js**
HTTP request -> HTTP get

 -**config.json**
API endpoint

### CLI
 -**cli.js**

The CLI app should display a help menu by typing: node cli.js help

The CLI should include a search command node cli.js search <item to be search>

 -**app.js**

The app should allow a user to select from a search result and then fetch details

The app should display the details formatted cleanly printed as strings (do not print objects)

## How to run
museAPI->custom-cli.app-> node clis.js search -p num(eg.2)
