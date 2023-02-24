const { errorMonitor } = require("events");
const { readdir, readFile, writeFile } = require("fs");
const { promisify } = require("util");
const { join } = require("path");
const inbox = join(__dirname, "inbox");
const outbox = join(__dirname, "outbox");

//we just can use resolve
const reverseText = (str) => str.split("").reverse().join("");

//read files.. reverse text.. write f
//doing it using promisify
const readDirPromise = promisify(readdir);
const readFilePromise = promisify(readFile);
const writeFilePromise = promisify(writeFile);

const processFile = async (file) => {
  try {
    const text = await readFilePromise(join(inbox, file), "utf-8");
    const reversedText = await reverseText(text);
    await writeFilePromise(join(outbox, file), reversedText);
  } catch (error) {
    console.error(error);
  } finally {
    console.log("The file was successfully processed");
  }
};

const processFiles = async () => {
  try {
    const files = await readDirPromise(inbox);
    const processedFiles = files.map((file) => processFile(file));
    await Promise.all(processedFiles);
  } catch (error) {
    console.error(error);
  } finally {
    console.log("All the files were successfully");
  }
};

processFiles();
