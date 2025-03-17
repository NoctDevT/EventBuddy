module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('events', 'id', {
      type: Sequelize.STRING,
      allowNull: false,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('events', 'id', {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    });
  }
};
