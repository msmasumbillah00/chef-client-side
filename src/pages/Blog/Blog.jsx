import { useState } from 'react';
import "./Blog.css"
const Blog = () => {

    const [openSection, setOpenSection] = useState(null);

    const toggleSection = (index) => {
        setOpenSection(openSection === index ? null : index);
    };

    const accordionData = [
        {
            title: 'Tell us the differences between uncontrolled and controlled components.',
            content: 'In React, Controlled components refer to the components where the state and behaviors are controlled by Parent components while Uncontrolled components are the ones having control of their own state and manage the behaviors on themselves.',
        },
        {
            title: 'How to validate React props using PropTypes',
            content: 'PropTypes is a library used in React to define and validate the types of props passed to a component. It helps catch bugs early by providing warnings in the console when the expected types of props are not received. so we can install it on our project ande then we can use it to validate React props ',
        },
        {
            title: 'Tell us the difference between nodejs and express js',
            content: 'Node.js is the runtime environment that allows you to run JavaScript on the server, while Express.js is a web application framework built on top of Node.js, providing a set of tools and features to simplify the process of building web applications.',
        },
        {
            title: 'What is a custom hook, and why will you create a custom hook?            ',
            content: 'A custom hook in React is a JavaScript function that allows you to reuse stateful logic across multiple components.creating custom hooks in React offers a powerful way to encapsulate and share logic, promote code reusability, and improve the overall maintainability and readability of my applications.',
        },
    ];
    return (
        <div className='container mx-auto'>
            <h1 className='text-center text-5xl mt-24 font-semibold text-black'>Welcome to My Blog</h1>
            <div className="w-md mx-auto  mt-24 lg:max-w-screen-lg  h-full ">
                <h1 className='text-3xl text-black my-8'>***Some Importent questions that you have to know!!!</h1>

                {accordionData.map((section, index) => (
                    <div key={index} className={`accordion-item ${openSection === index ? 'open' : ''}`}>
                        <div
                            className="accordion-header cursor-pointer"
                            onClick={() => toggleSection(index)}
                        >
                            <h2 className="text-xl font-semibold">{section.title}</h2>
                            <svg
                                className={`w-6 h-6 ${openSection === index ? 'transform rotate-180' : ''}`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </div>
                        <div className="accordion-content">
                            <p className="text-gray-700">{section.content}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blog;