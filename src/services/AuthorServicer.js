const { Authors } = require('.././models/author');

const getAllAuthors = () => Authors.find({is_active:true});

module.exports = {
    getAllAuthors,
};