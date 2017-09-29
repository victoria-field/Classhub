module.exports = function(sequelize, Sequelize) {
 
    var student = sequelize.define('student', {
 
        id: {
           
            primaryKey: true,
            type: Sequelize.INTEGER
        },
 
        firstname: {
            type: Sequelize.STRING,
            notEmpty: true
        },
 
        lastname: {
            type: Sequelize.STRING,
            notEmpty: true
        },
        email: {
            type: Sequelize.STRING,
            validate: {
                isEmail: true
            }
        },
        present: {
            type: Sequelize.BOOLEAN,
            
        }
         });
 
    return student;
 
}