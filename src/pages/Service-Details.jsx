import React from 'react';

function Servicedetails() {
    const services = [
        { title: "Java Developers", rating: 4.8, people: ["👨‍💻", "👩‍💻", "🧑‍💻"],},
        { title: "PHP Developers", rating: 4.8, people: ["👨‍💻", "👩‍💻", "🧑‍💻"] },
        { title: "JavaScript Developers", rating: 4.8, people: ["👨‍💻", "👩‍💻"] },
        { title: "iOS Developers", rating: 4.7, people: ["👨‍💻", "👩‍💻", "🧑‍💻"] },
        { title: "QA Engineers", rating: 4.9, people: ["👨‍💻", "👩‍💻"] },
        { title: "Data Scientists", rating: 4.9, people: ["👨‍💻", "👩‍💻"] },
        { title: "Infrastructure Engineers", rating: 4.9, people: ["👨‍💻", "👩‍💻"] },
        { title: "SQL Developers", rating: 4.8, people: ["👨‍💻", "👩‍💻", "🧑‍💻"] },
    ];

    return (
        <div className="container mt-5">
            <h2 className="text-center font-bold text-2xl mb-4">Our Tech Services</h2>
            <div className="grid grid-cols-2 gap-4">
                {services.map((service, index) => (
                    <div key={index} className="p-4 border rounded-lg shadow-md flex justify-between items-center">
                        <div>
                            <h3 className="text-lg font-semibold">{service.title}</h3>
                            <p>⭐ {service.rating} average rating</p>
                        </div>
                        <div className="flex space-x-2 text-xl">
                            {service.people.map((emoji, i) => (
                                <span key={i}>{emoji}</span>
                            ))}
     <div className="d-flex justify-content-end">
  <button
    className="input-group-text border-0 bg-primary"
    type="button"
    onClick={() => window.location.href = "/Freelancers"}
    aria-label="Voir les freelancers Java"
  >
    <i className="fas fa-arrow-right fa-2x" /> 
  </button>
</div>

                        </div>
                    </div>
                ))}
        
            </div>
        </div>
    );
}

export default Servicedetails;
