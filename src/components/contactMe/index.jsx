import { useState } from 'react'
import SendEmail from '../../utils/sendEmail'
import './styles.css'

const ContactMe = () => {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSendEmail = () => {
    SendEmail(email, message)
  }

  return (
    <div className="contact-wrapper" id='contact'>
      <h2>Contact Me</h2>
      <div className="contact-form">
        <input type="email" placeholder='Email' onChange={e => setEmail(e.target.value)}/>
        <textarea name="" id="" cols="30" rows="10" placeholder='Message' onChange={e => setMessage(e.target.value)}></textarea>
        <button onClick={handleSendEmail}>Send email</button>
      </div>
    </div>
  )
}

export default ContactMe