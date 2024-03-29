import React from 'react';

const Blogs = () => {
    return (
        <div className='mx-6 lg:mx-20 my-12'>

            {/*--------------------------- Q1 ---------------------------*/}

            <div className='card-bordered rounded-xl px-6 py-6 lg:px-20 lg:py-8 mb-8' style={{ backgroundColor: '#fffffe' }}>
                <h2 className='text-xl lg:text-2xl font-bold' style={{ font: '#00214d' }}>How will you improve the performance of a React Application?</h2>

                <p className='lg:text-xl font-semibold mt-2'>There are many ways to improve the performance of a React Application. Such as: <br />
                    <span className='ml-10'>1. By using Immutable Data Structures,</span>
                    <br />
                    <span className='ml-10'>2. For maping avoid using Index as a Key,</span>
                    <br />
                    <span className='ml-10'>3. Using a CDN to deliver static content,</span>
                    <br />
                    <span className='ml-10'>4. Avoiding unnecessary renders,</span>
                    <br />
                    <span className='ml-10'>5. Avoiding Anonymous Functions.</span>
                    <br />
                </p>
            </div>

            {/*--------------------------- Q2 ---------------------------*/}

            <div className='card-bordered rounded-xl px-6 py-6 lg:px-20 lg:py-8 mb-8' style={{ backgroundColor: '#fffffe' }}>
                <h2 className='text-xl lg:text-2xl font-bold' style={{ font: '#00214d' }}>What are the different ways to manage a state in a React application?</h2>

                <p className='lg:text-xl font-semibold mt-2'>Different ways to manage a state in a React application- <br />
                    <span className='ml-10'>1. useReducer : To deal with complex state management the useReducer hook is a powerful provided React hook. It doesn't require third-party dependencies.</span>
                    <br />
                    <span className='ml-10'>2. Custom Hooks: To encompass complex logic into a single accessible hook custom React hooks are very handy. This can be pretty effective for forms, toggles, asynchronous behavior.</span>
                    <br />
                    <span className='ml-10'>3. Data Fetching Libraries:   To fetch, cach, invalidate, and refresh data from external sources, data libraries like React Query is so effective.</span>
                </p>
            </div>

            {/*--------------------------- Q3 ---------------------------*/}

            <div className='card-bordered rounded-xl px-6 py-6 lg:px-20 lg:py-8 mb-8' style={{ backgroundColor: '#fffffe' }}>
                <h2 className='text-xl lg:text-2xl font-bold' style={{ font: '#00214d' }}>How does prototypical inheritance work?</h2>

                <p className='lg:text-xl font-semibold mt-2'>A feature in javascript which is used to add methods and properties in objects is called Prototypal Inheritance. An object can inherit the properties and methods of another object with this method. Object.getPrototypeOf and Object are being used to get and set the Prototype of an object.
                    <br />
                    The ability to access object properties from another object is being referred by prototypical inheritance. JavaScript prototype add new properties and methods to an existing object constructor. Then JS code inherit properties from a prototype.</p>
            </div>

            {/*--------------------------- Q4 ---------------------------*/}

            <div className='card-bordered rounded-xl px-6 py-6 lg:px-20 lg:py-8 mb-8' style={{ backgroundColor: '#fffffe' }}>
                <h2 className='text-xl lg:text-2xl font-bold' style={{ font: '#00214d' }}>Why you do not set the state directly in React? For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h2>

                <p className='lg:text-xl font-semibold mt-2'>We should never set the state directly in React. Some reasons behind it-
                    <br />
                    <span className='ml-10'>1. If I set state directly, I will lose control of the state across all components.
                    </span>
                    <br />
                    <span className='ml-10'>2. Setting the state directly does not change this.state immediately. Rather, it creates a pending state transition. This method will only return the present value when accessing it after calling.</span>
                    <br />
                    <span className='ml-10'>3. After setting the state directly, calling the setProducts() afterward may just replace the update I made.
                    </span>
                </p>
            </div>

            {/*--------------------------- Q5 ---------------------------*/}

            <div className='card-bordered rounded-xl px-6 py-6 lg:px-20 lg:py-8 mb-4' style={{ backgroundColor: '#fffffe' }}>
                <h2 className='text-xl lg:text-2xl font-bold' style={{ font: '#00214d' }}>What is a unit test? Why should write unit tests?</h2>

                <p className='lg:text-xl font-semibold mt-2'>A type of software testing, where individual units or components of a software are tested to validate that each unit of the software code performs as expected, is called UNIT TEST.
                    <br />
                    Unit testing helps developers write better code, more efficiently and saves time and money over the course of the product development life cycle. Unit test ensures the standard quality of all code before deploy. This ensures a reliable engineering environment where quality is paramount.
                </p>
            </div>

        </div>
    );
};

export default Blogs;