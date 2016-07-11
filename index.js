
module.exports = function getCredentialsFromAuthHeader(header) {
  if (!header.startsWith('Basic ')) {
    throw new Error('invalid basic auth header format')
  }

  const encodedCredentials = header.substr('Basic '.length)
  const decodedCredentials = Buffer.from(encodedCredentials, 'base64').toString()
  const [username, password] = decodedCredentials.split(':')

  if (username === undefined || password === undefined) {
    throw new Error('unknown username or password')
  }

  return {username, password}
}
