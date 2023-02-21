import { useEffect } from 'react'
import PortfolioCard from './PortfolioCard'
import Timeline from "./Timeline"

const portfolioProjects = [
  {
    title: "Portfolio",
    time: "2023",
    screenshot: "portfolio.png",
    description: "This website. Isn't recursion beautiful?",
    tech: ["React", "JavaScript", "Vite", "HTML", "CSS", "Tailwind CSS", "CI/CD", "GitHub Actions"],
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
    tech: ["Django", "Python", "JavaScript", "HTML", "CSS", "Bootstrap"],
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
    description: "My final project for Harvard CS50's \"Introduction to Computer Science\" course. A visualizer for sorting algorithms including select, bubble, and merge, using only vanilla JavaScript, HTML, and Bootstrap CSS framework.",
    tech: ["JavaScript", "HTML", "CSS", "Bootstrap"],
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
    description: "We like to play UNO and DOS, and after we lost our paper scoresheet once again, this web app was the solution for our problem I came up with.<br /><br />Built with JavaScript, HTML, and CSS (Bootstrap), has responsive design so is perfectly usable on phones and tablets, and saves player names and scores in browser's local storage.<br /><br />Feel free to use if you're into UNO/DOS too. ;)",
    tech: ["JavaScript", "HTML", "CSS", "Bootstrap"],
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
    description: "A clean responsive landing page for a consulting agency.",
    tech: ["JavaScript", "HTML", "CSS", "Bootstrap"],
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
    screenshot: "mfceo-ru.png",
    description: "A rather short-lived blog about the US immigation system and my personal immigation journey. Launching the website, tweaking the WordPress theme, setting up the plugins, etc, was enjoyable, writing the blog itself - not so much to be honest. I have to admit that I'm definitely better at developing websites than at creating content for them.<br /><br />Although this ChatGPT thing looks promising...",
    tech: ["PHP", "WordPress", "HTML", "CSS"],
    links: [
      {
        title: "Archive Snapshot",
        url: "https://web.archive.org/web/20160305033211/http://mfceo.ru/"
      }
    ]
  },
  {
    title: "Personal Website & Blog",
    time: "1998-2016",
    screenshot: "dzhan-ru.png",
    description: "A personal website was the first thing I created when I discovered this wonderful thing called \"The Internet\" in 1998. It was essentially something like a modern social media profile with photos, interests, links, and whatnot, but five years before MySpace and six years before Facebook.<br /><br />    And boy it was horrible! Background images, 3D effects, animated gifs, Comic Sans, a midi song playing when you opened the website - the whole nine yards. Buy hey, these were the late 90s, that's how the Internet looked like back then.<br /><br />After many years, iterations, ideas, domains, hosters, and hours spent coding and writing, it ended up as a somewhat boring looking WordPress blog, until it was completely retired around 2016.",
    tech: ["JavaScript", "PHP", "WordPress", "HTML", "CSS"],
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
    description: "A website about the martial arts style I was practicing until I moved to the US in mid-2010s.<br /><br />I donated the website to my martial arts school when I moved, and after neglecting it for a few years, it was rebuilt into something completely different.",
    tech: ["PHP", "WordPress", "HTML", "CSS", "JavaScript"],
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
    description: "Between 2005 and 2008, I spent a lot of time playing World of Warcraft. Like A LOT.<br /><br />This was a 2-in-1 project - a custom World of Warcraft WordPress theme and a website for the WoW guild I was playing in - complete with a forum, item tooltips, DKP system. Took a lot of tinkering with PHP, JavaScript, MySQL, HTML, and CSS.<br /><br />Ah, the good old nerd days...",
    tech: ["PHP", "WordPress", "JavaScript", "HTML", "CSS"],
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
    description: "In the mid-2000s social sharing and bookmarking were gaining popularity, but the WordPress developer community hadn't yet really caught up with it. Unable to find a social sharing plugin I'd like, I ended up writing my own using PHP.<br /><br />There are a lot of great social media plugins for WordPress these days. Please don't use mine.",
    tech: ["PHP", "WordPress", "HTML", "CSS"],
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
    description: "This was my first \"client\" project - a website for a rock band my friends were in. And by \"client\" I mean a website I made for someone else, not \"I got paid to make it\" unless you count free show access as a form of payment. Proper clients came later. On second thought, free tickets are indeed a form of payment, so I did get paid for this one.<br /><br />The website went through a few iterations, the first few being completely abysmal. This one was more or less OK. The band eventually switched to social media to interact with fans and the website was retired.",
    tech: ["HTML", "CSS", "JavaScript"],
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
    description: "I had been using a free, external embeddable forum service on one of my projects, which functioned as a SaaS before the term SaaS was widely used. However, this service was unexpectedly discontinued. Faced with the need to find a new solution to continue discussions on the website, I decided to develop my own forum engine in Perl instead of switching to another unreliable service. I replicated the appearance and functionality of the discontinued service, while utilizing a completely different programming language.<br /><br />As open-source forum engines such as phpBB, Phorum, SMF, and bbPress for WordPress continued to improve over time, I ultimately retired my script after using it for a few years and transitioned to utilizing an open-source option.",
    tech: ["Perl", "HTML", "CSS"],
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
    description: "My first \"real\" web development project was a website dedicated to the history, tradition, and rituals surrounding Spanish bullfighting.<br /><br />The project was inspired by my visit to a traditional bullfighting show during my month-long study abroad program in Spain in 1997. Upon my return to Russia, I noticed a lack of resources on the topic in the Russian language, and decided to create a website to fill this void.<br /><br />The website went through several iterations, using various technologies such as pure HTML/CSS/JavaScript, HTML with SSI, Textpattern CMS, and ultimately settling on WordPress.<br /><br />Although it has not been updated since 2013, the website is still up and running.",
    tech: ["PHP", "WordPress", "HTML", "CSS", "JavaScript"],
    links: [
      {
        title: "corrida.ru",
        url: "http://www.corrida.ru/"
      },
      {
        title: "Archive Snapshot from Y2K",
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
            <div dangerouslySetInnerHTML={{ __html: project.description }} />
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
