import test from 'ava'
import getCredentials from '.'


test('should get username and pass', t => {
  //username:password
  const header = 'Basic dXNlcm5hbWU6cGFzc3dvcmQ='
  const {username, password} = getCredentials(header)
  t.is(username, 'username')
  t.is(password, 'password')
})

test('should throws error if not valid header', t => {
  t.throws(() => {
    getCredentials('invalid header value')
  })
})

test('should throws error if not valid username or password', t => {
  t.throws(() => {
    getCredentials('Basic invalid')
  })
})
