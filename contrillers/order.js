module.exports.getAll = (req, res) => {
    res.status(200).json({
        login: getAll
    })
};

module.exports.create = (req, res) => {
    res.status(200).json({
        login: create
    })
};
