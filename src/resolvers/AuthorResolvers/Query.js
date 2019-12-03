const { getAllAuthors } = require('../.././services/AuthorServicer');

const getAuthors = async () => {
    const authors = await getAllAuthors();
    return authors;
};

module.exports = {
    getAuthors,
};