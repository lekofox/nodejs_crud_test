const { Model } = require('sequelize');

class BaseModel extends Model {
  static init(schema, options) {
    super.init(
      {
        ...schema,
      },
      {
        ...options,
        
      },
    );
  }
}

module.exports = BaseModel;
