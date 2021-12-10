import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import "../styles/posts.css";

export default class post9 extends Component {
    render() {
        return (
            <main>
                <article className="centreblog">

                <h1>Artistic Reflection 2</h1>

                <p> The most recent changes and additions that were added to the website has caused a slight shift in the vision of the website and how it seeks to communicate these 
                    changes through its content. This reflection aims to detail the majority of these changes and to explain the reasons for various implementations regarding the 
                    artistic vision of the website.
                </p>    

                <p> There have been a few minor changes to the arrangement of colour gradients and how they transition throughout the website. The speed at which transitions occur 
                    have been slightly increased to create more noticeable effect while not heavily distracting the reader’s attention. This steady flow of angular transitions makes 
                    the website less static and gives it an environment that is meant to relax the senses to the point of being comfortable. While it must be noted that not all users 
                    share the same experience, the goal was to practise and increase the overall aesthetic quality of the website.
                </p>

                <p >Upon revision of the idea to create an artwork within which the user creates their own unique set of colour gradients using the available tools, I have concluded 
                    that it is a task that cannot be undertaken, given my current technical competence to produce the necessary software which would enable it. I instead came across 
                    innovative ideas that were not only inspired by the work of fellow students, but by the power that comes with AI generated artworks and how easily accessible they 
                    are. For this reason, generative art has become the focus point in terms of the artistic piece which must be included with the React js Library. The website “This X 
                    does not exist” contains stunning galleries based on various topics which generates new imagery each time the page is refreshed. I believe it will serve a role in 
                    tying the theoretical frameworks introduced in the course as well as emphasize the vision of my website as an artistic piece.
                </p>

                <p> On a more critical note, I think my website falls short in many areas to exemplify and deliver the qualities that would otherwise help it to stand out. Additional 
                    work is required throughout every section to tie the website together as a whole. The header for example, should visually indicate to the user which tab they currently 
                    have selected. Every detail lends itself to the entire integration of the website. Towards the final submission, each element must interact and meaningfully communicate 
                    the intention of myself as designer of the website.
                </p>

                    <section className="next">
                        <Link to="/post8">
                        <button><strong>Previous Blog</strong></button>
                        </Link>

                        <Link to="/blogs">
                        <button><strong>View Blogs</strong></button>
                        </Link>

                        <Link to="/post10">
                        <button><strong>Next Blog</strong></button>
                        </Link>
                    </section>

                </article>
            </main>
        )
    }
}
