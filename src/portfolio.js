/* Change this file to get your personal Porfolio */
import { chosenTheme } from "./theme";

// Website related settings
const settings = {
  isSplash: false,
};

//SEO Related settings
const seo = {
  title: "Quy Trung",
  description:
    "Final year CS student at University of Science (HCMUS). Python (Django) Backend Developer at Saritasa Vietnam. Passionate with Data Science, enjoy analyzing data and building models.",
};

//Home Page
const greeting = {
  title: "Quy Trung Mai",
  logo_name: "Quy Trung Mai",
  nickname: "Backend Developer",
  subTitle:
    "Final year CS student at University of Science (HCMUS). Python (Django) Backend Developer at Saritasa Vietnam. Passionate with Data Science, enjoy analyzing data and building models.",
  resumeLink:
    "https://drive.google.com/file/d/1l8SC3kaIUhMGupS2gdyOEw4x-IqOrDyk/view?usp=sharing",
  githubProfile: "https://github.com/quytrungg",
  repositories: "https://github.com/quytrungg?tab=repositories",
  currentProject: "https://datacypher.streamlit.app/",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/quytrungg",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/quytrung-mai/",
    fontAwesomeIcon: "fa-linkedin-in",
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/@quytrungg",
    fontAwesomeIcon: "fa-youtube",
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:albertmai1912@gmail.com",
    fontAwesomeIcon: "fa-google",
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/quytrungmai.albertmai.1912/",
    fontAwesomeIcon: "fa-facebook-f",
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/quytrunggg/",
    fontAwesomeIcon: "fa-instagram",
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
  {
    name: "Tiktok",
    link: "https://www.tiktok.com/@quytrunggg",
    fontAwesomeIcon: "fa-tiktok",
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Backend Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Build web application services using Django, Django Rest Framework and FastAPI.",
        "⚡ Implement forms and email templates with HTML and CSS.",
        "⚡ Provide local services for IOT solutions with Flask.",
        "⚡ Assosisate in working on NodeJS projects using ExpressJS and NestJS frameworks",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          url: "https://www.python.org/",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Django",
          fontAwesomeClassname: "vscode-icons:file-type-django",
          url: "https://www.djangoproject.com/",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "FastAPI",
          fontAwesomeClassname: "devicon:fastapi",
          url: "https://fastapi.tiangolo.com/",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Flask",
          fontAwesomeClassname: "devicon:flask",
          url: "https://flask.palletsprojects.com/en/3.0.x/",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:nodedotjs",
          url: "https://nodejs.org/en",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "HTML",
          fontAwesomeClassname: "simple-icons:html5",
          url: "https://www.w3schools.com/html/",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS",
          fontAwesomeClassname: "fa-css3",
          url: "https://www.w3schools.com/css/",
          style: {
            color: "#1572B6",
          },
        },
      ],
    },
    {
      title: "Database & Cloud Infrastructure",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Have experience working with RDBs such as PosgreSQL and MySQL and MongoDB for NoSQL.",
        "⚡ Manage packages with Docker and Docker Compose.",
        "⚡ Implement notification services using Firebase.",
        "⚡ CI/CD deployments with Kubernetes (k8s) and image storage with AWS (S3).",
      ],
      softwareSkills: [
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "devicon:postgresql",
          url: "https://www.postgresql.org/",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          url: "https://www.mongodb.com/",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "devicon:mysql-wordmark",
          url: "https://www.mysql.com/",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          url: "https://www.docker.com/",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          url: "https://kubernetes.io/",
          style: {
            color: "#326CE5",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          url: "https://firebase.google.com/",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          url: "https://aws.amazon.com/",
          style: {
            color: "#FF9900",
          },
        },
      ],
    },
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Explore and analyze raw data using Numpy and Pandas.",
        "⚡ Provide insightful dashboards with Jupyter Notebook and Streamlit.",
        "⚡ Build predictive models using multiple machine learning and deep learning libraries.",
      ],
      softwareSkills: [
        {
          skillName: "Jupyter Notebook",
          fontAwesomeClassname: "devicon:jupyter-wordmark",
          url: "https://jupyter.org/",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Numpy",
          fontAwesomeClassname: "devicon:numpy",
          url: "https://numpy.org/",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "devicon:pandas",
          url: "https://pandas.pydata.org/",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Streamlit",
          fontAwesomeClassname: "devicon:streamlit",
          url: "https://streamlit.io/",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Scikit Learn",
          fontAwesomeClassname: "devicon:scikitlearn",
          url: "https://scikit-learn.org/stable/#",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          url: "https://www.tensorflow.org/",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          url: "https://keras.io/",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
      ],
    },
    {
      title: "Big Data Processing",
      fileName: "DesignImg",
      skills: [
        "⚡ Learn to store and manage distributed data with Hadoop and HDFS.",
        "⚡ Process data streams using Apache Spark.",
        "⚡ Research about search engines such as Apache Solr.",
      ],
      softwareSkills: [
        {
          skillName: "Java",
          fontAwesomeClassname: "devicon:java",
          url: "https://www.java.com/en/",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Hadoop",
          fontAwesomeClassname: "devicon:hadoop",
          url: "https://hadoop.apache.org/",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Apache Spark",
          fontAwesomeClassname: "devicon:apachespark-wordmark",
          url: "https://spark.apache.org/",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Apache Solr",
          fontAwesomeClassname: "logos:solr",
          url: "https://solr.apache.org/",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
        // color: chosenTheme.jacketColor,
      },
      profileLink: "https://leetcode.com/quytrungg/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
        // color: chosenTheme.jacketColor,
      },
      profileLink: "https://www.hackerrank.com/profile/quytrungg",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
        // color: chosenTheme.jacketColor,
      },
      profileLink: "https://www.kaggle.com/quytrungmai",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "University of Science (HCMUS)",
      subtitle: "Bachelor's degree in Computer Science",
      logo_path: "iiitk_logo.png",
      alt_name: "HCMUS",
      duration: "2020 - 2024",
      descriptions: [
        "⚡ GPA: 3.75/4",
        "⚡ I have studied software engineering fundamentals such as Data Structures & Algorithm, OOP, Database, Computer Networks and OS.",
        "⚡ I have learned about Data Science process along with Machine Learning & Deep Learning concepts.",
        "⚡ I was selected for Freshman Full-Ride Scholarship which is given to top 1% student in the faculty.",
      ],
      website_link: "https://hcmus.edu.vn/",
    },
    {
      title: "Le Hong Phong High School for the Gifted",
      subtitle: "Major in Physics",
      logo_path: "iu_logo.png",
      alt_name: "Le Hong Phong High School for the Gifted",
      duration: "2017-2020",
      descriptions: ["⚡ GPA: 8.9/10"],
      website_link: "http://www.thpt-lehongphong-tphcm.edu.vn/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Machine Learning",
      subtitle: "- Andrew Ng",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Deep Learning",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Big Data",
      subtitle: "- Kim Akers",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    {
      title: "Advanced Data Science",
      subtitle: "- Romeo Kienzler",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "DL on Tensorflow",
      subtitle: "- Laurence Moroney",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Cloud Architecture",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Internship & Working Experience",
  description:
    "I am currently a Python Backend Developer at Saritasa Vietnam. In addition to that, I have engaged in internships, part-time / freelance jobs and extracurricular activities.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Python Backend Developer",
          company: "Saritasa Vietnam",
          company_url: "https://www.saritasa.vn/",
          logo_path: "legato_logo.png",
          duration: "June 2023 - Present",
          location: "Ho Chi Minh city, Vietnam",
          description:
            "Build web application services using Django with RESTful API. Participate in real-world projects and implement infrastructures for databases and cloud services. Work with multiple teams (Frontend, QA) and learn new technologies in backend development.",
          color: "#0879bf",
        },
        {
          title: "Python Programming Tutor",
          company: "Algorithmics",
          company_url: "https://algo.edu.vn/en/",
          logo_path: "freecopy_logo.png",
          duration: "October 2022 - February 2023",
          location: "Ho Chi Minh city, Vietnam",
          description:
            "Algorithmics is an international coding school for children from age 5 to 17. Assosiate in teaching Python for children from 10 to 15 with full english. Responsible for student tech supports when needed.",
          color: "#fc1f20",
        },
        {
          title: "Haskell Tutor",
          company: "Freelance",
          company_url: "https://github.com/quytrungg",
          logo_path: "haskell.png",
          duration: "March 2022 - June 2022",
          location: "Ho Chi Minh city, Vietnam",
          description:
            "Freelance job in Sophomore year. Teach basic programming, data structures and algorithms using Haskell for a business analyst student. Provide assistance for labs and projects within the course.",
          color: "#fc1f20",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Python Developer Intern",
          company: "Saritasa Vietnam",
          company_url: "https://www.saritasa.vn/",
          logo_path: "legato_logo.png",
          duration: "March 2023 - June 2023",
          location: "Ho Chi Minh city, Vietnam",
          description:
            "Learn Python from fundamental to high-level concepts, including asynchronous, multi-threading and multi-processing programming along with coroutines. Build internal project using Django and Django Rest Framework. Improve code style, learn to implement beautiful code and soft skills such as teamwork and task management.",
          color: "#9b1578",
        },
        {
          title: "Software Engineer Intern",
          company: "YouNet Media",
          company_url: "https://younetmedia.com/",
          logo_path: "muffito_logo.png",
          duration: "August 2022 - February 2023",
          location: "Ho Chi Minh city, Vietnam",
          description:
            "Assosiate in building websites and API services in the Social Suite multi-project using ReactJS and NodeJS. Implement helpful tools such as user behaviour tracking application and single sign-on (SSO) plugin.",
          color: "#9b1578",
        },
      ],
    },
    {
      title: "Extracurricular Activities",
      experiences: [
        {
          title: "Head of Media Department",
          company: "SAB in HCMUS",
          company_url: "https://www.facebook.com/sab.ctda/",
          logo_path: "15.png",
          duration: "August 2021 - May 2022",
          location: "Ho Chi Minh city, Vietnam",
          description:
            "Responsible for planning department's OKRs, sketch strategies for upcoming events and provide financial estimating report. Research ideas and contents for multimedia promotion. Organize technical workshops for team members.",
          color: "#4285F4",
        },
        {
          title: "Media Department Intern",
          company: "SAB in HCMUS",
          company_url: "https://www.facebook.com/sab.ctda/",
          logo_path: "15.png",
          duration: "May 2021 - August 2021",
          location: "Ho Chi Minh city, Vietnam",
          description:
            "Participate in department and organization meetings. Brainstorm for ideas to promote events. Learn multimedia skills such as content writing, photography and videography. Take role in organizing student's events.",
          color: "#D83B01",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects vary in both software engineering and data science, involving multiple technologies.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  // title: "Publications",
  // description: "I have worked on and published a few research papers and publications of my own.",
  // avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    // {
    //   id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
    //   name: "Artificial Intelligence Paper",
    //   createdAt: "2020-03-06T16:26:54Z",
    //   description: "Paper Written on Artificial Intelligence published in xyz ",
    //   url:
    //     "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    // },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "9.jpg",
    description:
      "I am available on many social media platforms. You can DM me, I will reply within 24 hours. I can help you with topics in software engineering and data science.",
  },
  blogSection: {
    // title: "Blogs",
    // subtitle: "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    // link: "https://blogs.ashutoshhathidara.com/",
    // avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "District 1, Ho Chi Minh city, Vietnam",
    streetAddress: "Ambavadi vas",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/RUhnmfVHHhV4J5h7A",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "(+84) 935 915 203",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
