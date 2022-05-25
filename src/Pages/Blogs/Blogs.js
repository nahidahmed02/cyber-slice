import React from 'react';

const Blogs = () => {
    return (
        <div className='mx-8 lg:mx-20 my-12'>
            <div className='card-bordered rounded-xl bg-gray-200 lg:px-20 lg:py-4 mb-4'>
                <h2 className='text-2xl font-bold text-red-500'>How will you improve the performance of a React Application?</h2>
                <p className='text-xl font-bold mt-2'>There are many ways to improve the performance of a React Application. Such as: <br />
                    <span className='ml-10'>1. By using Immutable Data Structures,</span> <br />
                    <span className='ml-10'>2. For maping avoid using Index as a Key,</span> <br />
                    <span className='ml-10'>3. Using a CDN to deliver static content,</span> <br />
                    <span className='ml-10'>4. Avoiding unnecessary renders,</span> <br />
                    <span className='ml-10'>5. Avoiding Anonymous Functions</span> <br />
                </p>
            </div>

            <div className='card-bordered rounded-xl bg-gray-200 lg:px-20 lg:py-4 mb-4'>
                <h2 className='text-2xl font-bold text-red-500'>What are the different ways to manage a state in a React application?</h2>
                <p className='text-xl font-bold mt-2'>Different ways to manage a state in a React application- <br />
                    <span className='ml-10'>1. useReducer : To deal with complex state management the useReducer hook is a powerful provided React hook. It doesn't require third-party dependencies.</span>
                    <br />
                    <span className='ml-10'>2. Custom Hooks: To encompass complex logic into a single accessible hook custom React hooks are very handy. This can be pretty effective for forms, toggles, asynchronous behavior.</span>
                    <br />
                    <span className='ml-10'>3. Data Fetching Libraries:   To fetch, cach, invalidate, and refresh data from external sources, data libraries like React Query is so effective</span>
                </p>
            </div>

            <div className='card-bordered rounded-xl bg-gray-200 lg:px-20 lg:py-4 mb-4'>
                <h2 className='text-2xl font-bold text-red-500'>How does prototypical inheritance work?</h2>
                <p className='text-xl font-bold mt-2'>A feature in javascript which is used to add methods and properties in objects is called Prototypal Inheritance. An object can inherit the properties and methods of another object with this method. Object.getPrototypeOf and Object are being used to get and set the Prototype of an object.
                    <br />
                    The ability to access object properties from another object is being referred by prototypical inheritance. JavaScript prototype add new properties and methods to an existing object constructor. Then JS code inherit properties from a prototype.</p>
            </div>

            <div className='card-bordered rounded-xl bg-gray-200 lg:px-20 lg:py-4 mb-4'>
                <h2 className='text-2xl font-bold text-red-500'>Why you do not set the state directly in React? For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h2>
                <p className='text-xl font-bold mt-2'>We should never set the state directly in React. Some reasons behind it-
                    <br />
                    <span className='ml-10'>If I set state directly, I will lose control of the state across all components.
                    </span>
                    <br />
                    <span className='ml-10'>Setting the state directly does not change this.state immediately. Rather, it creates a pending state transition. This method will only return the present value when accessing it after calling.</span>
                    <br />
                    <span className='ml-10'>After setting the state directly, calling the setProducts() afterward may just replace the update I made.
                    </span>
                </p>
            </div>
        </div>
    );
};

export default Blogs;