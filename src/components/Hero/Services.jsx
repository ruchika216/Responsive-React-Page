import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaHotel } from "react-icons/fa";
import Title from "./Title";
export default class Services extends Component {
    state = {
        services: [
            {
                icon: <FaCocktail />,
                title: "Free Cocktails",
                info:
                    "never should have switched from Scotch to Martinis."
            },
            {
                icon: <FaHiking />,
                title: "Endless Adventure",
                info:
                    "Man cannot discover new oceans unless he has the courage to lose sight of the shore."
            },
            {
                icon: <FaShuttleVan />,
                title: "Free Shuttle",
                info:
                    "We save your energy and provide you best travelling medium. "


            },
            {
                icon: <FaHotel />,
                title: "Best Hotels",
                info:
                    "Super-luxury hotels are being built in outer space. The new type of heaven is being offered to humans."


            }
        ]
    };
    render() {
        return (
            <section className="services">

                <div className="services-center">
                    {this.state.services.map(item => {
                        return (
                            <article key={`item-${item.title}`} className="service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>
                        );
                    })}
                </div>
            </section>
        );
    }
}
