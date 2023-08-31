
import { fileSystemService } from "../../Services/fileSystemService";
import * as fs from "fs";
const path = require("path");

describe("fileSystemService.readAllUserDataFiles", () => {
  const dataDir = path.join(__dirname, "../../data");

  beforeEach(async () => {
    await fs.writeFile(path.join(dataDir, "test1.json"), JSON.stringify({ name: "test1" , age: 34, favColor: "vole", id: "snale"}), () => { });
    await fs.writeFile(path.join(dataDir, "test2.json"), JSON.stringify({ name: "test2" , age: 34, favColor: "clear puce", id: "snake"}), () => { });
  });

  afterEach(async () => {
    await fs.unlink(path.join(dataDir, "test1.json"), () => { });
    await fs.unlink(path.join(dataDir, "test2.json"), () => { });
  });

  it("should return all users", async () => {
    const users = await fileSystemService.readAllUserDataFiles();
    expect(users).toEqual([
      { name: "test1" , age: 34, favColor: "vole", id: "snale"},
      { name: "test2" , age: 34, favColor: "clear puce", id: "snake"},
    ]);
  });
});


