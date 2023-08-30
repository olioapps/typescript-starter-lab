import * as fs from "fs";
import { IdAwareUser, User } from "./userAPIService";

const readAllUserDataFiles = () => {
  return new Promise((resolve, reject) => {
    fs.readdir("./data", (err, files) => {
      if (err) {
        reject(err);
      } else {
        const promises = files.map((fileName) => {
          return readUserDataFile(fileName.split(".")[0]);
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
};

const readUserDataFile = (userId: string) => {
  return new Promise((resolve, reject) => {
    fs.readFile(`./data/${userId}.json`, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(JSON.parse(data.toString()));
      }
    });
  });
};

const writeUserDataFile = (user: IdAwareUser) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(`./data/${user.id}.json`, JSON.stringify(user), (err) => {
      if (err) {
        reject(err);
      } else {
        resolve(user);
      }
    });
  });
};

const updateUserDataFile = (userId: string, updatedUserData: any) => {
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
};

const deleteUserDataFile = (userId: string) => {
  return new Promise((resolve, reject) => {
    fs.unlink(`./data/${userId}.json`, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve(userId);
      }
    });
  });
};

const fileSystemService = {
  readAllUserDataFiles,
  readUserDataFile,
  writeUserDataFile,
  updateUserDataFile,
  deleteUserDataFile,
};

export { fileSystemService };
