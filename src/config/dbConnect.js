import mongoose from "mongoose";

mongoose.set('strictQuery', true);

const username = "rnfrafael";
const password = "0012300QWe";
const cluster = "rnfrafael";
const dbname = "rnfrafaeldb";

//mongoose.connect(`mongodb://${username}:${password}@ac-udocqcl-shard-00-00.eef4pue.mongodb.net:27017,ac-udocqcl-shard-00-01.eef4pue.mongodb.net:27017,ac-udocqcl-shard-00-02.eef4pue.mongodb.net:27017/${dbname}`)
//    .catch(e => console.log(e))

//mongoose.connect(`mongodb+srv://${username}:${password}@${cluster}.eef4pue.mongodb.net/${dbname}`)
//    .catch(e => console.log(e))

mongoose.connect(`mongodb://${username}:${password}@ac-udocqcl-shard-00-00.eef4pue.mongodb.net:27017,ac-udocqcl-shard-00-01.eef4pue.mongodb.net:27017,ac-udocqcl-shard-00-02.eef4pue.mongodb.net:27017/${dbname}?ssl=true&replicaSet=atlas-51e6a4-shard-0&authSource=admin&retryWrites=true&w=majority`)
//    .catch(e => console.log(e))

let db = mongoose.connection;

export default db;