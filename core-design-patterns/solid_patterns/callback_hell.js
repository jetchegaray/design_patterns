const { errorMonitor } = require("events");
const { readdir, readFile, writeFile } = require("fs");

const { join } = require("path");

const inbox = join(__dirname, "inbox");
const outbox = join(__dirname, "outbox");

const reverseText = (str) => str.split("").reverse().join("");

//read files.. reverse text.. write files

// unreadble, unmanageable,
// and error dont have a single point ot capture,we have to manage manually at each leavel
// ====> trap and callback hell

readdir(inbox, (error, files) => {
  if (error) console.log("Folder is unaccessible");

  files.forEach((file) => {
    readFile(join(inbox, file), "utf8", (error, text) => {
      if (error) console.log(`Error: ${error}`);
      writeFile(join(outbox, file), reverseText(text), (error) => {
        if (error) console.log(`Error: ${error}`);
        console.log(`Success: ${file} was succesfully saved in the outbox`);
      });
    });
  });
});
