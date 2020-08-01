const bunyan = require('bunyan')
const logger = bunyan.createLogger({ name: 'tekton-trigger' })

module.exports = logger
