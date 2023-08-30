import * as fs from "fs";
import { User } from "./userAPIService";

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

  writeUserDataFile(user: User, userId: string) {
    return new Promise((resolve, reject) => {
      fs.writeFile(
        `./data/${userId}.json`,
        JSON.stringify(user),
        (err) => {
          if (err) {
            reject(err);
          } else {
            resolve(user);
          }
        }
      );
    });
  }

  updateUserDataFile(userId: string, updatedUserData: any) {
    return new Promise((resolve, reject) => {
      fs.readFile(`./data/${userId}.json`, (err, data) => {
        if (err) {
          reject(err);
        } else {
          const user = JSON.parse(data.toString());
          const updatedUser = {
            ...user,
            ...updatedUserData,
          };
          fs.writeFile(
            `./data/${userId}.json`,
            JSON.stringify(updatedUser),
            (err) => {
              if (err) {
                reject(err);
              } else {
                resolve(updatedUser);
              }
            }
          );
        }
      });
    });
  }

  deleteUserDataFile() {}
}