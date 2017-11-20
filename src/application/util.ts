import * as fs from "fs";
import * as path from "path";

export function read(filePath: string): Promise<string> {
    return new Promise((resolve, reject) => {
        fs.readFile(
            path.join(__dirname, filePath),
            "utf8",
            (err: Error, contents: string) => {
                err ? reject(err) : resolve(contents);
            },
        );
    });
}

export function append(dataToWrite: Object) {
    return new Promise((resolve, reject) => {
        fs.appendFile(
            path.join(__dirname, "../../storage.json"),
            JSON.stringify(dataToWrite),
            (err: Error) => {
                err ? reject(err) : resolve(dataToWrite);
            },
        );
    });
}

export function clear(filePath: string) {
    return new Promise((resolve, reject) => {
        fs.truncate(
            path.join(__dirname, filePath),
            0,
            (err: Error) => {
                err ? reject(err) : resolve();
            },
        );
    });
}
