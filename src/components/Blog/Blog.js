import React from 'react';
import "./Blog.css";

const Blog = () => {
    return (
        <div className='blog-container'>
            <h2>Blogs</h2>
            <div className='blog'>
                <div className='questions'>
                    <h3>How does react work?</h3>
                    <p>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</p>
                </div>

                <div className='questions'>
                    <h3>Describe the differences between props and state?</h3>
                    <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components.Props are primarily used to communicate between parent and child components. Moreover, props cannot be altered inside the child component.The state of a component is internal, i.e., defined inside the component and changeable only within the component.
                    </p>
                </div>

                <div className='questions'>
                    <h3>What are the other ways useEffect can be used besides data loading?</h3>
                    <p>useEffect() will cache the state, handlers and effects of each render, and it will be different from the next one.
                        But the good thing is that you can manipulate when to call the function inside useEffect() by specifying a dependency list or none.</p>
                </div>
            </div>


        </div>
    );
};

export default Blog;