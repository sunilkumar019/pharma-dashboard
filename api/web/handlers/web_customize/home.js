
const homeController = require("../../../../core/controllers/web_customize/home");




const addHome = async (req, res, next) => {
   // console.log(req.body)
    try {
        let customize = await homeController.addHome(req.body)
        req.data = customize
        next()
    }
    catch (e) {
        req.status = 400;
        next(e)
    }
}

const getHome = async (req, res, next) => {

    try {
        let customize = await homeController.getHome(req.body)
        req.data = customize

        next()
    }
    catch (e) {
        req.status = 400;
        next(e)
    }
}

const updateHome = async (req, res, next) => {
    // console.log(req.body)
    try {
        let customize = await homeController.updateHome(req.body)
        req.data = customize
        next()
    }
    catch (e) {
        req.status = 400;
        next(e)
    }
}
const deleteHome = async (req, res, next) => {
//    console.log(req.params.Id)

    try {
        let res = await homeController.deleteHome(req.params.Id)

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




module.exports = { addHome, getHome, updateHome, deleteHome }