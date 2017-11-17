import { Request, Response, Router } from "express";
import * as fs from "fs";
import * as path from "path";

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
router.post("/", async (req: Request, res: Response) => {
    console.log(req.body);
    await new Promise((resolve, rej) => {
        fs.appendFile(path.join(__dirname, "../../storage.json"), req.body.id, (err) => {
            err ? rej(err) : console.log("success"), resolve();
        });
    });
    res.json(req.body);
    console.log("responce");
});
