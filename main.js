/* Navbar */

const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})

/* Mail sender */

// const sgMail = require('@sendgrid/mail');
// require('dotenv').config();

// sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// const msg = {
//   to: [''],
//   from: {
//     name: "Maderera",
//     email: process.env.FROM_EMAIL

//   }, // Use the email address or domain you verified above
//   subject: 'Correo de Maderera',
//   text: 'Los mejores muebles en Maderera S.A',
//   html: '<strong>and easy to do anywhere, even with Node.js</strong>',
// };

// const sendMail = async () => {
//     try {
//       await sgMail.send(msg);
//       console.log('El correo ha sido enviado con exito!')
//     } catch (error) {
//       console.error(error);
  
//       if (error.response) {
//         console.error(error.response.body)
//       }
//     }
// };

// sendMail();