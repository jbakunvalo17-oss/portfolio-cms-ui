import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ = () => {
  const [expandedId, setExpandedId] = useState(null);

  const faqs = [
    {
      id: 1,
      question: 'How do I get started with the Portfolio CMS?',
      answer:
        'Getting started is easy! Simply sign up for an account, choose a template, and start customizing. Our intuitive interface makes it simple for anyone to create a professional portfolio in minutes.',
    },
    {
      id: 2,
      question: 'Can I customize the design of my portfolio?',
      answer:
        'Absolutely! We offer extensive customization options. You can modify colors, fonts, layouts, and more without any coding knowledge. For advanced users, custom CSS is also available.',
    },
    {
      id: 3,
      question: 'Is my portfolio mobile-friendly?',
      answer:
        'Yes, all portfolios created with our CMS are fully responsive and mobile-friendly. Your work will look great on desktop, tablet, and mobile devices.',
    },
    {
      id: 4,
      question: 'What about SEO optimization?',
      answer:
        'Our CMS comes with built-in SEO optimization features including customizable meta tags, sitemap generation, and mobile-first indexing support to help your portfolio rank higher in search results.',
    },
    {
      id: 5,
      question: 'Can I use my own domain?',
      answer:
        'Yes! You can connect your own custom domain or use a free subdomain. We provide easy setup instructions for all popular domain registrars.',
    },
    {
      id: 6,
      question: 'What kind of support is available?',
      answer:
        'We offer 24/7 customer support via email and live chat. Additionally, we have an extensive knowledge base with tutorials and guides to help you get the most out of the platform.',
    },
  ];

  const toggleAccordion = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="faq" className="faq">
      <div className="faq-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Find answers to common questions about our platform
          </p>
        </motion.div>

        <motion.div
          className="faq-content"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                className="faq-item"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <motion.button
                  className={`faq-question ${
                    expandedId === faq.id ? 'expanded' : ''
                  }`}
                  onClick={() => toggleAccordion(faq.id)}
                  whileHover={{ paddingLeft: 10 }}
                >
                  <span className="question-text">{faq.question}</span>
                  <motion.span
                    className="question-icon"
                    animate={{ rotate: expandedId === faq.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    ▼
                  </motion.span>
                </motion.button>

                <AnimatePresence>
                  {expandedId === faq.id && (
                    <motion.div
                      className="faq-answer"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p>{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="faq-cta"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3>Still have questions?</h3>
            <p>Can't find the answer you're looking for? Contact our support team.</p>
            <motion.button
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Support
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
