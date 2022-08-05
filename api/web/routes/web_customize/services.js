const router = require('express').Router();
const serviceHandler = require('../../handlers/web_customize/services');
let multer = require('multer');

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './core/uploads/webCustomize/services')
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
  
router.post('/add',upload.single("bannerImage") ,serviceHandler.addServices);

router.get('/get', serviceHandler.getServices);

router.put('/update',upload.single("poster"), serviceHandler.updateServices);

router.delete('/delete/:Id', serviceHandler.deleteServices);

module.exports = router;