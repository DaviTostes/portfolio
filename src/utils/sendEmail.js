import emailjs from '@emailjs/browser'

const SendEmail = (email, message) => {
  var params = {
    email: email,
    message: message
  }

  emailjs.send('service_8zd4dpn', 'contact_form', params, 'Wnu3IUztGr9BiTXFN')
    .then(response => {
      console.log("Email sent", response.status, response.text)
    }), error => {
      console.log("Falha", error)
    }
}

export default SendEmail