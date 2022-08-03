const router = require('express').Router();
const aboutHandler = require('../../handlers/web_customize/about');
let multer = require('multer');

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
      cb(null, './core/uploads/webCustomize/about')
  },
  filename: function (req, file, cb) {
      cb(null, (file.originalname).replace(/ /g, '_').toLowerCase())
  }
})


let upload = multer({ storage: storage });

router.post('/add',upload.fields([{name:"bannerImage",maxCount:1},{name:"cardImages",maxCount:4}]), aboutHandler.addAbout);
router.get('/get', aboutHandler.getAbout);
router.put('/update', aboutHandler.updateAbout);
router.delete('/delete/:Id', aboutHandler.deleteAbout);

module.exports = router;