const profileData = {
  title: "Resume",
  name: "Milan Cvetic",
  sub_title: "Senior System Engineer",
  logoURL: "assets/images/dp.jpg",
  about: {
    intro: `Insightful Information Technology Manager/Engineer with 20 years of IT leadership experience, including infrastructure, application support, and security services oversight. Dedicated to customer satisfaction with focused delivery of technical solutions. Proven leader in directing operations, maintenance, and support of complex systems. Develops creative business solutions, leveraging diverse methodologies and delivering engineering solutions for leading organizations. Highly adept in requests for proposal development, technology needs assessments, and staff training..`,
    contact: {
      email: "psyunix@gmail.com",
      phone: "+808-two84-zero781",
      address: "Honolulu, Hawaii",
    },
  },
  links: [
    {
      title: "LinkedIn",
      src: "https://www.linkedin.com/in/milancvetic",
      iconClass: "fa-brands fa-linkedin-in",
    },
    {
      title: "Github",
      src: "https://github.com/imvpn22",
      iconClass: "fa-brands fa-github",
    },
    {
      title: "Codepen",
      src: "https://codepen.io/imvpn22",
      iconClass: "fa-brands fa-codepen",
    },
  ],

  skills: [
  {
    title: "Languages",
    value: "HTML5, CSS3, TypeScript, JavaScript, Python, Bash, PowerShell",
  },
  {
    title: "Frameworks/Libraries",
    value: "ReactJS, React-Native, Redux, NodeJS-Express, NextJS, Angular, Ansible, Helm",
  },
  {
    title: "Cloud Platforms",
    value: "Microsoft Azure, AWS, Google Cloud Platform (GCP)",
  },
  {
    title: "Virtualization & Infrastructure",
    value: "OpenStack, VMware vSphere, ESXi, NSX, vCenter, Hybrid Cloud Architectures",
  },
  {
    title: "DevOps & Automation",
    value: "Docker, Kubernetes, Terraform, Git, Jenkins",
  },
  {
    title: "Networking & Security",
    value: "VPN, Firewalls, Load Balancers, Identity & Access Management (IAM), Zero Trust Security, Encryption",
  },
  {
    title: "CI/CD & Monitoring",
    value: "GitHub Actions, GitLab CI/CD, Prometheus, Grafana, ELK Stack, Splunk",
  },
  {
    title: "Enterprise Technologies",
    value: "SAS Viya, Linux Administration (RHEL, Ubuntu), Windows Server, PostgreSQL, MySQL",
  },
  {
    title: "Others",
    value: "Git, Jenkins, AWS, YAML, JSON",
  },
],

  experiences: [
    {
      organization: "SAS Institute",
      title: "Senior System Arhitect",
      date: "Dec 2022 - Present",
      details: [
        `Led the architecture, deployment, and maintenance of SAS Viya environments across Azure, AWS, GCP, and OpenStack, ensuring high availability, security, and performance optimization.`,
        `Oversee VMware virtualization strategies to maintain efficient resource allocation and system scalability for production and development environments.`,
        `Drive DevOps and CI/CD automation using Docker, Kubernetes, Git, and Terraform, streamlining infrastructure provisioning, application deployment, and system monitoring.`,
        `Troubleshoot and resolve complex system issues, minimizing downtime and ensuring seamless performance for risk research and quantitative solutions.`,
        `Implement cloud security best practices, identity and access management (IAM), encryption, and compliance frameworks to align with enterprise security policies.`,
        `Optimize network configurations and server environments for on-premises and cloud-based infrastructures, ensuring seamless hybrid cloud integration.`,
        `Collaborate with development and data science teams to provide scalable, secure, and efficient computing environments for risk modeling and advanced analytics.`,
        `Continuously evaluate and integrate emerging cloud and DevOps technologies to enhance system reliability, cost efficiency, and operational resilience.`,
      ]
    },

    {
      organization: "Kamakura Corporation",
      title: "Director of Enterprise Information Technology",
      date: "Jun 2019 - Aug 2022",
      details: [
        "Maintained internal and client-facing systems across cloud and physical environments.",
        "Oversaw Azure DevOps CI/CD for KRM-WebUI.",
        "Managed Microsoft AD, M365, SharePoint, PowerBI, and enterprise backup with Veeam.",
        "Integrated cloud security using Fortinet, OKTA IAM, and PCI compliance tools.",
        "Automated operational tasks via PowerShell, Bash, and Python.",
        "Primary responsibilities include troubleshooting, supporting internal application systems, and maintaining the day-to-day operations of the production and development network and server environment.",
        "Deployment, maintenance, and client technical support of the Kamakura Risk Manager (KRM) and Kamakura Risk Information Services (KRIS), Azure DevOps CI/CD for the KRM-WebUI software, including design and maintaining two Colocation data centers.",
        "Analyzed department and job-related functionality requirements to align technology priorities with business needs.",
        "Developed and implemented technical application support and information technology policies and procedures that advanced investment needs, outcomes, and performance measurements to balance continuous innovation with responsible risk-taking.",
        "Job-related used technologies: Microsoft platform including the M365 Cloud, SharePoint, AD/FTP/DNS, and PowerBI, Unix/Linux, Virtualization, Storage systems (SAN&NAS) Dell/IBM/TrueNAS, Nessus Security, Cloud Computing (AWS, Azure), Fortinet Cloud Security - IPsec/VPN, OKTA IAM, RSA, Secure Pulse, VMware, Veeam Cloud DR/BC, Nagios XI monitoring, ESET AV Cloud, Python, Bash, and PowerShell Scripting, MS SQL, Oracle, PostgreSQL, R, STATA, SVN, DevOps CI/CD, YAML and JSON, Atlassian Confluence collaboration tools and Jira Agile tools for software teams. PCI Compliance."
      ]
    },
  
    {
      organization: "Flipkart Internet Pvt Ltd",
      title: `UI Engineer 1`,
      date: "Jun 2021 - Nov 2022",
      details: [
        `As part of the <strong>Pricing and Promotion Team</strong>, worked on the migration of legacy projects from <strong>AngularJS to React-Redux</strong>, implementing a new design. I developed a React-based UI component library and utilities, now utilized across multiple projects.`,
        `Other responsibilities include implementing new features, as well as patching and resolving bugs in existing features, while also addressing on-call issues promptly.`,
      ],
    },
    {
      organization: "Mobile Premier League",
      title: `Software Development Engineer 1`,
      date: "Apr 2020 - Jun 2021",
      details: [
        `Created feature-specific modules within the internal CRM to enhance team operations. Utilized <strong>ReactJS</strong> with <strong>SCSS</strong> and <strong>Redux</strong> for frontend development, alongside <strong>NodeJS-Express</strong> with protobuf for backend functionality.`,
        `Developed a tailored <strong>Content Management System (CMS) for MPL's website</strong>, enabling seamless content and image updates across various pages in real-time.`,
      ],
    },
    {
      organization: "Wipro",
      title: `Project Engineer`,
      desc: `Project Engineer`,
      date: "Aug 2018 - Apr 2020",
      details: [
        `Contributed to the development of a <strong>collaborative online
        blueprint editor</strong> by translating the design mockups into reusable UI components
        with industry-standard UX patterns using <strong>Angular</strong> with <strong>SCSS</strong>,
        <strong>NgRx</strong> and <strong>Angular-Material</strong> and adding actions to those by
        creating services to integrate backend REST-APIs.`,
        `Resolved UI/UX issues by refactoring React components and re-structuring CSS/SCSS of an internal project with the codebase of ReactJS-Redux.`,
      ],
    },
    {
      organization: "Venuemonk",
      title: "Full-Stack Developer Intern",
      desc: `<strong>Full-Stack Developer intern</strong> at  <a target='_blank' rel='noreferrer' href='https://www.venuemonk.com/'>
      <strong> Venuemonk </strong> </a> (<a target='_blank' rel='noreferrer' href='https://drive.google.com/open?id=1ch_9x9jCp_TJwKY43FG-pCr_zV9H2iun'> https://goo.gl/Uz1gaf</a>)`,
      date: "Jan 2018 - Apr 2018",
      details: [
        `Designed and developed a <strong>Venue Onboarding platform</strong> to streamline and automate
        the onboarding process of partner venues using <strong>React.js-Redux</strong> frontend and
        <strong>Node.js-Express, MongoDB</strong> backend.`,
      ],
    },
    {
      organization: "Hasura",
      title: "Product Development Intern (Remote)",
      desc: `<strong>Product development intern</strong> at <a target='_blank' rel='noreferrer' href='https://hasura.io/'>
      <strong> Hasura </strong> </a> (<a target='_blank' rel='noreferrer' href='https://goo.gl/8V3jBy'> https://goo.gl/8V3jBy</a>)`,
      date: "Jun 2017 - Aug 2017",
      details: [
        `Created a web app using <strong>Node.js-Express</strong> with <strong>EJS</strong> server-side-templating on
        <strong>Hasura's BaaS platform</strong> with features of group chat and a
        sketch board for real-time collaboration with peers. The work was more focused
        towards <strong>using auth and data APIs</strong> offered by the platform, deploying the app,
        testing and reporting the bugs in it.`,
      ],
    },
  ],
  projects: [
    {
      title: "Restaurant Review",
      duration: "Jun - Nov 2018",
      link: "https://github.com/imvpn22/restaurant-review-pwa",
      desc: `A web app to list, view and add reviews of restaurants.
      The app includes filtering based on location, cuisine, and rating.
      This project was a part of Udacity's <strong>Mobile Web Specialist</strong> nano degree program.
      Developed using <strong>HTML5</strong>, <strong>CSS3</strong> and <strong>JavaScript</strong>
      with Progressive Web-Application standards including full-responsiveness,
      offline support, and improved accessibility.`,
    },
    {
      title: "WhiteBoard",
      duration: "Jun - Aug 2017",
      link: "https://github.com/imvpn22/whiteboard",
      desc: `A simple <strong>web-app for collaborative brainstorming sessions</strong>.
      The app includes a real-time messaging and sketching platform for collaboration with Peers.
      It also has features to create groups(teams) and add/remove members.
      Developed using <strong>Node.js-Express</strong> with server-side-templating (EJS),
      <strong>CSS</strong>, <strong>JavaScript</strong> and <strong>Socket.io</strong>.`,
    },
  ],


  education: [
  
  {
    alma: "ICT - College for Expert Studies in Information",
    duration: "Jul 2009 - Aug 2011",
    std: "Professional Master • Network Technologies",
    score: "9",
  },
  {
    alma: "ITS - Information Technology School - College for Expert Studies of IT",
    duration: "Oct 2006 - Jun 2009",
    std: "Bachelor's degree • Information Technologies",
    score: "8",
  },
],

  certifications: [
    {
      desc: `<strong>Mobile Web Specialist Nanodegree</strong> by <strong>Udacity</strong>.
      (<a target='_blank' rel='noreferrer' href='https://confirm.udacity.com/RLMHXAWZ'>https://goo.gl/RGRzVn</a>)`,
      date: "May - Nov 2018",
    },
    {
      desc: `<strong>VMware Certified Associate - Data Center Virtualization (VCA-DCV)</strong>, a MOOC by <em> NPTEL (IIT Madras)
      and Hasura</em>. Ranked at <strong> top 10 percentile </strong> among more than 2500 candidates.
       (<a target='_blank' rel='noreferrer' href='https://nptel.ac.in/noc/E_Certificate/linkedin/noc17-cs06/NPTEL17CS0626270067AN.jpg'>
       https://goo.gl/X3HEdR</a>)`,
      date: "Jan - Mar 2017",
    },
  ],
  events: [],
};
