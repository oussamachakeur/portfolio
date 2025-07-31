/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Chakeur Tech",
  title: "Hi all, I'm Chakeur",
  subTitle: emoji(
    "A Python backend developer passionate about building scalable systems and intelligent applications using ML & AI."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", 
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/oussamachakeur",
  linkedin: "https://www.linkedin.com/in/oussama-chakeu/",
  gmail: "chakeuroussama@gmail.com",
  facebook: "https://www.facebook.com/chakeuroussama",
  Instagram : "https://www.instagram.com/chakeuroussama",
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY Backend DEVELOPER and Data scientist WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Building scalable RESTful APIs and backend systems using Python (Django, Flask, FastAPI)"),
    emoji("⚡ Developing and deploying machine learning models into production pipelines"),
    emoji("⚡ Working with SQL and NoSQL databases, data processing, and analytics workflows"),
    emoji("⚡ Integrating third-party services like PostgreSQL, Firebase, AWS, and cloud ML platforms")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

// Updated softwareSkills array with Iconify icons
  softwareSkills: [
  {
    skillName: "Python",
    iconifyClassname: "logos:python"
  },
  {
    skillName: "R",
    iconifyClassname: "devicon:r"
  },
  {
    skillName: "Django",
    iconifyClassname: "vscode-icons:file-type-django"
  },
  {
    skillName: "FastAPI",
    iconifyClassname: "simple-icons:fastapi"
  },
  {
    skillName: "TensorFlow",
    iconifyClassname: "logos:tensorflow"
  },
  {
    skillName: "PyTorch",
    iconifyClassname: "logos:pytorch-icon"
  },
  {
    skillName: "Node.js",
    iconifyClassname: "logos:nodejs-icon"
  },
  {
    skillName: "PostgreSQL",
    iconifyClassname: "logos:postgresql"
  },
  {
    skillName: "MongoDB",
    iconifyClassname: "devicon:mongodb"
  },
  {
    skillName: "Redis",
    iconifyClassname: "logos:redis"
  },
  {
    skillName: "SQL",
    iconifyClassname: "vscode-icons:file-type-sql"
  },
  {
    skillName: "Docker",
    iconifyClassname: "logos:docker-icon"
  },
  {
    skillName: "Firebase",
    iconifyClassname: "logos:firebase"
  },
  {
    skillName: "Power BI",
    iconifyClassname: "logos:microsoft-power-bi"
  },
  {
    skillName: "Tableau",
    iconifyClassname: "logos:tableau-icon"
  }
],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Albukhary International University",
      logo: require("./assets/images/aiuLogo.png"), // Update the logo path
      subHeader: "Bachelor of Computer Science",
      duration: "2022 – Present",
      desc: "Top 10% student actively involved in academic and extracurricular activities.",
      descBullets: [
        "Committee Member of the Science & Tech Club",
        "University IT Support & Final Year Project (FYP) mentor for juniors"
      ]
    },
    {
      schoolName: "Université Ahmed Ben Bella d'Oran (Oran 1), Algeria",
      logo: require("./assets/images/oranUniLogo.png"), // Add a logo if available
      subHeader: "Diploma in Electromechanical Engineering",
      duration: "2017 – 2021",
      desc: "A strong foundation in mechanical systems and electrical automation, blending theory and practical problem-solving.",
      descBullets: [
        "Studied subjects like Thermodynamics, Control Systems, and Industrial Machinery",
        "Gained hands-on experience with PLCs, sensors, and motor control"
      ]
    }
  ]
};


// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, // Show proficiency section
  experience: [
    {
      Stack: "Backend Development (Django, FastAPI, PostgreSQL, Redis, MongoDB)",
      progressPercentage: "85%",
    },
    {
      Stack: "Data Science & Machine Learning (Python, TensorFlow, PyTorch, R)",
      progressPercentage: "80%",
    },
    {
      Stack: "Data Analysis & BI Dashboards (Power BI, Excel, Tableau)",
      progressPercentage: "75%",
    },
    {
      Stack: "Programming (Python, SQL, R)",
      progressPercentage: "70%",
    }
  ],
  displayCodersrank: false // Set to true if you want CodersRank badges
};


// Work experience section

const workExperiences = {
  display: true, // Show work experience section
  experience: [
    {
      role: "IT Support & Software Assistant",
      company: "University IT Department",
      companylogo: require("./assets/images/aiuLogo.png"), // Replace with your uni logo if available
      date: "2023 – Present",
      desc: "Maintain and deploy internal university software, assist with system troubleshooting, and support final year students with their FYP technical challenges.",
      descBullets: [
        "Managed backend deployment and internal app maintenance",
        "Provided technical guidance and code reviews for final year students",
        "Handled database optimization and server performance tuning"
      ]
    },
    {
      role: "Co-Founder & Tech Lead",
      company: "TechNexus Club",
      companylogo: require("./assets/images/aiuLogo1.png"), // Optional: Add your club’s logo
      date: "2023 – Present",
      desc: "Launched a university-based tech club that builds real-world software and educates students in modern development stacks and AI/ML.",
      descBullets: [
        "Led software projects for both university and external clients",
        "Organized weekly coding sessions and weekend bootcamps for students",
        "Built systems using Django, FastAPI, PostgreSQL, and modern data science tools"
      ]
    }
  ]
};


/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "PROJECTS I LED AND BUILT FOR REAL-WORLD APPLICATIONS",
  projects: [
    {
      image: require("./assets/images/universityDeptLogo.png"), // replace with your actual image
      projectName: "University Department Website",
      projectDesc:
        "Full-stack development with advanced backend features like email confirmation, user roles, and content management. Full deployment handled by me.",
      footerLink: [
        {
          name: "View Preview",
          url: "TBA" // replace with real link
        }
      ]
    },
    {
      image: require("./assets/images/hostelManagementLogo.png"), // replace with your actual image
      projectName: "Hostel Management System",
      projectDesc:
        "Designed and built the backend for a running web-based system that handles room assignments, student registrations, and admin operations.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.aiuhms.pro/" // replace with real link
        }
      ]
    },
    {
      image: require("./assets/images/voiceAssistantLogo.png"), // replace with your actual image
      projectName: "AI Voice Assistant with DeepSeek",
      projectDesc:
        "Developed a smart voice assistant integrated with DeepSeek , youtuve , weather and many APIs. It fetches and responds with real-time answers using voice input.",
      footerLink: [
        {
          name: "GitHub Repo",
          url: "https://github.com/oussama-chakeur/voice-assistant" // replace with real repo
        }
      ]
    }
  ],
  display: true
};


// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆"),
  subtitle:
    "Academic honors, technical leadership, athletic milestones, and team achievements that reflect passion and excellence.",

  achievementsCards: [
    {
      title: "6x Dean's List Awardee",
      subtitle:
        "Maintained exceptional academic performance for six consecutive semesters, earning Dean's List honors each term.",
      image: require("./assets/images/deanslist.png"),
      imageAlt: "Dean's List Badge",
      footerLink: []
    },
    {
      title: "Best Research Paper Award",
      subtitle:
        "Recognized for outstanding research selected for university journal publication.",
      image: require("./assets/images/research.png"),
      imageAlt: "Research Award",
      footerLink: []
    },
    {
      title: "Best Club Award – TechNexus",
      subtitle:
        "As a core committee member, contributed to TechNexus Club being awarded Best Club in the University for its innovation, outreach, and impact.",
      image: require("./assets/images/clubaward.png"),
      imageAlt: "Best Club",
      footerLink: []
    },
    {
      title: "Swiss Innovation Challenge Malaysia 2025",
      subtitle:
        "Presented an IoT-based smart farming project designed to help local farmers with real-time monitoring and precision agriculture. Selected among top innovations to pitch in front of Swiss and Malaysian industry leaders.",
      image: require("./assets/images/swissinovation.png"),
      imageAlt: "Swiss Innovation Challenge",
      footerLink: []
    },
    {
      title: "University Football Team Captain",
      subtitle:
        "Led the university team in inter-university tournaments, developing strategy, leadership, and team spirit.",
      image: require("./assets/images/football.png"),
      imageAlt: "Football Captain",
      footerLink: []
    },
    {
      title: "Top 20 – Tower Run Challenge",
      subtitle:
        "Ranked among top 20 out of 150+ participants in a university-wide endurance competition.",
      image: require("./assets/images/towerrun.png"),
      imageAlt: "Tower Run",
      footerLink: []
    },
    
  ],
  display: true // Set false to hide this section
};



// // Talks Sections

// const talkSection = {
//   title: "TALKS",
//   subtitle: emoji(
//     "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
//   ),

//   talks: [
//     {
//       title: "Build Actions For Google Assistant",
//       subtitle: "Codelab at GDG DevFest Karachi 2019",
//       slides_url: "https://bit.ly/saadpasta-slides",
//       event_url: "https://www.facebook.com/events/2339906106275053/"
//     }
//   ],
//   display: true // Set false to hide this section, defaults to true
// };

// // Podcast Section

// const podcastSection = {
//   title: emoji("Podcast 🎙️"),
//   subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

//   // Please Provide with Your Podcast embeded Link
//   podcast: [
//     "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
//   ],
//   display: true // Set false to hide this section, defaults to true
// };

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+60-172246462",
  email_address: "chakeuroussama@gmail.com"
};

// Twitter Section

// const twitterDetails = {
//   userName: "twitter", //Replace "twitter" with your twitter username without @
//   display: true // Set true to display this section, defaults to false
// };

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  contactInfo,
  isHireable,
  resumeSection
};

// Add these missing sections to your portfolio.js file

export const blogSection = {
  title: "Blogs",
  subtitle: "Some of my writing",
  display: false
};

export const talkSection = {
  title: "Talks",
  subtitle: "Conferences and Meetups",
  display: false
};

export const podcastSection = {
  title: "Podcasts",
  subtitle: "Podcast episodes I was featured in",
  display: false
};

export const twitterDetails = {
  userName: "",
  display: false
};