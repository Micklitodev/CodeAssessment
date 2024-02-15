const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const PORT = process.env.PORT || 3001
const db = require('./dbconfig/connection');
const { typeDefs, resolvers } = require('./graphql');
const app = express();

const serverInstance = new ApolloServer({
    typeDefs,
    resolvers,
})

app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.use("/images", express.static(path.join(__dirname, "../client/images")));

// if (process.env.NODE_ENV === 'production') {
app.use(express.static(path.join(__dirname, "../client/build")));
//}

// app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });


const startApolloServer = async (typeDefs, resolvers) => {
    await serverInstance.start();
    serverInstance.applyMiddleware({ app });

    db.once("open", () => {
        app.listen(PORT, () => {
            console.log(`API server running on port ${PORT}!`);
            console.log(
                `Use GraphQL at http://localhost:${PORT}${serverInstance.graphqlPath}`
            );
        });
    });
};


startApolloServer(typeDefs, resolvers);
