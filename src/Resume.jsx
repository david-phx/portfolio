import { useEffect } from "react"
import Timeline from './Timeline'

const resume = {
  summary: "Self-motivated full stack web developer with over 10 years of experience as a freelancer. Skilled in various programming languages including JavaScript, Python, Java, PHP, Perl, HTML, and CSS, with experience in building personal projects and client websites using a variety of frameworks and libraries.",
  skills: [
    {
      title: "JavaScript",
      description: "Proficient in React, Angular, Node.js, Express, and jQuery. Built multiple personal projects and client websites using JavaScript. Developed JavaScript web apps including travel tracker, sorting algorithms visualizer, and card game scoresheet."
    },
    {
      title: "Python",
      description: "Proficient in Django and Flask frameworks. Built various web apps with a Python backend."
    },
    {
      title: "PHP",
      description: "Experienced in creating PHP-based websites, using various content management systems, including WordPress, Drupal, and Joomla, e-commerce systems, and forum software. Developed custom WordPress themes and plugins using PHP."
    },
    {
      title: "Perl",
      description: "Developed Perl CGI scripts including online forum engine."
    },
    {
      title: "SQL",
      description: "Experienced in MySQL and SQLite."
    },
    {
      title: "Java",
      description: "(Spring Boot)"
    },
    {
      title: "HTML/CSS",
      description: "(SASS, Bootstrap)"
    },
    {
      title: "Git/GitHub",
      description: ""
    }
  ],
  experience: [
    {
      time: "05/2022 - present",
      company: "E2 Services",
      logo: "e2services.png",
      location: "Scottsdale, Arizona",
      title: "Web Developer",
      employment: "Part Time",
      description: [
        "Developed and supported company websites, using various technologies and tools: JavaScript, HTML, CSS (Bootstrap), PHP (WordPress), MySQL, Docker, Discourse"
      ]
    },
    {
      time: "07/2016 - 09/2022",
      company: "Anytime Fitness",
      logo: "anytimefitness.png",
      location: "Scottsdale, Arizona",
      title: "Club Owner-Operator",
      employment: "Full Time",
      description: [
        "Opened and operated an Anytime Fitness club, achieving \"Club Purple\" status (top 20% clubs in the US and Canada)",
        "Developed landing pages for marketing campaigns, using JavaScript, HTML, CSS, e-commerce solutions and payment processing integrations (Square/Weebly, PayPal), ad tracking/retargeting/optimizing tools (Facebook Pixel), lead conversion systems (ClickFunnels)",
        "Created marketing email campaigns using HTML, CSS, and CRM systems (Club OS, ClubReady, Anytime Fitness proprietary software tools)"
      ]
    },
    {
      time: "11/2011 - 07/2016",
      company: "RusCarat",
      logo: "ruscarat.png",
      location: "Moscow, Russia",
      title: "Chief Information Officer",
      employment: "Full Time",
      description: [
        "Built from the ground up and managed the back office of a successful jewelry import and wholesale company",
        "Developed ERP-integrated customer portal with jewelry catalog and ordering functionality using PHP (WordPress), MySQL, HTML, and CSS"
      ]
    },
    {
      time: "09/2004 - 10/2011",
      company: "Budo-Center",
      logo: "budocenter.png",
      location: "Moscow, Russia",
      title: "Web Developer / Co-Founder",
      employment: "Part Time",
      description: [
        "Developed and supported various websites, including one of the first martial arts equipment online stores in Russia, the largest Russian-speaking martial arts online community, and other martial arts related websites: banner exchange network, wiki, online catalog",
        "Web technologies and tools used: JavaScript, HTML, CSS, PHP (WordPress, MediaWiki), Perl, MySQL, e-commerce tools (osCommerce, WooCommerce), online forum software (phpBB, Invision Power Board, vBulletin)"
      ]
    }
  ],
  certifications: [
    {
      issuer: "Harvard CS50",
      logo: "harvard.png",
      certs: [
        {
          name: "Introduction to Computer Science",
          link: "https://cs50.harvard.edu/certificates/52064ef8-7f80-41e7-ad59-0bc4aef051ff"
        },
        {
          name: "Web Programming with Python and JavaScript",
          link: "https://cs50.harvard.edu/certificates/cf221208-ba02-4652-a9a6-2f9e416cb8a4"
        },
        {
          name: "Programming with Python",
          link: "https://cs50.harvard.edu/certificates/8ea6c394-e060-4990-92c4-33b70252ba84"
        },
        {
          name: "Artificial Intelligence with Python",
          link: "https://cs50.harvard.edu/certificates/171e1d3b-fc49-4645-97f1-e0cc3a250916"
        }
      ]
    },
    {
      issuer: "IBM",
      logo: "ibm.png",
      certs: [
        {
          name: "Cloud Computing",
          link: "https://courses.edx.org/certificates/b6191714dac041769dce977faed6889f"
        },
        {
          name: "Cloud Development with HTML, CSS, and JavaScript",
          link: "https://courses.edx.org/certificates/486448ad920a42039d753e8b958b53c7"
        },
        {
          name: "Developing Cloud Native Applications",
          link: "https://courses.edx.org/certificates/c9cf06b93f4d4c75bc5b43ffa8ffd1f8"
        },
        {
          name: "Application Development with Node.Js & Express",
          link: "https://courses.edx.org/certificates/3483de5ca8a4458890de70cba5462424"
        }
      ]
    },
    {
      issuer: "Universidad Carlos III de Madrid",
      logo: "uc3m.png",
      certs: [
        {
          name: "Java Programming: Starting to code in Java",
          link: "https://courses.edx.org/certificates/e4a273b4678c45bdbc787b7d76780a0e"
        },
        {
          name: "Writing Good Code",
          link: "https://courses.edx.org/certificates/6a64065321a24db788852a934e452f06"
        },
        {
          name: "Fundamental Data Structures and Algorithms",
          link: "https://courses.edx.org/certificates/5dacd52e0ffd4c53a77a4b9015d37aa1"
        }
      ]
    },
    {
      issuer: "LinkedIn Learning",
      logo: "linkedin.png",
      certs: [
        {
          name: "Agile Foundations",
          link: "https://www.linkedin.com/learning/certificates/a8cbd165026cda2d75d41e75482e240adae3621a6d0564e85b5136feb45eafc4"
        },
        {
          name: "Scrum: The Basics",
          link: "https://www.linkedin.com/learning/certificates/e911b60ec61a308618e8d988b2953cef41d98f5b2c153ce511083a4232d351d9"
        },
        {
          name: "Scrum: Advanced",
          link: "https://www.linkedin.com/learning/certificates/1cb9087dad90aa10b78eeb030dc09af151a904a8e89bde6952c6a1bec25158ff"
        }
      ]
    },
    {
      issuer: "freeCodeCamp",
      logo: "fcc.png",
      certs: [
        {
          name: "Responsive Web Design",
          link: "https://freecodecamp.org/certification/david-phx/responsive-web-design"
        },
        {
          name: "JavaScript Algorithms and Data Structures",
          link: "https://freecodecamp.org/certification/david-phx/javascript-algorithms-and-data-structures"
        }
      ]
    }
  ],
  education: {
    institution: "Moscow State Institute of International Relations (University)",
    logo: "mgimo.png",
    location: "Moscow, Russia",
    time: "1994 - 1999",
    degree: "Master of Economics",
    field: "International Economics"
  }

}

function Resume() {
  useEffect(() => {
    document.title = "David Asatrian - Resume";
  }, []);

  return (
    <>
      <ResumeHeader>Summary</ResumeHeader>
      <p>{resume.summary}</p>
      <p className="my-5 italic text-gray-500 dark:text-gray-400">Authorized to work in the US for any employer.</p>

      <ResumeHeader>Skills</ResumeHeader>
      <Skills />

      <ResumeHeader>Experience</ResumeHeader>
      <Experience />

      <ResumeHeader>Courses and Certificates</ResumeHeader>
      <Certificates />

      <ResumeHeader>Education</ResumeHeader>
      <Education />

    </>
  );
}

function ResumeHeader({ children }) {
  return (
    <h3 className="first:mt-0 mt-7 mb-5 text-xl font-bold border-b text-gray-600 border-gray-300 dark:text-gray-300 dark:border-gray-600">
      {children}
    </h3>
  )
}

function Skills() {
  return (
    <ul className="list-disc list-outside ml-5 marker:text-gray-600 marker:dark:text-gray-300">
      {resume.skills.map(skill => (
        <li
          key={skill.title}
          className="mb-4"
        >
          <span className="font-bold">{skill.title}: </span>
          {skill.description}
        </li>
      ))}
    </ul>
  )
}

function Experience() {
  return (
    <Timeline>
      {resume.experience.map(job => (
        <div
          key={job.company}
        >
          <Timeline.Point />
          <Timeline.Item>
            <Timeline.Time>{job.time}</Timeline.Time>
            <Timeline.Contents>
              <ResumeCard
                logo={job.logo}
                company={job.company}
                location={job.location}
              >
                <div className="flex flex-row justify-between">
                  <span className="font-semibold">{job.title}</span>
                  <span className="text-xs px-2 py-1 rounded-md whitespace-nowrap h-min w-min text-sky-800 bg-sky-100 dark:text-sky-100 dark:bg-sky-900">{job.employment}</span>
                </div>
                <ul className="list-disc list-outside mt-5 marker:text-gray-400 marker:dark:text-gray-500">
                  {job.description.map((line, index) => (
                    <li
                      key={index}
                      className="text-gray-600 dark:text-gray-400"
                    >
                      {line}
                    </li>
                  ))}
                </ul>
              </ResumeCard>
            </Timeline.Contents>
          </Timeline.Item>
        </div>
      ))}
    </Timeline>
  )
}

function Certificates() {
  return (
    <ul className="marker:text-gray-600 marker:dark:text-gray-300">
      {resume.certifications.map(certification => (
        <li
          key={certification.issuer}
          className="mb-5 flex flex-row"
        >
          <img src={`images/logos/${certification.logo}`} className="h-max mr-3 rounded-md dark:saturate-50 dark:brightness-90" />
          <div>
            <div className="font-bold -mt-1">{certification.issuer}</div>
            {certification.certs.map(cert => (
              <span
                key={cert.name}
                className="after:content-['_•_'] last-of-type:after:content-[''] text-gray-500 dark:text-gray-400"
              >
                <a href={cert.link} className="text-sky-700 dark:text-sky-200 hover:underline" target="_blank">
                  {cert.name}
                </a>
              </span>
            ))}
          </div>
        </li>
      ))}
    </ul>
  )
}

function Education() {
  return (
    <Timeline>
      <Timeline.Point />
      <Timeline.Item>
        <Timeline.Time>{resume.education.time}</Timeline.Time>
        <Timeline.Contents>
          <ResumeCard
            logo={resume.education.logo}
            company={resume.education.institution}
            location={resume.education.location}
          >
            <span className="font-semibold">{resume.education.degree}</span> in <span className="font-semibold">{resume.education.field}</span>
          </ResumeCard>
        </Timeline.Contents>
      </Timeline.Item>
    </Timeline>
  )
}

function ResumeCard(props) {
  return (
    <div className="flex flex-row">
      <img src={`images/logos/${props.logo}`} className="h-max mr-2 rounded-md dark:saturate-50 dark:brightness-90" />
      <div className="w-full px-1">
        <div className="flex flex-row justify-between content-start text-gray-500 dark:text-gray-400">
          <div className="font-semibold grow">
            {props.company}
          </div>
          <div className="flex items-center shrink ml-1">
            <svg className="w-4 h-4 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="currentColor">
              <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
            </svg>
            <div className="text-sm text-left h-min w-min md:w-max shrink">{props.location}</div>
          </div>
        </div>
        <div className="mt-1">{props.children}</div>
      </div>
    </div>
  )
}

export default Resume
