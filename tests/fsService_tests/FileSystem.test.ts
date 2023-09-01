import { fileSystemService } from "../../Services/fileSystemService";
import * as fs from "fs";
const path = require("path");

describe("fileSystemService.readAllUserDataFiles", () => {
  const dataDir = path.join(__dirname, "../../data");

  beforeEach(async () => {
    await fs.writeFile(
      path.join(dataDir, "123.json"),
      JSON.stringify({ name: "test1", age: 34, favColor: "vole", id: "123" }),
      () => {}
    );
    await fs.writeFile(
      path.join(dataDir, "456.json"),
      JSON.stringify({
        name: "test2",
        age: 34,
        favColor: "clear puce",
        id: "456",
      }),
      () => {}
    );
  });

  afterEach(async () => {
    await fs.unlink(path.join(dataDir, "123.json"), () => {});
    await fs.unlink(path.join(dataDir, "456.json"), () => {});
  });

  it("should return all users", async () => {
    const users = await fileSystemService.readAllUserDataFiles();
    expect(users).toEqual([
      { name: "test1", age: 34, favColor: "vole", id: "123" },
      { name: "test2", age: 34, favColor: "clear puce", id: "456" },
    ]);
  });
});

describe("fileSystemService.readUserDataFile", () => {
  const dataDir = path.join(__dirname, "../../data");

  beforeEach(async () => {
    await fs.writeFile(
      path.join(dataDir, "123.json"),
      JSON.stringify({ name: "test1", age: 34, favColor: "vole", id: "123" }),
      () => {}
    );
    await fs.writeFile(
      path.join(dataDir, "456.json"),
      JSON.stringify({
        name: "test2",
        age: 34,
        favColor: "clear puce",
        id: "456",
      }),
      () => {}
    );
  });

  afterEach(async () => {
    await fs.unlink(path.join(dataDir, "123.json"), () => {});
    await fs.unlink(path.join(dataDir, "456.json"), () => {});
    await fs.unlink(path.join(dataDir, "789.json"), () => {});
  });

  it("should return a user", async () => {
    const user = await fileSystemService.readUserDataFile("123");
    expect(user).toEqual({
      name: "test1",
      age: 34,
      favColor: "vole",
      id: "123",
    });
  });

  it("should throw an error if the file doesn't exist", async () => {
    try {
      await fileSystemService.readUserDataFile("789");
    } catch (err) {
      const error = err as NodeJS.ErrnoException;
      expect(error.code).toEqual("ENOENT");
    }
  });
  
  it("should throw an error if the file is not valid JSON", async () => {
    try {
      await fs.writeFile(
        path.join(dataDir, "789.json"),
        "invalid json",
        () => {}
      );
      await fileSystemService.readUserDataFile("789");
    } catch (err) {
      const error = err as NodeJS.ErrnoException;
      expect(error.code).toEqual("ENOENT");
    }
  });
});
