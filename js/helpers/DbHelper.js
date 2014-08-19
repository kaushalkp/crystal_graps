
var db = null;
window.db = window.openDatabase("crystal_poc","1","Crystal POC DB",1000000);
function startup() {
    console.log("Starting up...");
    db = window.openDatabase("crystal_poc","1","Crystal POC DB",1000000);
    console.log(window.db);
    window.db.transaction(initDB,dbError,function(){});
}
function dbError(e) {
    console.log("SQL ERROR");
    console.log(e);
    
}
function initDB(tx) {
//console.log("create");
//tx.executeSql("DROP TABLE farmer_master");
    tx.executeSql("CREATE TABLE IF NOT EXISTS user_detail(userId INTEGER PRIMARY KEY , userName TEXT,role TEXT,photo TEXT,token TEXT)");
//    alert("Table Created!");
//    tx.executeSql("CREATE TABLE IF NOT EXISTS farmer_master(id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, father_name TEXT,village_name TEXT,place_type TEXT,mobile_no TEXT,email_id TEXT)");
//    tx.executeSql("CREATE TABLE IF NOT EXISTS farmer_master(id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, father_name TEXT,village_name TEXT,place_type TEXT,mobile_no TEXT,email_id TEXT)");
//    tx.executeSql("INSERT INTO farmer_master (name,father_name,village_name,place_type,mobile_no,email_id) VALUES ('Ronak','Ramesh Bhai','Anand','District','9016262629','ronak102@gmail.com')"); 
//tx.executeSql("CREATE TABLE IF NOT EXISTS farmer_master(id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, father_name TEXT,village_name TEXT,place_type TEXT,mobile_no TEXT,email_id TEXT,is_new BOOL)");
//tx.executeSql("INSERT INTO farmer_master (name,father_name,village_name,place_type,mobile_no,email_id) VALUES ('Ronak1','Ramesh Bhai','Anand','District','9016262629','ronak102@gmail.com')"); 

}
