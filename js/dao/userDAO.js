window.userDAO = function (db) {
    this.db = db;
};
 
_.extend(window.userDAO.prototype, {
 
    findAll:function (callback) {
        this.db.transaction(
            function (tx) {
             
                var sql = "SELECT * FROM user_details";
                tx.executeSql(sql, [], function (tx, results) {
                    var len = results.rows.length;
                    var users = [];
                    for (var i = 0; i < len; i++) {                     
                        users[i] = results.rows.item(i);                        
                    }
                    callback(users); 
                });
            }
            ,
            function (tx, error) {
                alert("Transaction Error: " + error);
            }
            );
    },
    deleteAll:function(){
        self.db.transaction(
            function (tx) {
               var query = "DELETE FROM user_details";
                console.log(query);
                tx.executeSql(query); 
            },
            function (tx, error) {
                alert('Transaction error ' + error);
            },
            function (tx) {
            });
    },
    create:function (user, callback) {
        self.db.transaction(
            function (tx) {                
                var query = "INSERT INTO user_details (userId,userName,role,photo,token) VALUES ("+user.get("userId")+",'"+user.get("userName")+"','"+user.get("role")+"','"+user.get("photo")+"','"+user.get("token")+"')";
                console.log(query);
                tx.executeSql(query); 
            },
            function (tx, error) {
                alert('Transaction error ' + error);
            },
            function (tx) {
            //                callback();
            });
    },
    update:function (user, callback) {
        self.db.transaction(
            function (tx) {
                var query = "UPDATE user_details SET userName='"+user.get("userName")+"',role='"+user.get("role")+"',photo='"+user.get("photo")+"',token='"+user.get("token")+"' where userId="+user.get("userId");
                console.log(query);
                tx.executeSql(query);
            },
            function (tx, error) {
                alert('Transaction error ' + error);
            });
    },
 
    destroy:function (id, callback) {
        self.db.transaction(
            function (tx) {
                var query = "DELETE FROM user_detail WHERE userId="+id;
                console.log(query);
                var res=tx.executeSql(query); 
                callback(res);
            },
            function (tx, error) {
                alert('Transaction error ' + error);
            })
    },
    findById:function (id, callback) {
        this.db.transaction(
            function (tx) {
                var sql = "SELECT * FROM user_detail WHERE userId = "+id;
                tx.executeSql(sql, [], function (tx, results) {
                    //                    var len = results.rows.length;
                    //                    console.log(len);
                    var farmer = null;
                    if(results.rows.length>0){
                        farmer = results.rows.item(0);
                    //                        farmer = Farmer
                    //                        var person = new Person({ name: "Thomas", age: 67, children: ['Ryan']})
                    //            this.model.set({id:12});
                    }                                        
                    callback(farmer);
                });
            },
            function (tx, error) {
                alert("Transaction Error: " + error);
            }
            );
    }
});
