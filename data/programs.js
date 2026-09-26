export const programs = [
  {
    id: "bs-cs",
    slug: "bs-computer-science",
    title: "BS Computer Science",
    degree: "Bachelor of Science in Computer Science",
    category: "bs",
    categoryLabel: "Undergraduate Program",
    duration: "4 Years (8 Semesters)",
    studyMode: "Full Time (Morning / Afternoon)",
    creditHours: "134 Credit Hours",
    eligibility: "Intermediate (FSc Pre-Engineering / ICS / General Science with Mathematics) or A-Levels with minimum 50% marks.",
    image: "/images/course_coding.jpg",
    shortDescription: "A comprehensive four-year undergraduate program focusing on computer systems, software architecture, algorithms, data engineering, and modern computing paradigms.",
    overview: "The Bachelor of Science in Computer Science (BSCS) at Pak Royal College provides a rigorous theoretical foundation combined with intensive practical application in modern computing technologies. Designed in alignment with national HEC guidelines and international computing standards, the curriculum equips students with deep algorithmic knowledge, systems programming expertise, software design mastery, and intelligent systems development. Students work in state-of-the-art computer laboratories, engaging in real-world problem solving, project-driven learning, and collaborative research initiatives.",
    whyStudy: [
      {
        title: "Modern & Industry-Aligned Curriculum",
        description: "Continually updated to reflect the latest advancements in artificial intelligence, software engineering, cloud computing, and cybersecurity."
      },
      {
        title: "State-of-the-Art Computing Labs",
        description: "Equipped with high-performance workstations, cloud compute resources, and dedicated hardware for distributed systems and AI training."
      },
      {
        title: "Experienced & Research-Active Faculty",
        description: "Learn from accomplished professors and industry veterans who bring extensive real-world expertise into the classroom."
      },
      {
        title: "Hands-on Project Pedagogy",
        description: "Every core semester integrates capstone projects, coding bootcamps, and hackathons to foster practical engineering problem-solving."
      },
      {
        title: "Industry Linkages & Internships",
        description: "Strong partnerships with leading software houses, technology firms, and incubation centers for internships and placement support."
      },
      {
        title: "Comprehensive Career Preparation",
        description: "Structured career mentorship, technical interview preparation, and portfolio building to launch impactful tech careers globally."
      }
    ],
    learningOutcomes: [
      { number: "01", title: "Computing Knowledge", description: "Demonstrate in-depth understanding of algorithmic foundations, computational theory, and hardware-software integration." },
      { number: "02", title: "Software Architecture", description: "Architect, develop, test, and deploy robust, secure, and maintainable software systems across diverse platforms." },
      { number: "03", title: "Complex Problem Solving", description: "Analyze complex technological challenges and formulate optimal algorithmic and engineering solutions." },
      { number: "04", title: "Modern Tool Mastery", description: "Proficiency in modern programming languages, development frameworks, databases, version control, and CI/CD pipelines." },
      { number: "05", title: "Research & Innovation", description: "Conduct applied computing research, investigate novel paradigms, and contribute to technological innovation." },
      { number: "06", title: "Professional Ethics & Leadership", description: "Demonstrate high ethical standards, effective team leadership, and impactful technical communication." }
    ],
    skills: [
      "Data Structures & Algorithms",
      "Full-Stack Web Development",
      "Object-Oriented Programming (C++/Java/Python)",
      "Database Systems & SQL/NoSQL",
      "Operating Systems & Linux",
      "Cloud Computing & Docker",
      "Artificial Intelligence Fundamentals",
      "Software Testing & Agile Methodologies"
    ],
    careerPaths: [
      { title: "Software Engineer", description: "Design, build, and maintain large-scale enterprise applications and platforms." },
      { title: "Full-Stack Developer", description: "Develop modern web and cloud applications from frontend interfaces to backend microservices." },
      { title: "Systems Analyst", description: "Analyze complex organizational IT needs and design tailored software system architectures." },
      { title: "Database Administrator", description: "Architect, optimize, and secure relational and distributed database clusters." },
      { title: "Cloud Solutions Architect", description: "Deploy scalable cloud infrastructure and serverless solutions on AWS and Azure." },
      { title: "AI / Machine Learning Engineer", description: "Build intelligent systems, predictive algorithms, and automated data pipelines." }
    ],
    curriculum: [
      {
        semester: "Semester 1",
        courses: [
          { code: "CS-101", title: "Introduction to Information & Communication Technologies", credits: "3 (2+1)", type: "Core Foundation" },
          { code: "CS-102", title: "Programming Fundamentals", credits: "4 (3+1)", type: "Core Computing" },
          { code: "MT-101", title: "Calculus and Analytical Geometry", credits: "3 (3+0)", type: "Mathematics" },
          { code: "EG-101", title: "English Composition & Comprehension", credits: "3 (3+0)", type: "General Education" },
          { code: "PK-101", title: "Pakistan Studies & Ideology", credits: "2 (2+0)", type: "General Education" }
        ]
      },
      {
        semester: "Semester 2",
        courses: [
          { code: "CS-103", title: "Object Oriented Programming", credits: "4 (3+1)", type: "Core Computing" },
          { code: "CS-104", title: "Digital Logic Design", credits: "4 (3+1)", type: "Core Foundation" },
          { code: "MT-102", title: "Multivariable Calculus & Linear Algebra", credits: "3 (3+0)", type: "Mathematics" },
          { code: "EG-102", title: "Communication and Presentation Skills", credits: "3 (3+0)", type: "General Education" },
          { code: "IS-101", title: "Islamic Studies / Ethics", credits: "2 (2+0)", type: "General Education" }
        ]
      },
      {
        semester: "Semester 3",
        courses: [
          { code: "CS-201", title: "Data Structures & Algorithms", credits: "4 (3+1)", type: "Core Computing" },
          { code: "CS-202", title: "Discrete Structures", credits: "3 (3+0)", type: "Core Computing" },
          { code: "CS-203", title: "Computer Organization & Assembly Language", credits: "4 (3+1)", type: "Core Computing" },
          { code: "MT-201", title: "Probability and Statistics", credits: "3 (3+0)", type: "Mathematics" },
          { code: "MG-201", title: "Principles of Management", credits: "3 (3+0)", type: "General Education" }
        ]
      },
      {
        semester: "Semester 4",
        courses: [
          { code: "CS-204", title: "Operating Systems", credits: "4 (3+1)", type: "Core Computing" },
          { code: "CS-205", title: "Database Systems", credits: "4 (3+1)", type: "Core Computing" },
          { code: "CS-206", title: "Software Engineering", credits: "3 (3+0)", type: "Core Computing" },
          { code: "CS-207", title: "Design & Analysis of Algorithms", credits: "3 (3+0)", type: "Domain Core" },
          { code: "EG-201", title: "Technical & Report Writing", credits: "3 (3+0)", type: "General Education" }
        ]
      },
      {
        semester: "Semester 5",
        courses: [
          { code: "CS-301", title: "Computer Networks & Communications", credits: "4 (3+1)", type: "Core Computing" },
          { code: "CS-302", title: "Theory of Automata & Formal Languages", credits: "3 (3+0)", type: "Domain Core" },
          { code: "CS-303", title: "Artificial Intelligence", credits: "4 (3+1)", type: "Domain Core" },
          { code: "CS-304", title: "Web Technologies & Frameworks", credits: "3 (2+1)", type: "Elective" },
          { code: "MT-301", title: "Differential Equations & Numerical Computing", credits: "3 (3+0)", type: "Mathematics" }
        ]
      },
      {
        semester: "Semester 6",
        courses: [
          { code: "CS-305", title: "Compiler Construction", credits: "3 (3+0)", type: "Domain Core" },
          { code: "CS-306", title: "Information Security & Cryptography", credits: "3 (3+0)", type: "Core Computing" },
          { code: "CS-307", title: "Mobile Application Development", credits: "3 (2+1)", type: "Elective" },
          { code: "CS-308", title: "Cloud Computing Architectures", credits: "3 (2+1)", type: "Elective" },
          { code: "MG-301", title: "Professional Ethics & Intellectual Property", credits: "3 (3+0)", type: "General Education" }
        ]
      },
      {
        semester: "Semester 7",
        courses: [
          { code: "CS-401", title: "Final Year Project — Phase I", credits: "3 (0+3)", type: "Capstone Project" },
          { code: "CS-402", title: "Data Mining & Machine Learning", credits: "3 (2+1)", type: "Elective" },
          { code: "CS-403", title: "Parallel & Distributed Computing", credits: "3 (3+0)", type: "Domain Core" },
          { code: "MG-401", title: "Entrepreneurship & Innovation", credits: "3 (3+0)", type: "General Education" }
        ]
      },
      {
        semester: "Semester 8",
        courses: [
          { code: "CS-404", title: "Final Year Project — Phase II", credits: "3 (0+3)", type: "Capstone Project" },
          { code: "CS-405", title: "DevOps & Continuous Deployment", credits: "3 (2+1)", type: "Elective" },
          { code: "CS-406", title: "Human Computer Interaction", credits: "3 (3+0)", type: "Elective" },
          { code: "CS-407", title: "Industry Internship / Research Seminar", credits: "2 (0+2)", type: "Practical Experience" }
        ]
      }
    ],
    admissionRequirements: {
      qualification: "Intermediate (FSc Pre-Engineering / ICS / General Science with Math) or Equivalent (A-Levels, DAE in IT/Computer)",
      minPercentage: "Minimum 50% aggregate marks in intermediate examinations.",
      documents: [
        "Matric / O-Level result card & certificate (Original & 3 attested copies)",
        "Intermediate / A-Level result card & certificate (Original & 3 attested copies)",
        "CNIC / B-Form copy of applicant and Father/Guardian",
        "4 recent passport-size photographs with blue background",
        "Equivalence certificate from IBCC (for foreign qualifications)"
      ]
    },
    fees: {
      admissionFee: "PKR 25,000 (One-time at admission)",
      tuitionFee: "PKR 65,000 per semester",
      examinationFee: "PKR 5,000 per semester",
      labFee: "PKR 6,000 per semester",
      totalSemesterEstimate: "PKR 76,000 per semester",
      note: "Fee structure is subject to official institutional guidelines and annual approval by the Academic Council."
    },
    scholarships: [
      "Merit-Based Scholarship (up to 100% tuition waiver for top scorers)",
      "Kinship Concession (25% tuition fee waiver for siblings)",
      "Need-Based Financial Assistance",
      "Hafiz-e-Quran Scholarship"
    ],
    faqs: [
      {
        question: "What is the duration and total credit hours of BS Computer Science?",
        answer: "The BS Computer Science program spans 4 years divided into 8 regular academic semesters, totaling 134 credit hours."
      },
      {
        question: "Are pre-medical students eligible for BS Computer Science?",
        answer: "Yes, pre-medical students are eligible to apply provided they complete deficiency courses in mathematics as per HEC regulatory policy."
      },
      {
        question: "Does the program include practical software development training?",
        answer: "Yes, every core semester integrates hands-on lab sessions, modern programming assignments, and a rigorous two-semester final year capstone project."
      },
      {
        question: "Are internships arranged by the college?",
        answer: "The college Career Services and Industry Linkages Office actively coordinates internship placements with recognized technology companies."
      }
    ]
  },
  {
    id: "bs-se",
    slug: "bs-software-engineering",
    title: "BS Software Engineering",
    degree: "Bachelor of Science in Software Engineering",
    category: "bs",
    categoryLabel: "Undergraduate Program",
    duration: "4 Years (8 Semesters)",
    studyMode: "Full Time (Morning / Afternoon)",
    creditHours: "136 Credit Hours",
    eligibility: "Intermediate (FSc Pre-Engineering / ICS) or A-Levels with Mathematics and minimum 50% marks.",
    image: "/images/course_robotics.jpg",
    shortDescription: "Specialized engineering program emphasizing scalable software design, quality assurance, microservice architectures, and agile enterprise methodologies.",
    overview: "The BS Software Engineering program focuses on systematic, disciplined, and quantifiable approaches to the development, operation, and maintenance of software systems. Students learn requirement engineering, software design paradigms, quality assurance, test automation, software project management, and cloud-native application deployment.",
    whyStudy: [
      { title: "Enterprise Engineering Practices", description: "Master scalable design patterns, domain-driven design, and enterprise architectural principles." },
      { title: "Rigorous Quality & Testing", description: "Comprehensive training in automated test engineering, CI/CD pipelines, and security auditing." },
      { title: "Agile & DevOps Integration", description: "Live sprints, Scrum frameworks, and modern containerized deployment workflows." },
      { title: "State-of-the-Art Software Labs", description: "Work with modern development environments, GitOps tools, and testing infrastructures." },
      { title: "Industry Mentorship", description: "Guidance from senior software architects and engineering managers in top tech firms." },
      { title: "Global Career Mobility", description: "Curriculum aligned with international software engineering standards." }
    ],
    learningOutcomes: [
      { number: "01", title: "Engineering Principles", description: "Apply engineering fundamentals to construct large-scale software solutions." },
      { number: "02", title: "Requirement Engineering", description: "Elicit, analyze, specify, and validate complex software requirements." },
      { number: "03", title: "Quality Assurance", description: "Implement comprehensive verification, validation, and automated testing frameworks." },
      { number: "04", title: "Architectural Design", description: "Design resilient microservices, distributed architectures, and scalable APIs." },
      { number: "05", title: "Project Management", description: "Manage project timelines, resource allocations, and agile development lifecycles." },
      { number: "06", title: "Professional Standards", description: "Adhere to professional engineering codes of conduct and data protection standards." }
    ],
    skills: [
      "Software Architecture & Design Patterns",
      "Quality Assurance & Automated Testing",
      "Requirement Analysis & UML Modeling",
      "Full-Stack Web & Mobile Engineering",
      "GitOps, Docker & Kubernetes",
      "Agile Project Management (Scrum/Kanban)",
      "Database Architecture & Optimization",
      "Microservices & REST/GraphQL APIs"
    ],
    careerPaths: [
      { title: "Software Architect", description: "Lead the technical design and structural foundation of enterprise software systems." },
      { title: "Software Quality Engineer (QA)", description: "Develop automated testing suites and ensure software reliability and compliance." },
      { title: "DevOps Engineer", description: "Automate build, deployment, and cloud infrastructure pipelines." },
      { title: "Backend Systems Developer", description: "Build high-throughput backend services, data pipelines, and APIs." },
      { title: "Technical Project Manager", description: "Lead cross-functional engineering teams in delivering complex software projects." }
    ],
    curriculum: [
      {
        semester: "Semester 1",
        courses: [
          { code: "SE-101", title: "Introduction to Information & Communication Technologies", credits: "3 (2+1)", type: "Core Foundation" },
          { code: "SE-102", title: "Programming Fundamentals", credits: "4 (3+1)", type: "Core Computing" },
          { code: "MT-101", title: "Calculus & Analytical Geometry", credits: "3 (3+0)", type: "Mathematics" },
          { code: "EG-101", title: "English Composition & Comprehension", credits: "3 (3+0)", type: "General Education" },
          { code: "PK-101", title: "Pakistan Studies", credits: "2 (2+0)", type: "General Education" }
        ]
      },
      {
        semester: "Semester 2",
        courses: [
          { code: "SE-103", title: "Object Oriented Programming", credits: "4 (3+1)", type: "Core Computing" },
          { code: "SE-104", title: "Introduction to Software Engineering", credits: "3 (3+0)", type: "Domain Core" },
          { code: "MT-102", title: "Linear Algebra", credits: "3 (3+0)", type: "Mathematics" },
          { code: "EG-102", title: "Communication Skills", credits: "3 (3+0)", type: "General Education" },
          { code: "IS-101", title: "Islamic Studies / Ethics", credits: "2 (2+0)", type: "General Education" }
        ]
      },
      {
        semester: "Semester 3",
        courses: [
          { code: "SE-201", title: "Data Structures & Algorithms", credits: "4 (3+1)", type: "Core Computing" },
          { code: "SE-202", title: "Software Requirement Engineering", credits: "3 (3+0)", type: "Domain Core" },
          { code: "SE-203", title: "Discrete Mathematics", credits: "3 (3+0)", type: "Mathematics" },
          { code: "SE-204", title: "Computer Organization & Assembly", credits: "3 (2+1)", type: "Core Computing" },
          { code: "MG-201", title: "Management Principles", credits: "3 (3+0)", type: "General Education" }
        ]
      },
      {
        semester: "Semester 4",
        courses: [
          { code: "SE-205", title: "Operating Systems", credits: "4 (3+1)", type: "Core Computing" },
          { code: "SE-206", title: "Database Systems", credits: "4 (3+1)", type: "Core Computing" },
          { code: "SE-207", title: "Software Design & Architecture", credits: "3 (2+1)", type: "Domain Core" },
          { code: "MT-201", title: "Probability & Statistics", credits: "3 (3+0)", type: "Mathematics" },
          { code: "EG-201", title: "Technical Writing", credits: "3 (3+0)", type: "General Education" }
        ]
      },
      {
        semester: "Semester 5",
        courses: [
          { code: "SE-301", title: "Software Construction & Development", credits: "3 (2+1)", type: "Domain Core" },
          { code: "SE-302", title: "Computer Networks", credits: "4 (3+1)", type: "Core Computing" },
          { code: "SE-303", title: "Software Quality Engineering", credits: "3 (3+0)", type: "Domain Core" },
          { code: "SE-304", title: "Web Engineering", credits: "3 (2+1)", type: "Elective" },
          { code: "MG-301", title: "Software Project Management", credits: "3 (3+0)", type: "Domain Core" }
        ]
      },
      {
        semester: "Semester 6",
        courses: [
          { code: "SE-305", title: "Software Testing & Automation", credits: "3 (2+1)", type: "Domain Core" },
          { code: "SE-306", title: "Information Security", credits: "3 (3+0)", type: "Core Computing" },
          { code: "SE-307", title: "Cloud Native Software Engineering", credits: "3 (2+1)", type: "Elective" },
          { code: "SE-308", title: "Enterprise Application Development", credits: "3 (2+1)", type: "Elective" },
          { code: "MG-302", title: "Professional Ethics", credits: "3 (3+0)", type: "General Education" }
        ]
      },
      {
        semester: "Semester 7",
        courses: [
          { code: "SE-401", title: "Final Year Capstone Project — I", credits: "3 (0+3)", type: "Capstone Project" },
          { code: "SE-402", title: "Software Re-engineering & Maintenance", credits: "3 (3+0)", type: "Domain Core" },
          { code: "SE-403", title: "DevOps & Continuous Integration", credits: "3 (2+1)", type: "Elective" },
          { code: "MG-401", title: "Technology Entrepreneurship", credits: "3 (3+0)", type: "General Education" }
        ]
      },
      {
        semester: "Semester 8",
        courses: [
          { code: "SE-404", title: "Final Year Capstone Project — II", credits: "3 (0+3)", type: "Capstone Project" },
          { code: "SE-405", title: "Mobile Application Engineering", credits: "3 (2+1)", type: "Elective" },
          { code: "SE-406", title: "Distributed Systems Architecture", credits: "3 (3+0)", type: "Elective" },
          { code: "SE-407", title: "Industrial Internship", credits: "2 (0+2)", type: "Practical Experience" }
        ]
      }
    ],
    admissionRequirements: {
      qualification: "Intermediate (FSc Pre-Engineering / ICS with Math) or Equivalent (A-Levels)",
      minPercentage: "Minimum 50% aggregate marks.",
      documents: [
        "Matric / O-Level result card & certificate (Original & 3 copies)",
        "Intermediate / A-Level result card (Original & 3 copies)",
        "CNIC / B-Form copy",
        "4 recent passport photos"
      ]
    },
    fees: {
      admissionFee: "PKR 25,000 (One-time)",
      tuitionFee: "PKR 65,000 per semester",
      examinationFee: "PKR 5,000 per semester",
      labFee: "PKR 6,000 per semester",
      totalSemesterEstimate: "PKR 76,000 per semester",
      note: "Subject to official college regulations."
    },
    scholarships: [
      "Merit-Based Scholarship",
      "Kinship Concession",
      "Need-Based Financial Aid"
    ],
    faqs: [
      {
        question: "How does Software Engineering differ from Computer Science?",
        answer: "While Computer Science focuses deeply on computational theory, hardware-software interaction, and algorithmic science, Software Engineering emphasizes engineering methodologies, quality assurance, architecture, testing, and lifecycle management for production software."
      },
      {
        question: "Is there a focus on modern frameworks and cloud tools?",
        answer: "Yes, students work with React, Node.js, Python, Docker, Kubernetes, AWS, and enterprise testing frameworks."
      }
    ]
  },
  {
    id: "bs-ai",
    slug: "bs-artificial-intelligence",
    title: "BS Artificial Intelligence",
    degree: "Bachelor of Science in Artificial Intelligence",
    category: "bs",
    categoryLabel: "Undergraduate Program",
    duration: "4 Years (8 Semesters)",
    studyMode: "Full Time (Morning / Afternoon)",
    creditHours: "134 Credit Hours",
    eligibility: "Intermediate (FSc Pre-Engineering / ICS with Math) or A-Levels with minimum 50% marks.",
    image: "/images/hero_ai_lab.jpg",
    shortDescription: "Cutting-edge degree covering machine learning, deep learning, computer vision, natural language processing, robotics, and intelligent autonomous systems.",
    overview: "The BS Artificial Intelligence program is tailored for the next generation of computing pioneers. As represented in the official Pak Royal College shield emblem, AI and intelligent systems form a foundational pillar of our academic institution. Students gain mathematical depth in statistical learning and computational neuroscience while mastering modern deep learning architectures, computer vision models, and generative AI frameworks.",
    whyStudy: [
      { title: "Pillar of College Identity", description: "Directly aligned with Pak Royal College's core mission of pioneering AI-driven education." },
      { title: "Specialized AI Compute Lab", description: "GPU-accelerated computing workstations for training neural networks and vision models." },
      { title: "Deep Mathematical & Applied Rigor", description: "Balanced curriculum blending linear algebra, multivariate calculus, and PyTorch/TensorFlow frameworks." },
      { title: "Generative AI & LLM Exploration", description: "Hands-on projects in transformer architectures, prompt engineering, and fine-tuning." },
      { title: "Ethics in AI & Responsible Tech", description: "Focus on fairness, interpretability, data governance, and ethical AI deployment." },
      { title: "High-Growth Global Career Trajectory", description: "Prepare for high-demand roles in AI research, data engineering, and automation." }
    ],
    learningOutcomes: [
      { number: "01", title: "Statistical Foundations", description: "Master probabilistic reasoning, statistical inference, and vector mathematics." },
      { number: "02", title: "Neural Networks", description: "Design, train, and optimize deep neural networks for complex classification and generation tasks." },
      { number: "03", title: "Computer Vision", description: "Build automated image recognition, object detection, and spatial scene understanding systems." },
      { number: "04", title: "NLP & LLMs", description: "Develop natural language processing pipelines, language models, and conversational agents." },
      { number: "05", title: "Autonomous Systems", description: "Implement reinforcement learning algorithms and robotic decision-making agents." },
      { number: "06", title: "Applied AI Deployment", description: "Deploy optimized AI inference models to edge devices and cloud endpoints." }
    ],
    skills: [
      "Python, PyTorch & TensorFlow",
      "Deep Learning & Neural Architectures",
      "Computer Vision & OpenCV",
      "Natural Language Processing & Transformers",
      "Machine Learning Algorithms & Scikit-Learn",
      "Data Pipelines & Feature Engineering",
      "Cloud AI (AWS SageMaker / Vertex AI)",
      "MLOps & Model Monitoring"
    ],
    careerPaths: [
      { title: "AI / ML Engineer", description: "Build and deploy machine learning models for enterprise automation and prediction." },
      { title: "Data Scientist", description: "Extract actionable insights, statistical models, and trends from large-scale data." },
      { title: "Computer Vision Specialist", description: "Create visual inspection, facial recognition, and autonomous navigation tools." },
      { title: "NLP Specialist", description: "Architect multilingual translation systems, chatbots, and document intelligence platforms." },
      { title: "MLOps Engineer", description: "Manage continuous integration, deployment, and monitoring of AI models in production." }
    ],
    curriculum: [
      {
        semester: "Semester 1",
        courses: [
          { code: "AI-101", title: "Introduction to Artificial Intelligence & Computing", credits: "3 (2+1)", type: "Core Foundation" },
          { code: "AI-102", title: "Programming Fundamentals with Python", credits: "4 (3+1)", type: "Core Computing" },
          { code: "MT-101", title: "Calculus & Analytical Geometry", credits: "3 (3+0)", type: "Mathematics" },
          { code: "EG-101", title: "English Composition", credits: "3 (3+0)", type: "General Education" },
          { code: "PK-101", title: "Pakistan Studies", credits: "2 (2+0)", type: "General Education" }
        ]
      },
      {
        semester: "Semester 2",
        courses: [
          { code: "AI-103", title: "Object Oriented Programming (C++/Java)", credits: "4 (3+1)", type: "Core Computing" },
          { code: "AI-104", title: "Discrete Structures", credits: "3 (3+0)", type: "Core Computing" },
          { code: "MT-102", title: "Linear Algebra & Vector Spaces", credits: "3 (3+0)", type: "Mathematics" },
          { code: "EG-102", title: "Communication Skills", credits: "3 (3+0)", type: "General Education" },
          { code: "IS-101", title: "Islamic Studies / Ethics", credits: "2 (2+0)", type: "General Education" }
        ]
      },
      {
        semester: "Semester 3",
        courses: [
          { code: "AI-201", title: "Data Structures & Algorithms", credits: "4 (3+1)", type: "Core Computing" },
          { code: "AI-202", title: "Foundations of Artificial Intelligence", credits: "4 (3+1)", type: "Domain Core" },
          { code: "MT-201", title: "Probability & Statistical Inference for AI", credits: "3 (3+0)", type: "Mathematics" },
          { code: "AI-203", title: "Database Systems", credits: "4 (3+1)", type: "Core Computing" }
        ]
      },
      {
        semester: "Semester 4",
        courses: [
          { code: "AI-204", title: "Machine Learning Foundations", credits: "4 (3+1)", type: "Domain Core" },
          { code: "AI-205", title: "Operating Systems", credits: "4 (3+1)", type: "Core Computing" },
          { code: "AI-206", title: "Design & Analysis of Algorithms", credits: "3 (3+0)", type: "Core Computing" },
          { code: "MT-202", title: "Multivariable Optimization for AI", credits: "3 (3+0)", type: "Mathematics" }
        ]
      },
      {
        semester: "Semester 5",
        courses: [
          { code: "AI-301", title: "Deep Learning & Neural Networks", credits: "4 (3+1)", type: "Domain Core" },
          { code: "AI-302", title: "Knowledge Representation & Reasoning", credits: "3 (3+0)", type: "Domain Core" },
          { code: "AI-303", title: "Computer Vision", credits: "4 (3+1)", type: "Elective" },
          { code: "AI-304", title: "Computer Networks & Distributed Systems", credits: "3 (2+1)", type: "Core Computing" }
        ]
      },
      {
        semester: "Semester 6",
        courses: [
          { code: "AI-305", title: "Natural Language Processing", credits: "4 (3+1)", type: "Domain Core" },
          { code: "AI-306", title: "Reinforcement Learning & Robotics", credits: "3 (2+1)", type: "Elective" },
          { code: "AI-307", title: "AI Ethics, Governance & Law", credits: "3 (3+0)", type: "General Education" },
          { code: "AI-308", title: "MLOps & Cloud Model Deployment", credits: "3 (2+1)", type: "Elective" }
        ]
      },
      {
        semester: "Semester 7",
        courses: [
          { code: "AI-401", title: "Senior AI Capstone Project — Phase I", credits: "3 (0+3)", type: "Capstone Project" },
          { code: "AI-402", title: "Generative AI & Large Language Models", credits: "3 (2+1)", type: "Elective" },
          { code: "AI-403", title: "Big Data Technologies & Spark", credits: "3 (2+1)", type: "Elective" },
          { code: "MG-401", title: "AI Entrepreneurship & Commercialization", credits: "3 (3+0)", type: "General Education" }
        ]
      },
      {
        semester: "Semester 8",
        courses: [
          { code: "AI-404", title: "Senior AI Capstone Project — Phase II", credits: "3 (0+3)", type: "Capstone Project" },
          { code: "AI-405", title: "Autonomous Intelligent Agents", credits: "3 (3+0)", type: "Elective" },
          { code: "AI-406", title: "Industry AI Internship", credits: "2 (0+2)", type: "Practical Experience" }
        ]
      }
    ],
    admissionRequirements: {
      qualification: "FSc Pre-Engineering / ICS / General Science with Mathematics, or A-Levels with Mathematics.",
      minPercentage: "Minimum 50% marks in intermediate examinations.",
      documents: [
        "Matric result card & certificate (Original & 3 copies)",
        "Intermediate result card & certificate (Original & 3 copies)",
        "CNIC / B-Form copy",
        "4 recent passport photos"
      ]
    },
    fees: {
      admissionFee: "PKR 25,000 (One-time)",
      tuitionFee: "PKR 68,000 per semester",
      examinationFee: "PKR 5,000 per semester",
      labFee: "PKR 8,000 per semester (AI GPU Lab)",
      totalSemesterEstimate: "PKR 81,000 per semester",
      note: "Subject to official institutional schedule."
    },
    scholarships: [
      "AI Innovation Merit Award (Full / Partial tuition waiver)",
      "Kinship Concession",
      "Need-Based Financial Assistance"
    ],
    faqs: [
      {
        question: "Do I need prior coding experience before starting BS AI?",
        answer: "No prior programming experience is required. The curriculum begins with fundamental programming in Python and C++ in the first year."
      },
      {
        question: "What hardware resources are available for AI students?",
        answer: "Pak Royal College provides dedicated high-performance workstation labs equipped with modern NVIDIA GPU accelerators for deep learning training."
      }
    ]
  },
  {
    id: "bs-it",
    slug: "bs-information-technology",
    title: "BS Information Technology",
    degree: "Bachelor of Science in Information Technology",
    category: "bs",
    categoryLabel: "Undergraduate Program",
    duration: "4 Years (8 Semesters)",
    studyMode: "Full Time (Morning / Afternoon)",
    creditHours: "132 Credit Hours",
    eligibility: "Intermediate (FSc / ICS / F.A with Math) or A-Levels with minimum 50% marks.",
    image: "/images/hero_campus.jpg",
    shortDescription: "Applied computing program focusing on enterprise IT infrastructure, cloud administration, network security, database management, and systems integration.",
    overview: "The BS Information Technology program prepares students to architect, configure, secure, and manage enterprise IT infrastructures. The program covers computer networks, cloud virtualization, system administration, cybersecurity operations, web systems, and database administration.",
    whyStudy: [
      { title: "Hands-on Infrastructure Mastery", description: "Configure enterprise servers, virtualized clusters, and secure networks." },
      { title: "Cybersecurity & Network Defense", description: "Learn proactive firewall configuration, vulnerability assessment, and incident response." },
      { title: "Cloud & Virtualization", description: "Work with AWS, Azure, VMware, and Linux enterprise server environments." },
      { title: "High Industry Demand", description: "Every enterprise requires certified IT administrators, network engineers, and system architects." },
      { title: "Industry Certifications Prep", description: "Curriculum assists preparation for CCNA, AWS Cloud Practitioner, and CompTIA Security+." },
      { title: "Modern Labs & Simulation Tools", description: "Practical network simulation and live server rack testing." }
    ],
    learningOutcomes: [
      { number: "01", title: "Enterprise Networking", description: "Design, configure, and troubleshoot complex multi-site computer networks." },
      { number: "02", title: "System Administration", description: "Administer Linux and Windows Server environments with automation scripts." },
      { number: "03", title: "Cyber Defense", description: "Implement defensive security controls, encryption protocols, and access management." },
      { number: "04", title: "Cloud Solutions", description: "Provision and scale multi-tenant cloud architectures." },
      { number: "05", title: "Database Systems", description: "Manage enterprise database clusters, backup protocols, and disaster recovery." },
      { number: "06", title: "IT Service Management", description: "Apply ITIL frameworks and service level management practices." }
    ],
    skills: [
      "Network Engineering (Cisco CCNA concepts)",
      "Linux & Windows Server Administration",
      "Cloud Infrastructure (AWS / Azure)",
      "Cybersecurity Operations & Firewalls",
      "Database Administration & SQL",
      "Virtualization & Containerization",
      "Bash & Python Scripting",
      "IT Project Management"
    ],
    careerPaths: [
      { title: "Network Administrator", description: "Manage routers, switches, VPNs, and organizational communication backbones." },
      { title: "Cloud Systems Administrator", description: "Oversee cloud deployments, cost optimization, and high availability." },
      { title: "Cybersecurity Analyst", description: "Monitor security operation centers and protect enterprise digital assets." },
      { title: "IT Support & Infrastructure Manager", description: "Lead institutional IT operations and end-user computing infrastructure." }
    ],
    curriculum: [
      {
        semester: "Semester 1",
        courses: [
          { code: "IT-101", title: "Introduction to Information Technology", credits: "3 (2+1)", type: "Core Foundation" },
          { code: "IT-102", title: "Programming Fundamentals", credits: "4 (3+1)", type: "Core Computing" },
          { code: "MT-101", title: "Calculus & Analytical Geometry", credits: "3 (3+0)", type: "Mathematics" },
          { code: "EG-101", title: "English Composition", credits: "3 (3+0)", type: "General Education" },
          { code: "PK-101", title: "Pakistan Studies", credits: "2 (2+0)", type: "General Education" }
        ]
      },
      {
        semester: "Semester 2",
        courses: [
          { code: "IT-103", title: "Object Oriented Programming", credits: "4 (3+1)", type: "Core Computing" },
          { code: "IT-104", title: "Computer Architecture", credits: "3 (3+0)", type: "Core Computing" },
          { code: "MT-102", title: "Linear Algebra", credits: "3 (3+0)", type: "Mathematics" },
          { code: "EG-102", title: "Communication Skills", credits: "3 (3+0)", type: "General Education" },
          { code: "IS-101", title: "Islamic Studies / Ethics", credits: "2 (2+0)", type: "General Education" }
        ]
      },
      {
        semester: "Semester 3",
        courses: [
          { code: "IT-201", title: "Data Structures & Algorithms", credits: "4 (3+1)", type: "Core Computing" },
          { code: "IT-202", title: "Database Systems", credits: "4 (3+1)", type: "Core Computing" },
          { code: "IT-203", title: "Discrete Structures", credits: "3 (3+0)", type: "Mathematics" },
          { code: "MG-201", title: "Management Information Systems", credits: "3 (3+0)", type: "General Education" }
        ]
      },
      {
        semester: "Semester 4",
        courses: [
          { code: "IT-204", title: "Operating Systems & Linux Admin", credits: "4 (3+1)", type: "Core Computing" },
          { code: "IT-205", title: "Computer Networks", credits: "4 (3+1)", type: "Core Computing" },
          { code: "IT-206", title: "Web Technologies", credits: "3 (2+1)", type: "Domain Core" },
          { code: "MT-201", title: "Probability & Statistics", credits: "3 (3+0)", type: "Mathematics" }
        ]
      },
      {
        semester: "Semester 5",
        courses: [
          { code: "IT-301", title: "Network Administration & Routing", credits: "4 (3+1)", type: "Domain Core" },
          { code: "IT-302", title: "Information Security", credits: "3 (3+0)", type: "Core Computing" },
          { code: "IT-303", title: "Cloud Computing & Virtualization", credits: "3 (2+1)", type: "Domain Core" },
          { code: "IT-304", title: "System Administration", credits: "3 (2+1)", type: "Domain Core" }
        ]
      },
      {
        semester: "Semester 6",
        courses: [
          { code: "IT-305", title: "Network Security & Cryptography", credits: "3 (2+1)", type: "Domain Core" },
          { code: "IT-306", title: "Enterprise Systems Integration", credits: "3 (3+0)", type: "Elective" },
          { code: "IT-307", title: "Mobile & Wireless Networks", credits: "3 (3+0)", type: "Elective" },
          { code: "MG-301", title: "IT Project Management", credits: "3 (3+0)", type: "General Education" }
        ]
      },
      {
        semester: "Semester 7",
        courses: [
          { code: "IT-401", title: "Capstone Project — I", credits: "3 (0+3)", type: "Capstone Project" },
          { code: "IT-402", title: "Cyber Forensics & Incident Response", credits: "3 (2+1)", type: "Elective" },
          { code: "IT-403", title: "Data Center Infrastructure & Storage", credits: "3 (3+0)", type: "Elective" }
        ]
      },
      {
        semester: "Semester 8",
        courses: [
          { code: "IT-404", title: "Capstone Project — II", credits: "3 (0+3)", type: "Capstone Project" },
          { code: "IT-405", title: "DevOps & Infrastructure Automation", credits: "3 (2+1)", type: "Elective" },
          { code: "IT-406", title: "IT Internship", credits: "2 (0+2)", type: "Practical Experience" }
        ]
      }
    ],
    admissionRequirements: {
      qualification: "Intermediate (FSc / ICS / General Science / DAE) or A-Levels.",
      minPercentage: "Minimum 50% marks in intermediate examinations.",
      documents: [
        "Matric result card & certificate (Original & 3 copies)",
        "Intermediate result card (Original & 3 copies)",
        "CNIC / B-Form copy",
        "4 recent passport photos"
      ]
    },
    fees: {
      admissionFee: "PKR 25,000 (One-time)",
      tuitionFee: "PKR 62,000 per semester",
      examinationFee: "PKR 5,000 per semester",
      labFee: "PKR 5,000 per semester",
      totalSemesterEstimate: "PKR 72,000 per semester",
      note: "Fee is subject to official college policy."
    },
    scholarships: [
      "Merit-Based Scholarship",
      "Kinship Concession",
      "Need-Based Financial Aid"
    ],
    faqs: [
      {
        question: "What is the primary difference between BS IT and BS Computer Science?",
        answer: "BS Computer Science focuses on algorithm development and core software theory, while BS Information Technology focuses on operational IT systems, networking, cloud systems, and infrastructure administration."
      }
    ]
  },
  {
    id: "bs-ba",
    slug: "bs-business-administration",
    title: "BS Business Administration",
    degree: "Bachelor of Business Administration (BBA)",
    category: "bs",
    categoryLabel: "Undergraduate Program",
    duration: "4 Years (8 Semesters)",
    studyMode: "Full Time (Morning / Afternoon)",
    creditHours: "132 Credit Hours",
    eligibility: "Intermediate (F.A / FSc / ICS / I.Com) or A-Levels with minimum 45% marks.",
    image: "/images/course_bba.jpg",
    shortDescription: "Dynamic business degree cultivating leadership, strategic management, corporate finance, digital marketing, analytics, and entrepreneurial mastery.",
    overview: "The Bachelor of Business Administration (BBA) at Pak Royal College shapes visionary leaders equipped to navigate global commerce and modern digital markets. The curriculum combines classical management foundations with digital business strategies, fintech innovations, brand architecture, and corporate analytics.",
    whyStudy: [
      { title: "Modern Digital Commerce Focus", description: "Learn digital marketing, e-commerce supply chains, and data-driven business analytics." },
      { title: "Corporate Case Method", description: "Analyze real Harvard and international business case studies in every semester." },
      { title: "Incubation & Startup Support", description: "Access college startup mentorship, business plan competitions, and seed grants." },
      { title: "Corporate Guest Lectures", description: "Network with CEOs, brand managers, and financial analysts in weekly leadership seminars." },
      { title: "Specializations in High Growth Fields", description: "Marketing, Finance, Supply Chain, Human Resource Management, and Fintech." },
      { title: "Internship Placement Guarantee", description: "Mandatory corporate internships with leading multi-nationals and national banks." }
    ],
    learningOutcomes: [
      { number: "01", title: "Strategic Leadership", description: "Formulate and execute competitive corporate business strategies." },
      { number: "02", title: "Financial Analysis", description: "Evaluate corporate capital structures, investment portfolios, and financial statements." },
      { number: "03", title: "Digital Marketing", description: "Execute omnichannel marketing, consumer behavior analytics, and branding campaigns." },
      { number: "04", title: "Operations & Supply Chain", description: "Optimize global supply chain logistics, procurement, and quality control." },
      { number: "05", title: "Organizational Behavior", description: "Foster high-performance team cultures, conflict resolution, and HR policies." },
      { number: "06", title: "Business Analytics", description: "Leverage Power BI, Excel modeling, and statistical tools for data-backed decisions." }
    ],
    skills: [
      "Financial Modeling & Analysis",
      "Digital Marketing & SEO/SEM",
      "Strategic Business Planning",
      "Business Analytics & Power BI",
      "Corporate Leadership & Negotiation",
      "Human Resource Management",
      "Supply Chain Optimization",
      "Entrepreneurship & Venture Capital"
    ],
    careerPaths: [
      { title: "Brand & Marketing Manager", description: "Drive marketing campaigns, product launches, and brand identity." },
      { title: "Financial Analyst", description: "Analyze equity markets, corporate balance sheets, and investment risks." },
      { title: "Operations Manager", description: "Oversee day-to-day organizational workflows and logistics efficiency." },
      { title: "Management Consultant", description: "Advise enterprises on growth restructuring and operational performance." },
      { title: "Entrepreneur & Founder", description: "Launch and scale innovative ventures in tech and commerce." }
    ],
    curriculum: [
      {
        semester: "Semester 1",
        courses: [
          { code: "BA-101", title: "Principles of Management", credits: "3 (3+0)", type: "Core Business" },
          { code: "BA-102", title: "Microeconomics", credits: "3 (3+0)", type: "Core Economics" },
          { code: "BA-103", title: "Financial Accounting — I", credits: "3 (3+0)", type: "Core Accounting" },
          { code: "EG-101", title: "English Composition & Business Writing", credits: "3 (3+0)", type: "General Education" },
          { code: "PK-101", title: "Pakistan Studies", credits: "2 (2+0)", type: "General Education" }
        ]
      },
      {
        semester: "Semester 2",
        courses: [
          { code: "BA-104", title: "Principles of Marketing", credits: "3 (3+0)", type: "Core Business" },
          { code: "BA-105", title: "Macroeconomics", credits: "3 (3+0)", type: "Core Economics" },
          { code: "BA-106", title: "Financial Accounting — II", credits: "3 (3+0)", type: "Core Accounting" },
          { code: "MT-103", title: "Business Mathematics", credits: "3 (3+0)", type: "Quantitative" },
          { code: "IS-101", title: "Islamic Studies / Ethics", credits: "2 (2+0)", type: "General Education" }
        ]
      },
      {
        semester: "Semester 3",
        courses: [
          { code: "BA-201", title: "Organizational Behavior", credits: "3 (3+0)", type: "Core Business" },
          { code: "BA-202", title: "Business Finance", credits: "3 (3+0)", type: "Core Finance" },
          { code: "BA-203", title: "Cost & Managerial Accounting", credits: "3 (3+0)", type: "Core Accounting" },
          { code: "MT-202", title: "Business Statistics", credits: "3 (3+0)", type: "Quantitative" },
          { code: "CS-105", title: "Information Systems & Excel for Business", credits: "3 (2+1)", type: "Technology" }
        ]
      },
      {
        semester: "Semester 4",
        courses: [
          { code: "BA-204", title: "Human Resource Management", credits: "3 (3+0)", type: "Core Business" },
          { code: "BA-205", title: "Financial Management", credits: "3 (3+0)", type: "Core Finance" },
          { code: "BA-206", title: "Consumer Behavior", credits: "3 (3+0)", type: "Core Marketing" },
          { code: "BA-207", title: "Business Communication & Presentation", credits: "3 (3+0)", type: "General Education" },
          { code: "BA-208", title: "Business Law & Corporate Taxation", credits: "3 (3+0)", type: "Core Business" }
        ]
      },
      {
        semester: "Semester 5",
        courses: [
          { code: "BA-301", title: "Operations & Supply Chain Management", credits: "3 (3+0)", type: "Core Business" },
          { code: "BA-302", title: "Business Research Methods", credits: "3 (3+0)", type: "Core Research" },
          { code: "BA-303", title: "Digital Marketing & Social Media Strategy", credits: "3 (3+0)", type: "Elective" },
          { code: "BA-304", title: "Corporate Governance & Ethics", credits: "3 (3+0)", type: "General Education" }
        ]
      },
      {
        semester: "Semester 6",
        courses: [
          { code: "BA-305", title: "Strategic Management", credits: "3 (3+0)", type: "Core Business" },
          { code: "BA-306", title: "Business Analytics & Power BI", credits: "3 (2+1)", type: "Elective" },
          { code: "BA-307", title: "Investment & Portfolio Analysis", credits: "3 (3+0)", type: "Elective" },
          { code: "BA-308", title: "International Business", credits: "3 (3+0)", type: "Core Business" }
        ]
      },
      {
        semester: "Semester 7",
        courses: [
          { code: "BA-401", title: "Entrepreneurship & Venture Creation", credits: "3 (3+0)", type: "Core Business" },
          { code: "BA-402", title: "Specialization Elective — I", credits: "3 (3+0)", type: "Major Specialization" },
          { code: "BA-403", title: "Specialization Elective — II", credits: "3 (3+0)", type: "Major Specialization" },
          { code: "BA-404", title: "Capstone Research Project — Phase I", credits: "3 (0+3)", type: "Capstone Project" }
        ]
      },
      {
        semester: "Semester 8",
        courses: [
          { code: "BA-405", title: "Capstone Research Project — Phase II", credits: "3 (0+3)", type: "Capstone Project" },
          { code: "BA-406", title: "Specialization Elective — III", credits: "3 (3+0)", type: "Major Specialization" },
          { code: "BA-407", title: "Corporate Internship & Viva", credits: "3 (0+3)", type: "Practical Experience" }
        ]
      }
    ],
    admissionRequirements: {
      qualification: "Intermediate (FA, FSc, ICS, I.Com) or Equivalent (A-Levels).",
      minPercentage: "Minimum 45% aggregate marks.",
      documents: [
        "Matric result card & certificate (Original & 3 copies)",
        "Intermediate result card (Original & 3 copies)",
        "CNIC / B-Form copy",
        "4 recent passport photos"
      ]
    },
    fees: {
      admissionFee: "PKR 25,000 (One-time)",
      tuitionFee: "PKR 58,000 per semester",
      examinationFee: "PKR 5,000 per semester",
      totalSemesterEstimate: "PKR 63,000 per semester",
      note: "Subject to official college fee regulations."
    },
    scholarships: [
      "Academic Merit Scholarship",
      "Kinship Concession",
      "Need-Based Financial Assistance"
    ],
    faqs: [
      {
        question: "Can I choose my specialization during the BBA program?",
        answer: "Yes, students choose their major specialization (Marketing, Finance, Supply Chain, or HR) in the 7th semester."
      }
    ]
  },
  {
    id: "bs-math",
    slug: "bs-mathematics",
    title: "BS Mathematics",
    degree: "Bachelor of Science in Mathematics",
    category: "bs",
    categoryLabel: "Undergraduate Program",
    duration: "4 Years (8 Semesters)",
    studyMode: "Full Time (Morning)",
    creditHours: "130 Credit Hours",
    eligibility: "Intermediate (FSc Pre-Engineering / ICS with Math / General Science) with minimum 50% marks.",
    image: "/images/hero_library.jpg",
    shortDescription: "Rigorous mathematical degree emphasizing computational modeling, differential equations, optimization, financial mathematics, and statistical computing.",
    overview: "The BS Mathematics program at Pak Royal College fosters critical analytical faculties, mathematical precision, and computational problem-solving. Students master pure and applied mathematics, numerical analysis, data modeling, and algorithmic computations.",
    whyStudy: [
      { title: "Computational & Applied Focus", description: "Blend pure mathematical theory with Python, MATLAB, and R statistical programming." },
      { title: "Foundation for Advanced Tech", description: "Mathematics is the backbone of machine learning, cryptography, quantitative finance, and data science." },
      { title: "Research & Modeling", description: "Participate in mathematical modeling seminars and scientific computing research." },
      { title: "Versatile Career Options", description: "Graduates excel in data science, actuarial science, financial analysis, software development, and academia." }
    ],
    learningOutcomes: [
      { number: "01", title: "Mathematical Proofs", description: "Construct rigorous analytical and topological proofs." },
      { number: "02", title: "Differential Equations", description: "Model physical and biological systems using ODEs and PDEs." },
      { number: "03", title: "Numerical Methods", description: "Implement numerical algorithms for solving non-linear systems and approximations." },
      { number: "04", title: "Statistical Modeling", description: "Conduct hypothesis testing, regression analysis, and stochastic modeling." }
    ],
    skills: ["Calculus & Analysis", "Linear Algebra", "Numerical Computing (MATLAB/Python)", "Statistical Modeling (R)", "Optimization & Game Theory", "Mathematical Cryptography"],
    careerPaths: [
      { title: "Quantitative Analyst (Quant)", description: "Develop mathematical models for investment banks and hedge funds." },
      { title: "Data Analyst / Scientist", description: "Apply statistical modeling to complex commercial datasets." },
      { title: "Cryptographer / Security Analyst", description: "Design mathematical security algorithms and public-key cryptosystems." },
      { title: "Academic & Researcher", description: "Pursue graduate studies and scholarly research in mathematical sciences." }
    ],
    curriculum: [
      {
        semester: "Semester 1",
        courses: [
          { code: "MATH-101", title: "Calculus — I", credits: "4 (4+0)", type: "Core Math" },
          { code: "MATH-102", title: "Elements of Set Theory & Logic", credits: "3 (3+0)", type: "Core Math" },
          { code: "PHYS-101", title: "Mechanics & Waves", credits: "4 (3+1)", type: "Science" },
          { code: "EG-101", title: "English Composition", credits: "3 (3+0)", type: "General Education" },
          { code: "PK-101", title: "Pakistan Studies", credits: "2 (2+0)", type: "General Education" }
        ]
      },
      {
        semester: "Semester 2",
        courses: [
          { code: "MATH-103", title: "Calculus — II (Multivariable)", credits: "4 (4+0)", type: "Core Math" },
          { code: "MATH-104", title: "Linear Algebra — I", credits: "3 (3+0)", type: "Core Math" },
          { code: "CS-101", title: "Introduction to Programming (Python)", credits: "4 (3+1)", type: "Computing" },
          { code: "EG-102", title: "Communication Skills", credits: "3 (3+0)", type: "General Education" },
          { code: "IS-101", title: "Islamic Studies / Ethics", credits: "2 (2+0)", type: "General Education" }
        ]
      }
    ],
    admissionRequirements: {
      qualification: "Intermediate (FSc Pre-Engineering, ICS with Math) or A-Levels with Mathematics.",
      minPercentage: "Minimum 50% aggregate marks.",
      documents: ["Matric certificate (Original & 3 copies)", "Intermediate result card (Original & 3 copies)", "CNIC/B-Form copy", "4 passport photos"]
    },
    fees: {
      admissionFee: "PKR 25,000 (One-time)",
      tuitionFee: "PKR 48,000 per semester",
      examinationFee: "PKR 5,000 per semester",
      totalSemesterEstimate: "PKR 53,000 per semester",
      note: "Fee is subject to official college regulations."
    },
    scholarships: ["Merit Scholarship", "Need-Based Aid", "Kinship Discount"],
    faqs: [
      { question: "Is computational mathematics taught in this degree?", answer: "Yes, MATLAB, Python, and R programming are integrated across multiple courses." }
    ]
  },
  {
    id: "bs-eng",
    slug: "bs-english",
    title: "BS English (Linguistics & Literature)",
    degree: "Bachelor of Science in English",
    category: "bs",
    categoryLabel: "Undergraduate Program",
    duration: "4 Years (8 Semesters)",
    studyMode: "Full Time (Morning)",
    creditHours: "130 Credit Hours",
    eligibility: "Intermediate (FA / FSc / ICS / I.Com) or A-Levels with minimum 45% marks.",
    image: "/images/hero_library.jpg",
    shortDescription: "Comprehensive program in linguistics, world literature, critical discourse analysis, creative writing, and professional communication.",
    overview: "The BS English program explores the beauty of world literature, classical and modern critical theory, structural linguistics, phonetics, and professional communications. Students graduate with articulate writing faculties, analytical rigor, and cross-cultural literacy.",
    whyStudy: [
      { title: "Dual Focus on Literature & Linguistics", description: "Master phonology, syntax, and sociolinguistics alongside timeless global literary canons." },
      { title: "Professional Content Creation", description: "Training in corporate copywriting, editorial writing, and creative publication." },
      { title: "Debates, Drama & Literary Society", description: "Active participation in inter-collegiate drama competitions and literary festivals." },
      { title: "Career Versatility", description: "Careers in civil services (CSS/PMS), media, publication houses, corporate PR, and higher education." }
    ],
    learningOutcomes: [
      { number: "01", title: "Literary Analysis", description: "Critically examine poetry, drama, novels, and non-fiction across literary eras." },
      { number: "02", title: "Linguistic Rigor", description: "Analyze phonological structures, morphology, syntax, and semantics." },
      { number: "03", title: "Discourse & Media", description: "Deconstruct rhetoric, media narratives, and socio-political texts." },
      { number: "04", title: "Advanced Writing", description: "Produce polished academic research papers and corporate publications." }
    ],
    skills: ["Critical Discourse Analysis", "Creative & Content Writing", "Phonetics & Linguistics", "Public Speaking & Rhetoric", "Corporate Communication", "Literary Research"],
    careerPaths: [
      { title: "Corporate Communications Lead", description: "Manage brand narratives, press releases, and internal communications." },
      { title: "Content Strategist & Copywriter", description: "Write high-impact creative campaigns for digital agencies." },
      { title: "Journalist & Media Editor", description: "Report, investigate, and edit articles for broadcast and digital media." },
      { title: "Civil Services Officer (CSS)", description: "Excel in competitive national civil service examinations." }
    ],
    curriculum: [
      {
        semester: "Semester 1",
        courses: [
          { code: "ENG-101", title: "Introduction to English Literature", credits: "3 (3+0)", type: "Core Literature" },
          { code: "ENG-102", title: "Introduction to Linguistics", credits: "3 (3+0)", type: "Core Linguistics" },
          { code: "ENG-103", title: "English Grammar & Composition", credits: "3 (3+0)", type: "General Education" },
          { code: "PK-101", title: "Pakistan Studies", credits: "2 (2+0)", type: "General Education" }
        ]
      },
      {
        semester: "Semester 2",
        courses: [
          { code: "ENG-104", title: "Classical Poetry", credits: "3 (3+0)", type: "Core Literature" },
          { code: "ENG-105", title: "Phonetics & Phonology", credits: "3 (3+0)", type: "Core Linguistics" },
          { code: "ENG-106", title: "Academic Writing & Research", credits: "3 (3+0)", type: "General Education" },
          { code: "IS-101", title: "Islamic Studies / Ethics", credits: "2 (2+0)", type: "General Education" }
        ]
      }
    ],
    admissionRequirements: {
      qualification: "Intermediate (FA, FSc, ICS, I.Com) or A-Levels.",
      minPercentage: "Minimum 45% aggregate marks.",
      documents: ["Matric certificate (Original & 3 copies)", "Intermediate result card (Original & 3 copies)", "CNIC/B-Form copy", "4 passport photos"]
    },
    fees: {
      admissionFee: "PKR 25,000 (One-time)",
      tuitionFee: "PKR 45,000 per semester",
      examinationFee: "PKR 5,000 per semester",
      totalSemesterEstimate: "PKR 50,000 per semester",
      note: "Fee is subject to official college regulations."
    },
    scholarships: ["Merit-Based Scholarship", "Kinship Concession", "Need-Based Aid"],
    faqs: [
      { question: "Does the program prepare students for CSS / PMS exams?", answer: "Yes, the intensive writing, critical analysis, and extensive reading provide an exceptional foundation for civil service examinations." }
    ]
  },
  // Diploma Programs
  {
    id: "dip-it",
    slug: "diploma-in-information-technology",
    title: "Diploma in Information Technology (DIT)",
    degree: "1-Year Professional Diploma",
    category: "diploma",
    categoryLabel: "Diploma Program",
    duration: "1 Year (2 Semesters)",
    studyMode: "Morning / Evening / Weekend",
    creditHours: "36 Credit Hours",
    eligibility: "Matriculation / Intermediate or Equivalent qualification.",
    image: "/images/course_coding.jpg",
    shortDescription: "Fast-track technical diploma covering office automation, web design, database administration, PC hardware, and networking fundamentals.",
    overview: "The Diploma in Information Technology (DIT) is an intensive 1-year career-launching program engineered to provide foundational and intermediate practical computer skills for immediate employment in corporate offices, banks, and IT support centers.",
    whyStudy: [
      { title: "Fast-Track Employability", description: "Gain in-demand practical computer skills within 12 months." },
      { title: "100% Practical Lab Focus", description: "Hands-on workstation training with dedicated lab instructors." },
      { title: "Flexible Class Timings", description: "Morning, evening, and weekend batches available for working students." },
      { title: "Recognized Certification", description: "Official institutional diploma recognized by local and international employers." }
    ],
    learningOutcomes: [
      { number: "01", title: "Office Automation", description: "Master Word, Advanced Excel spreadsheets, PowerPoint, and Outlook." },
      { number: "02", title: "Web Basics", description: "Build responsive websites with HTML5, CSS3, JavaScript, and WordPress." },
      { number: "03", title: "Database Systems", description: "Create relational databases and manage SQL queries." },
      { number: "04", title: "PC Hardware & Networking", description: "Diagnose computer hardware issues and configure local area networks." }
    ],
    skills: ["Microsoft Office Specialist", "HTML5/CSS3/JavaScript", "WordPress Web Development", "SQL Database Management", "Computer Hardware Troubleshooting", "LAN Networking Setup"],
    careerPaths: [
      { title: "Computer Operator & Office Assistant", description: "Manage digital documentation and spreadsheet accounting." },
      { title: "Junior Web Designer", description: "Build and customize responsive websites for small businesses." },
      { title: "IT Helpdesk Technician", description: "Provide front-line technical support and workstation maintenance." }
    ],
    curriculum: [
      {
        semester: "Semester 1",
        courses: [
          { code: "DIT-101", title: "Information Technology & Windows OS", credits: "3 (1+2)", type: "Practical Core" },
          { code: "DIT-102", title: "Advanced Office Automation (Word/Excel/PPT)", credits: "4 (1+3)", type: "Practical Core" },
          { code: "DIT-103", title: "PC Hardware, Assembly & Troubleshooting", credits: "3 (1+2)", type: "Hardware Lab" },
          { code: "DIT-104", title: "Business English & Typing Skills", credits: "2 (1+1)", type: "Communication" }
        ]
      },
      {
        semester: "Semester 2",
        courses: [
          { code: "DIT-201", title: "Web Design (HTML5, CSS3, JavaScript, Bootstrap)", credits: "4 (1+3)", type: "Practical Web" },
          { code: "DIT-202", title: "CMS Development with WordPress", credits: "3 (1+2)", type: "Practical Web" },
          { code: "DIT-203", title: "Relational Databases & MS Access / MySQL", credits: "4 (1+3)", type: "Database" },
          { code: "DIT-204", title: "Computer Networking & Internet Security", credits: "3 (1+2)", type: "Networking Lab" }
        ]
      }
    ],
    admissionRequirements: {
      qualification: "Matriculation (Science/Arts) or Intermediate.",
      minPercentage: "Passing marks (45%).",
      documents: ["Matric certificate copy", "CNIC / B-Form copy", "2 passport photos"]
    },
    fees: {
      admissionFee: "PKR 10,000 (One-time)",
      tuitionFee: "PKR 8,000 per month (or PKR 45,000 full package)",
      totalSemesterEstimate: "PKR 45,000 total course fee",
      note: "Easy monthly installment plans available."
    },
    scholarships: ["Merit Concession", "Orphan / Need-Based Subsidy"],
    faqs: [
      { question: "Are weekend classes available for DIT?", answer: "Yes, special Saturday and Sunday classes are scheduled for working individuals." }
    ]
  },
  {
    id: "dip-ai",
    slug: "diploma-in-ai-and-data-science",
    title: "Diploma in AI & Data Science",
    degree: "1-Year Executive Diploma",
    category: "diploma",
    categoryLabel: "Diploma Program",
    duration: "1 Year (2 Semesters)",
    studyMode: "Evening / Weekend",
    creditHours: "36 Credit Hours",
    eligibility: "Intermediate or Bachelor's degree with basic computer literacy.",
    image: "/images/hero_ai_lab.jpg",
    shortDescription: "Hands-on professional diploma in Python, Data Analytics, Power BI, Machine Learning, and Generative AI applications.",
    overview: "Designed for professionals and ambitious graduates, the Diploma in AI & Data Science provides practical mastery over modern machine learning tools, statistical data analytics, predictive modeling, and generative AI prompt engineering.",
    whyStudy: [
      { title: "Real-World Data Pipelines", description: "Work with real financial, healthcare, and retail datasets." },
      { title: "Industry Standard Toolchain", description: "Python, Pandas, NumPy, Scikit-Learn, Power BI, and OpenAI APIs." },
      { title: "Portfolio-Driven Learning", description: "Graduate with 5+ showcase projects on GitHub and live dashboards." },
      { title: "Career Transition Support", description: "Guidance on freelance data science, remote job interviews, and resume building." }
    ],
    learningOutcomes: [
      { number: "01", title: "Python Data Wrangling", description: "Clean, transform, and analyze complex structured and unstructured data." },
      { number: "02", title: "Predictive ML Models", description: "Build classification, regression, and clustering machine learning models." },
      { number: "03", title: "Interactive Dashboards", description: "Design executive dashboards using Microsoft Power BI and Tableau." },
      { number: "04", title: "Generative AI Integration", description: "Integrate LLMs, LangChain, and API-based intelligent automation." }
    ],
    skills: ["Python Programming", "Pandas & NumPy", "Power BI Dashboards", "Scikit-Learn Machine Learning", "SQL Data Extraction", "Generative AI & Prompt Engineering"],
    careerPaths: [
      { title: "Junior Data Scientist", description: "Build predictive models and extract business intelligence." },
      { title: "Power BI Analyst", description: "Create visual interactive KPI dashboards for executives." },
      { title: "AI Solutions Consultant", description: "Implement AI tools and workflow automation for businesses." }
    ],
    curriculum: [
      {
        semester: "Semester 1",
        courses: [
          { code: "DAI-101", title: "Python for Data Science & Numerical Computing", credits: "4 (2+2)", type: "Core Lab" },
          { code: "DAI-102", title: "Data Wrangling with Pandas & SQL", credits: "4 (2+2)", type: "Core Lab" },
          { code: "DAI-103", title: "Exploratory Data Analysis & Visualization (Power BI)", credits: "4 (2+2)", type: "Analytics" }
        ]
      },
      {
        semester: "Semester 2",
        courses: [
          { code: "DAI-201", title: "Applied Machine Learning with Scikit-Learn", credits: "4 (2+2)", type: "Core Lab" },
          { code: "DAI-202", title: "Introduction to Deep Learning & Computer Vision", credits: "4 (2+2)", type: "Deep Learning" },
          { code: "DAI-203", title: "Generative AI & LLM Capstone Project", credits: "4 (1+3)", type: "Capstone" }
        ]
      }
    ],
    admissionRequirements: {
      qualification: "Intermediate or Bachelor's in any discipline.",
      minPercentage: "45% marks.",
      documents: ["Last degree/result copy", "CNIC copy", "2 passport photos"]
    },
    fees: {
      admissionFee: "PKR 15,000 (One-time)",
      tuitionFee: "PKR 12,000 per month (or PKR 65,000 total course fee)",
      totalSemesterEstimate: "PKR 65,000 total course fee",
      note: "Installment plans available."
    },
    scholarships: ["Merit Scholarship", "Women in Tech Discount (20%)"],
    faqs: [
      { question: "Is this course suitable for non-programmers?", answer: "Yes, the course starts from basic Python syntax and incrementally builds toward machine learning." }
    ]
  },
  // Professional Programs
  {
    id: "prof-fullstack",
    slug: "professional-fullstack-web-engineering",
    title: "Professional Full-Stack Web Engineering",
    degree: "6-Month Professional Certification",
    category: "professional",
    categoryLabel: "Professional Program",
    duration: "6 Months",
    studyMode: "Evening / Weekend / Online",
    creditHours: "Professional Bootcamp (180 Hours)",
    eligibility: "Basic computer familiarity. Open to students and working professionals.",
    image: "/images/course_coding.jpg",
    shortDescription: "Industry bootcamp mastering modern React, Next.js, Node.js, TypeScript, PostgreSQL, Tailwind CSS, and cloud deployments on Vercel and AWS.",
    overview: "A high-intensity, practical coding bootcamp that takes students from frontend UI mastery to backend microservices, database architecture, authentication, and continuous deployment pipelines.",
    whyStudy: [
      { title: "MERN & Next.js Stack", description: "Learn modern production technologies used by leading tech startups globally." },
      { title: "Live Client Projects", description: "Build real SaaS web applications, e-commerce stores, and APIs." },
      { title: "Git & Agile Workflow", description: "Collaborate via pull requests, code reviews, and Scrum methodology." },
      { title: "Freelance & Job Placement", description: "Specialized workshops on Upwork, Fiverr, and remote overseas job acquisition." }
    ],
    learningOutcomes: [
      { number: "01", title: "Modern Frontend", description: "Build responsive UIs with Next.js, React 19, TypeScript, and Tailwind CSS." },
      { number: "02", title: "Backend & APIs", description: "Develop secure RESTful and GraphQL APIs with Node.js and Express." },
      { number: "03", title: "Database Systems", description: "Design relational schemas with PostgreSQL/Prisma and NoSQL with MongoDB." },
      { number: "04", title: "DevOps & Cloud", description: "Deploy full-stack applications with Docker, Vercel, and AWS." }
    ],
    skills: ["React & Next.js", "TypeScript", "Tailwind CSS & Framer Motion", "Node.js & Express", "PostgreSQL & Prisma ORM", "MongoDB", "JWT & NextAuth", "Docker & Vercel"],
    careerPaths: [
      { title: "Full-Stack Web Developer", description: "Build end-to-end web applications and SaaS products." },
      { title: "Frontend React Engineer", description: "Create rich, accessible, and high-performance user interfaces." },
      { title: "Freelance Web Consultant", description: "Deliver international freelance projects on Upwork and Fiverr." }
    ],
    curriculum: [
      {
        semester: "Term 1 (Months 1–3)",
        courses: [
          { code: "FSD-101", title: "HTML5, CSS3, Tailwind CSS & JavaScript ES6+", credits: "60 Hours", type: "Core Frontend" },
          { code: "FSD-102", title: "React.js & TypeScript UI Architecture", credits: "45 Hours", type: "Frontend Frameworks" }
        ]
      },
      {
        semester: "Term 2 (Months 4–6)",
        courses: [
          { code: "FSD-201", title: "Next.js App Router & Server Actions", credits: "40 Hours", type: "Full-Stack Architecture" },
          { code: "FSD-202", title: "Node.js, PostgreSQL, Prisma & Cloud Deployment", credits: "35 Hours", type: "Backend & Cloud" }
        ]
      }
    ],
    admissionRequirements: {
      qualification: "Matriculation / Intermediate or higher.",
      minPercentage: "Open enrollment based on interview.",
      documents: ["CNIC copy", "1 passport photo"]
    },
    fees: {
      admissionFee: "PKR 5,000",
      tuitionFee: "PKR 45,000 total course fee (payable in 3 installments of PKR 15,000)",
      totalSemesterEstimate: "PKR 45,000 total",
      note: "Early bird discount available."
    },
    scholarships: ["Merit Scholarship (up to 30%)"],
    faqs: [
      { question: "Is a certificate awarded at completion?", answer: "Yes, students receive an official Certificate of Professional Full-Stack Web Engineering upon passing capstone project evaluation." }
    ]
  },
  {
    id: "prof-cloud",
    slug: "professional-cloud-devops",
    title: "Professional Cloud Computing & DevOps",
    degree: "6-Month Professional Certification",
    category: "professional",
    categoryLabel: "Professional Program",
    duration: "6 Months",
    studyMode: "Weekend / Evening",
    creditHours: "Professional Bootcamp (180 Hours)",
    eligibility: "Basic networking or programming knowledge.",
    image: "/images/course_robotics.jpg",
    shortDescription: "Master Linux, Docker, Kubernetes, AWS Cloud Architecture, Terraform Infrastructure as Code, and GitHub Actions CI/CD pipelines.",
    overview: "This professional track trains engineers to automate software delivery, scale multi-region cloud infrastructure, secure containers, and implement resilient site reliability engineering (SRE) practices.",
    whyStudy: [
      { title: "Highest Paid Tech Niche", description: "Cloud and DevOps engineers command the highest compensation in global tech markets." },
      { title: "AWS & Kubernetes Mastery", description: "Hands-on labs on live AWS accounts and real multi-node Kubernetes clusters." },
      { title: "Infrastructure as Code (IaC)", description: "Automate entire cloud environments with Terraform and Ansible." }
    ],
    learningOutcomes: [
      { number: "01", title: "Linux Systems", description: "Master shell scripting, process management, and kernel parameters." },
      { number: "02", title: "Containerization", description: "Build lightweight multi-stage Docker images and orchestrate with Kubernetes." },
      { number: "03", title: "CI/CD Automation", description: "Implement automated testing and zero-downtime deployment pipelines with GitHub Actions." },
      { number: "04", title: "Cloud Architecture", description: "Design fault-tolerant, auto-scaling VPCs on Amazon Web Services (AWS)." }
    ],
    skills: ["Linux & Bash Scripting", "Docker & Kubernetes", "AWS (EC2, S3, RDS, EKS, Lambda)", "Terraform IaC", "GitHub Actions CI/CD", "Prometheus & Grafana Monitoring"],
    careerPaths: [
      { title: "DevOps Engineer", description: "Manage automated deployment pipelines and cloud infrastructure." },
      { title: "Cloud Architect", description: "Design secure, cost-effective enterprise cloud architectures." },
      { title: "Site Reliability Engineer (SRE)", description: "Ensure 99.99% system availability and automated disaster recovery." }
    ],
    curriculum: [
      {
        semester: "Term 1 (Months 1–3)",
        courses: [
          { code: "CLD-101", title: "Linux Administration & Bash Automation", credits: "45 Hours", type: "Core Systems" },
          { code: "CLD-102", title: "AWS Cloud Fundamentals & Architecting", credits: "45 Hours", type: "Cloud Core" }
        ]
      },
      {
        semester: "Term 2 (Months 4–6)",
        courses: [
          { code: "CLD-201", title: "Docker & Kubernetes Container Orchestration", credits: "45 Hours", type: "Containers" },
          { code: "CLD-202", title: "Terraform IaC & CI/CD Pipelines with GitHub Actions", credits: "45 Hours", type: "DevOps Capstone" }
        ]
      }
    ],
    admissionRequirements: {
      qualification: "Intermediate or higher with computing background.",
      minPercentage: "Pass marks.",
      documents: ["CNIC copy", "1 passport photo"]
    },
    fees: {
      admissionFee: "PKR 5,000",
      tuitionFee: "PKR 50,000 total course fee (payable in 3 installments)",
      totalSemesterEstimate: "PKR 50,000 total",
      note: "Includes AWS lab credits guidance."
    },
    scholarships: ["Merit Scholarship"],
    faqs: [
      { question: "Does this course prepare for AWS Certified Solutions Architect exam?", answer: "Yes, the syllabus aligns closely with AWS SAA-C03 and CKA (Certified Kubernetes Administrator) blueprints." }
    ]
  }
];
