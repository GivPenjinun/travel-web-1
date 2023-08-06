import "./Contact.css";
import travelVector from "../assets/travelVector.jpg";

function Contact() {
  return (
    <>
      <section className="contact" id="contact">
        <h1 className="heading">
          <span>C</span>
          <span>O</span>
          <span>N</span>
          <span>T</span>

          <span>A</span>
          <span>C</span>
          <span>T</span>
        </h1>

        <div className="contact-row">
          <div className="image">
            <img src={travelVector} alt="travel pic" />
          </div>
          <form action="">
            <div className="input-box">
              <input type="text" placeholder="enter name" />
              <input type="email" placeholder="enter email" />
            </div>
            <div className="input-box">
              <input type="number" placeholder="mobile phone" />
              <input type="text" placeholder="subject" />
            </div>
            <div className="input-box">
              <textarea
                type="text"
                cols={30}
                rows={10}
                name=""
                id=""
                placeholder="message"
              />
            </div>

            <button className="btn">Send Message</button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact;
