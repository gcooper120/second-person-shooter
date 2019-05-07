const user = (sequelize, DataTypes) => {
    const User = sequelize.define('user', {
  
      health: {
        type: DataTypes.INTEGER,
      },
    },
    {
      schema: 'public'
    });
  
    // User.associate = models => {
    //   User.hasMany(models.Message);
    // };
  
    User.findByID = async uid => {
      let user = await User.findOne({
        where: { id: uid },
      });
  
      return user;
    };
  
    return User;
  };
  module.exports.default =  user