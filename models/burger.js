var orm = require("../config/orm.js");

var burger = {
	selectAll: function (answer) {
		orm.selectAll('burgers', function (res) {
			answer(res);
		});
	},
	insertOne: function (cols, vals, answer) {
		orm.insertOne('burgers', cols, vals, function (res) {
			answer(res);
		});
	},
	updateOne: function (objColVals, condition, answer) {
		orm.updateOne('burgers', objColVals, condition, function (res) {
			answer(res);
		});
	},
	deleteOne: function (condition, answer) {
		orm.deleteOne('burgers', condition, function (res) {
			answer(res);
		});
	}
};

module.exports = burger;