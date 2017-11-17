import { Request, Response, Router } from "express";
import * as fs from "fs";
import * as path from "path";
// import * as controller from "./controller";

export const router: Router = Router();

/**
 * @api {get} / Request User information
 * @apiName GetUser
 * @apiGroup User
 *
 * @apiParam {Number} id Users unique ID.
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 */
router.get("/", (req: Request, res: Response) => res.send("Hello world"));

/**
 * @api {get} / Request User information
 * @apiName GetUser
 * @apiGroup User
 *
 * @apiParam {Number} id Users unique ID.
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 */
router.post("/", async (req: Request, resp: Response) => {
    return new Promise((resolve, reject) => {
        fs.readFile(
            path.join(__dirname, "../../storage.json"),
            "utf8",
            (err: Error, contents: string) => {
                if (err) {
                    reject(err);
                } else {
                    const jsObjects: Object[] = JSON.parse(contents);
                    console.log(typeof jsObjects);
                    jsObjects.push(req.body);
                    resolve(jsObjects);
                }
            },
        );
    })
    .then((dataToWrite) => {
        return new Promise((resolve, reject) => {
            fs.truncate(
                path.join(__dirname, "../../storage.json"),
                0,
                (err: Error) => {
                    err ? reject(err) : resolve(dataToWrite), console.log("truncated");
                },
            );
        });
    })
    .then((dataToWrite) => {
        return new Promise((resolve, reject) => {
            fs.appendFile(
                path.join(__dirname, "../../storage.json"),
                JSON.stringify(dataToWrite),
                (err: Error) => {
                    err ? reject(err) : resolve(), resp.json(dataToWrite);
                },
            );
        });
    });
});

/**
 * @api {get} /:id Request User information
 * @apiName GetUser
 * @apiGroup User
 *
 * @apiParam {Number} id Users unique ID.
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 */
// router.get("/:id", controller.getValueById);
