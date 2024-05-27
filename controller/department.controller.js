const Client = require('../model/department.model');



exports.findAll = function (req, res){
    Client.findAll(function(err, client){
        console.log('controller');
        if (err)
            res.send(err);
        res.render('department.ejs', {clients: client});
        //res.send(client);
    });
};

exports.create = function (req, res){
    const new_client = new Client(req.body);

    if (req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({error: true, massage: 'Please provide all required failed'});
    }
    else {
        Client.create(new_client, function(err, client){
            if (err)
                res.send(err);
            res.redirect('/api/department')
            //res.json({error: false, massage: "department added successfuly", data: client});
        });
    }
};

exports.findById = function (req, res){
    Client.findById(req.params.id, function(err,client){
        if (err)
            res.send(err);
        res.render('department_edit.ejs', {Client:client});
        //res.json(client);
    });
};

exports.update = function (req, res){
    if (req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({error: true, massage: 'Please provide all required failed'});
    }
    else {
        Client.update(req.params.id, new Client(req.body), function(err, client){
            if (err)
                res.send(err);
            res.redirect('/api/department');
            //res.json({error: false, massage: "client added successfuly"});
        });
    }
};

exports.delete = function (req, res){
   Client.delete(req.params.id, function(err, client){
    console.log("HI" + req.params.id);
    if (err)
        res.send(err);
    res.redirect('/api/department')
    //res.json({error: false, masage: "department sucsesfully delatet"});
   });
};








