import * as bodyParser from "body-parser";
import * as express from "express";
import {router} from "./router";

const app: express.Application = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/", router);

app.listen(PORT);
