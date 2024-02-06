import React from 'react';

const About = () => {
    return (
        <div className="bg-gray-100 min-h-screen p-8">
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold">About KitchenMaestro</h1>
                    <p className="text-lg italic">Innovating [Industry] Since 9998</p>
                    <img src="https://my-test-11.slatic.net/p/1e75ad6540ecd7d4404a6de7060a3325.jpg" alt="Company Logo" className="mx-auto" />
                </div>
                <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">Our Philosophy</h2>
                    <p className="text-lg leading-7">
                        At KitchenMaestro, clarity and innovation are at the heart of everything we do. We believe that by embracing cutting-edge technology and the brightest minds, we can redefine the standards in the [industry]. Our mission is to provide outstanding services/products that make a significant impact in [what the company does or offers].
                    </p>
                </div>
                <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">Why Choose Us</h2>
                    <ul className="list-disc pl-4">
                        <li><span className="font-bold">Experienced Team:</span> We've gathered talent from across the world to bring you the best in [industry/service].</li>
                        <li><span className="font-bold">Customer-Centric:</span> Your satisfaction is our priority. We're dedicated to exceeding your expectations every step of the way.</li>
                        <li><span className="font-bold">Sustainable Practices:</span> Committed to environmental sustainability , social responsibility. we ensure that our operations benefit both our customers and our planet.</li>
                    </ul>
                </div>
                <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">A Message from Our Founder</h2>
                    <div className="text-center">
                        <img src="https://i.pinimg.com/564x/57/4e/75/574e7556f911ab2fc2de5a495ad6640c.jpg" alt="Founder Image" className="rounded-full w-24 h-24 mx-auto mb-4" />
                        <p className="italic">Jon Wilson</p>
                        <p className="italic">CEO</p>
                        <p>"I started KitchenMaestro with a vision to Make food more interesting and easy to get. It's been a journey of . Thank you for being a part of our story."</p>
                    </div>
                </div>
                <div>
                    <h2 className="text-2xl font-bold mb-4">Meet Our Team</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div>
                            <img src="https://i.pinimg.com/236x/de/48/f1/de48f11e1352ecb04af5e709015d47c2.jpg" alt="Team Member 1" className="rounded-lg w-full" />
                            <p className="text-center">Emily Davis</p>
                            <p className="text-center">Brst chef in our kitchen</p>
                        </div>
                        <div>
                            <img src="https://i.pinimg.com/236x/de/48/f1/de48f11e1352ecb04af5e709015d47c2.jpg" alt="Team Member 1" className="rounded-lg w-full" />
                            <p className="text-center">Emily Davis</p>
                            <p className="text-center">Brst chef in our kitchen</p>
                        </div>
                        {/* Repeat the above structure for each team member */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;