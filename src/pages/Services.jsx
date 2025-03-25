import React from "react";

const services = [
  { name: "Graphic Design", description: "Logos, branding, illustrations, UI/UX design, and more." },
  { name: "Web Development", description: "Front-end, back-end, full-stack development, and e-commerce solutions." },
  { name: "Writing & Translation", description: "Content writing, copywriting, technical writing, and language translation." },
  { name: "Digital Marketing", description: "SEO, social media management, PPC advertising, and content marketing." },
  { name: "Virtual Assistance", description: "Admin tasks, email management, scheduling, and customer support." },
  { name: "Video Editing", description: "Professional video editing, motion graphics, animation, and VFX." },
  { name: "Mobile App Development", description: "iOS & Android app development, UI/UX design, and cross-platform apps." },
  { name: "Cybersecurity", description: "Penetration testing, security audits, network security, and data protection." },
  { name: "Data Science & AI", description: "Machine learning, deep learning, big data analytics, and AI solutions." },
  { name: "Accounting & Finance", description: "Bookkeeping, tax preparation, financial consulting, and auditing." },
  { name: "Legal Consulting", description: "Contract drafting, corporate law, intellectual property, and legal research." }
];

const Services = () => {
  return (
    <div className="container py-5">
      <h1 className="text-center text-primary fw-bold">Our Services</h1>
      <div className="row mt-4">
        {services.map((service, index) => (
          <div key={index} className="col-lg-4 col-md-6 service-item mb-4">
            <div className="p-4 border rounded shadow-sm bg-light">
              <h3 className="text-dark fw-bold">{service.name}</h3>
              <p className="text-muted">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services