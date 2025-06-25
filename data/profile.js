const profileData = {
  title: "Resume",
  name: "Vipin Yadav",
  sub_title: "Senior Software Engineer",
  logoURL: "assets/images/dp.jpg",
  about: {
    intro:
      "Senior Software Engineer with 7 years of experience building high-performance web apps using React, TypeScript, and modern ES6+ practices. Skilled in leading projects, creating reusable components, and implementing real-time features like chat and live tracking with WebSockets and Canvas. Passionate about clean, scalable code, intuitive UIs, and mentoring teams for engineering excellence.",
    contact: {
      email: "imvpn22@gmail.com",
      phone: "+91-9919716378",
      address: "Bangalore, IN",
    },
  },
  links: [
    {
      title: "LinkedIn",
      src: "https://www.linkedin.com/in/imvpn22",
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
      title: "Languages & Standards",
      value: "HTML5, CSS3, TypeScript, JavaScript(ES6+), SCSS, Tailwind CSS",
    },
    {
      title: "Frameworks/Libraries",
      value:
        "ReactJS, React-Native, Redux, MobX, NodeJS-Express, NextJS, Angular, Next.js, React Query",
    },
    {
      title: "Maps & Visualization",
      value: "Canvas API, Leaflet.js, D3.js, Chart.js, HighCharts",
    },
    {
      title: "Architecture & Tooling",
      value: "Micro Frontend Architecture, Webpack, Storybook",
    },
    {
      title: "Others",
      value: "Git, Jenkins, AWS, WebSockets",
    },
  ],
  experiences: [
    {
      organization: "WrkSpot",
      title: "Senior Frontend Engineer",
      date: "July 2024 - Present",
      details: [
        `Developed <strong>real-time chat, panic alerts, a custom map showing employee locations</strong>, and an <strong>in-browser document editor and signer</strong> to address specific business needs with high interactivity.`,
        `Built scalable features with <strong>React and TypeScript</strong>, optimized UI/UX, and improved performance using <strong>custom component, hooks and utility libraries</strong>.`,
        `Designed <strong>micro frontend solutions</strong> and implemented dynamic data filtering logic to support modular development and efficient data access.`,
        `Led cross-functional collaboration, promoted clean, maintainable code using <strong>ES6+ and TypeScript</strong> best practices, and drove continuous improvement.`,
      ],
    },
    {
      organization: "Gameskraft",
      title: "Senior Software Engineer",
      date: "Dec 2022 - June 2024",
      details: [
        `As part of the <strong>RummyCulture App</strong> team, worked on the development of core features like <strong>TDS summary & certificate</strong>, <strong>game join & re-join flow</strong> improvements,
        <strong>scorecard</strong>, <strong>withdrawal flow</strong>, <strong>user referral flow</strong>, and <strong>game bubble state</strong> optimizations.
        I ensured end-to-end responsibility, focusing on <strong>pixel-perfect UI</strong>, smooth UX, user testing, <strong>A/B experiments</strong>, cross-platform compatibility,
        and timely delivery.`,
        `Implemented the <strong>FT/UX</strong> (First Time User Experience) flow, boosting day1 metrics of Registration to Add Cash and Registration to Cash Game by around <strong>5%</strong>.`,
        `Integrated in-house <strong>help center SDK</strong>, offering self-help features like guided app core flows and callback scheduling for users, leading to a <strong>reduction in customer call volume</strong>.`,
        `Addressed live issues such as App crashes, JS crashes, and ANRs using <strong>Sentry</strong> and <strong>Firebase Crashlytics</strong>. Mentored juniors through knowledge-sharing and code-review sessions to ensure bug-free code and optimal performance.`,
      ],
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
      alma: "FET, GKV, Haridwar",
      duration: "2014 - 2018",
      std: "B.Tech. (Computer Science & Engineering)",
      score: "71.00%",
    },
    {
      alma: "Jwala Devi SVMIC, Prayagraj",
      duration: "2011 - 2013",
      std: "Class XI-XII (PCM)",
      score: "89.80%",
    },
    {
      alma: "Jwala Devi SVMIC, Prayagraj",
      duration: "2010 - 2011",
      std: "Class X (PCM)",
      score: "73.30%",
    },
  ],
  certifications: [
    {
      desc: `<strong>Mobile Web Specialist Nanodegree</strong> by <strong>Udacity</strong>.
      (<a target='_blank' rel='noreferrer' href='https://confirm.udacity.com/RLMHXAWZ'>https://goo.gl/RGRzVn</a>)`,
      date: "May - Nov 2018",
    },
    {
      desc: `<strong>Introduction to Modern Application Development</strong>, a MOOC by <em> NPTEL (IIT Madras)
      and Hasura</em>. Ranked at <strong> top 10 percentile </strong> among more than 2500 candidates.
       (<a target='_blank' rel='noreferrer' href='https://nptel.ac.in/noc/E_Certificate/linkedin/noc17-cs06/NPTEL17CS0626270067AN.jpg'>
       https://goo.gl/X3HEdR</a>)`,
      date: "Jan - Mar 2017",
    },
  ],
  events: [],
};
