import saver from '../services/saver';

exports.createAction = async (req, res, next) => {
    try {
        let attributeData = {
            code: req.body.code,
            label: req.body.label,
            type: req.body.type,
            groupId: req.body.groupId
        };
        let newAttribute = new Attribute(attributeData);
        res.json(saver.save(newAttribute));
    } catch(error) {
        res.json(error);
    }
}