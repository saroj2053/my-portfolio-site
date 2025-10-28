import "./Contact.css";
import { Element } from "react-scroll";
import { FaGithub, FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { useState } from "react";
import { Bounce, ToastContainer, toast } from "react-toastify";
import emailjs from "@emailjs/browser";

import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    const serviceId = "service_8c3p1iq";
    const templateId = "template_ajyhcpi";
    const publicKey = "uV3e4sbtIIM3oFHbB";

    const { name, email, subject, message } = formData;
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Saroj Sah",
      subject: subject,
      message: message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response: unknown) => {
        console.log(response);
        (response as { status: number }).status === 200 &&
          toast(
            "🙏 Thank you for sending me email! I will reach back to you shortly",
            {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              transition: Bounce,
            }
          );

        setFormData({ name: "", email: "", subject: "", message: "" });
      })
      .catch((error: unknown) => {
        toast.error(`Error sending email ${error}`);
      });
  };
  return (
    <Element className="contact" name="contact">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <div className="container">
        <div className="contact__title">
          <h2>Contact Me</h2>
        </div>
        <div className="contact__hero">
          <div className="contact__emailing">
            <p>Thank you for checking out my portfolio.</p>
            <a
              className="emailBtn"
              href="mailto:sarojsaroj390@gmail.com?subject=Hello from your blog!"
            >
              Email Me
            </a>
          </div>
          <div className="social-media-links">
            <a
              href="https://github.com/saroj2053"
              target="_blank"
              className="icon-group"
            >
              <span className="contact__icon">
                <FaGithub />
              </span>
              <h2 className="smi-title">Github</h2>
            </a>

            <a
              href="https://www.linkedin.com/in/sarojsah2053/"
              className="icon-group"
              target="_blank"
            >
              <span className="contact__icon">
                <FaLinkedin />
              </span>
              <h2 className="smi-title">LinkedIn</h2>
            </a>
            <div className="icon-group">
              <div className="contact__icon">
                <FaSquareXTwitter />
              </div>
              <h2 className="smi-title">Twitter</h2>
            </div>
          </div>
        </div>

        <div className="contact__details">
          <div className="contact__details-header">
            <h2>Get In Touch</h2>
            <p>Reach out to me if you have any questions or suggestions...</p>
          </div>

          <div className="contact__cards-wrapper">
            <div className="contact__cards">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="contact__card">
                  <h3 className="contact__heading">Contact Information</h3>

                  <div className="contact__links contact_email">
                    <FiMail className="contact__icons" />
                    <div className="contact__email-details">
                      <p>Email</p>
                      <a href="mailto:sarojsaroj390@gmail.com">
                        sarojsaroj390@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="contact__links contact__phone">
                    <FiPhone className="contact__icons" />
                    <div className="contact__phone-details">
                      <p>Phone</p>
                      <a href="tel:+4915752491735">+49-1234567890</a>
                    </div>
                  </div>
                  <div className="contact__links contact__location">
                    <FiMapPin className="contact__icons" />
                    <div className="contact__location-details">
                      <p>Location</p>
                      <p>Chemnitz, DE</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="contact__details-form">
                  <form className="contact__form" onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="form-item col-12">
                        <div className="form-group">
                          <label htmlFor="name">Name</label>
                          <input
                            type="text"
                            id="name"
                            value={formData.name}
                            onChange={(evt) =>
                              setFormData({
                                ...formData,
                                name: evt.target.value,
                              })
                            }
                            placeholder="Your name"
                            className="form-control"
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="form-item col-12">
                        <div className="form-group">
                          <label htmlFor="email">Email</label>
                          <input
                            type="email"
                            id="email"
                            value={formData.email}
                            onChange={(evt) =>
                              setFormData({
                                ...formData,
                                email: evt.target.value,
                              })
                            }
                            className="form-control"
                            placeholder="your@email.com"
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="form-item col-12">
                        <div className="form-group">
                          <label htmlFor="subject">Subject</label>
                          <input
                            type="text"
                            id="subject"
                            value={formData.subject}
                            onChange={(evt) =>
                              setFormData({
                                ...formData,
                                subject: evt.target.value,
                              })
                            }
                            className="form-control"
                            placeholder="Subject of the message"
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="form-item col-12">
                        <div className="form-group">
                          <label htmlFor="message">Message</label>
                          <textarea
                            value={formData.message}
                            id="message"
                            onChange={(evt) =>
                              setFormData({
                                ...formData,
                                message: evt.target.value,
                              })
                            }
                            className="form-control"
                            placeholder="Your message"
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="form-item col-12">
                        <button type="submit" className="submitBtn">
                          Send Email
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Contact;
