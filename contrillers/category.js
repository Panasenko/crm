const Category = require('../models/Category');
const Position = require('../models/Position');
const errorHeandler = require('../utils/errorHandler');

module.exports.getAll = async (req, res) => {
    try {
        const categories = await Category.find({_id: req.user.id});
        res.status(200).json(categories)
    } catch (e){
        errorHeandler(res, e)
    }
};

module.exports.getById = async (req, res) => {
    try {
        const categories = await Category.findById({_id: req.params.id});
        res.status(200).json(categories)
    } catch (e){
        errorHeandler(res, e)
    }
};

module.exports.remove = async (req, res) => {
    try {
        const category = await Category.remove({_id: req.user.id});
        const position = await Position.remove({category: req.user.id});
        res.status(200).json({massage: 'Категория удалена'})
    } catch (e){
        errorHeandler(res, e)
    }
};

module.exports.create = async (req, res) => {

    console.log(req.user.id)
    const category = new Category({
        name: req.body.name,
        user: req.user.id,
        imageSrc: req.file ? req.file.path : ''
    });

    try {
        await category.save();
        res.status(201).json(category)
    } catch (e){
        errorHeandler(res, e)
    }
};

module.exports.update = async (req, res) => {
    const updated = {
        name: req.body.name,
    };

    if(req.file){
        updated.imageSrc = req.file.path;
    }

    try {
        const position = await Position.findByIdAndUpdate(
            {_id: req.params.id},
            {$set: updated},
            {new: true});
        res.status(201).json(position);
    } catch (e){
        errorHeandler(res, e)
    }
};
