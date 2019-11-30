const { GraphQLServer } = require('graphql-yoga');

const typeDefs  = 
`
    type Query 
    {
        hello(name:String!):String!
        getUsers: [User]!
        getOneUser: [User]!
    }
    type Mutation
    {
        createUser (name:String!, age:Int!):User
    }
    type User
    {
        id:Int!
        name:String!
        age:Int!
    }
`;

const users = [];

const resolvers=
{
    Query:
    {
        hello: (root, params, context, info) => `hola ${params.name}`,
        getUsers: (root, params, context, info) => users,
        getOneUser: (root, params, context, info) => users,
    },
    Mutation:
    {
        createUser:(root, params, context, info ) => 
        {
            const User =
            {
                id: users.length +1,
                name: params.name,
                age: params.age,
            };
            users.push(User);
            return User;
        }
    }
};

//root -> traer la informacion del servidor de graphql 
//params -> son los datos que envia el cliente y que se define en nuesto typedefs
//contex -> objeto por el cual  se comunican los resolvers (auth)
//info -> el query que se ejecutó en el cliente 

const server = new GraphQLServer
({
    typeDefs,
    resolvers,
});

server.start(() => console.log('Trabajando con GraphQL'))
