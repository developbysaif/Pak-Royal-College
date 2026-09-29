import { bsPrograms } from './bsPrograms.js';
import { intermediatePrograms } from "./intermediatePrograms.js";
export const programs = [
  ...bsPrograms,
  {
    "id": "dip-it",
    "slug": "diploma-in-information-technology",
    "title": "Diploma in Information Technology (DIT)",
    "degree": "1-Year Professional Diploma",
    "category": "diploma",
    "categoryLabel": "Diploma Program",
    "duration": "1 Year (2 Semesters)",
    "studyMode": "Morning / Evening / Weekend",
    "creditHours": "36 Credit Hours",
    "eligibility": "Matriculation / Intermediate or Equivalent qualification.",
    "image": "/images/course_coding.jpg",
    "shortDescription": "Fast-track technical diploma covering office automation, web design, database administration, PC hardware, and networking fundamentals.",
    "overview": "The Diploma in Information Technology (DIT) is an intensive 1-year career-launching program engineered to provide foundational and intermediate practical computer skills for immediate employment in corporate offices, banks, and IT support centers.",
    "whyStudy": [
      {
        "title": "Fast-Track Employability",
        "description": "Gain in-demand practical computer skills within 12 months."
      },
      {
        "title": "100% Practical Lab Focus",
        "description": "Hands-on workstation training with dedicated lab instructors."
      },
      {
        "title": "Flexible Class Timings",
        "description": "Morning, evening, and weekend batches available for working students."
      },
      {
        "title": "Recognized Certification",
        "description": "Official institutional diploma recognized by local and international employers."
      }
    ],
    "learningOutcomes": [
      {
        "number": "01",
        "title": "Office Automation",
        "description": "Master Word, Advanced Excel spreadsheets, PowerPoint, and Outlook."
      },
      {
        "number": "02",
        "title": "Web Basics",
        "description": "Build responsive websites with HTML5, CSS3, JavaScript, and WordPress."
      },
      {
        "number": "03",
        "title": "Database Systems",
        "description": "Create relational databases and manage SQL queries."
      },
      {
        "number": "04",
        "title": "PC Hardware & Networking",
        "description": "Diagnose computer hardware issues and configure local area networks."
      }
    ],
    "skills": [
      "Microsoft Office Specialist",
      "HTML5/CSS3/JavaScript",
      "WordPress Web Development",
      "SQL Database Management",
      "Computer Hardware Troubleshooting",
      "LAN Networking Setup"
    ],
    "careerPaths": [
      {
        "title": "Computer Operator & Office Assistant",
        "description": "Manage digital documentation and spreadsheet accounting."
      },
      {
        "title": "Junior Web Designer",
        "description": "Build and customize responsive websites for small businesses."
      },
      {
        "title": "IT Helpdesk Technician",
        "description": "Provide front-line technical support and workstation maintenance."
      }
    ],
    "curriculum": [
      {
        "semester": "Semester 1",
        "courses": [
          {
            "code": "DIT-101",
            "title": "Information Technology & Windows OS",
            "credits": "3 (1+2)",
            "type": "Practical Core"
          },
          {
            "code": "DIT-102",
            "title": "Advanced Office Automation (Word/Excel/PPT)",
            "credits": "4 (1+3)",
            "type": "Practical Core"
          },
          {
            "code": "DIT-103",
            "title": "PC Hardware, Assembly & Troubleshooting",
            "credits": "3 (1+2)",
            "type": "Hardware Lab"
          },
          {
            "code": "DIT-104",
            "title": "Business English & Typing Skills",
            "credits": "2 (1+1)",
            "type": "Communication"
          }
        ]
      },
      {
        "semester": "Semester 2",
        "courses": [
          {
            "code": "DIT-201",
            "title": "Web Design (HTML5, CSS3, JavaScript, Bootstrap)",
            "credits": "4 (1+3)",
            "type": "Practical Web"
          },
          {
            "code": "DIT-202",
            "title": "CMS Development with WordPress",
            "credits": "3 (1+2)",
            "type": "Practical Web"
          },
          {
            "code": "DIT-203",
            "title": "Relational Databases & MS Access / MySQL",
            "credits": "4 (1+3)",
            "type": "Database"
          },
          {
            "code": "DIT-204",
            "title": "Computer Networking & Internet Security",
            "credits": "3 (1+2)",
            "type": "Networking Lab"
          }
        ]
      }
    ],
    "admissionRequirements": {
      "qualification": "Matriculation (Science/Arts) or Intermediate.",
      "minPercentage": "Passing marks (45%).",
      "documents": [
        "Matric certificate copy",
        "CNIC / B-Form copy",
        "2 passport photos"
      ]
    },
    "fees": {
      "admissionFee": "PKR 10,000 (One-time)",
      "tuitionFee": "PKR 8,000 per month (or PKR 45,000 full package)",
      "totalSemesterEstimate": "PKR 45,000 total course fee",
      "note": "Easy monthly installment plans available."
    },
    "scholarships": [
      "Merit Concession",
      "Orphan / Need-Based Subsidy"
    ],
    "faqs": [
      {
        "question": "Are weekend classes available for DIT?",
        "answer": "Yes, special Saturday and Sunday classes are scheduled for working individuals."
      }
    ]
  },
  {
    "id": "dip-ai",
    "slug": "diploma-in-ai-and-data-science",
    "title": "Diploma in AI & Data Science",
    "degree": "1-Year Executive Diploma",
    "category": "diploma",
    "categoryLabel": "Diploma Program",
    "duration": "1 Year (2 Semesters)",
    "studyMode": "Evening / Weekend",
    "creditHours": "36 Credit Hours",
    "eligibility": "Intermediate or Bachelor's degree with basic computer literacy.",
    "image": "/images/hero_ai_lab.jpg",
    "shortDescription": "Hands-on professional diploma in Python, Data Analytics, Power BI, Machine Learning, and Generative AI applications.",
    "overview": "Designed for professionals and ambitious graduates, the Diploma in AI & Data Science provides practical mastery over modern machine learning tools, statistical data analytics, predictive modeling, and generative AI prompt engineering.",
    "whyStudy": [
      {
        "title": "Real-World Data Pipelines",
        "description": "Work with real financial, healthcare, and retail datasets."
      },
      {
        "title": "Industry Standard Toolchain",
        "description": "Python, Pandas, NumPy, Scikit-Learn, Power BI, and OpenAI APIs."
      },
      {
        "title": "Portfolio-Driven Learning",
        "description": "Graduate with 5+ showcase projects on GitHub and live dashboards."
      },
      {
        "title": "Career Transition Support",
        "description": "Guidance on freelance data science, remote job interviews, and resume building."
      }
    ],
    "learningOutcomes": [
      {
        "number": "01",
        "title": "Python Data Wrangling",
        "description": "Clean, transform, and analyze complex structured and unstructured data."
      },
      {
        "number": "02",
        "title": "Predictive ML Models",
        "description": "Build classification, regression, and clustering machine learning models."
      },
      {
        "number": "03",
        "title": "Interactive Dashboards",
        "description": "Design executive dashboards using Microsoft Power BI and Tableau."
      },
      {
        "number": "04",
        "title": "Generative AI Integration",
        "description": "Integrate LLMs, LangChain, and API-based intelligent automation."
      }
    ],
    "skills": [
      "Python Programming",
      "Pandas & NumPy",
      "Power BI Dashboards",
      "Scikit-Learn Machine Learning",
      "SQL Data Extraction",
      "Generative AI & Prompt Engineering"
    ],
    "careerPaths": [
      {
        "title": "Junior Data Scientist",
        "description": "Build predictive models and extract business intelligence."
      },
      {
        "title": "Power BI Analyst",
        "description": "Create visual interactive KPI dashboards for executives."
      },
      {
        "title": "AI Solutions Consultant",
        "description": "Implement AI tools and workflow automation for businesses."
      }
    ],
    "curriculum": [
      {
        "semester": "Semester 1",
        "courses": [
          {
            "code": "DAI-101",
            "title": "Python for Data Science & Numerical Computing",
            "credits": "4 (2+2)",
            "type": "Core Lab"
          },
          {
            "code": "DAI-102",
            "title": "Data Wrangling with Pandas & SQL",
            "credits": "4 (2+2)",
            "type": "Core Lab"
          },
          {
            "code": "DAI-103",
            "title": "Exploratory Data Analysis & Visualization (Power BI)",
            "credits": "4 (2+2)",
            "type": "Analytics"
          }
        ]
      },
      {
        "semester": "Semester 2",
        "courses": [
          {
            "code": "DAI-201",
            "title": "Applied Machine Learning with Scikit-Learn",
            "credits": "4 (2+2)",
            "type": "Core Lab"
          },
          {
            "code": "DAI-202",
            "title": "Introduction to Deep Learning & Computer Vision",
            "credits": "4 (2+2)",
            "type": "Deep Learning"
          },
          {
            "code": "DAI-203",
            "title": "Generative AI & LLM Capstone Project",
            "credits": "4 (1+3)",
            "type": "Capstone"
          }
        ]
      }
    ],
    "admissionRequirements": {
      "qualification": "Intermediate or Bachelor's in any discipline.",
      "minPercentage": "45% marks.",
      "documents": [
        "Last degree/result copy",
        "CNIC copy",
        "2 passport photos"
      ]
    },
    "fees": {
      "admissionFee": "PKR 15,000 (One-time)",
      "tuitionFee": "PKR 12,000 per month (or PKR 65,000 total course fee)",
      "totalSemesterEstimate": "PKR 65,000 total course fee",
      "note": "Installment plans available."
    },
    "scholarships": [
      "Merit Scholarship",
      "Women in Tech Discount (20%)"
    ],
    "faqs": [
      {
        "question": "Is this course suitable for non-programmers?",
        "answer": "Yes, the course starts from basic Python syntax and incrementally builds toward machine learning."
      }
    ]
  },
  {
    "id": "it-fb-yt-monetization",
    "slug": "facebook-youtube-monetization",
    "title": "Facebook & YouTube Monetization",
    "degree": "3-Month Professional Certification",
    "category": "it-skills",
    "categoryLabel": "IT Skill Certification",
    "duration": "3 Months",
    "studyMode": "Evening / Weekend / Online",
    "creditHours": "Professional Bootcamp (120 Hours)",
    "eligibility": "Basic computer or smartphone knowledge. Open to students, creators, and entrepreneurs.",
    "image": "/images/course_monetization.jpg",
    "shortDescription": "Master content creation, viral video editing, algorithm growth, and revenue generation through Facebook In-Stream Ads, Reels, Stars, and YouTube Partner Program.",
    "overview": "The Facebook & YouTube Monetization Bootcamp at Pak Royal College is an intensive, practical training program designed to teach aspiring digital creators, entrepreneurs, and freelance marketers how to build, scale, and monetize high-earning digital channels. Students learn modern video production pipelines, viral scriptwriting, SEO optimization, copyright compliance, audience retention hacks, and multi-channel revenue generation including ad monetization, sponsorships, and digital merchandise.",
    "whyStudy": [
      {
        "title": "Practical Hands-on Channel Setup",
        "description": "Create, configure, and optimize official creator pages and verified YouTube channels with step-by-step guidance."
      },
      {
        "title": "Facebook & YouTube Partner Program",
        "description": "Understand monetization eligibility, In-Stream Ads, YouTube AdSense, Stars, and fan subscriptions."
      },
      {
        "title": "Viral Video Editing & Tools",
        "description": "Master CapCut, Adobe Premiere Pro, AI voiceovers, thumbnail design in Photoshop, and Canva graphics."
      },
      {
        "title": "Copyright & Policy Compliance",
        "description": "Learn intellectual property rules, fair use, avoiding strikes, and resolving demonetization issues."
      },
      {
        "title": "Freelancing & Client Channel Management",
        "description": "Manage content pipelines for overseas YouTube creators, local businesses, and brand sponsors."
      }
    ],
    "learningOutcomes": [
      {
        "number": "01",
        "title": "Content Strategy & Niche Selection",
        "description": "Identify high-CPM profitable niches, competitor analytics, and audience targeting."
      },
      {
        "number": "02",
        "title": "Production & AI Tools",
        "description": "Leverage AI scriptwriting, automated video generation, high-CTR thumbnails, and dynamic captions."
      },
      {
        "number": "03",
        "title": "Monetization Frameworks",
        "description": "Fulfill watch time, subscriber, and follower thresholds to qualify for monetization."
      },
      {
        "number": "04",
        "title": "Global Payouts & Scaling",
        "description": "Set up international bank transfers, Wise, Payoneer, tax forms, and team delegation."
      }
    ],
    "skills": [
      "YouTube Channel SEO & Algorithm",
      "Facebook In-Stream Ads & Page Growth",
      "CapCut & Premiere Pro Video Editing",
      "Click-Worthy Thumbnail Design",
      "AI Content Generation & Automation",
      "Audience Retention & Analytics",
      "Monetization Policy & Fair Use",
      "Payoneer, Bank Payouts & Taxes"
    ],
    "careerPaths": [
      {
        "title": "Professional Content Creator",
        "description": "Run profitable monetized YouTube channels and Facebook pages."
      },
      {
        "title": "YouTube Channel Manager",
        "description": "Manage video production, SEO, and growth for international creators."
      },
      {
        "title": "Digital Video Producer & Editor",
        "description": "Produce engaging short-form and long-form video content for agencies and brands."
      }
    ],
    "curriculum": [
      {
        "semester": "Month 1: Niche Discovery & Production Foundations",
        "courses": [
          {
            "code": "MNZ-101",
            "title": "Channel Architecture, High-CPM Niches & Competitor Research",
            "credits": "20 Hours",
            "type": "Core Fundamentals"
          },
          {
            "code": "MNZ-102",
            "title": "Mobile & Desktop Video Production, Lighting & Audio Setup",
            "credits": "20 Hours",
            "type": "Studio Workshop"
          }
        ]
      },
      {
        "semester": "Month 2: Editing Mastery, AI Tools & Algorithm Optimization",
        "courses": [
          {
            "code": "MNZ-201",
            "title": "CapCut & Premiere Pro Editing, Captions & Sound Design",
            "credits": "20 Hours",
            "type": "Editing Lab"
          },
          {
            "code": "MNZ-202",
            "title": "High-CTR Thumbnails, SEO Tags, Keywords & YouTube/FB Algorithms",
            "credits": "20 Hours",
            "type": "Growth Workshop"
          }
        ]
      },
      {
        "semester": "Month 3: Monetization Qualification, Payouts & Scaling",
        "courses": [
          {
            "code": "MNZ-301",
            "title": "Policy Compliance, Copyright Clearance & Watch Time Strategies",
            "credits": "20 Hours",
            "type": "Monetization Lab"
          },
          {
            "code": "MNZ-302",
            "title": "AdSense, Bank Payouts, Brand Deals, Freelancing & Channel Flipping",
            "credits": "20 Hours",
            "type": "Capstone & Business"
          }
        ]
      }
    ],
    "admissionRequirements": {
      "qualification": "Open to all students, matric/inter/BS graduates, and working professionals.",
      "minPercentage": "No prior technical prerequisite; basic computer literacy required.",
      "documents": [
        "CNIC or B-Form copy",
        "1 passport size photograph"
      ]
    },
    "fees": {
      "admissionFee": "PKR 3,000",
      "tuitionFee": "PKR 25,000 total course fee (payable in monthly installments)",
      "totalSemesterEstimate": "PKR 25,000 total",
      "note": "Complete course materials, software access, and channel reviews included."
    },
    "scholarships": [
      "Need-Based Discount Available",
      "Early Bird Concession"
    ],
    "faqs": [
      {
        "question": "Can I monetize Facebook and YouTube from Pakistan?",
        "answer": "Yes! We teach 100% compliant strategies to monetize YouTube through AdSense and Facebook pages through supported regional methods, international partnerships, and legitimate creator setups."
      },
      {
        "question": "Do I need an expensive camera or laptop?",
        "answer": "No. A modern smartphone or standard PC/laptop is sufficient to get started with content creation, AI tools, and video editing."
      },
      {
        "question": "Will I get a certificate upon completion?",
        "answer": "Yes, Pak Royal College awards an official Certificate of Professional Facebook & YouTube Monetization upon completing the capstone channel project."
      }
    ]
  },
  {
    "id": "prof-fullstack",
    "slug": "professional-fullstack-web-engineering",
    "title": "Professional Full-Stack Web Engineering",
    "degree": "6-Month Professional Certification",
    "category": "it-skills",
    "categoryLabel": "IT Skill Certification",
    "duration": "6 Months",
    "studyMode": "Evening / Weekend / Online",
    "creditHours": "Professional Bootcamp (180 Hours)",
    "eligibility": "Basic computer familiarity. Open to students and working professionals.",
    "image": "/images/program_it_web_dev.jpg",
    "shortDescription": "Industry bootcamp mastering modern React, Next.js, Node.js, TypeScript, PostgreSQL, Tailwind CSS, and cloud deployments on Vercel and AWS.",
    "overview": "A high-intensity, practical coding bootcamp that takes students from frontend UI mastery to backend microservices, database architecture, authentication, and continuous deployment pipelines.",
    "whyStudy": [
      {
        "title": "MERN & Next.js Stack",
        "description": "Learn modern production technologies used by leading tech startups globally."
      },
      {
        "title": "Live Client Projects",
        "description": "Build real SaaS web applications, e-commerce stores, and APIs."
      },
      {
        "title": "Git & Agile Workflow",
        "description": "Collaborate via pull requests, code reviews, and Scrum methodology."
      },
      {
        "title": "Freelance & Job Placement",
        "description": "Specialized workshops on Upwork, Fiverr, and remote overseas job acquisition."
      }
    ],
    "learningOutcomes": [
      {
        "number": "01",
        "title": "Modern Frontend",
        "description": "Build responsive UIs with Next.js, React 19, TypeScript, and Tailwind CSS."
      },
      {
        "number": "02",
        "title": "Backend & APIs",
        "description": "Develop secure RESTful and GraphQL APIs with Node.js and Express."
      },
      {
        "number": "03",
        "title": "Database Systems",
        "description": "Design relational schemas with PostgreSQL/Prisma and NoSQL with MongoDB."
      },
      {
        "number": "04",
        "title": "DevOps & Cloud",
        "description": "Deploy full-stack applications with Docker, Vercel, and AWS."
      }
    ],
    "skills": [
      "React & Next.js",
      "TypeScript",
      "Tailwind CSS & Framer Motion",
      "Node.js & Express",
      "PostgreSQL & Prisma ORM",
      "MongoDB",
      "JWT & NextAuth",
      "Docker & Vercel"
    ],
    "careerPaths": [
      {
        "title": "Full-Stack Web Developer",
        "description": "Build end-to-end web applications and SaaS products."
      },
      {
        "title": "Frontend React Engineer",
        "description": "Create rich, accessible, and high-performance user interfaces."
      },
      {
        "title": "Freelance Web Consultant",
        "description": "Deliver international freelance projects on Upwork and Fiverr."
      }
    ],
    "curriculum": [
      {
        "semester": "Term 1 (Months 1–3)",
        "courses": [
          {
            "code": "FSD-101",
            "title": "HTML5, CSS3, Tailwind CSS & JavaScript ES6+",
            "credits": "60 Hours",
            "type": "Core Frontend"
          },
          {
            "code": "FSD-102",
            "title": "React.js & TypeScript UI Architecture",
            "credits": "45 Hours",
            "type": "Frontend Frameworks"
          }
        ]
      },
      {
        "semester": "Term 2 (Months 4–6)",
        "courses": [
          {
            "code": "FSD-201",
            "title": "Next.js App Router & Server Actions",
            "credits": "40 Hours",
            "type": "Full-Stack Architecture"
          },
          {
            "code": "FSD-202",
            "title": "Node.js, PostgreSQL, Prisma & Cloud Deployment",
            "credits": "35 Hours",
            "type": "Backend & Cloud"
          }
        ]
      }
    ],
    "admissionRequirements": {
      "qualification": "Matriculation / Intermediate or higher.",
      "minPercentage": "Open enrollment based on interview.",
      "documents": [
        "CNIC copy",
        "1 passport photo"
      ]
    },
    "fees": {
      "admissionFee": "PKR 5,000",
      "tuitionFee": "PKR 45,000 total course fee (payable in 3 installments of PKR 15,000)",
      "totalSemesterEstimate": "PKR 45,000 total",
      "note": "Early bird discount available."
    },
    "scholarships": [
      "Merit Scholarship (up to 30%)"
    ],
    "faqs": [
      {
        "question": "Is a certificate awarded at completion?",
        "answer": "Yes, students receive an official Certificate of Professional Full-Stack Web Engineering upon passing capstone project evaluation."
      }
    ]
  },
  {
    "id": "prof-cloud",
    "slug": "professional-cloud-devops",
    "title": "Professional Cloud Computing & DevOps",
    "degree": "6-Month Professional Certification",
    "category": "it-skills",
    "categoryLabel": "IT Skill Certification",
    "duration": "6 Months",
    "studyMode": "Weekend / Evening",
    "creditHours": "Professional Bootcamp (180 Hours)",
    "eligibility": "Basic networking or programming knowledge.",
    "image": "/images/course_robotics.jpg",
    "shortDescription": "Master Linux, Docker, Kubernetes, AWS Cloud Architecture, Terraform Infrastructure as Code, and GitHub Actions CI/CD pipelines.",
    "overview": "This professional track trains engineers to automate software delivery, scale multi-region cloud infrastructure, secure containers, and implement resilient site reliability engineering (SRE) practices.",
    "whyStudy": [
      {
        "title": "Highest Paid Tech Niche",
        "description": "Cloud and DevOps engineers command the highest compensation in global tech markets."
      },
      {
        "title": "AWS & Kubernetes Mastery",
        "description": "Hands-on labs on live AWS accounts and real multi-node Kubernetes clusters."
      },
      {
        "title": "Infrastructure as Code (IaC)",
        "description": "Automate entire cloud environments with Terraform and Ansible."
      }
    ],
    "learningOutcomes": [
      {
        "number": "01",
        "title": "Linux Systems",
        "description": "Master shell scripting, process management, and kernel parameters."
      },
      {
        "number": "02",
        "title": "Containerization",
        "description": "Build lightweight multi-stage Docker images and orchestrate with Kubernetes."
      },
      {
        "number": "03",
        "title": "CI/CD Automation",
        "description": "Implement automated testing and zero-downtime deployment pipelines with GitHub Actions."
      },
      {
        "number": "04",
        "title": "Cloud Architecture",
        "description": "Design fault-tolerant, auto-scaling VPCs on Amazon Web Services (AWS)."
      }
    ],
    "skills": [
      "Linux & Bash Scripting",
      "Docker & Kubernetes",
      "AWS (EC2, S3, RDS, EKS, Lambda)",
      "Terraform IaC",
      "GitHub Actions CI/CD",
      "Prometheus & Grafana Monitoring"
    ],
    "careerPaths": [
      {
        "title": "DevOps Engineer",
        "description": "Manage automated deployment pipelines and cloud infrastructure."
      },
      {
        "title": "Cloud Architect",
        "description": "Design secure, cost-effective enterprise cloud architectures."
      },
      {
        "title": "Site Reliability Engineer (SRE)",
        "description": "Ensure 99.99% system availability and automated disaster recovery."
      }
    ],
    "curriculum": [
      {
        "semester": "Term 1 (Months 1–3)",
        "courses": [
          {
            "code": "CLD-101",
            "title": "Linux Administration & Bash Automation",
            "credits": "45 Hours",
            "type": "Core Systems"
          },
          {
            "code": "CLD-102",
            "title": "AWS Cloud Fundamentals & Architecting",
            "credits": "45 Hours",
            "type": "Cloud Core"
          }
        ]
      },
      {
        "semester": "Term 2 (Months 4–6)",
        "courses": [
          {
            "code": "CLD-201",
            "title": "Docker & Kubernetes Container Orchestration",
            "credits": "45 Hours",
            "type": "Containers"
          },
          {
            "code": "CLD-202",
            "title": "Terraform IaC & CI/CD Pipelines with GitHub Actions",
            "credits": "45 Hours",
            "type": "DevOps Capstone"
          }
        ]
      }
    ],
    "admissionRequirements": {
      "qualification": "Intermediate or higher with computing background.",
      "minPercentage": "Pass marks.",
      "documents": [
        "CNIC copy",
        "1 passport photo"
      ]
    },
    "fees": {
      "admissionFee": "PKR 5,000",
      "tuitionFee": "PKR 50,000 total course fee (payable in 3 installments)",
      "totalSemesterEstimate": "PKR 50,000 total",
      "note": "Includes AWS lab credits guidance."
    },
    "scholarships": [
      "Merit Scholarship"
    ],
    "faqs": [
      {
        "question": "Does this course prepare for AWS Certified Solutions Architect exam?",
        "answer": "Yes, the syllabus aligns closely with AWS SAA-C03 and CKA (Certified Kubernetes Administrator) blueprints."
      }
    ]
  },
  ...intermediatePrograms,
  {
    "id": "prof-python-ai",
    "slug": "python-ai-and-machine-learning-bootcamp",
    "title": "Python, AI & Machine Learning Bootcamp",
    "degree": "6-Month Professional Certification",
    "category": "it-skills",
    "categoryLabel": "IT Skill Certification",
    "duration": "6 Months (Weekend / Evening)",
    "studyMode": "Hybrid / On-Campus GPU Lab",
    "creditHours": "180 Practical Hours + 5 Portfolio Projects",
    "eligibility": "Open to college students, graduates, and professionals with basic computer knowledge.",
    "image": "/images/program_it_python_ai.jpg",
    "shortDescription": "Master Python programming, Data Science, NumPy, Pandas, Scikit-Learn, Deep Learning with PyTorch, Computer Vision, and Generative AI with LLMs.",
    "overview": "The Python, AI & Machine Learning Bootcamp at Pak Royal College is an intensive hands-on program engineered to take students from core Python scripting to building and fine-tuning cutting-edge neural networks, computer vision pipelines, and Large Language Model (LLM) agents. Students train models using dedicated GPU servers, working on real-world datasets in healthcare, financial forecasting, predictive analytics, and natural language processing.",
    "whyStudy": [
      {
        "title": "Highest Demand Tech Skill",
        "description": "AI engineers and Python developers are the most sought-after tech talent locally and globally."
      },
      {
        "title": "Dedicated GPU Compute Lab",
        "description": "Train deep neural networks and transformer models on high-performance Nvidia RTX GPU workstations."
      },
      {
        "title": "Generative AI & LLMs",
        "description": "Learn prompt engineering, RAG (Retrieval-Augmented Generation), LangChain, and OpenAI/Claude APIs."
      },
      {
        "title": "Portfolio-Driven Learning",
        "description": "Build 5 production-grade AI projects hosted on GitHub and HuggingFace for job interviews."
      }
    ],
    "learningOutcomes": [
      {
        "number": "01",
        "title": "Python Programming Mastery",
        "description": "Write clean, modular, and high-performance Python code using OOP, decorators, and generators."
      },
      {
        "number": "02",
        "title": "Data Analysis & Visualization",
        "description": "Clean, manipulate, and visualize complex datasets using NumPy, Pandas, Matplotlib, and Seaborn."
      },
      {
        "number": "03",
        "title": "Classical Machine Learning",
        "description": "Build predictive models with regression, classification, clustering, random forests, and XGBoost."
      },
      {
        "number": "04",
        "title": "Deep Learning & Generative AI",
        "description": "Design convolutional neural networks (CNNs), vision transformers, and RAG pipelines with LangChain."
      }
    ],
    "skills": [
      "Python 3.12 & OOP",
      "NumPy & Pandas Data Wrangling",
      "Scikit-Learn Machine Learning",
      "PyTorch & TensorFlow Deep Learning",
      "Computer Vision (OpenCV & YOLO)",
      "Generative AI, LangChain & LLM Agents",
      "FastAPI & Model Deployment",
      "Git, GitHub & HuggingFace"
    ],
    "careerPaths": [
      {
        "title": "AI / Machine Learning Engineer",
        "description": "Design, build, and deploy automated predictive algorithms and neural models."
      },
      {
        "title": "Data Scientist & Analyst",
        "description": "Extract actionable insights, statistical patterns, and business intelligence from data."
      },
      {
        "title": "Generative AI Developer",
        "description": "Build custom LLM agents, intelligent chatbots, and document search systems."
      },
      {
        "title": "Python Automation Specialist",
        "description": "Automate complex business workflows, web scraping, and data pipelines."
      }
    ],
    "curriculum": [
      {
        "semester": "Term 1 (Months 1–3): Python & Data Science",
        "courses": [
          {
            "code": "PY-101",
            "title": "Python Fundamentals, OOP & Scripting Mastery",
            "credits": "45 Hours",
            "type": "Core Programming"
          },
          {
            "code": "PY-102",
            "title": "Data Science Stack (NumPy, Pandas, Exploratory Data Analysis)",
            "credits": "45 Hours",
            "type": "Data Analysis"
          }
        ]
      },
      {
        "semester": "Term 2 (Months 4–6): ML, Deep Learning & GenAI",
        "courses": [
          {
            "code": "AI-201",
            "title": "Machine Learning Algorithms & Scikit-Learn Pipelines",
            "credits": "45 Hours",
            "type": "Applied ML"
          },
          {
            "code": "AI-202",
            "title": "Deep Learning, PyTorch, LLMs & FastAPI Deployment",
            "credits": "45 Hours",
            "type": "AI Capstone"
          }
        ]
      }
    ],
    "admissionRequirements": {
      "qualification": "Intermediate / Matric / Graduation with passion for computing.",
      "minPercentage": "Pass marks.",
      "documents": [
        "CNIC copy",
        "1 passport photograph"
      ]
    },
    "fees": {
      "admissionFee": "PKR 5,000",
      "tuitionFee": "PKR 45,000 total course fee (payable in monthly installments of PKR 15,000)",
      "totalSemesterEstimate": "PKR 45,000 total",
      "note": "GPU lab access and course certificate included."
    },
    "scholarships": [
      "Merit discount up to 25% for high-achieving students"
    ],
    "faqs": [
      {
        "question": "Is prior coding experience required?",
        "answer": "No prior programming background is required. The bootcamp begins with complete beginner-friendly Python basics and advances to cutting-edge AI."
      }
    ]
  },
  {
    "id": "prof-cyber-security",
    "slug": "cyber-security-and-ethical-hacking",
    "title": "Cyber Security & Ethical Hacking",
    "degree": "6-Month Professional Certification",
    "category": "it-skills",
    "categoryLabel": "IT Skill Certification",
    "duration": "6 Months (Weekend / Evening)",
    "studyMode": "On-Campus Security Lab / Hybrid",
    "creditHours": "180 Hands-on Lab Hours + Live CTF Challenges",
    "eligibility": "Open to students, IT support staff, and network enthusiasts.",
    "image": "/images/program_it_cyber_security.jpg",
    "shortDescription": "Hands-on cyber security training in Kali Linux, penetration testing, Wireshark, Metasploit, web vulnerability scanning (OWASP Top 10), and SOC defense.",
    "overview": "The Cyber Security & Ethical Hacking Bootcamp equips students with the technical offensive and defensive skills required to protect modern digital infrastructure. Practicing in isolated, legal cyber sandbox environments, students learn vulnerability scanning, penetration testing, network sniffing, wireless security cracking, incident response, and Security Operations Center (SOC) monitoring.",
    "whyStudy": [
      {
        "title": "Critical Global Shortage",
        "description": "Over 3.5 million unfilled cyber security positions worldwide with premium salary packages."
      },
      {
        "title": "Real-World Attack & Defense Labs",
        "description": "Practice exploiting vulnerable VMs, Active Directory networks, and web applications in private cyber ranges."
      },
      {
        "title": "Industry Certification Alignment",
        "description": "Prepares students for CompTIA Security+, CEH (Certified Ethical Hacker), and Junior Penetration Tester (eJPT)."
      },
      {
        "title": "Hands-on CTF Competitions",
        "description": "Participate in bi-weekly Capture-the-Flag hacking challenges to sharpen tactical reflexes."
      }
    ],
    "learningOutcomes": [
      {
        "number": "01",
        "title": "Kali Linux & Network Protocols",
        "description": "Master Linux terminal commands, TCP/IP fundamentals, packet analysis with Wireshark, and Nmap scanning."
      },
      {
        "number": "02",
        "title": "Web Application Penetration Testing",
        "description": "Find and exploit SQL Injection, Cross-Site Scripting (XSS), CSRF, and authentication bypass vulnerabilities."
      },
      {
        "number": "03",
        "title": "Network Exploitation & Metasploit",
        "description": "Execute remote exploits, payload generation with MSFvenom, privilege escalation, and lateral movement."
      },
      {
        "number": "04",
        "title": "SOC Defense & Incident Response",
        "description": "Analyze SIEM logs, detect malware anomalies, and configure firewall rules and intrusion detection systems."
      }
    ],
    "skills": [
      "Kali Linux & Bash Scripting",
      "Wireshark Packet Analysis & Nmap",
      "OWASP Top 10 Web Vulnerabilities",
      "Metasploit Framework & Payloads",
      "Active Directory & Network Penetration",
      "SIEM Monitoring & Incident Handling",
      "Cryptography & Hash Cracking",
      "Bug Bounty Methodology"
    ],
    "careerPaths": [
      {
        "title": "Junior Penetration Tester / Ethical Hacker",
        "description": "Perform authorized penetration tests on client networks and web applications."
      },
      {
        "title": "SOC Analyst (Tier 1 / Tier 2)",
        "description": "Monitor security logs, investigate cyber alarms, and stop intrusion attempts in real time."
      },
      {
        "title": "Cyber Security Consultant",
        "description": "Advise enterprises on security compliance, threat mitigation, and risk audits."
      },
      {
        "title": "Bug Bounty Hunter",
        "description": "Identify security vulnerabilities in international programs on HackerOne and Bugcrowd."
      }
    ],
    "curriculum": [
      {
        "semester": "Term 1 (Months 1–3): Fundamentals & Reconnaissance",
        "courses": [
          {
            "code": "SEC-101",
            "title": "Networking Fundamentals, Linux Security & Reconnaissance with Nmap",
            "credits": "45 Hours",
            "type": "Core Security"
          },
          {
            "code": "SEC-102",
            "title": "OWASP Top 10 & Web Application Vulnerability Exploitation",
            "credits": "45 Hours",
            "type": "Web Pentest"
          }
        ]
      },
      {
        "semester": "Term 2 (Months 4–6): Exploitation, SOC & Defenses",
        "courses": [
          {
            "code": "SEC-201",
            "title": "Network Penetration Testing, Metasploit & Privilege Escalation",
            "credits": "45 Hours",
            "type": "Offensive Security"
          },
          {
            "code": "SEC-202",
            "title": "SOC Monitoring, SIEM Log Analysis & Incident Response Capstone",
            "credits": "45 Hours",
            "type": "Defensive Security"
          }
        ]
      }
    ],
    "admissionRequirements": {
      "qualification": "Intermediate / Matric / Graduation with basic computer literacy.",
      "minPercentage": "Pass marks.",
      "documents": [
        "CNIC copy",
        "1 passport photo"
      ]
    },
    "fees": {
      "admissionFee": "PKR 5,000",
      "tuitionFee": "PKR 45,000 total course fee (payable in 3 installments of PKR 15,000)",
      "totalSemesterEstimate": "PKR 45,000 total",
      "note": "Includes private cyber lab environment access."
    },
    "scholarships": [
      "Merit Scholarship (up to 25%)"
    ],
    "faqs": [
      {
        "question": "Is all hacking training performed legally?",
        "answer": "Yes, all practical exercises are conducted in isolated virtual lab environments and adhere strictly to Pakistani Cyber Crime Law (PECA) ethics."
      }
    ]
  },
  {
    "id": "prof-digital-marketing",
    "slug": "digital-marketing-and-ecommerce-growth",
    "title": "Digital Marketing & E-Commerce Mastery",
    "degree": "4-Month Professional Certification",
    "category": "it-skills",
    "categoryLabel": "IT Skill Certification",
    "duration": "4 Months (Weekend / Evening)",
    "studyMode": "Hybrid / On-Campus Studio",
    "creditHours": "120 Hands-on Hours + Live Ad Campaigns",
    "eligibility": "Open to students, entrepreneurs, store owners, and freelancers.",
    "image": "/images/program_it_digital_marketing.jpg",
    "shortDescription": "Master Meta Ads (Facebook/Instagram), Google Ads, Search Engine Optimization (SEO), TikTok Ads, Shopify store creation, Daraz selling, and freelance bidding.",
    "overview": "The Digital Marketing & E-Commerce Mastery program is an ROI-focused bootcamp designed to turn students into high-earning digital growth marketers and successful online store owners. Students learn to launch highly profitable paid advertising campaigns, rank websites #1 on Google with technical and on-page SEO, set up automated Shopify and Daraz stores, and scale freelance businesses on Upwork and Fiverr.",
    "whyStudy": [
      {
        "title": "Live Ad Budget Practice",
        "description": "Run real Meta and Google Ad campaigns with practical budget allocation and conversion tracking."
      },
      {
        "title": "Complete E-Commerce Blueprint",
        "description": "Learn product hunting, supplier sourcing, Shopify dropshipping, and Daraz seller center operations."
      },
      {
        "title": "High Freelance Earning Potential",
        "description": "Digital marketing is among the fastest routes to earning $500–$2,000+ monthly in remote freelancing."
      },
      {
        "title": "Mentorship by Top Agency Experts",
        "description": "Taught by practicing growth marketers who manage six-figure digital marketing budgets."
      }
    ],
    "learningOutcomes": [
      {
        "number": "01",
        "title": "Meta Ads Mastery",
        "description": "Architect profitable Facebook and Instagram ad funnels, custom audiences, Pixel, and CAPI tracking."
      },
      {
        "number": "02",
        "title": "Google Ads & SEO",
        "description": "Master Google Search Ads, Performance Max, keyword research, on-page optimization, and high-DA backlink building."
      },
      {
        "number": "03",
        "title": "Shopify & Daraz Stores",
        "description": "Build high-converting Shopify e-commerce stores, integrate payment gateways, and fulfill orders on Daraz."
      },
      {
        "number": "04",
        "title": "Freelance Agency Launch",
        "description": "Write winning proposals on Upwork, optimize Fiverr gigs, and pitch retainer clients globally."
      }
    ],
    "skills": [
      "Meta Ads (FB/Insta Funnels & Pixel)",
      "Google Ads (Search & Performance Max)",
      "Technical & On-Page SEO (Ahrefs / SEMrush)",
      "Shopify Store Design & App Integrations",
      "Daraz Seller Center & Product Hunting",
      "TikTok & Short-Form Video Marketing",
      "Copywriting & Conversion Rate Optimization",
      "Upwork & Fiverr Freelancing Strategy"
    ],
    "careerPaths": [
      {
        "title": "Digital Marketing Specialist",
        "description": "Manage paid ad campaigns and growth channels for corporate brands and startups."
      },
      {
        "title": "E-Commerce Store Owner / Dropshipper",
        "description": "Launch and scale profitable private label or dropshipping stores locally and internationally."
      },
      {
        "title": "SEO Strategist",
        "description": "Rank enterprise websites on Google search to generate organic traffic and leads."
      },
      {
        "title": "Freelance Media Buyer",
        "description": "Manage monthly ad spend for overseas clients on Upwork and Fiverr."
      }
    ],
    "curriculum": [
      {
        "semester": "Month 1–2: Paid Ads & Content Funnels",
        "courses": [
          {
            "code": "DM-101",
            "title": "Meta Advertising (Facebook & Instagram Ad Funnels, CAPI & Pixel)",
            "credits": "30 Hours",
            "type": "Paid Social"
          },
          {
            "code": "DM-102",
            "title": "Google Ads (Search, Display, Performance Max & YouTube Ads)",
            "credits": "30 Hours",
            "type": "Search Marketing"
          }
        ]
      },
      {
        "semester": "Month 3–4: SEO, E-Commerce & Freelancing",
        "courses": [
          {
            "code": "DM-201",
            "title": "SEO (Keyword Research, Technical Audits & Link Building)",
            "credits": "30 Hours",
            "type": "Organic Growth"
          },
          {
            "code": "DM-202",
            "title": "Shopify, Daraz E-Commerce & Upwork/Fiverr Mastery",
            "credits": "30 Hours",
            "type": "E-Commerce Capstone"
          }
        ]
      }
    ],
    "admissionRequirements": {
      "qualification": "Matriculation / Intermediate or higher.",
      "minPercentage": "Open enrollment.",
      "documents": [
        "CNIC copy",
        "1 passport photo"
      ]
    },
    "fees": {
      "admissionFee": "PKR 5,000",
      "tuitionFee": "PKR 35,000 total course fee (payable in 2 installments of PKR 17,500)",
      "totalSemesterEstimate": "PKR 35,000 total",
      "note": "All premium marketing tool licenses provided during training."
    },
    "scholarships": [
      "Female Empowerment Scholarship (20% discount)"
    ],
    "faqs": [
      {
        "question": "Do I need technical coding knowledge?",
        "answer": "No coding is required. Digital marketing focuses on strategy, analytics, copywriting, and visual creative optimization."
      }
    ]
  },
  {
    "id": "prof-uiux-design",
    "slug": "ui-ux-design-and-graphic-branding",
    "title": "UI/UX Design & Graphic Branding",
    "degree": "4-Month Professional Certification",
    "category": "it-skills",
    "categoryLabel": "IT Skill Certification",
    "duration": "4 Months (Weekend / Evening)",
    "studyMode": "On-Campus Creative Lab / Hybrid",
    "creditHours": "120 Practical Hours + Behance/Dribbble Portfolio",
    "eligibility": "Open to anyone with a creative mindset and passion for design.",
    "image": "/images/program_it_uiux_design.jpg",
    "shortDescription": "Master Figma, UI/UX design systems, mobile app wireframing, interactive prototyping, user research, Adobe Photoshop, Illustrator, and visual branding.",
    "overview": "The UI/UX Design & Graphic Branding bootcamp trains students to create visually stunning, intuitive digital products and memorable brand identities. Starting from visual design fundamentals in Adobe Photoshop and Illustrator, the curriculum advances to deep UX research, wireframing, interactive prototyping in Figma, design systems, and responsive design for iOS and Android apps.",
    "whyStudy": [
      {
        "title": "Booming Product Design Industry",
        "description": "Every tech startup and software company requires dedicated UI/UX designers to create sleek digital experiences."
      },
      {
        "title": "Figma Mastery & Design Systems",
        "description": "Build scalable auto-layout components, variant libraries, and interactive micro-animations."
      },
      {
        "title": "High-Paying Remote Careers",
        "description": "UI/UX designers are among the top-earning remote creative professionals on global freelance platforms."
      },
      {
        "title": "Polished Portfolio at Graduation",
        "description": "Graduate with a comprehensive Behance case study and interactive Figma clickable prototypes ready for job applications."
      }
    ],
    "learningOutcomes": [
      {
        "number": "01",
        "title": "UX Research & Wireframing",
        "description": "Conduct user interviews, create empathy maps, user personas, journey maps, and low-fidelity wireframes."
      },
      {
        "number": "02",
        "title": "High-Fidelity Figma Prototyping",
        "description": "Design responsive mobile and web interfaces with auto-layout, components, styles, and micro-interactions."
      },
      {
        "number": "03",
        "title": "Graphic Branding & Visual Identity",
        "description": "Create vector logos, typography hierarchies, color palettes, and marketing assets in Adobe Illustrator and Photoshop."
      },
      {
        "number": "04",
        "title": "Design Handoff & Developer Collaboration",
        "description": "Prepare design specs, asset exports, token libraries, and developer documentation."
      }
    ],
    "skills": [
      "Figma (Auto-layout, Components, Variants)",
      "User Experience (UX) Research & Personas",
      "Wireframing & Information Architecture",
      "Interactive Mobile & Web Prototyping",
      "Adobe Photoshop (Photo Manipulation)",
      "Adobe Illustrator (Vector Graphics & Logos)",
      "Design Systems & Token Architecture",
      "Behance & Dribbble Portfolio Presentation"
    ],
    "careerPaths": [
      {
        "title": "UI/UX Designer",
        "description": "Design user-friendly mobile apps, websites, and SaaS dashboards."
      },
      {
        "title": "Product Designer",
        "description": "Lead end-to-end product discovery, user journeys, and feature UX."
      },
      {
        "title": "Brand Identity Designer",
        "description": "Create complete corporate branding kits, logos, and visual guidelines."
      },
      {
        "title": "Freelance UI Designer",
        "description": "Design web and mobile mockups for international clients on Upwork and Dribbble."
      }
    ],
    "curriculum": [
      {
        "semester": "Month 1–2: Graphic Design & Branding",
        "courses": [
          {
            "code": "DSN-101",
            "title": "Graphic Design Fundamentals, Color Theory, Typography & Illustrator",
            "credits": "30 Hours",
            "type": "Visual Arts"
          },
          {
            "code": "DSN-102",
            "title": "Adobe Photoshop Photo Editing & Brand Visual Assets",
            "credits": "30 Hours",
            "type": "Digital Media"
          }
        ]
      },
      {
        "semester": "Month 3–4: UI/UX & Figma Product Design",
        "courses": [
          {
            "code": "DSN-201",
            "title": "UX Research, Information Architecture & Figma Wireframing",
            "credits": "30 Hours",
            "type": "UX Design"
          },
          {
            "code": "DSN-202",
            "title": "High-Fidelity App Prototyping, Design Systems & Behance Portfolio",
            "credits": "30 Hours",
            "type": "UI Capstone"
          }
        ]
      }
    ],
    "admissionRequirements": {
      "qualification": "Matriculation / Intermediate or higher.",
      "minPercentage": "Open enrollment.",
      "documents": [
        "CNIC copy",
        "1 passport photo"
      ]
    },
    "fees": {
      "admissionFee": "PKR 5,000",
      "tuitionFee": "PKR 35,000 total course fee (payable in 2 installments of PKR 17,500)",
      "totalSemesterEstimate": "PKR 35,000 total",
      "note": "All software assets and design kits provided."
    },
    "scholarships": [
      "Early bird scholarship (15% discount)"
    ],
    "faqs": [
      {
        "question": "Do I need drawing or sketching skills?",
        "answer": "No traditional sketching skills are required. The course focuses on digital tools, visual hierarchy, layout composition, and user-centric problem solving."
      }
    ]
  }
];
