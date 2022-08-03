const addServices = require("../../usecases/webUseCases/services/addServices");
const getServices = require("../../usecases/webUseCases/services/getServices");
const updateServices = require("../../usecases/webUseCases/services/updateServices");
const deleteServices = require("../../usecases/webUseCases/services/deleteServices")
const moveFile = require('move-file');
const fs = require("fs");

const sizeOf = require('image-size');

const IMG_SIZE = 60000; //60KB
const IMG_HEIGHT = 500; //500PX
const IMG_WIDTH = 500; //500PX



//import moment for date formatting
const moment = require("moment");

//add method
exports.addServices = async (Image,value) => {
    if (!value.heading) throw new Error('heading is required');
    if (!value.text) throw new Error('text is required');
   
    value.poster = null;
    

    if (Image)
        value.poster = Image.path;

     let items = {

        poster: value.poster,
        posterText: value.posterText,
        heading: value.heading,
        text: value.text,
        created_on: new Date(Date.now())
    }

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