const Position = require('../models/Position');
const errorHeandler = require('../utils/errorHandler');


module.exports.getByCategotyId = async (req, res) => {
   try {
       const position = await Position.find({
           category: req.params.categoryId,
           user: req.user.id
       });
       res.status(200).json(position)
   } catch (e){
       errorHeandler(res, e)
   }
};

module.exports.remove = async (req, res) => {
    try {
        const position = await new Position({
            name: req.body.name,
            cost: req.body.cost,
            category: req.body.category,
            user: req.user.id
        }).save();

        res.status(201).json(position);
    } catch (e){
        errorHeandler(res, e)
    }
};

module.exports.create = async (req, res) => {
    try {
        await Position.remove({_id: req.params.id})
        res.status(200).json({massage: `Position ${req.params.id} deleted`})
    } catch (e){
        errorHeandler(res, e)
    }
};

module.exports.update = async (req, res) => {
    try {
        const position = await Position.findByIdAndUpdate(
            {_id: req.params.id},
            {$set: req.body},
            {new: true});
        res.status(201).json(position);
    } catch (e){
        errorHeandler(res, e)
    }
};
