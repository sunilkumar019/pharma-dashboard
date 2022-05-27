//import use cases
const addNotification = require("../usecases/notification/add");
const getNotification = require("../usecases/notification/get");
const updateNotification = require("../usecases/notification/update");

const getAdmin = require("../usecases/admin/getAdmin");
const sendEmail = require('../usecases/Email');
//import moment for date formatting
const moment = require("moment");

//add notification
exports.addNotification = async (notification) => {
  if (!notification.name) throw new Error('Name is Required');
  if (!notification.email) throw new Error('Email is Required');
  if (!notification.label) throw new Error('Error');

  await addNotification(notification)
}

//get
exports.getNotification = async () => {
  let saveditem = await getNotification()

  return saveditem;
}

//update
exports.updateNotification = async (notprops) => {
  let notiId = notprops.id;

  if (!notiId) throw new Error("Please provide Id");

  let notification = await getNotification(notiId);
  console.log(notification)
  await updateNotification(notiId)

  if (notification.length) {
    let EmailData = {
      To: notification[0].email,
      Subject: `Account activation -${process.env.APP_NAME} `,
      Body: `
      <!DOCTYPE html>
       <html lang="en">
       <head>
           <style>
               p {font-size: 17px;
                   color: rgba(0,0,0,0.74);}
            </style>
       </head>
       <body>
               <div class="main__inner">
               <p class="company"> <b>Regards,<b/></p>    
               <p>
               &nbsp; &nbsp; &nbsp;
               &nbsp; &nbsp; &nbsp;
               Congratulations,your account has been activated successfully. 
               </p>
               <p> <b> Thank you.<b/><p/>
               </div>
       </body>
       </html>`}
  
     await sendEmail(EmailData)
  }
}
