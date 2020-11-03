import Net from '../net'
const net = new Net(process.env.DEMO_DOMAIN)

export default {
  getCurrentInfo: (params) => net.get('/getAccountInfo'),
  login: (params) => net.post('/login', params)
}
