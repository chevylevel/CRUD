import { Request, Response } from "express";
import * as util from "./util";

const FILE_PATH: string = "../../storage.json";

export async function getElementById(req: Request, res: Response): Promise<Object> {
    const jsonString: string = await util.read(FILE_PATH);
    const { id } = req.params;
    const element: Object = JSON.parse(jsonString)[id];
    res.send(element);
    return element;
}

export async function deleteById(req: Request, res: Response): Promise<void> {
    const jsonString: string = await util.read(FILE_PATH);
    const { id } = req.params;
    const elements: Object = JSON.parse(jsonString);
    delete elements[id];
    await util.clear(FILE_PATH);
    await util.append(elements);
    res.send(200);
}
