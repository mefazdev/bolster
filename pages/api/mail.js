// import mail from '@sendgrid/mail'

// mail.setApiKey(process.env.SENDGRID_API_KEY)
 
// const sendMail = (req,res)=>{
//     const body = JSON.parse(req.body);

//     const message   = `
//     Name: ${body.name}\r\n
//     Email: ${body.email}\r\n
//     Phone : ${body.phone}\r\n
//     Message: ${body.message}
//     `;
     
//     const data = {
//         to : 'bolsterfoundation@gmail.com',
//         from:'contact@bolsterfoundation.in',
//         subject:'Message from bolsterfoundation.in website',
//         text: message,
//         html: message.replace(/\r\n/g, '<br>')
//     }
    

//     mail
//   .send(data)
//   .then(() => {
//     console.log("success")
     
//   }, error => {
//     console.error(error);

//     if (error.response) {
//       console.error(error.response.body)
//     }
//   });
//     // .then(
//     //     alert('success')
//     // )
//     res.status(200).json({ status: 'ok'});
// }


// export default sendMail