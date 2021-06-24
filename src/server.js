import app from './app'
import connection from './config/connection'

const connect = async () => {
    try {
        await connection.authentica()
        console.log('Database running...')
    } catch(error){
        console.log(error)
    }
}
connect()

app.listen(3333)