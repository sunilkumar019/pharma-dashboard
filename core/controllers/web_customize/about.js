const addAbout = require("../../usecases/webUseCases/about/addAbout");
const getAbout = require("../../usecases/webUseCases/about/getAbout");
const updateAbout = require("../../usecases/webUseCases/about/updateAbout");
const deleteAbout = require("../../usecases/webUseCases/about/deleteAbout");
const moment = require("moment");
const aboutModel  =require ("../../models/webCustomize/about");


//addAbout
exports.addAbout = async (Image, val) => {
    await aboutModel.deleteMany({})
    if (!val.heading) throw new Error("Heading is required");
    if (!val.text) throw new Error("text is required");
    if (!val.cardsList) throw new Error("Cards list is required");
    if (!val.goalsList) throw new Error('Goals list is required');
 

    val.banner = null;
        if (Image)
        val.banner = Image.path;
        let cusAbout = {
            bannerText: val.bannerText,
            banner: val.banner,
            heading: val.heading,
            text: val.text,
            cardsList: val.cardsList,
            goalsList: val.goalsList,
            created_on: new Date(Date.now())
        }
        
       
        let saveAbout = await addAbout(cusAbout);

        delete saveAbout.__v
        return saveAbout
 
};

//getAbout
exports.getAbout = async () => {


    let savedAbout = await getAbout()

    delete savedAbout.__v
    return savedAbout;
};



//update method
exports.updateAbout = async (custprops) => {
    let custId = custprops.id
    if (!custprops.id) throw new Error("Please provide Id");
    let filter = {}
    if (custprops.heading) filter.heading = custprops.heading;
    if (custprops.text) filter.text = custprops.text;
    if (custprops.banner) filter.banner = custprops.banner;

    let customizeAbout = await updateAbout(custId, filter);

    customizeAbout = customizeAbout.map(it => {
        return {
            id: it._id,
            heading: it.heading,
            text: it.text,
            banner: it.banner,
            modified_on: moment(it.modified_on).format("LLL")
        }
    })
    delete customizeAbout.__v
    return customizeAbout;
}

//delete method
exports.deleteAbout = async (custId) => {
    if (!custId) throw new Error("Please provide item Id");

    let Response = await deleteAbout(custId);

    delete Response.__v
    return Response;
}


