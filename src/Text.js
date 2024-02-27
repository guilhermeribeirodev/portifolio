import * as parse from "html-react-parser";
export const about = {
    title: "About",
    text: "Hello I am Gui  👋  experienced Lead Software Engineer with a strong track record of delivering innovative solutions across diverse industries. Proficient in leading Agile teams and managing complex projects, I specialise in translating abstract concepts into practical results. Noteworthy achievements include implementing best  practices through exceptional project delivery and mentoring junior team members to foster growth and productivity. Additionally, I have optimised government portals and APIs for enhanced accessibility and spearheaded the implementation of cloud-native solutions. Committed to ongoing learning and embracing new technological advancements, I am dedicated to driving innovation and inspiring team excellence."
};
export const skills = {
    title: "Skills",
    text: [
        {
           area: "Programming Languages: ",
           tools:  "Java, JavaScript, Python"
        },
        {
            area: "Frameworks: ",
            tools:  "Spring, Hibernate, Play"
        },
        {
            area: "Libraries: ",
            tools:  "NodeJS, ReactJS, jQuery"
        },
        {
            area: "Software Development Methods: ",
            tools:  "Agile/SCRUM, Lean Start up"
        },
        {
            area: "Development Tools: ",
            tools:  "Iterm, Sublime Text, IntelliJ, Visual Studio Code, Git"
        },
        {
            area: "Operating Systems: ",
            tools:  "Linux, macOS"
        },
        {
            area: "Cloud Providers: ",
            tools:  "AWS, GCP, Azure"
        },
        {
            area: "Management Skills: ",
            tools:  "Project Management, Technical Leadership, Liaising with Stakeholders"
        },
        {
            area: "Leadership Strengths: ",
            tools:  "Mentoring, Designing Training Materials, 1-1 Skills Training"
        },
    ]
};
export const portifolio = [
    {
        company: "NHS Digital - Kin + Carta Europe",
        link: "https://www.kinandcarta.com/en/industries/public-sector/",
        date: "(October 2020 - October 2023)",
        text: "Working on developing fast and inexpensive backend to help workforces to set up Covid test centres during pandemic."
    },
    {
        company: "BICO AI - Stage Intelligence",
        link: "https://cyclingindustry.news/stage-intelligence-ai-tembici-bike-share/",
        date: "(November 2016 - April 2018)",
        text: "Develop the internationalisation ( translation mechanism ) to a bike scheme reshuffle portal to help the bike systems to monitoring public bikes distribution in cities like London, New York, Barcelona, Mexico City and São Paulo. One of the pioneers in AI use for training the operators to find the most effective possible job."
    },
    {
        company: "Yoti",
        link: "https://www.yoti.com/",
        date: "(April 2018 - October 2018)",
        text: "Built an GPDR pioneer API to encrypt sensitive data"
    },
    {
        company: "Smartbill S.A",
        link: "https://www.crunchbase.com/organization/smartbill-recurrence-backoffice",
        date: "(May 2012 – March 2014)",
        text: "I was the first employee of Smartbill as an intern Java developer. I helped developing the first brazilian recurrent revenue platform. The first paperless invoice system. I have helped in all the possible fields, from hiring new employees to meeting accountants and stake holders to understande their needs. I have collaborated in developing a reusable API so others companies could developing facing apps to consume SmartBill business rules."
    }
];
export const experience = [
    {
        company: "Kin + Carta Europe - London, UK",
        date: "(October 2020 - October 2023)",
        role: "Lead/Senior Software Engineer",
        tasks: [
            "Led an Agile project team comprised of 8 software engineers in the rearchitecture of the gov.uk portals and APIs, prioritising improvements in accessibility and usability.",
            "Implemented continuous integration/continuous deployment (CI/CD) pipelines for 2 projects, resulting in a significant reduction in software release times by 3 weeks.",
            "Introduced unit testing and Test-Driven Development (TDD) methodologies, resulting in a 40% reduction in debugging time and enhancing overall software quality.",
            "Acted as a liaison between key stakeholders, including GOV UK and UX research teams, to develop accessible interfaces that meet regulatory standards and user needs.",
            "Successfully secured an additional £3 million contract to extend services for the client, demonstrating leadership in business development and client relationship management.",
            "Spearheaded the creation of serverless and cloud-native solutions in AWS, Azure, and Google Cloud, optimising scalability and reducing infrastructure costs.",
            "Conducted research and development, including Proof of Concept (PoC) initiatives with OpenAI, VectorDBs, and machine learning technologies, exploring innovative solutions to meet evolving project requirements.",
            "Co-led an Agile project team comprising 10 software engineers to develop a bespoke system.",
            "Designed and constructed an infrastructure empowering NHS staff to autonomously establish Covid test sites nationwide, resulting in a significant cost-saving of £2 million in taxpayer funds.",
            "Implemented DevOps practices to foster collaboration among team members, resulting in a 15% increase in project delivery speed.",
            "Leveraged serverless architecture utilising cloud providers such as AWS Lambda and Azure App Services, enhancing scalability and reducing operational overhead.",
            "Maintained end-to-end integration tests with Cypress, ensuring the reliability and functionality of the system throughout its lifecycle.",
        ]
    },
    {
        company: "Culture Trip - London, UK",
        date: "(January 2020 – August 2020)",
        role: "Senior Software Engineer",
        tasks: [
            "Led the development of innovative products in the travel industry using Java 11/Kotlin, contributing to the company's strategic goals.",
            "Managed the maintenance and migration of multiple microservices, transitioning from a monolithic to a modern architecture.",
            "Played a key role in Agile development, participating in sprint planning, stand-ups, and retrospectives for timely delivery.",
            "Implemented a microservices architecture with Spring Boot and AWS SQS/SNS to enhance system performance and scalability.",
            "Provided mentorship and technical support to junior engineers, fostering a culture of continuous learning and skill development within the team."
        ]

    },
    {
        company: "Datto Inc. - Connecticut, USA",
        date: "October 2018 - January 2020",
        role: "Senior Java Engineer / DevOps",
        tasks: [
            "Spearheaded the development of a new backend API utilising Spring/Java8 and frontend using React to modernise the user interface.",
            "Implemented comprehensive test cases using Mockito and Spring tests to ensure robustness and reliability of the system.",
            "Actively participated in Scrum ceremonies, including daily stand-up meetings and sprint planning sessions, to maintain project alignment and progress.",
            "Leveraged various AWS services for multiple aspects of the project, optimizing performance and scalability.",
            "Orchestrated the integration of desktop agents with a web portal tailored for medium-sized companies, enhancing accessibility and usability.",
            "Key projects include Connectwise integration and development of a new RMM (Remote Monitoring and Management) frontend, streamlining operations and improving client services."
        ]
    },
    {
        company: "Yoti - London, UK",
        date: "April 2018 - October 2018",
        role: "Senior Java Engineer / DevOps",
        tasks: [
            "Leveraging microservices architecture with Spring Boot and PostgreSQL, ensuring scalability and maintainability.",
            "Implemented test-driven development (TDD) and behaviour-driven development (BDD) methodologies, utilising tools such as Cucumber, to ensure comprehensive test coverage and high software quality.",
            "Designed and developed a test environment using Docker Compose, enabling efficient testing and deployment of microservices in a controlled environment.",
            "Collaborated with cross-functional teams to prioritise features and enhancements, translating business requirements into technical specifications and actionable tasks for the engineering team."
        ]
    },
    {
        company: "Stage Intelligence - London, UK",
        date: "November 2016 - April 2018",
        role: "Senior Java Engineer / DevOps",
        tasks: [
            "Maintained and enhanced the JavaEE web application stack, utilising technologies such as PostgresSQL, JPA, Hibernate, Eclipse Link, JSF, Primefaces, and AJAX.",
            "Managed the core application responsible for processing data from third-party APIs, ensuring its continued functionality and optimisation.",
            "Oversaw maintenance tasks for an Android application, ensuring its compatibility and performance.",
            "Developed and executed tests following best practices using Arquillian, JUnit, TestNG, and Hamcrest.",
            "Managed the Bico Console and Core, overseeing operations related to bike-sharing scheme management.",
            "Led the migration from monolith to Microservices as part of the DevOps initiative.",
            "Created service layers utilising EJB, JPA, and Hibernate to improve modularity and maintainability.",
            "Dockerised applications to improve deployment efficiency and scalability.",
            "Designed and implemented internationalisation architecture to support multiple languages.",
            "Generated reports to provide insights into system usage and performance.",
        ]
    },
    {
        company: "Supero IT - Florianópolis, Brazil",
        date: "March 2014 – February 2016",
        role: "Lead Java Engineer",
        tasks: [
            "Leading the development effort across the full Java Enterprise Edition (JEE) application stack, ensuring seamless integration and robust functionality.",
            "Translating abstract specifications into executable code, driving project progress efficiently.",
            "Mentoring junior developers to overcome technical hurdles and elevate team productivity.",
            "Designing customised training materials for new recruits, facilitating rapid skill acquisition.",
            "Guiding a unified team in optimising system performance and spearheading the development of independent services."
        ]
    },
    {
        company: "Smartbill S.A - São Paulo, Brazil",
        date: "May 2012 – March 2014",
        role: "Jr. Java / PHP Developer",
        tasks: [
            "Spearheading development across a diverse range of websites and web applications.",
            "Generating and delivering testing reports as needed.",
            "Facilitating stakeholder meetings to enhance the business model.",
            "Developing APIs using SOAP, JavaEE6, and Oracle for Smartbill.",
            "Creating web clients with ZK Framework and Jetty.",
            "Building the Smartbill website and documentation using PHP, MySQL, HTML5, JavaScript & CSS.",
            "Integrating vendor APIs into client applications.",
            "Maintaining legacy Smartbill systems with ASP/VB6.",
            "Managing tasks and daily meetings using Jira Kanban.",
            "Handling environments on Amazon AWS EC2 and S3.",
            "Developing CMS, websites, and mobile apps in PHP and Java.",
        ]
    },
];
export const contact = {
    title: "Contact"
};
