var connection = require('./../config/config.bd');

var Client  = function (dovid_client){
    this.id_client = dovid_client.id_client;
    this.client_name = dovid_client.client_name;
    this.client_phone = dovid_client.client_phone;
    this.client_age = dovid_client.client_age;
};

Client.create = function (newClient, result){
    connection.query("INSERT INTO dovid_client set ?", newClient, function(err, res){
        if (err){
            console.log("error: ", err);
            result(err, null);
        }
        else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};

Client.findById = function (id, result){
    connection.query("Select * from dovid_client where id_client = ?", id, function(err, res){
        if (err){
            console.log("error: ", err);
            result(err, null);
        }
        else {
            
            result(null, res);
        }
    } );
};

Client.findAll = function (result){
    connection.query("Select * from dovid_client", function(err, res){
        if (err){
            console.log("error: ", err);
            result(err, null);
        }
        else {
            console.log("Client: ", res);
            result(null, res);
        }
    } );
};

Client.update = function (id, client, result){
    connection.query("UPDATE dovid_client SET client_name = ? WHERE id_client = ?", [client.client_name, id], function(err, res){
        if (err){
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    } );
};

Client.delete = function (id, result){
    connection.query("DELETE FROM dovid_client WHERE id_client = ? ", [id], function(err, res){
        if (err){
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    } );
};



module.exports = Client;


