import React from 'react';

function Degitalmarketing() {
    const services = [
        { title: "SEM Specialists", rating: 4.8, people: ["👨‍💼", "👩‍💼", "🧑‍💼"] },
        { title: "SEO Specialists", rating: 4.8, people: ["👨‍💼", "👩‍💼", "🧑‍💼"] },
        { title: "Social Media Managers", rating: 4.7, people: ["👩‍💼", "🧑‍💼", "👨‍💼"] },
        { title: "Paid Media Experts", rating: 4.7, people: ["👨‍💼", "👩‍💼", "🧑‍💼"] },
        { title: "Email Marketers", rating: 4.7, people: ["👨‍💼", "👩‍💼", "🧑‍💼"] },
        { title: "Marketing Analysts", rating: 4.8, people: ["👨‍💼", "👩‍💼", "🧑‍💼"] },
        { title: "Market Researchers", rating: 4.8, people: ["👨‍💼", "👩‍💼", "🧑‍💼"] },
        { title: "Sales Representatives", rating: 4.6, people: ["👨‍💼", "👩‍💼", "🧑‍💼"] },
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
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Degitalmarketing;
