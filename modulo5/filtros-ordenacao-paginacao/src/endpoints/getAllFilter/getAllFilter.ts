import { Request, Response } from "express";
import selectAllFilter from "./queryGetAllFilter";

export const getAllFilter = async (req: Request, res: Response): Promise<void> => {
    let statusCode = 400;
    let whereSearch = req.query.whereSearch as string
    let wichSearch = req.query.wichSearch as string
    let whichOrder = req.query.whichOrder as string
    let inOrder = req.query.Order as string
    let inSaze = Number(req.query.size)
    let inPage = Number(req.params.page);
    let page = 0

    if(!whereSearch){
        whereSearch = "name"
    }

    if(!wichSearch){
        wichSearch = "%"
    }

    if(!whichOrder){
        whichOrder = "name"
    }

    if(!inOrder){
        inOrder = "DESC"
    }

    if(isNaN(inSaze) || inSaze < 1){
        inSaze = 10
    }

    if(isNaN(inPage) || inPage < 1){
        inPage = 1
    }

    page = inSaze * (inPage -1)

    try {
      const users = await selectAllFilter(whereSearch, wichSearch, whichOrder, inOrder, inSaze, page);
      console.log(users);
  
      res.status(200).send(users);
    } catch (error: any) {
      console.log(error);
      res.send(error.message || error.sqlMessage);
    }
};