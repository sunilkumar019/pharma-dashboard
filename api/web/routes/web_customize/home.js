const router = require('express').Router();
const homeHandler = require('../../handlers/web_customize/home');
let multer = require('multer');

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './core/uploads/webCustomize/home')
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
  
router.post('/add', homeHandler.addHome);
router.get('/get', homeHandler.getHome);
router.post('/update', homeHandler.updateHome);
router.get('/delete/:Id', homeHandler.deleteHome);

module.exports = router;