import "./Contact.css";
import { Element } from "react-scroll";
import { FaGithub, FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";
import { useState } from "react";
import { Bounce, ToastContainer, toast } from "react-toastify";
import emailjs from "@emailjs/browser";

import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (evt: any) => {
    evt.preventDefault();

    const serviceId = "service_3tm8c45";
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
      .then((response: any) => {
        console.log(response);
        response.status === 200 &&
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
      .catch((error: any) => {
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
            <div className="icon-group">
              <div className="contact__icon">
                <FaGithub />
              </div>
              <h2 className="smi-title">Github</h2>
            </div>
            <div className="icon-group">
              <div className="contact__icon">
                <FaLinkedin />
              </div>
              <h2 className="smi-title">LinkedIn</h2>
            </div>
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
            <h2>Do you have any questions or suggestions?</h2>
            <p>I would love to hear from you</p>
            <span>Reach out to me</span>
          </div>

          <div className="contact__details-form">
            <form className="contact__form" onSubmit={handleSubmit}>
              <div className="row">
                <div className="form-item col-6">
                  <div className="form-group">
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(evt) =>
                        setFormData({ ...formData, name: evt.target.value })
                      }
                      className="form-control"
                      placeholder="Name"
                      required
                    />
                  </div>
                </div>
                <div className="form-item col-6">
                  <div className="form-group">
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(evt) =>
                        setFormData({ ...formData, email: evt.target.value })
                      }
                      className="form-control"
                      placeholder="Email"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="form-item col-12">
                  <div className="form-group">
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(evt) =>
                        setFormData({ ...formData, subject: evt.target.value })
                      }
                      className="form-control"
                      placeholder="Subject"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="form-item col-12">
                  <div className="form-group">
                    <textarea
                      value={formData.message}
                      onChange={(evt) =>
                        setFormData({ ...formData, message: evt.target.value })
                      }
                      className="form-control"
                      placeholder="Message"
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
        </div>
      </div>
    </Element>
  );
};

export default Contact;
