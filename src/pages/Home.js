import React, { Component } from 'react';
import "../styles/Home.css";


export default class Home extends Component {
    render() {
        return (

            <main>
                <article className="centre">
                    
                    <h1 className= "titlemid">About the website</h1>

                    <div className="artworks">

                        <p> The purpose of this website is to describe the creation process of Internet Artworks and to gain knowledge about the theoretical frameworks introduced in the 
                            interactive media 4 course. A selection of blog posts is available to offer feedback and reflect on the most important technical and creative components of the 
                            website. Towards the end, the website aims to achieve creative and systematic coherence in all aspects of its design to display critical engagement with the 
                            course and allow it to be considered a creative piece in itself. In future development and upcoming assessments, new artistic components will be introduced using the 
                            React library to meaningfully tie the website together as a whole. The current experimental artwork provides a simple overview for the artistic direction of the website. The 
                            sample below illustrates the current artistic direction of the website and artworks planned for future implementation. These artworks will use transformative gradients 
                            to create mesmerizing effects for the user to experience.
                        </p>
                        
                    </div>

                    <div className="contain">
                        <div className="art"></div>
                    </div>

                </article>
            </main>

        )
    }
}
