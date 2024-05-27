const Guide = require('../model/guide.model.js');



exports.findAll = function (req, res){
    Guide.findAll(function(err, guide){
        console.log('controller');
        if (err)
            res.send(err);
        res.render('guide.ejs', {guide: guide});
        //res.send(guide);
    });
};

exports.create= function (req, res){
    const new_guide = new Guide(req.body);

    if (req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({error: true, massage: 'Please provide all required failed'});
    }
    else {
        Guide.create(new_guide, function(err, guide){
            if (err)
                res.send(err);
            res.redirect('/api/guide');
            //res.json({error: false, massage: "guide added successfuly", data: guide});
        });
    }
};

exports.findById = function (req, res){
    Guide.findById(req.params.id, function(err,guide){
        if (err)
            res.send(err);
        res.render('guide_edit.ejs', {Guide:guide});
        //res.json(guide);
    });
};

exports.update = function (req, res){
    if (req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({error: true, massage: 'Please provide all required failed'});
    }
    else {
        Guide.update(req.params.id, new Guide(req.body), function(err, guide){
            if (err)
                res.send(err);
            res.redirect('/api/guide');
            //res.json({error: false, massage: "guide added successfuly"});
        });
    }
};

exports.delete = function (req, res){
    Guide.delete(req.params.id, function(err, guide){
    console.log("HI" + req.params.id);
    if (err)
        res.send(err);
    res.redirect('/api/guide');
    //res.json({error: false, masage: "guide sucsesfully delatet"});
   });
};