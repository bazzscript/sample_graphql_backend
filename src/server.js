const express = require('express')

const graphqlHttp = require('graphql-http/lib/use/express');

const graphqlSchema = require('./schemas/schema');

const createHandler = graphqlHttp.createHandler;
// Create a express instance serving all methods on `/graphql`
// where the GraphQL over HTTP express request handler is
const app = express();
app.all('/graphql', createHandler({ graphqlSchema }));



// StartUp Server
const PORT = Number(5000)
app.listen(PORT, () => {

    console.log(`🛠  => SERVER SUCCESSFULLY STARTED`)

    console.log(`💻 => LISTENING ON PORT ${PORT}`)

})