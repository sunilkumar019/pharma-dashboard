const mongoose = require('mongoose')


const sliderSchema = new mongoose.Schema({
    poster: { type: String, default: null },
});
const cardSchema = new mongoose.Schema({
    image: { type: String, default: null },
    text: { type: String, required: [true, "Text is required"] },
});;
const serviceSchema = new mongoose.Schema({
    serviceHeading: { type: String, required: [true, "Service heading is required"] },
    serviceCards:[{
        heading: { type: String, required: [true, "Heading is required"] },
        text: { type: String, required: [true, "Text is required"] },
    }]
});
 
const ProductsSchema = new mongoose.Schema({
  
    heading: { type: String, required: [true, "Heading is required"] },
    text: { type: String, required: [true, "Text is required"] },
 
 });


const homeSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    sliderImgs: [sliderSchema],
    cardList: [cardSchema],
    servicesList: [serviceSchema],
    productDetails: [ProductsSchema],
    created_on: { type: Date, default: Date.now },
    modified_on: { type: Date, default: Date.now }
});
module.exports = mongoose.model('customize_Home', homeSchema);


//validation on field
homeSchema.path("cardList").validate((code) => {
    return code.length <= 4
}, "Only 4 info cards allowed in card list.");

homeSchema.path("servicesList").validate((code) => {
    return code.length <= 3
}, "Only 3 cards allowed in services list.");

homeSchema.path("productDetails").validate((code) => {
    return code.length <= 1
}, "1 heading & text is  allowed in  product details.");

homeSchema.path("sliderImgs").validate((code) => {
    return code.length <= 3
}, "3  slider images are allowed in sliderImgs.");              