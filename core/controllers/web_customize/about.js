const addAbout = require("../../usecases/webUseCases/about/addAbout");
const getAbout = require("../../usecases/webUseCases/about/getAbout");
const updateAbout = require("../../usecases/webUseCases/about/updateAbout");
const deleteAbout = require("../../usecases/webUseCases/about/deleteAbout");
const moment = require("moment");
const aboutModel = require("../../models/webCustomize/about");
const sizeOf = require('image-size');
const IMAGE_SIZE = 2220000; //220KB
const IMAGE_HEIGHT = 200; //200PX
const IMAGE_WIDTH = 250; //250PX

//addAbout
exports.addAbout = async (aboutImage, data) => {
   // let uploadError = [];
     await aboutModel.deleteMany({})
  //  if (uploadError.length > 0) throw new Error(uploadError.toString())
    if (!data.heading) throw new Error("Heading is required");
    if (!data.text) throw new Error("text is required");
    if (!data.cardsList) throw new Error("Cards list is required");
    if (!data.goalsList) throw new Error('Goals list is required');

    if (aboutImage.bannerImage == null) throw new Error("please update perivous banner")
    

    // if (aboutImage.bannerImage) {
    //     (aboutImage.bannerImage).forEach(it => {
    //         let img_dimensions = sizeOf(it.path);
    //         if (it.size > IMAGE_SIZE) uploadError.push(`${it.originalname} has Size more than ${parseInt(IMAGE_SIZE / 2220000)}KB`);
    //         if (img_dimensions.height > IMAGE_HEIGHT || img_dimensions.width > IMAGE_WIDTH) {
    //             uploadError.push(`${it.originalname} has Dimensions more than ${IMAGE_HEIGHT} * ${IMAGE_WIDTH}`);
    //         }
    //     })
    // }

    let cusAbout = {
        bannerText: data.bannerText,
        bannerImage: data.bannerImage,
        heading: data.heading,
        text: data.text,
        cardsList: JSON.parse(data.cardsList),
        goalsList: JSON.parse(data.goalsList),
        created_on: new Date(Date.now())
    }
    console.log(cusAbout)
    let saveAbout = await addAbout(cusAbout)
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


