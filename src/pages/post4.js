import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import "../styles/posts.css";

export default class post4 extends Component {
    render() {
        return (
            <main>
                <article className="centreblog">

                <h1>Artistic Reflection and Creative Process</h1>

                    <p> This reflection document will detail the creative elements of the website and how they serve to express the artistic components which form an integral part of the 
                        interactive media 4 course. The artistic process further aims to illustrate the vision of artworks in relation to the theoretical frameworks and the website as a whole.
                    </p>    

                    <p> The artistic inspiration for the layout and colours of this website comes from roots of art creation. A variety of limestone colours were selected to theme and style 
                        the website so that it resembles a type of transformative digital canvas. This was done by experimenting and generating a colour palette from a combination of 
                        limestone rocks and old canvases found online. Colour gradients were added to three sections on the website to make it look more authentic and aligned with my 
                        vision of an internet artwork. I furthered the design with a light on dark colour palette to create a contrasting effect between the background and the actual 
                        content of each page on the site. This helped to put an emphasis on important information for the user to engage with as well as situate ways in which the website 
                        can be viewed as an artistic piece. 
                    </p>

                    <p> The slow transition from one colour gradient to another has a subtle yet noticeable effect on the users’ senses and experience. This was achieved by implementing a 
                        repeating-background animation which takes various colour combinations into effect. It is vital that this effect does not to put strain on the eyes of users. 
                        Therefore, the colour selection and animation speed are key to achieving the desired aesthetic effect. To many bright and contrasting colours creates an off-putting 
                        effect, while fast animations or transitions makes it harder to focus on and read text. This was revealed after much experimentation with gradients and transitions. 
                        The final result uses a combination of light brown, black and orange limestone colours which slowly transitions to create a delicate and soothing effect while the user 
                        navigates through the website.
                    </p>

                    <p> While each content page remains static for the purpose of user readability, the background and header sections are designed in relation with the vision of 
                        transformative internet art. The planned artworks for the future of this website will have transformative elements that intends to suit the site as a whole. The goal 
                        is to achieve artistic coherence throughout every part of the website to emphasize how it stands as artwork.
                    </p>

                    <section className="next">
                        <Link to="/post3">
                        <button><strong>Previous Blog</strong></button>
                        </Link>

                        <Link to="/blogs">
                        <button><strong>View Blogs</strong></button>
                        </Link>

                        <Link to="/post5">
                        <button><strong>Next Blog</strong></button>
                        </Link>
                    </section>

                </article>
            </main>
        )
    }
}
