const profileData = {
  title: 'Resume',
  name: 'David Vela Tirado',
  sub_title: 'Software/Solution Architect',
  logoURL: '/assets/images/dp.jpg',
  about: {
    intro: `I am an innovative and passionate developer with a primary interest in <strong>JavaScript</strong>
     and it's applications. Experienced in designing and implementing sophisticated UI/UX with
      Progressive Web Application standards and application life-cycle managements.`,
    contact: {
      email: 'imvpn22@gmail.com',
      phone: '+91-9919716378',
      address: 'Bengaluru, Karnataka 560035'
    }
  },
  links: [
    // { title: 'Portfolio', src: 'https://imvpn22.github.io/' },
    { title: 'Github', src: 'https://github.com/imvpn22' },
    { title: 'LinkedIn', src: 'https://www.linkedin.com/in/imvpn22' },
    { title: 'Twitter', src: 'https://twitter.com/iam_vipinn' },
    // { title: 'HackerEarth', src: 'https://www.hackerearth.com/@imvpn22' }
  ],
  education: [
    {
      alma: 'FET, GKV, Haridwar',
      duration: '2014 - 2018',
      std: 'Bachelor of Technology (Computer Science & Engineering)',
      score: '71.00%'
    },
    {
      alma: 'Jwala Devi SVMIC, Prayagraj',
      duration: '2011 - 2013',
      std: 'Class XI - XII (PCM)',
      score: '89.80%'
    },
    {
      alma: 'Jwala Devi SVMIC, Prayagraj',
      duration: '2011 - 2013',
      std: 'Class XI - XII (PCM)',
      score: '73.33%'
    }
  ],
  skills: [
    {
      graph: 'false',
      category: 'Programming Languages',
      topics: ['JavaScript', 'TypeScript', 'C', 'C++', 'Python']
    },
    {
      graph: 'false',
      category: 'Databases',
      topics: ['MongoDB', 'PostgreSQL', 'PL/SQL']
    },
    {
      graph: 'false',
      category: 'Frameworks / Libraries',
      topics: ['NodeJS', 'ReactJS', 'Angular', 'Jasmine']
    }
  ],
  projects: [
    {
      title: 'Restaurant Review',
      duration: 'June - Nov 2018',
      link: 'https://github.com/imvpn22/restaurant-review-pwa',
      desc: `A web-app to list, view and add reviews of restaurents. 
      The app includes filtering based on location, cuisine and rating.
      This project was a part of Udacity's <strong>Mobile Web Specialist</strong> nano degree program.
      Developed using <strong>HTML5</strong>, <strong>CSS3</strong> and <strong>JavaScript</strong>
      with Progressive Web-Application standards including full-responsiveness, 
      offline support and improved accessibility.`
    },
    {
      title: 'WhiteBoard',
      duration: 'Jun - Aug 2017',
      link: 'https://github.com/imvpn22/whiteboard',
      desc: `A simple <strong>web-app for collaborative brainstorming sessions</strong>. 
      The app includes a real-time messaging and sketching platform for collaboration with Peers.
      It also has features to create groups(teams) and add/remove members.
      Developed using <strong>Node.js-Express</strong> with server-side-templating (EJS), 
      <strong>CSS</strong>, <strong>JavaScript</strong> and <strong>Socket.io</strong>.`
    },
    {
      title: `JNANAGNI'17`,
      duration: 'Jan - Mar 2017',
      link: 'https://github.com/methusael13/jnanagni17',
      desc: `Official website for Jnanagni 2017 - FET, GKV's Annual Techfest. Developed in Laravel5 `
    }
  ],
  experiences: [
    {
      organization: 'Wipro',
      title: `Project Engineer`,
      desc: `Project Engineer`,
      date: 'Aug 2018 - Present',
      details: [
        `Contributed in the development of a <strong>collaborative online 
        blueprint editor</strong> by translating the design mockups into reusable UI components 
        with industry-standard UX patterns by using <strong>Angular</strong> with <strong>SCSS</strong>, 
        <strong>NgRx</strong> and <strong>Angular-Material</strong> and adding actions to those by 
        creating services to integrate backend REST-APIs.`,

        `Resolved more than 50 UI/UX issues by refactoring React components and re-structuring CSS/SCSS of an 
        internal project with codebase of ReactJS-Redux.`
      ]
    },
    {
      organization: 'Venuemonk',
      title: 'Full-Stack Developer Intern',
      desc: `<strong>Full-Stack Developer intern</strong> at  <a target='_blank' href='https://www.venuemonk.com/'> <strong> Venuemonk </strong> </a> (<a target='_blank' href='https://drive.google.com/open?id=1ch_9x9jCp_TJwKY43FG-pCr_zV9H2iun'> https://goo.gl/Uz1gaf</a>)`,
      date: 'Jan 2018 - Apr 2018',
      details: [
        `Designed and developed a <strong>Venue Onboarding platform</strong> to streamline and automate 
        the onboarding process of partner venues using <strong>React.js-Redux</strong> frontend and 
        <strong>Node.js-Express, MongoDB</strong> backend. It has a multi-page interactive form to fill 
        out essential information initially, and a dashboard to update the latest data, upload and edit 
        images, control public view and show statistics for a venue.`,

        `Modified the <strong>content management system</strong> by re-structuring legacy server-side template 
        (Dust.js) code into client-side using <strong>React.js</strong>, <strong>Redux</strong> and 
        <strong>React-Bootstrap</strong>.`
      ]
    },
    {
      organization: 'Hasura',
      title: 'Product Development Intern (Remote)',
      desc: `<strong>Product development intern</strong> at <a target='_blank' href='https://hasura.io/'> 
      <strong> Hasura </strong> </a> (<a target='_blank' href='https://drive.google.com/file/d/0B6uOcoHYLgJ7UmlrUDlsMkVwajg/view?usp=sharing'> https://goo.gl/8V3jBy</a>)`,
      date: 'Jun 2017 - Aug 2017',
      details: [
        `Created a web-app using Node.js-Express with server-side-templating (EJS) on 
        <strong>Hasura's BaaS platform</strong> with features of group-chat and a 
        sketch board for real-time collaboration with peers. The work was more focused 
        towards <strong>using auth and data APIs</strong> offered by Hasura, deploying the app, 
        testing and reporting the bugs in the platform.`
      ]
    }
  ],
  events: [
    {
      title: 'certifications',
      body: [
        {
          desc: `<strong>Mobile Web Specialist Nanodegree</strong>, certified by <strong>Udacity</strong>. (View Certificate: <a target='_blank' href='https://confirm.udacity.com/RLMHXAWZ'>https://goo.gl/RGRzVn</a>)`,
          date: 'May - Nov 2018'
        },
        {
          desc: `<strong>Introduction to Modern Application Development</strong>, a MOOC certified by <em> NPTEL (IIT Madras) and Hasura </em>. Ranked at <strong> top ten percentile </strong> among more than 2300 certified candidates. (View Certificate: <a target='_blank' href='http://nptel.ac.in/noc/E_Certificate/linkedin/noc17-cs06/NPTEL17CS0626270067AN.jpg'> https://goo.gl/X3HEdR</a>)`,
          date: 'Jan - Mar 2017'
        }
      ]
    },
    {
      title: 'Workshops',
      body: [
        {
          desc: `<strong>Emerging Trends in Computer Science</strong>, summer training program with <strong>MNNIT </strong> Allahabad (<a target='_blank' href='https://drive.google.com/file/d/0B6uOcoHYLgJ7WEVmdlJDcWVZcEE/view?usp=sharing'>Certificate link</a>)`,
          date: 'Jun - July 2016'
        },
        {
          desc: `<strong>Bluemix Enablment</strong> with <strong> IBM </strong> at FET, GKV`,
          date: 'Mar 2015'
        },
        {
          desc: `<strong>Web Essentials</strong> with KnowWorkshops and CSI Haridwar chapter at FET, GKV`,
          date: 'Feb 2015'
        }
      ]
    },
    {
      title: 'Extracurricular Activities',
      body: [
        {
          desc: `Event Organizer in <strong>Jnanagni'17</strong> (Annual Techno-Cultural fest of FET, GKV)`,
          date: 'Mar 2017'
        },
        {
          desc:
            'Conducted a workshop for 1<sup>st</sup> and 2<sup>nd</sup> year students on <strong>Linux Essentials</strong>',
          date: 'Oct 2016'
        }
      ]
    }
  ]
};
