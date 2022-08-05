const addServices = require("../../usecases/webUseCases/services/addServices");
const getServices = require("../../usecases/webUseCases/services/getServices");
const updateServices = require("../../usecases/webUseCases/services/updateServices");
const deleteServices = require("../../usecases/webUseCases/services/deleteServices")
 
//import moment for date formatting
const moment = require("moment");

//add method
exports.addServices = async (value) => {
   
   // if(!bannerText)throw new Error ("Banner Text is required")
    if (!value.heading) throw new Error('heading is required');
    if (!value.text) throw new Error('text is required');

     let items = {
        bannerImage: value.bannerImage,
      //  bannerText: value.bannerText,
        heading: value.heading,
        text: value.text,
        created_on: new Date(Date.now())
    }
console.log(items)
  let savedItem = await addServices(items);
 delete savedItem.__v
  return savedItem;

}


//get method
exports.getServices = async () => {


    let saveitem = await getServices()

    delete saveitem.__v
    return saveitem;
}

//update method
exports.updateServices = async (cusprops) => {
    let custId = cusprops.id
    if (!cusprops.id) throw new Error("Please provide Id");
    let filter = {}
    if (cusprops.heading) filter.heading = cusprops.heading;
    if (cusprops.text) filter.text = cusprops.text;

    let customize = await updateServices(custId, filter);

    customize = customize.map(it => {
        return {
            id: it._id,
            heading: it.heading,
            text: it.text,
            created_on: moment(it.created_on).format("LLL"),
            modified_on: moment(it.modified_on).format("LLL")
        }
    })
    delete customize.__v
    return customize;
}

//delete method
exports.deleteServices = async (custId) => {
    if (!custId) throw new Error("Please provide item Id");

    let Response = await deleteServices(custId);

    delete Response.__v
    return Response;
}