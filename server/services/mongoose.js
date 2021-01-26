import mongoose from 'mongoose'
import config from '../config'

mongoose.connection.on('connected', () => {
  console.log('db is connected')
})

mongoose.connection.on('error', (err) => {
  console.log(`can not connected to db ${err}`)
  process.exit(1)
})

exports.connect = async (mongoURL = config.mongoURL) => {
  mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  return mongoose.connection
}
