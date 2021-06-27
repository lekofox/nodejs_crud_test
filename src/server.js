import app from './app'
import connection from './config/connection'

const connect = async () => {
  try {
    await connection.authenticate()
    console.log(`Server running on port ${PORT}`)
  } catch (error) {
    console.log(error)
  }
}
connect()

const PORT = process.env.PORT || 3333

app.listen(PORT)
