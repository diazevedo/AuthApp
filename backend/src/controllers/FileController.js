import mongoose from "mongoose";

import Mongo from "../database/index.js";

class FileController {
  async index(req, res) {
    Mongo.gfs
      .find({
        filename: req.params.filename,
      })
      .toArray((err, files) => {
        if (!files || files.length === 0) {
          return res.json({ message: "no found" });
        }

        Mongo.gfs.openDownloadStreamByName(req.params.filename).pipe(res);
      });
  }

  store(req, res) {
    console.log("sadl;kasdkjasdkljasdklj");
    try {
      console.log("TRRTURUTU");
      const file = {
        id: req.file.id,
        filename: req.file.filename,
        originalname: req.file.metadata.originalname,
      };
      return res.status(201).json({ file });
    } catch (error) {
      console.log("eeueueueueu");
      return res.status(201).json({ error: "erro" });
    }
  }
}

export default new FileController();
