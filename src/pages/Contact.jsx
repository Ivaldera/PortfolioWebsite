//This is the contact me page//
import { useState } from "react";

export default function Contact() {

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

//This is to validate if the user is filling the form with the right properties of the email format // 
  const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// This is to validate if the email is not right or the name is not at least with 3 letters, the send button, will be disabled//
  const disabled = !regexEmail.test(form.email) || form.name.length < 3

  const handleSubmit = (e) => {
    e.preventDefault();
  }
//The form, not functioning but validates if the user has filled the form or not, and activates the send button//
  return (
    <main className="ContactPage">

      <section className="Content container">
        <h2 className="title-section">
          Contact Me<span className="text-orange">.</span>
        </h2>
        <div className="Form">
          <p>
            Do you have a project or a brief about your next big thing? Fill this form and I will contact you as soon as possible or email me at <span className="text-orange font-bold">hi@valdurdesign.com</span>. I would love to help you!
          </p>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">*Full name</label>
              <input type="text" name="name" id="name" placeholder="Enter your name" required
                value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">*Email address</label>
              <input type="email" name="email" id="email" placeholder="Ej. yourname@torture.com" required
                value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" cols="10" rows="6" placeholder="Enter your message"
                value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
              ></textarea>
            </div>
            <div className="form-group">

              <button className="main-button"
                disabled={disabled}
              >Send</button>
            </div>

          </form>
        </div>
      </section>


    </main>
  );
}