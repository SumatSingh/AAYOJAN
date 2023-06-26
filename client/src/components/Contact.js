import React from 'react'
import { Fragment } from 'react'
export default function Contact() {
  return (
    <Fragment>

      {/* start */}
      <div>mt-5</div>
      <div>mt-5</div>
      <div>mt-5</div>   {/*for margin top full page */}
      <div>mt-5</div>
      <div>mt-5</div>
      <div>mt-5</div>

      {/* end  */}

      <section className="contact" id="contact">

        <h1 className="heading"> <span>contact</span> us </h1>

        <form action="">
          <div className="inputBox mb-2">
            <input type="text" placeholder="name" required minLength={3} maxLength={18}/>
            <input type="email" placeholder="email" required minLength={10} maxLength={35}/>
          </div>
          <div className="inputBox">
            <input type="number" placeholder="number" required minLength={10} maxLength={10}/>
            <input type="text" placeholder="subject" required minLength={2} maxLength={20}/>
          </div>
          <textarea name="" placeholder="your message" id="" cols="30" rows="10" required minLength={4} maxLength={106}></textarea>
          <input type="submit" value="send message" id="btn" />
        </form>

      </section>
    </Fragment>
  )
}
