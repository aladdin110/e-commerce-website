import "../../assets/styles/_contact.scss";
import LocationMap from "./LocationMap";


const ContactUs = () => {
    return (
        <div className="contact-area pt-100 pb-100">
        <div className="container">
             <div className="contact-map mb-10">
              <LocationMap latitude="33.9847895" longitude="-6.8669927" />
            </div>
            <div className="custom-row-2">
              <div className="col-lg-4 col-md-5">
                <div className="contact-info-wrap">
                  <div className="single-contact-info">
                    <div className="contact-icon">
                      <i className="fa fa-phone" />
                    </div>
                    <div className="contact-info-dec">
                      <p>+212 345 678 102</p>
                      <p>+212 345 678 102</p>
                    </div>
                  </div>
                  <div className="single-contact-info">
                    <div className="contact-icon">
                        <i class="fa-solid fa-envelope"></i>
                    </div>
                    <div className="contact-info-dec">
                      <p>
                        <a href="mailto:nous@gmail.com">nous@gmail.com</a>
                      </p>
                     {/*  <p>
                        <a href="//urwebsitenaem.com">urwebsitenaem.com</a>
                      </p> */}
                    </div>
                  </div>
                  <div className="single-contact-info">
                    <div className="contact-icon">
                      <i className="fa fa-map-marker" />
                    </div>
                    <div className="contact-info-dec">
                      <p>Ensias</p>
                      <p>Al Irfane Rabat</p>
                    </div>
                  </div>
                  <div className="contact-social text-center">
                    <h3>Nous suivre</h3>
                    <ul>
                      <li>
                        <a href="//facebook.com">
                          <i className="fa fa-facebook" />
                        </a>
                      </li>
                      <li>
                        <a href="//twitter.com">
                          <i className="fa fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="//github.com">
                          <i className="fa fa-github" />
                        </a>
                      </li>
                      <li>
                        <a href="//linkedin.com">
                          <i className="fa fa-linkedin" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-8 col-md-7">
                <div className="contact-form">
                  <div className="contact-title mb-30">
                    <h2>Nous contacter</h2>
                  </div>
                  <form className="contact-form-style">
                    <div className="row">
                      <div className="col-lg-6">
                        <input name="name" placeholder="Nom*" type="text" />
                      </div>
                      <div className="col-lg-6">
                        <input name="email" placeholder="Email*" type="email" />
                      </div>
                      <div className="col-lg-12">
                        <input
                          name="subject"
                          placeholder="Objet*"
                          type="text"
                        />
                      </div>
                      <div className="col-lg-12">
                        <textarea
                          name="message"
                          placeholder="Votre message*"
                          defaultValue={""}
                        />
                        <button className="submit" type="submit">
                          ENVOYER
                        </button>
                      </div>
                    </div>
                  </form>
                  <p className="form-messege" />
                </div>
              </div>
            </div>
        </div>
        </div>
    )
}
export default ContactUs;