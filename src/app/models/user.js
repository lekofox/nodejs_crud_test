import { Sequelize } from 'sequelize';
import Model from './baseModel';

class User extends Model {
  static init(sequelize) {
      super.init(
        {
          id: {
            primaryKey: true,
            type: Sequelize.INTEGER,
          },
          name: Sequelize.STRING,
          lastName: Sequelize.STRING,
          nickname: {
            type: 'varchar(30)',
            unique:true,
          },
          address: Sequelize.STRING,
          bio: {
            type:'varchar(100)',
            allowNull: true
          },
        },
        {
          sequelize,
          underscored: false,
          tableName: 'Users',
        },
      );
      return this;
  }

}

export default User;
