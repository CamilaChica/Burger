var connection = require("../config/connection.js");

 
function printQuestionMarks(num) {
	var arr = [];

	for (var i = 0; i < num; i++) {
		arr.push('?');
	}

	return arr.toString();
}

function objToSql(ob) {
	// column1=value, column2=value2,...
	var arr = [];

	for (var key in ob) {
		if (ob.hasOwnProperty(key)) {
			arr.push(key + '=' + ob[key]);
		}
	}

	return arr.toString();
} 

var orm = {
// Queries all records from the table
	selectAll: function (tableInput, answer) {
		var queryString = 'SELECT * FROM ' + tableInput + ';';
		connection.query(queryString, function (err, result) {
			if (err) throw err;
			answer(result);
		});
	},
	// Adds a record to the table
	// vals is an array of values that we want to save to cols
	// cols are the columns we want to insert the values into
	insertOne: function (table, cols, vals, answer) {
		var queryString = 'INSERT INTO ' + table;

		queryString = queryString + ' (';
		queryString = queryString + cols.toString();
		queryString = queryString + ') ';
		queryString = queryString + 'VALUES (';
		queryString = queryString + printQuestionMarks(vals.length);
		queryString = queryString + ') ';

		console.log(queryString);

		connection.query(queryString, vals, function (err, result) {
			if (err) throw err;
			answer(result);
		});
	},
	// Updates a record in the table
	// objColVals would be the columns and values that you want to update
	updateOne: function (table, objColVals, condition, answer) {
		var queryString = 'UPDATE ' + table;

		queryString = queryString + ' SET ';
		queryString = queryString + objToSql(objColVals);
		queryString = queryString + ' WHERE ';
		queryString = queryString + condition;

		console.log(queryString);
		connection.query(queryString, function (err, result) {
			if (err) throw err;
			answer(result);
		});
	},
	//  Deletes burger from table if needed
	deleteOne: function(table, condition, answer) {
		var queryString = 'DELETE FROM ' + table;
		queryString = queryString + ' WHERE ';
		queryString = queryString + condition;

		connection.query(queryString, function (err, result) {
			if (err) throw err;
			answer(result);
		});
	}
};


// Export ORM
// ==============================================================================
module.exports = orm;