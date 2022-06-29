const router = require('express').Router();
const aboutHandler = require('../../handlers/web_customize/about');
let multer = require('multer');



let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './core/uploads/webCustomize/about')
  },
  filename: function (req, file, cb) {
    let tmp = file.originalname.split("."); 
    let fileExtension = tmp[tmp.length - 1];
    let fileName = "";
    for(let i=0 ; i<(tmp.length-1);i++){
      fileName = fileName+tmp[i];
    } 
    cb(null,(((fileName).replace(/ /g,'_').toLowerCase())+"_"+((new Date()).getTime())+"."+fileExtension))
  }
})

let upload = multer({ storage: storage })


router.post('/add', upload.single('banner'),aboutHandler.addAbout);
router.get('/get', aboutHandler.getAbout);
router.put('/update', aboutHandler.updateAbout);
router.delete('/delete/:Id', aboutHandler.deleteAbout);

module.exports = router;