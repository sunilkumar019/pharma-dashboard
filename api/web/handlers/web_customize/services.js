
const serviceController = require("../../../../core/controllers/web_customize/services");


const addServices = async (req, res, next) => {

    try {
        let customize = await serviceController.addServices(req.body)
        req.data = customize
        next()
    }
    catch (e) {
        req.status = 400;
        next(e)
    }
}
const getServices = async (req, res, next) => {

    try {
        let customize = await serviceController.getServices(req.body)
        req.data = customize
        //console.log(customize)

        next()
    }
    catch (e) {
        req.status = 400;
        next(e)
    }
}
const updateServices = async (req, res, next) => {
    // console.log(req.body)
    try {
        let customize = await serviceController.updateServices(req.body)
        req.data = customize
        next()
    }
    catch (e) {
        req.status = 400;
        next(e)
    }
}
const deleteServices = async (req, res, next) => {
//    console.log(req.params.Id)

    try {
        let res = await serviceController.deleteServices(req.params.Id)

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

module.exports = { addServices, getServices,updateServices , deleteServices }