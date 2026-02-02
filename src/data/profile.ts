import { FaLinkedin, FaRegIdBadge, FaGithub } from "react-icons/fa6";

export const profile = {
  name: `Harsh Rajesh Shah`,
  headline: `Student @ University of Southern California`,
  email: `hrshah@usc.edu`,
  location: `Los Angeles , California`,
  profileImage: `https://github.com/pm25.png`,
  links: [
    {
      name: `LinkedIn`,
      url: `https://www.linkedin.com/in/harsh-shah16`,
      icon: FaLinkedin
    },
    {
      name: `Résumé`,
      url: `/harshshah-portfolio/pdf/resume.pdf`,
      icon: FaRegIdBadge
    },
    {
      name: `Github`,
      url: `https://github.com/harshshah1618`,
      icon: FaGithub
    }
  ],
  biography: `Hi, I'm <strong>Harsh</strong>! I'm a <em>Computer Science grad student at USC</em> with a thing for <strong>distributed systems</strong> and <strong>backend engineering</strong>. I love the challenge of building software that scales gracefully and the satisfaction when everything just clicks.

<div class="my-2"></div>

Previously worked as a <em>Full-Stack Engineer</em>, and now I'm exploring new problems in <strong>systems design</strong> and <strong>infrastructure</strong>. Seeking <b>Summer 2026 internships</b> where I can contribute, learn, and work alongside talented teams.

<div class="my-2"></div>

Always happy to chat — whether it's about tech, career paths, or your favorite movie. <a href="mailto:hrshah@usc.edu" target="_blank" rel="noopener noreferrer">Reach out anytime!</a>`
};