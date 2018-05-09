//require MySQL
var mysql = require("mysql");   

//Create connection
var connection;
if (process.env.JAWSDB_URL) {
connection = mysql.createConnection(process.env.JAWSDB_URL);

} else {
connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "P@ssw0rd",
        database: "burgers_db"
    });

} 
// Make connection
connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use
module.exports = connection;