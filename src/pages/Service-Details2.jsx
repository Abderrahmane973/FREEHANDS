import React from 'react';

function Servicedetails() {
    const services = [
        { 
            title: "Content Writers", 
            rating: 4.8, 
            people: ["/images/user1.jpg", "/images/user2.jpg", "/images/user3.jpg"] 
        },
        { 
            title: "Translators", 
            rating: 4.9, 
            people: ["/images/user4.jpg", "/images/user5.jpg"] 
        },
        { 
            title: "Editors", 
            rating: 4.9, 
            people: ["/images/user6.jpg", "/images/user7.jpg"] 
        },
        { 
            title: "Ghostwriters", 
            rating: 4.7, 
            people: ["/images/user8.jpg", "/images/user9.jpg"] 
        },
        { 
            title: "Copywriters", 
            rating: 4.8, 
            people: ["/images/user10.jpg", "/images/user11.jpg"] 
        },
        { 
            title: "Proofreaders", 
            rating: 4.9, 
            people: ["/images/user12.jpg", "/images/user13.jpg"] 
        },
        { 
            title: "Creative Writers", 
            rating: 4.8, 
            people: ["/images/user14.jpg", "/images/user15.jpg"] 
        },
        { 
            title: "Grant Writers", 
            rating: 4.8, 
            people: ["/images/user16.jpg", "/images/user17.jpg"] 
        },
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
                        <div className="flex -space-x-2">
                            {service.people.map((img, i) => (
                                <img 
                                    key={i} 
                                    src={img} 
                                    alt="User" 
                                    className="w-8 h-8 rounded-full border-2 border-white"
                                />
                            ))}
                                                                     <div className="d-flex justify-content-end">
  <button
    className="input-group-text border-0 bg-primary"
    type="submit"
    name="subscribe"
    aria-label="Subscribe for Newsletter"
  >
    <i className="fas fa-arrow-right  fa-2x" />
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
