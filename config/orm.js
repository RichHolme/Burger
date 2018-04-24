var connection = require("../config/connection.js");

var orm = {

	selectAll: function(table, cb){
		var queryString = "SELECT * FROM " + table + ";";
    	connection.query(queryString, function(err, result) {
      		if (err) {
        		throw err;
      		}
      		cb(result);
    	});
	}
	// insertOne: function(table, nameInput, devouredInput, cb){
	// 	var queryString = "INSERT INTO " + table +" (name, devoured)";

	//     queryString += "VALUES (";
	//     queryString += toString(nameInput), toString(devouredInput);
	//     queryString += ") ";

	//     console.log(queryString);

	//     connection.query(queryString, function(err, result) {
	//       if (err) {
	//         throw err;
	//       }

	//       cb(result);
	//     });
	// },
	// undateOne: function(table, col, condition, cb) {
	// 	var queryString = "UPDATE burgers";

	//     queryString += " SET ";
	//     queryString += objToSql(col);
	//     queryString += " WHERE ";
	//     queryString += condition;

	//     console.log(queryString);
	//     connection.query(queryString, function(err, result) {
	//       if (err) {
	//         throw err;
	//       }

	//       cb(result);
	//     });
	  
	// }
}

module.exports = orm;