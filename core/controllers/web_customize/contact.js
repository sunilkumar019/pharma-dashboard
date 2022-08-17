const addContact = require("../../usecases/webUseCases/contact/addContact");
const getContact = require("../../usecases/webUseCases/contact/getContact");
const updateContact = require("../../usecases/webUseCases/contact/updateContact");
const contactModel = require("../../models/webCustomize/contact");
const moment = require("moment");

exports.addContact = async (contactImage, data) => {
    await contactModel.deleteMany({}) 

    if (!data.bannerText) throw new Error("Cards list is required");
data.bannerImage=null;
if(contactImage)
    if (contactImage) {
       Images = contactImage.path
    }

    let cusAbout = {
        bannerText: data.bannerText,
        bannerImage: Images,
        created_on: new Date(Date.now())
    }
    console.log(cusAbout)
    let saveAbout = await addContact(cusAbout)
    delete saveAbout.__v
    return saveAbout

};

//getAbout
exports.getContact = async () => {


    let savedAbout = await getContact()

    delete savedAbout.__v
    return savedAbout;
};

//update method
exports.updateContact = async (Image, custprops) => {
    let custId = custprops.id
    if (!custprops.id) throw new Error("Please provide Id");
    let filter = {}
    if (custprops.bannerText) filter.bannerText = custprops.bannerText;
    if (Image) filter.bannerImage = Image.path;

    let customizeAbout = await updateContact(custId, filter);
    return customizeAbout;
}