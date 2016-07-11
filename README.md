# jm-basic-auth-credentials

Get credentials from basic authorization header.

## Installation

```
$ npm install jm-basic-auth-credentials
```

## Example 

```javascript
//http authorization header for 'foo:bar'
const header = 'Basic Zm9vOmJhcg=='

const getCredentials = require('jm-basic-auth-credentials')
const {username, password} = getCredentials(header)

//username is now 'foo', password is 'bar'

```

## License

MIT
