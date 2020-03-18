 module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.createTable('tarefas', {
    id:{
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,

    },
    descricao: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    status: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    createdAt: {
      allowNull: true,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: true,
      type: Sequelize.DATE,
    },

   });
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.dropTable('tarefas');
  }
};
