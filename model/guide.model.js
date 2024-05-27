var connection = require('./../config/config.bd');

var Guide  = function (dovid_guide){
    this.id_guide = dovid_guide.id_guide;
    this.guid_name = dovid_guide.guid_name;
    this.guid_education	 = dovid_guide.guid_education;
    this.guid_experience = dovid_guide.guid_experience;
    this.guide_phone = dovid_guide.guide_phone;
};

Guide.create = function (newGuide, result){
    connection.query("INSERT INTO dovid_guide set ?", newGuide, function(err, res){
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

Guide.findById = function (id, result){
    connection.query("Select * from dovid_guide where id_guide = ?", id, function(err, res){
        if (err){
            console.log("error: ", err);
            result(err, null);
        }
        else {
            
            result(null, res);
        }
    } );
};

Guide.findAll = function (result){
    connection.query("Select * from dovid_guide", function(err, res){
        if (err){
            console.log("error: ", err);
            result(err, null);
        }
        else {
            console.log("Guide: ", res);
            result(null, res);
        }
    } );
};

Guide.update = function (id, guide, result){
    connection.query("UPDATE dovid_guide SET guid_name = ? WHERE id_guide = ?", [guide.guid_name, id], function(err, res){
        if (err){
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    } );
};

Guide.delete = function (id, result){
    connection.query("DELETE FROM dovid_guide WHERE id_guide = ? ", [id], function(err, res){
        if (err){
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    } );
};



module.exports = Guide;