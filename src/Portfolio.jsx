import { useEffect } from 'react'
import PortfolioCard from './PortfolioCard'
import Timeline from './Timeline'
import portfolioProjects from './portfolio.json'

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
