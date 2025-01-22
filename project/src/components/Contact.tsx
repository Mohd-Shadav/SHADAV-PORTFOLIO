import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    console.log(e.target.value)
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
 

    emailjs
      .send(
        'service_c8lhj1n', // Your Service ID
        'template_gzbfnuf', // Your Template ID
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        'J5pNYY1ldADcC3uqU' // Your User ID
      )
      .then(
        (result) => {
          console.log(result.text);
          alert('Message sent successfully!');
        },
        (error) => {
          console.log(error.text);
          alert('An error occurred, please try again later.');
        }
      );

    // Reset form fields
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <section id="contact" className="py-20 bg-[#1E1E1E] relative overflow-hidden">
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-blue-500/5"
            style={{
              width: Math.random() * 300 + 100 + 'px',
              height: Math.random() * 300 + 100 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animation: `pulse ${Math.random() * 4 + 2}s infinite`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-white mb-16"
        >
          Let's Build Something Amazing Together
        </motion.h2>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto backdrop-blur-sm bg-[#121212]/80 p-8 rounded-2xl shadow-xl"
        >
          <form onSubmit={sendEmail} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="group">
                <label htmlFor="name" className="block text-gray-400 mb-2 group-hover:text-[#0d6efd] transition-colors">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-[#1E1E1E] border border-gray-800 rounded-lg focus:outline-none focus:border-[#0d6efd] text-white transition-all duration-300"
                  placeholder="Your Name"
                />
              </div>
              <div className="group">
                <label htmlFor="email" className="block text-gray-400 mb-2 group-hover:text-[#0d6efd] transition-colors">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-[#1E1E1E] border border-gray-800 rounded-lg focus:outline-none focus:border-[#0d6efd] text-white transition-all duration-300"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            <div className="group">
              <label htmlFor="subject" className="block text-gray-400 mb-2 group-hover:text-[#0d6efd] transition-colors">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-[#1E1E1E] border border-gray-800 rounded-lg focus:outline-none focus:border-[#0d6efd] text-white transition-all duration-300"
                placeholder="Project Inquiry"
              />
            </div>
            <div className="group">
              <label htmlFor="message" className="block text-gray-400 mb-2 group-hover:text-[#0d6efd] transition-colors">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={6}
                className="w-full px-4 py-3 bg-[#1E1E1E] border border-gray-800 rounded-lg focus:outline-none focus:border-[#0d6efd] text-white resize-none transition-all duration-300"
                placeholder="Your message here..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white py-3 rounded-lg flex items-center justify-center gap-2 hover:from-blue-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-[1.02] group"
            >
              <Send size={20} className="group-hover:translate-x-1 transition-transform" />
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
