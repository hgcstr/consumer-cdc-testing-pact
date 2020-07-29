const path = require('path')
const { Pact } = require('@pact-foundation/pact')

const port = 8991

const usersProvider = new Pact({
  port: port,
  log: path.resolve(process.cwd(), 'logs', 'mockserver-integration.log'),
  dir: path.resolve(process.cwd(), 'pacts'),
  spec: 2,
  consumer: 'MyConsumer',
  provider: 'MyProvider',
  pactfileWriteMode: 'merge',
})

module.exports = {usersProvider}