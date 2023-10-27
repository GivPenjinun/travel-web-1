import "./Footer.css";

function Footer() {
  return (
    <>
      <section className="footer" id="footer">
        <div className="box-container">
          <div className="box">
            <h3>About Us</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio hic, facilis rerum eum sapiente tempore corrupti, autem
              aut quidem quo id iure eaque assumenda consequatur beatae
              accusantium quae molestiae tempora.
            </p>
          </div>
          <div className="box">
            <h3>Popular Location</h3>
            <a href="#">USA</a>
            <a href="#">Japan</a>
            <a href="#">France</a>
          </div>
          <div className="box">
            <h3>Quick Link</h3>
            <a href="#home">Home</a>
            <a href="#book">Book</a>
            <a href="#packages">Packages</a>
            <a href="#services">Services</a>
            <a href="#gallery">Gallery</a>
            <a href="#review">Review</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="box">
            <h3>Follow Us</h3>
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
            <a href="#">Twitter</a>
            <a href="#">Tiktok</a>
          </div>
        </div>
        <div className="credit">
          <a href="http://www.freepik.com">
            Thank you for Images Designed by Freepik
          </a>
        </div>
      </section>
    </>
  );
}

export default Footer;
