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
    const file = {
      id: req.file.id,
      filename: req.file.filename,
      originalname: req.file.metadata.originalname,
    };

    return res.status(201).json({ file });
  }
}

export default new FileController();
