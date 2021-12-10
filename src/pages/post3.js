import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import "../styles/posts.css";

export default class post3 extends Component {
    render() {
        return (
            <main>
                <article className="centreblog">

                <h1>Technical Reflection and Creation Process</h1>

                    <p> This reflective paper will document the technical creation process which led to the current state of the website. The aim is to record the development of the site 
                        and how future reflections will show additional improvements to the already existing content. In its early development, the website only contained the most important
                        elements that were required to structure various sections and information.   
                    </p>  

                    <p> This includes a home page to help contextualize what the site it about by introducing topics that the user can expect to find throughout the site. A blog section was 
                        created as a holding place for discussions about theoretical engagement and reflective work. The internet art page focusses on developing and implementing artworks 
                        as outlined in the assignment brief. It will be used to experiment with ideas about internet art and detail the processes that created them. It is important that 
                        this section ties the site together as a whole to communicate the artistic intension of the website to the user. The final wireframe section gives a clear indication 
                        of the websites conceptual structure, the layout of sections, interactive elements and how they are presented.
                    </p>

                    <p> Considerations about the spacing between various elements was a crucial endeavour. This is important for the overall readability of content and to prevent the user 
                        from feeling overwhelmed by cluttered information. This was achieved by creating a grid layout for the blog section, which helped to distribute space more equally 
                        in the centre of the webpage and elevate the overall aesthetic of the site. The display of text and other core content is positioned in the middle of each page 
                        which is designed to direct the readers focus and give a steady flow of information without causing discomfort in the readers eyes. 
                    </p>

                    <p> The website has a slight performance issue when it comes to loading images on the blog and wireframe page. To counteract this for the time being, every image on 
                        the website was compressed and given a lower quality resolution to reduce file sizes. This helped the website load content slightly quicker, but further iteration 
                        is be necessary. Another technical challenge involves the sites compatibility with responsive design. This is due to a technical fault where the header section does 
                        not work properly with the main tabs section. This can be fixed by individually reworking the main text element in the CSS file or looking at an alternative way merge 
                        both sections.         
                    </p>

                    <section className="next">
                        <Link to="/post2">
                        <button><strong>Previous Blog</strong></button>
                        </Link>

                        <Link to="/blogs">
                        <button><strong>View Blogs</strong></button>
                        </Link>

                        <Link to="/post4">
                        <button><strong>Next Blog</strong></button>
                        </Link>
                    </section>

                </article>
            </main>
        )
    }
}
