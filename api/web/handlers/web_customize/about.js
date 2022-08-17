
const aboutController = require("../../../../core/controllers/web_customize/about");




const addAbout = async (req, res, next) => {
 console.log(req.files)
  
 
    try {
        let customize = await aboutController.addAbout(req.files,req.body)
        req.data = customize
        next()
    }
    catch (e) {
        req.status = 400;
        next(e)
    }
}

const getAbout = async (req, res, next) => {

    try {
        let customize = await aboutController.getAbout(req.body)
        req.data = customize

       // console.log(req.body)

        next()
    }
    catch (e) {
        req.status = 400;
        next(e)
    }
}

const updateAbout = async (req, res, next) => {
    // console.log(req.body)
    try {
        let customize = await aboutController.updateAbout(req.files,req.body)
        req.data = customize
        next()
    }
    catch (e) {
        req.status = 400;
        next(e)
    }
}
const deleteAbout = async (req, res, next) => {
//    console.log(req.params.Id)

    try {
        let res = await aboutController.deleteAbout(req.params.Id)

        if (res.Error) {
            req.status = 400;
            throw new Error(res.Error)
        }
        else {
            req.message =res.Message
            req.data = null;
            next()
        }
    }
    catch (e) {
        req.status = 400;
        next(e)
    }
}


module.exports = { addAbout, getAbout, updateAbout, deleteAbout };