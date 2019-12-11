const AuthorResolvers = require('./AuthorResolvers');

module.exports=
{
    Query: 
    {
        ...PlayerResolvers.Query 
    },
    Mutation:
    {
        ...PlayerResolvers.Mutation
    }
};