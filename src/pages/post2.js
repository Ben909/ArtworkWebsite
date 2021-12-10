import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import "../styles/posts.css";

export default class post2 extends Component {
    render() {
        return (
            <main>
                <article className="centreblog">

                <h1>Analysis of The Wrong - Pavilion Poster</h1>

                    <p> The Wrong – Pavilion Poster, an artwork by Protey Temen, will be analysed using ‘The Work of Art in the Age of the Internet’ as a theoretical framework. This internet 
                        artwork confirms the transformation and move away from art as having a distinct aura to now being the subject of reproduction. The way visual artworks are constructed, 
                        viewed and understood have been altered in unique ways to suit this transformation. It is more so the reproduction of artworks that is favoured by the display system, 
                        than the unique artefact itself. “The reproduction no longer serves its traditional function as a stand-in for the original artwork, whose aura evinced a desire to be 
                        experienced in the flesh” (Carrier, 2020). The possibility for an artwork to reach a high number of viewers eclipses the desire to view the source of a reproduction.
                    </p>

                    <p> A review of the technological advancements over the last few decades makes it evident that internet art is an ever-changing phenomenon. It adapts in relation to the 
                        development of software technologies and the capacity available for artists to express their work. Modern techniques, tools and materials which facilitate the making 
                        of an artistic object have changed with the advent of technology to create new possibilities for the production, consumption and dissemination of artworks. Unlike 
                        timeless renowned artists, most of today’s artists have embraced technology as a means to monetize and create their art. In 2018 the online art market was valued 
                        at 4.64 bilion US dollars and it is estimated that by 2024 the world wide internet art market will be worth 9.32 bilion US dollars (ValueWalk, 2021).
                    </p>

                    <p> It is evident how the age of social media and the internet has not only changed our definition of art but also how we interact with it. We approach and explore the 
                        qualities of internet artworks through the change in its medium that is brought to us by the development of the internet. Online support and social media platforms 
                        offer their own opportunities to present a new artistic landscape for us all. The result of this shift in artistic practise redefines and interrogates the process art 
                        analysis. This poses various questions such as, what is the overall message of the artwork? What does the artist want the viewer to notice? What is the theme of the 
                        artwork? The answers, although few and far between, can be narrowed down to depicting the global phenomenon and the peculiarities of the period and environment and 
                        events which surround the artist.
                    </p>

                    <p> Internet artworks draw on data from other internet materials and websites, which helps give them their distinctive dynamics and transience. Such is the case in the 
                        artwork The Wrong – Pavilion Poster, which presents elusive and sometimes anarchic art which uses the internet as its primary material. Through this art, the 
                        relationship between image and idea demonstrates the conceptual experience of reality. It uses the more or less abstract signs to contribute to the illustration of a 
                        concept. To this end, the artwork uses visual language to describe a reality and at the same time, communicate the rise of free artistic expression.
                    </p>

                    <aside className="reference">
                        <p><strong>References</strong><br></br>Carrier, D. (2020).<i>The Work of Art in the Age of the Internet</i><br></br>
                        Mbembe, A. (2015). <i>Decolonising knowledge and the question of the archive.</i><br></br>
                        The Growth Trajectory Of The Global Online Art Market - ValueWalk
                        </p>
                    </aside>

                    <section className="next">
                        <Link to="/post1">
                        <button><strong>Previous Blog</strong></button>
                        </Link>

                        <Link to="/blogs">
                        <button><strong>View Blogs</strong></button>
                        </Link>

                        <Link to="/post3">
                        <button><strong>Next Blog</strong></button>
                        </Link>
                    </section>

                </article>
            </main>
        )
    }
}
