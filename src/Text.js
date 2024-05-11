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
            "🚀 Led an Agile project team comprised of 8 software engineers and testers in the re-architecture of some gov.uk portals and APIs, prioritising improvements in security, accessibility and usability.",
            "🚀 Co-implemented continuous integration/continuous deployment (CI/CD) pipelines alongside DevOps team for 2 projects, resulting in a significant reduction in software release times by 3 weeks.",
            "🚀 Introduced unit testing and Test-Driven Development (TDD) methodologies, resulting in a 40% reduction in debugging time and enhancing overall software quality.",
            "🚀 Developing API endpoints specification with OpenAPI / Swagger / API gateway.",
            "🚀 Backend development of Restful API’s using Java and NodeJS on Azure App Services connecting to Cosmos DB ( NoSQL ) and third party UK GOV services.",
            "🚀 Creating cloud native architecture for Java Backend and ReactJS frontend in Cloud Run.",
            "🚀 Setting up Compute Engine instances for running Java applications.",
            "🚀 Setting up RDBMS in SQL.",
            "🚀 Developed backend API in NodeJS and Java with AWS Lambda and SNS/SQS.",
            "🚀 Developed endpoints in API gateway with OpenAPI / Swagger / terraform.",
            "🚀 Implemented DevOps practices to foster collaboration among team members, resulting in a 15% increase in project delivery speed.",
            "🚀 Leveraged cloud native architecture utilising cloud providers such as AWS Lambda and Azure App Services, Terraform enhancing scalability and reducing operational overhead.",
            "🚀 Maintained end-to-end integration tests with Cypress, ensuring the reliability and functionality of the system throughout its lifecycle."
        ]
    },
    {
        company: "Culture Trip - London, UK",
        date: "(January 2020 – August 2020)",
        role: "Senior Software Engineer",
        tasks: [
            "🚀 Development of innovative products in the travel industry using Java 11/Kotlin, contributing to the company's strategic goals.",
            "🚀 Orchestrating microservices to handle streams of content categorisation after publishing it using AWS SQS/SNS and Lambda to integrate with internal Data Scientists API and SEO team.",
            "🚀 Played a key role in Agile development, participating in sprint planning, stand-ups, and retrospectives for timely delivery.",
            "🚀 Implemented API’s and Services in self deployable micro services using terraform and creating reusable templates when necessary.",
            "🚀 Provided mentorship and technical support to junior engineers, fostering a culture of continuous learning and skill development within the team.",
            "🚀 Implemented and advocate Test Driven Development with Mockito, Cucumber and Spock frameworks."
        ]

    },
    {
        company: "Datto Inc. - Connecticut, USA",
        date: "October 2018 - January 2020",
        role: "Senior Java Engineer / DevOps",
        tasks: [
            "🚀 Spearheaded the development of a new backend API utilising Spring Boot /Java8 and frontend using React to modernise the user interface.",
            "🚀 Implemented comprehensive test cases using Mockito and Spring tests to ensure robustness and reliability of the system.",
            "🚀 Actively participated in Scrum ceremonies, including daily stand-up meetings and sprint planning sessions, to maintain project alignment and progress within an international team.",
            "🚀 Leveraged various AWS services for multiple aspects of the project, optimising performance and scalability.",
            "🚀 Orchestrated the integration of desktop agents through a web portal tailored for medium-sized companies, enhancing accessibility and usability.",
            "🚀 Developed API’s with Spring Boot using Java 8 and Groovy."
        ]
    },
    {
        company: "Yoti - London, UK",
        date: "April 2018 - October 2018",
        role: "Senior Java Engineer / DevOps",
        tasks: [
            "🚀 Leveraging microservices architecture with Spring Boot and PostgreSQL, ensuring scalability and maintainability.",
            "🚀 Implemented integration with highly sensitive data exposing user authorised data via API’s built using OpenAPI, JPA, Docker, Spring Security and JWT.",
            "🚀 Designed and developed a test environment using Docker Compose, enabling efficient testing and deployment of microservices in a controlled environment.",
            "🚀 Collaborated with cross-functional teams to prioritise features and enhancements, translating business requirements into technical specifications and actionable tasks for the engineering team."
        ]
    },
    {
        company: "Stage Intelligence - London, UK",
        date: "November 2016 - April 2018",
        role: "Senior Java Engineer / DevOps",

    },
    {
        company: "Supero IT - Florianópolis, Brazil",
        date: "March 2014 – February 2016",
        role: "Medium Java Engineer",

    },
    {
        company: "Smartbill S.A - São Paulo, Brazil",
        date: "May 2012 – March 2014",
        role: "Jr. Java / PHP Developer",

    },
];
export const contact = {
    title: "Contact"
};
