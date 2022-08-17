//import model
const model = require("../../../models/webCustomize/contact");
const getContact = require("./getContact");


//update a about
module.exports = async (custId, data) => {
    let updateResponse = await model.updateOne({_id: custId },{ $set: data }).exec()

    if (updateResponse.ok == 1) {
        return await getContact({_id:custId});
    }
    else {
        return { Error: "Something went wrong!!!" }
    }
};
