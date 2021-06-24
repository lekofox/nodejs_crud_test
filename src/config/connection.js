import {Sequelize} from 'sequelize'
import database from './database'
import User from '../app/models/user';


const connection = new Sequelize(database)

User.init(connection)

export default connection;