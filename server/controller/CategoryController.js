const Category = require('../models/Category/Category');

exports.createAction = async (req, res, next) => {
    try {
        let newCategory = new Category({
            code: req.body.code,
            label: req.body.label,
            parent: req.body.parent
        });
        let added = await newCategory.save();
        res.json(added);
    } catch (error) {
        res.json(error);
    }
}