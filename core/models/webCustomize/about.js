const mongoose = require('mongoose');
 

const cardListSchema= new mongoose.Schema({
     card_image: { type: String, default: null },
     card_heading: { type: String, required: [true, "card heading is required"] },
    card_text:{ type:String,required: [true, "Card text is required"] },

});
 const goalsSchema = new mongoose.Schema({
    image: { type: String, default: null },
    heading: { type: String, required: [true, "Heading is required"] },
    text: { type: String, required: [true, "Text is required"] },
});

const aboutSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    banner: { type: String, default: null },
    bannerText:{type:String,required:[true,"banner Text is required"]},
    heading: { type: String, required: [true, "Heading is required"] },
    text: { type: String, required: [true, "Text is required"] },
    cardsList:[cardListSchema],
    goalsList: [goalsSchema],
    created_on: { type: Date, default: Date.now },
    modified_on: { type: Date, default: Date.now },
    
});
module.exports = mongoose.model('customize_about', aboutSchema);



aboutSchema.path('cardsList').validate(function(code) {
    return code.length <=4;}, 'Only 4 cards are allowed in cardslist.');

aboutSchema.path("goalsList").validate((code) => {
        return code.length <= 4
    }, "Only 4 goals cards allowed in goals list.");

//   aboutSchema.path("aboutSchema").validate((code)=>{
//     return code.length<=2
//   },"sorry")

if(aboutSchema.length <=2) throw new Error("sorry")
