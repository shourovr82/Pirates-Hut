import React from 'react';

const Blogs = () => {
  return (
    <div className='h-full py-10 pb-20'>
      <h1 className='text-center  pt-10 text-3xl font-bold uppercase text-emerald-800'>Most Common Interview Questions</h1>
      <div className='flex  mt-12 justify-center'>


        <div className='flex flex-col gap-5 w-11/12'>
          <div className="collapse rounded-md">
            <input type="checkbox" className="peer" />
            <div className="collapse-title bg-gradient-to-r from-green-700 to-[#030850] text-white font-bold peer-checked:bg-emerald-800 peer-checked:text-white">
              1 What are the different ways to manage a state in a React application?
            </div>
            <div className="collapse-content bg-gradient-to-r from-green-700 to-[#030850] text-primary-content peer-checked:bg-emerald-800 peer-checked:text-white peer-checked:border-t-2 peer-checked:pt-4">
              <p>Local state is perhaps the easiest kind of state to manage in React, considering there are so many tools built into the core React library for managing it.

                useState is the first tool you should reach for to manage state in your components.

                It can take accept any valid data value, including primitive and object values. Additionally, its setter function can be passed down to other components as a callback function (without needing optimizations like useCallback).</p>
            </div>
          </div>
          <div className="collapse rounded-md">
            <input type="checkbox" className="peer" />
            <div className="collapse-title bg-gradient-to-r from-green-700 to-[#030850] text-white font-bold peer-checked:bg-emerald-800 peer-checked:text-white">
              2. How does prototypical inheritance work?
            </div>
            <div className="collapse-content bg-gradient-to-r from-green-700 to-[#030850] text-primary-content peer-checked:bg-emerald-800 peer-checked:text-white peer-checked:border-t-2 peer-checked:pt-4">
              <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects.It is a method by which an object can inherit the properties and methods of another object.Traditionally, in order to get and set the[[Prototype]]of an object, we use Object.getPrototypeOf and Object.</p>
            </div>
          </div>
          <div className="collapse rounded-md" >
            <input type="checkbox" className="peer" />
            <div className="collapse-title bg-gradient-to-r from-green-700 to-[#030850] text-white font-bold peer-checked:bg-emerald-800 peer-checked:text-white">
              3. What is a unit test? Why should we write unit tests?
            </div>
            <div className="collapse-content bg-gradient-to-r from-green-700 to-[#030850] text-primary-content peer-checked:bg-emerald-800 peer-checked:text-white peer-checked:border-t-2 peer-checked:pt-4">
              <p>The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>
            </div>
          </div>
          <div className="collapse rounded-md">
            <input type="checkbox" className="peer" />
            <div className="collapse-title bg-gradient-to-r from-green-700 to-[#030850] text-white font-bold peer-checked:bg-emerald-800 peer-checked:text-white">
              1 What are the different ways to manage a state in a React application?
            </div>
            <div className="collapse-content bg-gradient-to-r from-green-700 to-[#030850] text-primary-content peer-checked:bg-emerald-800 peer-checked:text-white peer-checked:border-t-2 peer-checked:pt-4">
              <p>  There are three frameworks for building web appliations that every frontend developer has heard about : React, Vue.Js and Angular applications that every frontend developer has heard about: React, Vue.js, and Angular.

                React is a UI library, Angular is a fully-fledged front-end framework, while Vue.js is a progressive framework.

                They can be used almost interchangeably to build front-end applications, but they’re not 100 percent the same, so it makes sense to compare them and understand their differences.

                Each framework is component-based and allows the rapid creation of UI features.

                However, they all have a different structure and architecture — so first, we’ll look into their architectural differences to understand the philosophy behind them.</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Blogs;