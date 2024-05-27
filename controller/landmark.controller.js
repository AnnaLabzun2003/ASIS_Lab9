const LandMark = require('../model/landmark.model.js');



exports.findAll = function (req, res){
    LandMark.findAll(function(err, landmark){
        console.log('controller');
        if (err)
            res.send(err);
        res.render('landmark.ejs', {landmark: landmark});
        //res.send(landmark);
    });
};

exports.create= function (req, res){
    const new_landmark = new LandMark(req.body);

    if (req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({error: true, massage: 'Please provide all required failed'});
    }
    else {
        LandMark.create(new_landmark, function(err, landmark){
            if (err)
                res.send(err);
            res.redirect('/api/landmark')
            //res.json({error: false, massage: "landmark added successfuly", data: landmark});
        });
    }
};

exports.findById = function (req, res){
    LandMark.findById(req.params.id, function(err,landmark){
        if (err)
            res.send(err);
        res.render('landmark_edit.ejs', {LandMark:landmark});
        //res.json(landmark);
    });
};

exports.update = function (req, res){
    if (req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({error: true, massage: 'Please provide all required failed'});
    }
    else {
        LandMark.update(req.params.id, new LandMark(req.body), function(err, landmark){
            if (err)
                res.send(err);
            res.redirect('/api/landmark');
            //res.json({error: false, massage: "landmark added successfuly"});
        });
    }
};

exports.delete = function (req, res){
    LandMark.delete(req.params.id, function(err, landmark){
    console.log("HI" + req.params.id);
    if (err)
        res.send(err);
    res.redirect('/api/landmark')
    //res.json({error: false, masage: "landmark sucsesfully delatet"});
   });
};