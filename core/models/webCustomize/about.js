const mongoose = require('mongoose');


const cardListSchema = new mongoose.Schema({
    imageUrl: { type: String, default: null },
    card_heading: { type: String, required: [true, "Card heading is required"] },
    card_text: { type: String, required: [true, "Card Text is required"] },

});
const goalsSchema = new mongoose.Schema({
    imageUrl2: { type: String, default: null },
    goals_heading: { type: String, required: [true, "Goals heading is required"] },
    goals_text: { type: String, required: [true, "Goals Text is required"] },
    float:{ type: String,default:"row" }
});


const aboutSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    bannerText: { type: String, required: [true, "Banner Text is required"] },
    bannerImage: { type:String, default: null },
    heading: { type: String, required: [true, "Heading is required"] },
    text: { type: String, required: [true, "Text is required"] },
    cardsList: [cardListSchema],
   // cardImages: [{ type: Object, default: null }],
    goalsList: [goalsSchema],
    created_on: { type: Date, default: Date.now },
    modified_on: { type: Date, default: Date.now },

});
module.exports = mongoose.model('customize_about', aboutSchema);
 

aboutSchema.path('cardsList').validate(function (code) {
    return code.length <= 4;
}, 'Only 4 cards are allowed in cardslist.');

aboutSchema.path("goalsList").validate((code) => {
    return code.length <= 4
}, "Only 4 goals cards allowed in goals list.");


