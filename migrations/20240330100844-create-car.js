"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("cars", {
			id: {
				allowNull: false,
				primaryKey: true,
				type: Sequelize.UUID,
				defaultValue: Sequelize.UUIDV4,
			},
			plate: {
				type: Sequelize.STRING,
			},
			manufacture: {
				type: Sequelize.STRING,
			},
			model: {
				type: Sequelize.STRING,
			},
			image: {
				type: Sequelize.STRING,
			},
			rentPerDay: {
				type: Sequelize.BIGINT,
			},
			capacity: {
				type: Sequelize.INTEGER,
			},
			description: {
				type: Sequelize.STRING,
			},
			availableAt: {
				type: Sequelize.DATE,
			},
			transmission: {
				type: Sequelize.STRING,
			},
			description: {
				type: Sequelize.STRING,
			},
			available: {
				type: Sequelize.BOOLEAN,
			},
			type: {
				type: Sequelize.STRING,
			},
			year: {
				type: Sequelize.INTEGER,
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			deletedAt: {
				allowNull: true,
				type: Sequelize.DATE,
			},
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("cars");
	},
};
