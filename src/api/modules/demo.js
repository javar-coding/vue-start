import Net from '../net'
const net = new Net(process.env.DEMO_DOMAIN)

export default {
  getDemo: (params) => net.get('/getDemo', params),
  postDemo: (params) => net.post('/postDemo', params)
}
