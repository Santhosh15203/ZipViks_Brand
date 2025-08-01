
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads/");
  },
  filename: function (req, file, cb) {
    const name=req.body.firstname
    const trimName=name.replace(/\s+/g, "")
    const fileName=trimName+"-"+file.originalname
    cb(null, fileName);
  }
});

const upload = multer({storage });

module.exports = upload;
