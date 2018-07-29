module.exports.getAll = (req, res) => {
    res.status(200).json({
        login: getAll
    })
};

module.exports.getById = (req, res) => {
    res.status(200).json({
        login: getById
    })
};

module.exports.remove = (req, res) => {
    res.status(200).json({
        login: remove
    })
};

module.exports.create = (req, res) => {
    res.status(200).json({
        login: create
    })
};

module.exports.update = (req, res) => {
    res.status(200).json({
        login: update
    })
};
