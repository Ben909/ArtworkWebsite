import React, { Component } from 'react'
import "../styles/Wireframe.css";
import First from '../images/wireframe-min.png';
import Second from '../images/Palette-min.png';


export default class Contact extends Component {
    render() {
        return (
            <main>
                <article className="centre">

                    <h1 className="titlemid">Website Reflection</h1>

                    <p>Initially I created wireframes to get an idea for layout of various sections throughout the website. This has helped me to allocate space and margins more 
                    effectively and to improve aesthetics. In its current state, the website presents the overall idea of an artistic piece but lacks elements and characteristics 
                    which exemplifies and communicates the integration of artworks with the site as a whole. The future development of this website will be more focused on illustrating
                    interactive artworks that is also inspired by the theoretical framework of the course. The goal is to create a unique experience for the user and have them feel 
                    satisfied with the environment established by the website. For the colour palette of the website, I decided to use a variety of light brown to orange colours which 
                    creates a relaxing overall tone for the website. The colours are also inspired by the vision of the website, which represents a digital canvas as a medium to 
                    express artworks. My idea was to give the website an older appearance while still using modern technology to create artworks. This helps the website to be aligned 
                    with the theories discussed in “The Work of Art in the Age of the Internet’’.
                    </p>

                    <section className="styleguidetwo">
                        <img className="wire" src={First} alt="pic"/>
                        <img className="wire" src={Second} alt="pic"/>
                    </section>
                </article>
            </main>
        )
    }
}
