//import model
const model = require("../../../models/webCustomize/about");
const getAbout = require("./getAbout");


//update a about
module.exports = async (custId, data) => {
    let updateResponse = await model.updateOne({_id: custId }, { $set: data }).exec()

    if (updateResponse.ok == 1) {
        return await getAbout({_id:custId});
    }
    else {
        return { Error: "Something went wrong!!!" }
    }
};
