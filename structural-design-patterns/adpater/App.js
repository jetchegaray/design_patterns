const Db = require("./lowDb");
const { join } = require("path");

const dbfile = join("dbs.json");

//LowDB

import { Low } from "lowdb";
import { JSONFile } from "lowdb/node";

// File path
const file = join(__dirname, "db.json");

// Configure lowdb to write to JSONFile
const adapter = new JSONFile(file);
const dbs = new Low(adapter);

// new code with lokidb - adapting the code

const loki = require("lokijs");
const { LokiAdapter } = require("./LokiAdapter");
const ldb = new Loki(dbfile);
const LokiAdp = new LokiAdapter(ldb);

// instead of this
//const db = new Db(dbs);
// we will do this
const db = new Db(LokiAdp);

db.init("users");
db.add({
  collection: "users",
  data: {
    name: "John Doe",
    email: "upchh@example.com",
    password: "123456",
  },
});

console.log(db.get("users"));
