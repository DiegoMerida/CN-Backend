const { Authors } = require('../models/Author');

const getAllAuthors = () => Authors.find({is_active:true});

module.exports = {
    getAllAuthors,
};