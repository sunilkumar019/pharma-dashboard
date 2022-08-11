
const contactController = require("../../../../core/controllers/web_customize/contact");




const addContact = async (req, res, next) => {
 console.log(req.file)
  
 
    try {
        let customize = await contactController.addContact(req.file,req.body)
        req.data = customize
        next()
    }
    catch (e) {
        req.status = 400;
        next(e)
    }
}

const getContact = async (req, res, next) => {

    //console.log(req.body)
    try {
        let customize = await contactController.getContact(req.body)
        req.data = customize


        next()
    }
    catch (e) {
        req.status = 400;
        next(e)
    }
}

const updateContact = async (req, res, next) => {
    // console.log(req.body)
    try {
        let customize = await contactController.updateContact(res.file,req.body)
        req.data = customize
        next()
    }
    catch (e) {
        req.status = 400;
        next(e)
    }
}


module.exports = { addContact,getContact,updateContact};