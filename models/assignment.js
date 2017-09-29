
        
        module.exports = function(sequelize, Sequelize) {
 
    var Assignment = sequelize.define('assignment', {
 
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
        assignment: {
            type: Sequelize.STRING,
            notEmpty: true
        }

       
         });
 
    return Assignment;
 
}