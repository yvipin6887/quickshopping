const Store = require('../models/Store/Store');

exports.index = async (req, res, next) => {
    try {
        res.json({store:  await Store.find()});
    } catch (error) {
        res.json(error)
    }
}

exports.getAction = async (req, res, next) => {
    try {
        let storeId = req.param.id;
        res.json({store: await Store.findById(storeId)});
    } catch (error) {
        res.json(error)
    }
}

exports.createAction  = async (req, res, next) => {
    try {
        const  newStore = new Store({
            code: 'test',
            label: {
                en_EN: 'Test',
            },
        });
        const added = await newStore.save();
        res.json({store: added});
    } catch (error) {
        res.json({
            error
        });
    }
}

exports.updateAction  = async (req, res, next) => {
    try {
        let storeId = req.body.storeId;
        let updateData = {
            label: req.body.label,
            locales: req.body.locales,
            categoryId:req.body.categoryId,
        };
        
        const  updateStore =  await Store.findByIdAndUpdate(storeId, {$set: updateData});
        res.json({store: updateStore});
    } catch (error) {
        res.json({
            error
        });
    }
}