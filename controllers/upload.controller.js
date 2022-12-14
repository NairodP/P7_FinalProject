const UserModel = require("../models/user.model");
const fs = require("fs");
// const { promisify } = require("util");
// const pipeline = promisify(require("stream").pipeline);
const { uploadErrors } = require("../utils/errors.utils");

module.exports.uploadProfil = async (req, res) => {

  try {
    await UserModel.findByIdAndUpdate(
      req.body.userId,
      {
        $set: {
          picture: `images/${req.file.filename}`,
        },
      },
      { new: true, upsert: true, setDefaultsOnInsert: true }
    )
      .then((data) => {
        res.send(data);
      })

      .catch((err) => res.status(500).send({ message: err }));
  } catch (err) {
    return res.status(500).send({ message: err });
  }
};
