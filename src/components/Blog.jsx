import React from 'react';
import { motion } from 'framer-motion';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: '10 Tips for Creating a Stunning Portfolio',
      excerpt:
        'Learn the essential tips and tricks to make your portfolio stand out from the crowd.',
      category: 'Design',
      date: 'June 15, 2024',
      image: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      readTime: '5 min read',
    },
    {
      id: 2,
      title: 'Web Design Trends for 2024',
      excerpt:
        'Discover the latest web design trends that are shaping the digital landscape this year.',
      category: 'Trends',
      date: 'June 10, 2024',
      image: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      readTime: '7 min read',
    },
    {
      id: 3,
      title: 'Mastering User Experience Design',
      excerpt:
        'Understand the principles of UX design and how to apply them in your projects.',
      category: 'UX Design',
      date: 'June 5, 2024',
      image: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      readTime: '8 min read',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="blog" className="blog">
      <div className="blog-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Latest Blog Posts</h2>
          <p className="section-subtitle">
            Stay updated with our latest insights and articles
          </p>
        </motion.div>

        <motion.div
          className="blog-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {blogPosts.map((post) => (
            <motion.article
              key={post.id}
              className="blog-card"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div
                className="blog-image"
                style={{ background: post.image }}
              >
                <div className="blog-category">{post.category}</div>
              </div>
              <div className="blog-content">
                <h3 className="blog-title">{post.title}</h3>
                <p className="blog-excerpt">{post.excerpt}</p>
                <div className="blog-meta">
                  <span className="blog-date">{post.date}</span>
                  <span className="blog-read-time">{post.readTime}</span>
                </div>
                <motion.button
                  className="read-more-btn"
                  whileHover={{ x: 5 }}
                >
                  Read More →
                </motion.button>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          className="blog-cta"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Articles
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
