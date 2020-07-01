const middleware = {}

middleware['authorization'] = require('..\\middleware\\authorization.js')
middleware['authorization'] = middleware['authorization'].default || middleware['authorization']

export default middleware
