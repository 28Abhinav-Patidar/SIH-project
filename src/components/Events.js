import React from "react";
import "./Events.css";

const Events = () => {
  const events = [
    {
      id: 1,
      title: "WittyHacks ",
      organizer: "NMIMS Indore",
      date: "15th October 2025",
      description: "A 36-hour coding marathon focusing on AI & Web3.",
      link: "https://wittyhacks.in/", // your custom link
    },
    {
      id: 2,
      title: "Hack India",
      organizer: "IIT",
      date: "22nd November 2025",
      description:
        "A nationwide hackathon for building solutions in e-governance and digital India.",
      link: "https://hackindia.xyz/",
    },
    {
      id: 3,
      title: "Hackathon Party",
      organizer: "Softwire",
      date: "5th December 2025",
      description:
        "Innovation challenge with focus on healthcare, fintech, and edtech startups.",
      link: "http://www.hackathonparty.com/",
    },
    {
      id: 4,
      title: "Hack Indore ",
      organizer: "Shri G.S Institute of Technology and Research",
      date: "18th January 2026",
      description:
        "An open hackathon for all developers, students, and tech enthusiasts in Indore.",
      link: "https://unstop.com/hackathons/hackindore-30-shri-g-s-institute-of-technology-science-indore-1541844",
    },
    {
      id: 5,
      title: "Mosaicbyt ",
      organizer: "Maxim",
      date: "30th September 2025",
      description:
        "mosAIc is a 2-week AI buildathon where you stop scrolling and start shipping.",
      link: "https://mosaicbytpf.devfolio.co/",
    },
    {
      id: 6,
      title: "Hack Odisha",
      organizer: "NIT Rourkela",
      date: "26th September 2025",
      description:
        "A 36-hour hybrid hackathon organized by Webwiz, the official tech club of NIT Rourkela, in collaboration with The Namespace Community.",
      link: "https://mosaicbytpf.devfolio.co/",
    },
  ];

  return (
    <div className="events-container">
      <h2 className="events-heading">Upcoming Hackathons & Events</h2>
      <div className="events-grid">
        {events.map((event) => (
          <div key={event.id} className="event-card">
            <h3>{event.title}</h3>
            <p>
              <strong>Organizer:</strong> {event.organizer}
            </p>
            <p>
              <strong>Date:</strong> {event.date}
            </p>
            <p>{event.description}</p>

            {/* Custom button for external link */}
            {event.link && (
              <a href={event.link} target="_blank" rel="noopener noreferrer">
                <button className="know-more-btn">Know More</button>
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
