import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import "../styles/posts.css";
import Picone from '../images/artone-min.png';
import Pictwo from '../images/arttwo-min.png';

export default class post8 extends Component {
    render() {
        return (
            <main>
                <article className="centreblog">

                <h1>Technical Reflection 2</h1>

                    <p> It is an expected requirement to implement the early prototype for an artwork using the React js Library. This reflection will detail step by step how I assembled 
                        the components necessary to construct the current version of the proposed artwork. First, I will highlight the most important challenges and instances where I failed 
                        while working on this section of the assignment.
                    </p>    

                    <p> My initial idea to create artworks from a combination of linear and radial colour gradients was quickly expunged when I began working with React. This is mainly due to 
                        the fact that I underestimated its steep learning curve and how it utilizes tools to create the vital components that were needed for my artwork project. I succeeded in 
                        an exercise to create a button which gradually changes the background colour within a section of the webpage. However, this was a long way off creating an interface that 
                        took multiple colours, as selected by the user, to then produce a background gradient that is either radial or linear. This challenged me to understand the integration 
                        and function of external dependencies like Multilingual User Interface, which was needed to create multiple grids and overlaying pop-up cards. I decided to discard this 
                        idea of an internet artwork and though of simpler methods that were more practical and would still suit my website. 
                    </p>

                    <p> In the next attempt, I started with what will be the final React internet artwork. While considering alternative methods to produce an artwork, the website ‘This X does 
                        not exist’ provided a practical solution to create artworks that aren’t real in the sense that they weren’t created by someone who is real. Using AI to produce generative 
                        artworks, it only became a question of accessing the source of the websites image gallery and linking it to my React application. On the next step, I created a component 
                        which draws an image onto a canvas and by importing useRef and useState, React is able to determine when to change a designated image file. With every reload of the browser 
                        page, a newly generated artwork will appear in the canvas. A rectangle was added as a border to fill every new image that is loaded.
                    </p>

                    <p> While this is the current state of my React artwork, I’ve yet to successfully establish the proper routing to connect the website and publish it on Github. Regardless, 
                        the fault is mine but it is in my own best interest to showcase this area of work through the display of images below, although this does not 
                        excuse the fact that the React library is not embedded in my source code. As such, I accept the incurred penalties. 
                    </p>

                    <section className="artprev">
                        <img className="wire" src={Picone} alt="pic"/>
                        <img className="wire" src={Pictwo} alt="pic"/>
                    </section>


                    <section className="next">
                        <Link to="/post7">
                        <button><strong>Previous Blog</strong></button>
                        </Link>

                        <Link to="/blogs">
                        <button><strong>View Blogs</strong></button>
                        </Link>

                        <Link to="/post9">
                        <button><strong>Next Blog</strong></button>
                        </Link>
                    </section>

                </article>
            </main>
        )
    }
}
