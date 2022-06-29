const addHome = require("../../usecases/webUseCases/home/addHome");
const getHome = require("../../usecases/webUseCases/home/getHome");
const updateHome = require("../../usecases/webUseCases/home/updateHome");
const deleteHome =require("../../usecases/webUseCases/home/deleteHome")

//import moment for date formatting
const moment = require("moment");

//add method
exports.addHome = async (value) => {
    if (!value.sliderImgs) value.image = null; 
    if (!value.cardList) throw new Error('Card list  is required');
    if (!value.servicesList) throw new Error('Services list  is required');
    if (!value.product_details) throw new Error('Product details is required');


    let cusHome = {

       sliderImgs:value.sliderImgs,
       cardList:value.cardList,
       servicesList:value.servicesList,
       product_details:value.product_details,
        created_on: new Date(Date.now())
    }

    let savedHome = await addHome(cusHome);
    delete savedHome.__v
    return savedHome;

}


//get method
exports.getHome = async () => {


    let saveitem = await getHome()

    delete saveitem.__v
    return saveitem;
}

//update method
exports.updateHome = async (cusprops) => {
    let custId = cusprops.id
    if (!cusprops.id) throw new Error("Please provide Id");
    let filter = {}
    if (cusprops.heading) filter.heading = cusprops.heading;
    if (cusprops.text) filter.text = cusprops.text;
    if (cusprops.image) filter.image = cusprops.image;

    let customizeHome = await updateHome(custId, filter);

    customizeHome = customizeHome.map(it => {
        return {
            id: it._id,
            heading: it.heading,
            text: it.text,
            image: it.image,
            created_on: moment(it.created_on).format("LLL"),
            modified_on: moment(it.modified_on).format("LLL")
        }
    })
    delete customizeHome.__v
    return customizeHome;
}

//delete method
exports.deleteHome = async(custId) => {
    if (!custId) throw new Error("Please provide item Id");

    let Response = await deleteHome(custId);

    delete Response.__v
    return Response;
}