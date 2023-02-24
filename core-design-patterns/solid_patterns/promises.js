const { errorMonitor } = require("events");
const { readdir, readFile, writeFile } = require("fs");

const { join } = require("path");
const { promisify } = require("util");
const inbox = join(__dirname, "inbox");
const outbox = join(__dirname, "outbox");

//we just can use resolve
const reverseText = (str) => Promise.resolve(str.split("").reverse().join(""));

//read files.. reverse text.. write f

// doing by hand should be like this
const readDirFileAsync = (file) =>
  new Promise((resolve, reject) => {
    readFile(join(inbox, file), "utf8", (error, text) => {
      if (error) reject(error);
      resolve(text);
    });
  });

//doing it using promisify
const readDirPromise = promisify(readdir);
const readFilePromise = promisify(readFile);
const writeFilePromise = promisify(writeFile);

const reverseFile = (file) =>
  readFilePromise(join(inbox, file), "utf-8")
    .then(reverseText)
    .then((data) => writeFilePromise(join(outbox, file), data))
    .then(() =>
      console.log(`Success:all files were succesfully saved in the outbox`)
    );

readDirPromise(inbox)
  .then((files) => files.map((file) => reverseFile(file)))
  .then((promises) => Promise.all(promises))
  .then(() => console.log(`All files processed `))
  .catch((error) => console.error(error));
