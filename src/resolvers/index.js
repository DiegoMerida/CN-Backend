const AuthorResolver = require('./AuthorResolvers/index');

module.exports = {
    Query:{
        ...AuthorResolver.Query
    }
};