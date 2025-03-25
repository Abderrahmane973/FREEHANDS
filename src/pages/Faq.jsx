import React from 'react';

const Faq = () => {
  const faqs = [
    {
      question: "How does the platform work?",
      answer: "Our platform connects freelancers and clients. Clients can post projects, while freelancers offer their services and submit quotes."
    },
    {
      question: "How do I register as a freelancer?",
      answer: "Click on 'Sign Up', choose the 'Freelancer' option, fill in your information, and start offering your services."
    },
    {
      question: "How can I find a freelancer for my project?",
      answer: "You can browse freelancer profiles, check their ratings, and chat with them before placing an order."
    },
    {
      question: "What payment methods are available?",
      answer: "We accept payments by credit card, PayPal, and other secure methods."
    },
    {
      question: "How is payment security ensured?",
      answer: "All payments are secured and held in escrow until the client approves the service. This protects both the client and the freelancer."
    },
    {
      question: "Is there a commission on transactions?",
      answer: "Yes, a commission is charged on each transaction to ensure the proper functioning of the platform."
    }
  ];

  return (
    <section className="section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="section-title text-center mb-5 pb-2">
              <p className="text-primary text-uppercase fw-bold mb-3">Frequently Asked Questions</p>
              <h1>FAQ</h1>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="accordion shadow rounded py-5 px-0 px-lg-4 bg-white position-relative" id="accordionFAQ">
              {faqs.map((faq, index) => (
                <div className="accordion-item p-1 mb-2" key={index}>
                  <h2 className="accordion-header">
                    <button className="accordion-button h5 border-0" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse-${index}`}>
                      {faq.question}
                    </button>
                  </h2>
                  <div id={`collapse-${index}`} className="accordion-collapse collapse border-0" data-bs-parent="#accordionFAQ">
                    <div className="accordion-body py-0 content">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
