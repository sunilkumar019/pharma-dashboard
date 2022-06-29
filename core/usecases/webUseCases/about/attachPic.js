// //import model
// const model = require("../../../models/webCustomize/about");
  
// module.exports = async (CardId, data) => {
//     let updateResponse = await model.findByIdAndUpdate({ _id: CardId },{ $push: { cardsList: { card_image: data.image, card_heading: data.heading, card_text: data.text } } },).exec()
//     if (updateResponse) {
//         return { message: "Successfull!!" }
//     }
//     else {
//         return { Error: "Something went wrong!!!" }
//     }
// }