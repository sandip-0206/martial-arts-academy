import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl lg:text-4xl font-bold mb-8 text-gray-800">
          Contact Us
        </h2>
        <p className="text-lg max-w-2xl mx-auto mb-12 text-gray-700">
          Have questions or want to visit us? Reach out by filling out the form
          below or check our location on the map.
        </p>
      </div>
      <div className="container mx-auto flex flex-wrap lg:flex-nowrap gap-8">
        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="w-full lg:w-2/3 p-8 bg-white shadow-xl rounded-lg"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-gray-600 mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-lg focus:outline-none"
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-lg focus:outline-none"
                placeholder="Enter your email"
              />
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-gray-600 mb-2">Phone Number</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none"
              placeholder="Enter your phone number"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-600 mb-2">Subject</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg focus:outline-none"
              placeholder="Enter the subject"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-600 mb-2">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              required
              className="w-full p-3 border rounded-lg focus:outline-none"
              placeholder="Write your message here..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full primary-btn px-6 py-3 rounded-lg font-semibold transition"
          >
            Send Message
          </button>
        </form>

        {/* Map Section */}
        <div className="w-full lg:w-1/2 p-4 bg-white shadow-xl rounded-lg">
          <h3 className="text-2xl lg:text-4xl font-bold mb-4">Find Us Here</h3>
          <p className="text-gray-700 mb-4">
            JK Martial Arts Academy <br />
            Antophill, Wadala, Mumbai, 400037, India
          </p>
          <iframe
            title="JK Martial Arts Academy"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.7863415353195!2d72.86677987403776!3d19.02913428216582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf35b7d6be7b%3A0x35ab6a4c55eaa0dc!2sCGEE%20Society!5e0!3m2!1sen!2sin!4v1735479832772!5m2!1sen!2sin"
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            className="rounded-lg"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
