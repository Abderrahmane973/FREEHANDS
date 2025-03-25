import React from "react";

const Blog = () => {
  const blogPosts = [
    {
      title: "How to Succeed as a Freelancer",
      date: "March 15, 2025",
      author: "John Doe",
      category: "Freelancing",
      excerpt: "Discover key tips to grow your freelancing career and attract high-paying clients.",
      link: "#",
    },
    {
      title: "Top Web Development Trends in 2025",
      date: "March 10, 2025",
      author: "Jane Smith",
      category: "Tech",
      excerpt: "Stay ahead with the latest web development trends shaping the industry.",
      link: "#",
    },
    {
        title: "Effective Time Management for Freelancers",
        date: "March 5, 2025",
        author: "Alice Brown",
        category: "Productivity",
        icon: "fas fa-clock",
        excerpt: "Learn how to manage your time effectively and boost your productivity as a freelancer.",
        link: "#"
      },
    {
      title: "The Future of AI in Digital Marketing",
      date: "February 28, 2025",
      author: "Bob Williams",
      category: "Marketing",
      excerpt: "Explore how AI is transforming digital marketing and what it means for businesses.",
      link: "#",
    }
  ];

  return (
    <section className="bg-[#f9f9f9] py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#0066cc] mb-10">Latest Blog Posts</h2>
        <div className="grid md:grid-cols-2 gap-10">
          {blogPosts.map((post, index) => (
            <div 
              key={index} 
              className="bg-white border-2 border-[#0066cc] rounded-2xl shadow-md p-6 text-left"
            >
              <div className="text-gray-600 text-sm mb-3 font-semibold">
                {post.category}
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">{post.title}</h3>
              <p className="text-gray-500 text-sm mb-4">{post.date} • By {post.author}</p>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <a 
                href={post.link} 
                className="text-[#0066cc] font-semibold hover:underline"
              >
                Read More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;