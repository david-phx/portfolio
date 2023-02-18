import { useEffect } from 'react'
import PortfolioCard from './PortfolioCard'
import Timeline from "./Timeline"

const portfolioProjects = [
  {
    title: "Portfolio",
    time: "2023",
    screenshot: "portfolio.png",
    description: "This website. Isn't recursion beautiful?",
    tech: ["JavaScript", "React", "Vite", "Tailwind CSS"],
    links: [
      {
        title: "Source Code",
        url: "https://github.com/david-phx/portfolio"
      }
    ]
  },
  {
    title: "US Travel Tracker",
    time: "2022",
    screenshot: "travel-tracker.png",
    description: "My capstone project for Harvard CS50's \"Web Programming with Python and JavaScript\" course. It's a web application that helps users track their travels across the US all the way to hitting the ultimate goal of visiting all 50 states, awarding them with fun achievements as they progress.",
    tech: ["Python", "Django", "JavaScript", "Bootstrap"],
    links: [
      {
        title: "Demo",
        url: "https://travel-tracker.asatrian.com/"
      },
      {
        title: "Source Code",
        url: "https://github.com/david-phx/travel-tracker"
      }
    ]
  },
  {
    title: "Sorting Algorithms Visualizer",
    time: "2022",
    screenshot: "sorting-visualizer.png",
    description: "",
    tech: ["JavaScript", "Bootstrap"],
    links: [
      {
        title: "Demo",
        url: "https://david-phx.github.io/sorting-visualizer/"
      },
      {
        title: "Source Code",
        url: "https://github.com/david-phx/sorting-visualizer"
      }
    ]
  },
  {
    title: "UNO/DOS Scoresheet",
    time: "2022",
    screenshot: "uno-scoresheet.png",
    description: "",
    tech: ["JavaScript", "Bootstrap"],
    links: [
      {
        title: "Scoresheet",
        url: "https://david-phx.github.io/uno-scoresheet/"
      },
      {
        title: "Source Code",
        url: "https://github.com/david-phx/uno-scoresheet"
      }
    ]
  },
  {
    title: "E2 Services",
    time: "2022",
    screenshot: "e2services.png",
    description: "",
    tech: ["JavaScript", "Bootstrap"],
    links: [
      {
        title: "e2services.us",
        url: "https://www.e2services.us/"
      }
    ]
  },
  {
    title: "Immigration Blog",
    time: "2016",
    screenshot: "",
    description: "",
    tech: ["PHP", "WordPress"],
    links: [
      {
        title: "Archive Snapshot",
        url: "https://web.archive.org/web/20160305033211/http://mfceo.ru/"
      }
    ]
  },
  {
    title: "Personal Website & Blog",
    time: "1997-2016",
    screenshot: "mfceo-ru.png",
    description: "",
    tech: ["JavaScript", "PHP", "WordPress"],
    links: [
      {
        title: "Archive Snapshot",
        url: "http://web.archive.org/web/20150510024707/http://www.dzhan.ru/"
      }
    ]
  },
  {
    title: "Shorinji Kempo",
    time: "2011",
    screenshot: "shorinjikempo-ru.png",
    description: "",
    tech: ["PHP", "WordPress"],
    links: [
      {
        title: "Archive Snapshot",
        url: "https://web.archive.org/web/20130612211102/https://www.shorinjikempo.ru/"
      },
      {
        title: "Current Version",
        url: "https://www.shorinjikempo.ru/"
      }
    ]
  },
  {
    title: "World of Warcraft WordPress Theme & Guild Website",
    time: "2007",
    screenshot: "wow-wp-theme.png",
    description: "",
    tech: ["PHP", "WordPress"],
    links: [
      {
        title: "Theme Source Code",
        url: "https://github.com/david-phx/warcraft-wp-theme"
      },
      {
        title: "Archive Snapshot",
        url: "http://web.archive.org/web/20081217154651/http://www.theafkers.org/"
      }
    ]
  },
  {
    title: "Wordpress Social Bookmarks Plugin",
    time: "2007",
    screenshot: "bookmarks-wp-plugin.png",
    description: "",
    tech: ["PHP", "WordPress"],
    links: [
      {
        title: "Source Code",
        url: "https://github.com/david-phx/bookmarkz-wp-plugin"
      },
      {
        title: "Archive Snapshot",
        url: "http://web.archive.org/web/20150510024748/http://www.dzhan.ru/blog/bookmarkz"
      }
    ]
  },
  {
    title: "Rock Band Website",
    time: "2002",
    screenshot: "the-bastards.png",
    description: "",
    tech: ["HTML", "CSS"],
    links: [
      {
        title: "Archive Snapshot",
        url: "https://web.archive.org/web/20030611193617/http://www.bastards.ru/"
      }
    ]
  },
  {
    title: "Forum Engine in Perl",
    time: "2001",
    screenshot: "perl-forum.png",
    description: "",
    tech: ["Perl"],
    links: [
      {
        title: "Source Code",
        url: "https://github.com/david-phx/forum-software-perl"
      }
    ]
  },
  {
    title: "Spanish Bullfighting",
    time: "1998",
    screenshot: "corrida-ru.png",
    description: "",
    tech: ["PHP", "WordPress"],
    links: [
      {
        title: "corrida.ru",
        url: "http://www.corrida.ru/"
      },
      {
        title: "Archive Snapshot",
        url: "https://web.archive.org/web/20000310100550/http://corrida.hobby.ru/news.html"
      }
    ]
  }
]

const portfolioTimeline = portfolioProjects.map(project => (
  <Timeline.Item
    key={project.title}
  >
    <Timeline.Point />
    <Timeline.Time>{project.time}</Timeline.Time>
    <Timeline.Contents>
      <PortfolioCard>
        <PortfolioCard.Screenshot
          screenshot={project.screenshot}
        />
        <PortfolioCard.Contents>
          <PortfolioCard.Title>
            {project.title}
          </PortfolioCard.Title>
          <PortfolioCard.Description>
            {project.description}
          </PortfolioCard.Description>

          <ul className="flex flex-wrap gap-2 my-5">
            {project.tech.map(tech => (
              <PortfolioCard.TechBadge
                key={tech}
                tech={tech}
              />
            ))}
          </ul>

          {project.links.map(link => (
            <PortfolioCard.LinkButton
              key={link.url}
              title={link.title}
              url={link.url}
            />
          ))}

        </PortfolioCard.Contents>
      </PortfolioCard>
    </Timeline.Contents>
  </Timeline.Item>
));

function Portfolio() {
  useEffect(() => {
    document.title = "David Asatrian - Portfolio";
  }, []);

  return (
    <>
      <p className="mb-5">These are some of the projects I've created for myself, friends, and clients in over 20 years of web development as a
        hobbyist and a freelancer. The projects listed here are not all of my work, but rather the most significant ones for me for one reason or another.
        Some of the websites no longer exist, but thanks to web.archive.org, they're still accessible on the Internet.</p>

      <Timeline>
        {portfolioTimeline}
      </Timeline>
    </>
  )
}

export default Portfolio
