var connection = require('./../config/config.bd');

var Landmark  = function (dovid_landmark){
    this.id_landmark  = dovid_landmark.id_landmark;
    this.landmark_name = dovid_landmark.landmark_name;
    this.id_tour = dovid_landmark.id_tour;
    this.landmark_description = dovid_landmark.landmark_description;
    this.landmark_address = dovid_landmark.landmark_address;
};

Landmark.create = function (newLandmark, result){
    connection.query("INSERT INTO dovid_landmark set ?", newLandmark, function(err, res){
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

Landmark.findById = function (id, result){
    connection.query("Select * from dovid_landmark where id_landmark = ?", id, function(err, res){
        if (err){
            console.log("error: ", err);
            result(err, null);
        }
        else {
            
            result(null, res);
        }
    } );
};

Landmark.findAll = function (result){
    connection.query("Select * from dovid_landmark", function(err, res){
        if (err){
            console.log("error: ", err);
            result(err, null);
        }
        else {
            console.log("Landmark: ", res);
            result(null, res);
        }
    } );
};

Landmark.update = function (id, landmark, result){
    connection.query("UPDATE dovid_landmark SET landmark_name = ? WHERE id_landmark = ?", [landmark.landmark_name, id], function(err, res){
        if (err){
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    } );
};

Landmark.delete = function (id, result){
    connection.query("DELETE FROM dovid_landmark WHERE id_landmark = ? ", [id], function(err, res){
        if (err){
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    } );
};



module.exports = Landmark;