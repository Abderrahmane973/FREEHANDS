import React from 'react';

function Translation() {
    const services = [
        { 
            title: "UX/UI Designers", 
            rating: 4.8, 
            people: ["/images/user1.jpg", "/images/user2.jpg", "/images/user3.jpg"] 
        },
        { 
            title: "Graphic Designers", 
            rating: 4.9, 
            people: ["/images/user4.jpg", "/images/user5.jpg"] 
        },
        { 
            title: "Art Directors", 
            rating: 4.9, 
            people: ["/images/user6.jpg", "/images/user7.jpg"] 
        },
        { 
            title: "Web Designers", 
            rating: 4.8, 
            people: ["/images/user8.jpg", "/images/user9.jpg"] 
        },
        { 
            title: "Motion Designers", 
            rating: 4.9, 
            people: ["/images/user10.jpg", "/images/user11.jpg"] 
        },
        { 
            title: "Animators", 
            rating: 4.8, 
            people: ["/images/user12.jpg", "/images/user13.jpg"] 
        },
        { 
            title: "Video Editors", 
            rating: 4.9, 
            people: ["/images/user14.jpg", "/images/user15.jpg"] 
        },
        { 
            title: "Voice Artists", 
            rating: 4.9, 
            people: ["/images/user16.jpg", "/images/user17.jpg"] 
        },
    ];

    return (
        <div className="container mt-5">
            <h2 className="text-center font-bold text-2xl mb-4">Our Creative Services</h2>
            <div className="grid grid-cols-2 gap-4">
                {services.map((service, index) => (
                    <div key={index} className="p-4 border rounded-lg shadow-md flex justify-between items-center">
                        <div>
                            <h3 className="text-lg font-semibold">{service.title}</h3>
                            <p>⭐ {service.rating} average rating</p>
                        </div>
                        <div className="flex -space-x-2">
                            {service.people.map((img, i) => (
                                <img 
                                    key={i} 
                                    src={img} 
                                    alt="User" 
                                    className="w-8 h-8 rounded-full border-2 border-white"
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Translation;