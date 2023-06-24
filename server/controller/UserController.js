const jwt = require('jsonwebtoken');
const User = require('../models/User/User');


const index = (req, res, next) => {
    User.find()
    .then(response =>{
        res.json({
                response
            });
    })
    .catch(error => {
        res.json({
            error
        })
    })
}

const getAction = (req, res, next) => {
    let userId = req.params.id;

     User.findById(userId)
    .then( response => {
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            message: 'error occured'
        })
    });
}

const createAction = (req, res, next) => {
    const user = new User({
        fname: req.body.fname,
        lname: req.body.lname,
        username: req.body.username,
        password: req.body.password,
        role: 'endUser'
    });

    user.save()
    .then( response => {
        res.json({
            message: 'User added successfully'
        })
    })
    .catch(error => {
        res.json({
            message: 'error occured'
        })
    });
}

const updateAction = (req, res, next) => {
    let userId = req.body.userId;
    let updatedData = {
        fname: req.body.fname,
        lname: req.body.lname,
        username: req.body.username,
        password: req.body.password,
        role: 'endUser'
    };

     User.findByIdAndUpdate(userId,{$set: updatedData})
    .then( response => {
        res.json({
            message: 'User updated successfully'
        })
    })
    .catch(error => {
        res.json({
            message: 'error occured'
        })
    });
}

const destroyAction = (req, res, next) => {
    let userId = req.body.userId;

     User.findByIdAndRemove(userId)
    .then( response => {
        res.json({
            message: 'User removed successfully'
        })
    })
    .catch(error => {
        res.json({
            message: 'error occured'
        })
    });
}

const login = (req, res, next) => {
    let userName = req.body.username;
    let password = req.body.password;
    User.findOne({$or: [{username: userName, password: password}]})
    .then(user => {
        if (user) {
            let token = jwt.sign({name: user.username}, 'verySecretValue', {expiresIn: '1h'});
            res.json({token})
        } else {
            res.json({
                message: "Not found"
            })
        }
    });

}

module.exports = { 
    index,
    getAction,
    createAction,
    updateAction,
    destroyAction,
    login
};