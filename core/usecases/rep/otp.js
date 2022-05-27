const bcrypt = require('bcrypt');

const model = require("../../models/rep");

const hashingOTP = async (repObj) => {
  const hashed = await bcrypt.hash(String(repObj.otp), 10);
  console.log(hashed, repObj.otp);
  let updateResponse = await model.updateOne({ _id: repObj.repId }, { $set: { otp: hashed } }).exec();
  if(!( updateResponse.ok == 1 )){
    return { status: false }; 
  }
  return { status: true };
}

// Validating OTP 
const validateOTP = async (repObj) => {
  const compareOTP = await bcrypt.compare(String(repObj.otp), repObj.hash);
  if(!compareOTP) {
    return { status: false };
  }
  return { status: true };
}

module.exports = { hashingOTP, validateOTP };