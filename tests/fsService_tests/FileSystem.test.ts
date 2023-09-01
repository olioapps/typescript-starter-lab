import { fileSystemService } from "../../Services/fileSystemService";
import * as fs from "fs";
const path = require("path");

describe("fileSystemService.readAllUserDataFiles", () => {
  const dataDir = path.join(__dirname, "../../data");

  beforeEach(async () => {
    await fs.writeFile(
      path.join(dataDir, "test1.json"),
      JSON.stringify({ name: "test1", age: 34, favColor: "vole", id: "snale" }),
      () => {}
    );
    await fs.writeFile(
      path.join(dataDir, "test2.json"),
      JSON.stringify({
        name: "test2",
        age: 34,
        favColor: "clear puce",
        id: "snake",
      }),
      () => {}
    );
  });

  afterEach(async () => {
    await fs.unlink(path.join(dataDir, "test1.json"), () => {});
    await fs.unlink(path.join(dataDir, "test2.json"), () => {});
  });

  it("should return all users", async () => {
    const users = await fileSystemService.readAllUserDataFiles();
    expect(users).toEqual([
      { name: "test1", age: 34, favColor: "vole", id: "snale" },
      { name: "test2", age: 34, favColor: "clear puce", id: "snake" },
    ]);
  });
});

describe("fileSystemService.writeUserDataFile", () => {
  const dataDir = path.join(__dirname, "../../data");

  afterEach(async () => {
    await fs.unlink(path.join(dataDir, "snale.json"), () => {});
  });

  it("should write a file to the data directory", async () => {
    const user = await fileSystemService.writeUserDataFile({
      name: "test1",
      age: 34,
      favColor: "vole",
      id: "snale",
    });
    expect(user).toEqual({
      name: "test1",
      age: 34,
      favColor: "vole",
      id: "snale",
    });
  }); 
});

describe("fileSystemService.updateUserDataFile", () => {
  const dataDir = path.join(__dirname, "../../data");

  beforeEach(async () => {
    await fs.writeFile(
      path.join(dataDir, "snale.json"),
      JSON.stringify({ name: "test1", age: 34, favColor: "vole", id: "snale" }),
      () => {}
    );
  });

  afterEach(async () => {
    await fs.unlink(path.join(dataDir, "snale.json"), () => {});
  });

  it("should update a file in the data directory", async () => {
    const user = await fileSystemService.updateUserDataFile("snale", {
      name: "test2",
      age: 34,
      favColor: "clear puce",
    });
    expect(user).toEqual({
      name: "test2",
      age: 34,
      favColor: "clear puce",
      id: "snale",
    });
  });

  it("should throw an error if the file does not exist", async () => {
    await expect(
      fileSystemService.updateUserDataFile("snail", {
        name: "test2",
        age: 34,
        favColor: "clear puce",
      })
    ).rejects.toThrow();
  });
});


