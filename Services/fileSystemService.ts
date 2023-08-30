import * as fs from "fs";

export class FileSystemService {
  readAllUserDataFiles() {
    return new Promise((resolve, reject) => {
      fs.readdir("./data", (err, files) => {
        if (err) {
          reject(err);
        } else {
          const promises = files.map((fileName) => {
            return this.readUserDataFile(fileName.split(".")[0]);
          });
          Promise.all(promises)
            .then((data) => {
              resolve(data);
            })
            .catch((err) => {
              reject(err);
            });
        }
      });
    });
  }

  readUserDataFile(userId: string) {
    return new Promise((resolve, reject) => {
      fs.readFile(`./data/${userId}.json`, (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(JSON.parse(data.toString()));
        }
      });
    });
  }

  writeUserDataFile() {}

  updateUserDataFile() {}

  deleteUserDataFile() {}
}