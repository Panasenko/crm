const Position = require('../models/Position');
const errorHeandler = require('../utils/errorHandler');


module.exports.getByCategotyId = async (req, res) => {
   try {
       const position = await Position.find({
           category: res.params.categoryId,
           user: res.user.id
       });

       res.status(200).json(position)
   } catch (e){
       errorHeandler(res, e)
   }
};

module.exports.remove = (req, res) => {
    try {

    } catch (e){
        errorHeandler(res, e)
    }
};

module.exports.create = (req, res) => {
    try {

    } catch (e){
        errorHeandler(res, e)
    }
};

module.exports.update = (req, res) => {
    try {

    } catch (e){
        errorHeandler(res, e)
    }
};
