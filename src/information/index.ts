import { api, nlp, bias, classification, inductive, modelvalgo, nlp_medium, overfiting, right_ml, shiny, structured, underfiting} from "../assets"

export const navLinks = [
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "portfolio",
    title: "Portfolio",
  },
  {
    id: "medium",
    title: "Medium Articles",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const experiences = [
  {
    title: "Data Analyst",
    company_name: "AtlantiCare",
    date: "Dec 2024 - Present",
    details: [
      "Optimize SQL queries in data models and refactor ETL workflows to enhance processing speed and scalability of data pipelines.",
      "Monitor ETL workflows, log exceptions in data models, debug and resolve issues to ensure successful data processing",
      "Engineer Python ETL pipelines to transfer data into databases for analysis, integrating with existing data models and workflows.",
      "Develop Tableau dashboards fed by clinical data models to visualize workflows and metrics for Finance and Healthcare staff.",
    ],
  },
  {
    title: "Healthcare Affiliation Coordinator",
    company_name: "Stockton University",
    date: "Aug 2023 - Dec 2024",
    details: [
      "Developed a Dashboard to present clinical placement site data",
      "Led multi-school clinical software integration, generating comprehensive reports and a dashboard to visualize program trends since 2016.",
      "Developed K-means Cluster visualization to find similar characteristics in the data and created an Apriori algorithm to find association of student application data for the PT program.",
      "Crafted evergreen agreements and created queryable placement archive, fostering long-term partnerships and efficient management.",
    ],
  },
  {
    title: "Data Science Intern",
    company_name: "LeadX",
    date: "May 2024 - Present",
    details: [
      "Implemented data pipeline with Python scraping class, processing 3 million companies' data for large-scale analysis.",
      "Developed NLP models analyzing 7,000+ Carvana reviews, extracting keywords and predicting sentiment for satisfaction insights.",
      "Presented Carvana feedback analysis for master's project, communicating findings for potential service improvements.",
    ],
  },
  {
    title: "Graduate Assistant",
    company_name: "Stockton University",
    date: "Sep 2023- May 2024",
    details: [
      "Created Jupyter notebook detailing data methodologies. Implemented regression and random forest models predicting graduate student outcomes.",
      "Developed Shiny dashboard with predictive insights, enabling trend exploration and forecasting conditional student admissions.",
      "Implemented and integrated regression and random forest models into dashboard, predicting incoming graduate student outcomes.",
    ],
  },
  {
    title: "Financial Aid Administrator",
    company_name: "Rowan College South Jersey",
    date: "Oct 2016 - Aug 2023",
    details: [
      "Managed Federal Work-Study program for 5 years, optimizing the budget through data driven analysis and expanding funds from $30,000 to $80,000.",
      "Verified and validated student verification data to award and pay on student accounts.",
      "Oversaw file room and digital file room to ensure all documents have been correctly filed and scanned.",
      "As a subject matter expert presented information to staff, faculty, students and parents.",
    ],
  },
];

const portfolio = [
  {
    name: "NLP Dashboard for Masters Practicum",
    description:
      "Apart of my internship I developed a dashboard based on data that was web-scraped from teh BBB website, structured into PostgreSQL via pipeline. Then trained NLP models for sentiment, keywords, and key phrases and visualized results in Python Shiny dashboard with other data insights.",
    tools: [
      "Python",
      "JavaScript",
      "Scikit-learn",
      "Selenium",
      "SQLite",
      "Tailwind CSS",
      "JSON",
    ],
    project_url: "https://kai-wilson.shinyapps.io/data-prac-dashboard/",
    image: nlp,
  },
  {
    name: "Healthcare Eye Disease Prediction API",
    description:
      "Deployed and engineered a random forest classifier in a RESTful API, assessing ocular disease risk using demographic (age and gender) inputs for probabilistic predictions. ",
    tools: ["Python", "Scikit-Learn", "Nginx", "Fast API", "Digital Ocean"],
    project_url:
      "https://medium.com/@wilsonkai/deploy-your-own-machine-learning-api-5c179cf82017",
    image: api,
  },
];

const medium = [
  {
    title: "Inductive vs Deductive Machine Learning",
    url: "https://medium.com/@wilsonkai/inductive-vs-deductive-machine-learning-00233777e11f",
    date: "9/2/2024",
    tags: [
      "Data-Science",
      "Machine-Learning",
      "Inductive-Learning",
      "Deductive-Learning",
      "AI",
    ],
    image: inductive,
  },
  {
    title: "What Is Underfitting, and Why You Need to Avoid it",
    url: "https://medium.com/@wilsonkai/what-is-underfitting-and-why-you-need-to-avoid-it-ce842bac07b4",
    date: "9/2/2024",
    tags: [
      "Underfitting",
      "Data-Science",
      "Overfitting-Underfitting",
      "Bias-Variance-Tradeoff",
      "Machine-Learning",
    ],
    image: underfiting,
  },
  {
    title: "What Is Overfitting, and Why You Need to Avoid it",
    url: "https://medium.com/@wilsonkai/what-is-overfitting-and-why-do-you-need-to-avoid-it-3737894586a0",
    date: "9/1/2024",
    tags: [
      "Overfitting-Prevention",
      "Machine-Learning",
      "Overfitting-Underfitting",
      "Bias-Variance-Tradeoff",
      "Data-Science",
    ],
    image: overfiting,
  },
  {
    title: "Classification vs Regression",
    url: "https://medium.com/@wilsonkai/classification-vs-regression-c4683515c560",
    date: "8/27/2024",
    tags: [
      "Regression",
      "Algorithms",
      "Machine-Learning",
      "Data-Science",
      "Classification",
    ],
    image: classification,
  },
  {
    title: "What is a Model vs Algorithm",
    url: "https://medium.com/@wilsonkai/what-is-a-model-vs-algorithm-0a70788e63b1",
    date: "8/23/2024",
    tags: [
      "Machine-Learning",
      "Model-Training",
      "Algorithms",
      "Data-Science-Education",
      "Data-Science",
    ],
    image: modelvalgo,
  },
  {
    title: "Picking the Right ML Algorithm",
    url: "https://medium.com/@wilsonkai/picking-the-right-machine-learning-model-d8dd6962734b",
    date: "8/21/2024",
    tags: ["Machine-Learning", "Algorithms", "Model-Selection", "Data-Science"],
    image: right_ml,
  },
  {
    title: "Bias-Variance Trade-off Made Simple",
    url: "https://medium.com/@wilsonkai/bias-variance-trade-off-made-simple-6c8547ea13dd",
    date: "8/9/2024",
    tags: [
      "Variance",
      "Bias",
      "Machine-Learning",
      "Bias-Variance-Tradeoff",
      "Data-Science",
    ],
    image: bias,
  },
  {
    title: "Structured vs Unstructured Data",
    url: "https://medium.com/@wilsonkai/structured-vs-unstructured-data-9e5d37e7d03a",
    date: "8/7/2024",
    tags: [
      "Data",
      "Data-Engineering",
      "Data-Analysis",
      "Machine-Learning",
      "Data-Science",
    ],
    image: structured,
  },
  {
    title: "Build Your Own Sentiment NLP",
    url: "https://medium.com/@wilsonkai/build-your-own-sentiment-nlp-a571db1699d1",
    date: "7/29/2024",
    tags: [
      "Python",
      "Sentiment-Analysis",
      "Machine-Learning",
      "NLP",
      "Data-Science",
    ],
    image: nlp_medium,
  },
  {
    title: "Shiny With Tailwind CSS Made Simple",
    url: "https://medium.com/@wilsonkai/shiny-with-tailwind-css-made-simple-f3572ef8c3b4",
    date: "7/11/2024",
    tags: [
      "Tailwind-CSS",
      "Dashboard",
      "Python",
      "Shiny-for-Python",
      "Front-End-Development",
    ],
    image: shiny,
  },
];

export { experiences, portfolio, medium };
