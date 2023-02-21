import { useEffect } from 'react'
import Timeline from './Timeline'
import resume from './resume.json'

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
