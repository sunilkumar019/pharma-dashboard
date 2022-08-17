const router = require('express').Router();
const contactHandler = require('../../handlers/web_customize/contact');
let multer = require('multer');

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './core/uploads/webCustomize/contact')
  },
  filename: function (req, file, cb) {
    let tmp = file.originalname.split(".");
    let fileExtension = tmp[tmp.length - 1];
    let fileName = "";
    for (let i = 0; i < (tmp.length - 1); i++) {
      fileName = fileName + tmp[i];
    }
    cb(null, (((fileName).replace(/ /g, '_').toLowerCase()) + "_" + ((new Date()).getTime()) + "." + fileExtension))
  }
})

let upload = multer({ storage: storage });

router.post('/add',upload.single('bannerImage'),contactHandler.addContact);

router.get('/get',contactHandler.getContact);

router.put('/update',upload.single('bannerImage'),contactHandler.updateContact);

module.exports = router;