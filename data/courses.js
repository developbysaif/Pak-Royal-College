export const courses = [
  {
    id: "crs-python-ai",
    slug: "python-programming-and-ai",
    title: "Python Programming & AI Essentials",
    category: "Technical",
    categoryLabel: "Technical Course",
    duration: "12 Weeks (3 Months)",
    level: "Beginner to Intermediate",
    mode: "Hybrid (Campus & Online)",
    classesPerWeek: "3 Classes / Week (2 Hours each)",
    timing: "Evening: 5:00 PM – 7:00 PM",
    image: "/images/hero_ai_lab.jpg",
    shortDescription: "Master Python programming from zero to advanced concepts, object-oriented principles, data analysis with Pandas, and integration with OpenAI APIs.",
    overview: "Python is the undisputed programming language of artificial intelligence, data science, and modern web backends. This 12-week intensive course is engineered to transform beginners into confident Python developers who can write clean, efficient code, automate real-world workflows, analyze complex datasets, and build intelligent AI-powered applications.",
    whatYouWillLearn: [
      { title: "Core Python Syntax & Logic", description: "Variables, control flow, functions, modular architecture, and file I/O operations." },
      { title: "Object-Oriented Programming (OOP)", description: "Classes, inheritance, encapsulation, polymorphism, and design patterns." },
      { title: "Data Wrangling & Visualization", description: "Mastering NumPy, Pandas, Matplotlib, and Seaborn for business data analytics." },
      { title: "API Integration & Web Scraping", description: "Extract data using BeautifulSoup and integrate modern REST APIs." },
      { title: "AI & LLM Integration", description: "Connect Python scripts with OpenAI GPT models and Claude APIs for automated intelligent solutions." },
      { title: "Version Control & GitHub", description: "Professional source code management, pull requests, and portfolio creation." }
    ],
    modules: [
      {
        number: "01",
        title: "Python Fundamentals & Logic Building",
        description: "Foundational syntax, algorithmic thinking, data structures (lists, tuples, dicts, sets), and conditional logic.",
        topics: ["Variables & Data Types", "Loops & Flow Control", "Custom Functions & Lambda", "Error Handling & Debugging"],
        practicalTask: "Build an interactive CLI Expense Tracker and Password Vault."
      },
      {
        number: "02",
        title: "Object-Oriented & Modular Architecture",
        description: "Designing modular software applications using OOP principles and Python standard libraries.",
        topics: ["Classes & Dunder Methods", "Inheritance & Composition", "File System Operations & JSON", "Virtual Environments & Pip"],
        practicalTask: "Architect an Object-Oriented Banking & Transaction Management System."
      },
      {
        number: "03",
        title: "Data Analysis & Scientific Computing",
        description: "Transforming raw data into actionable visual insights using NumPy and Pandas.",
        topics: ["Vectorized Array Operations", "Data Cleaning & Imputation", "Aggregations & GroupBy", "Interactive Charting with Seaborn"],
        practicalTask: "Perform real exploratory data analysis on a multi-thousand-row retail dataset."
      },
      {
        number: "04",
        title: "AI API Integration & Capstone Project",
        description: "Building intelligent applications by integrating Generative AI APIs with Python backends.",
        topics: ["HTTP Requests & REST APIs", "OpenAI & Gemini API SDKs", "Prompt Engineering in Python", "Building Streamlit AI Web UIs"],
        practicalTask: "Deploy a live Streamlit Web Application that analyzes PDF documents using AI."
      }
    ],
    tools: [
      { name: "Python 3.12", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" },
      { name: "VS Code", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg" },
      { name: "Pandas", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/pandas/pandas-original.svg" },
      { name: "NumPy", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/numpy/numpy-original.svg" },
      { name: "Git & GitHub", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg" },
      { name: "Streamlit", logo: "https://streamlit.io/images/brand/streamlit-mark-color.svg" }
    ],
    projects: [
      {
        name: "Automated Financial Analysis Dashboard",
        description: "A Python pipeline that ingests stock price history, computes moving averages and volatility, and renders interactive charts.",
        skills: "Pandas, Matplotlib, Financial Data Extraction"
      },
      {
        name: "AI-Powered Smart Document Assistant",
        description: "A web application that ingests PDF notes and allows users to query, summarize, and extract insights via OpenAI LLMs.",
        skills: "Python, Streamlit, Prompt Engineering, REST APIs"
      }
    ],
    whoShouldEnroll: [
      { title: "Beginner Programmers", description: "Students seeking their first high-impact programming language." },
      { title: "University Undergrads", description: "Students wanting to boost their academic coding skills and lab performance." },
      { title: "Professionals & Data Enthusiasts", description: "Individuals looking to automate repetitive tasks and transition into data careers." }
    ],
    prerequisites: "Basic familiarity with using a computer and basic high school mathematics.",
    careerPaths: [
      { title: "Junior Python Developer", description: "Develop scripts, automation bots, and backend logic." },
      { title: "Data Analyst Trainee", description: "Analyze organizational metrics and generate insights." },
      { title: "AI Application Builder", description: "Create prototypes leveraging generative AI APIs." }
    ],
    certificate: "Official Certificate of Completion in Python Programming & AI from Pak Royal College.",
    fee: {
      amount: "PKR 22,000",
      installments: "2 Installments of PKR 11,000",
      note: "Includes course materials, lab access, and project evaluation."
    },
    faqs: [
      {
        question: "Do I need a powerful laptop for this course?",
        answer: "Any standard laptop with 8GB RAM can easily run Python, VS Code, and data analysis libraries."
      },
      {
        question: "Will recordings of classes be provided?",
        answer: "Yes, enrolled students get access to recorded lecture sessions and GitHub starter repositories."
      }
    ]
  },
  {
    id: "crs-digital-marketing",
    slug: "digital-marketing-and-brand-strategy",
    title: "Digital Marketing & Social Media Strategy",
    category: "Professional",
    categoryLabel: "Professional Course",
    duration: "10 Weeks (2.5 Months)",
    level: "All Levels",
    mode: "Campus & Weekend Batches",
    classesPerWeek: "2 Classes / Week (3 Hours each)",
    timing: "Saturday & Sunday: 2:00 PM – 5:00 PM",
    image: "/images/course_bba.jpg",
    shortDescription: "Comprehensive masterclass on Meta Ads, Google PPC, SEO optimization, content creation, TikTok marketing, and e-commerce growth strategies.",
    overview: "In today's digital economy, businesses thrive on customer acquisition, search engine visibility, and social media engagement. This course equips you with actionable, ROI-focused digital marketing skills across search, paid social, funnel design, and analytics.",
    whatYouWillLearn: [
      { title: "Meta Ads Mastery (Facebook & Instagram)", description: "Audience targeting, pixel setup, CBO campaigns, and retargeting funnels." },
      { title: "Google Search & YouTube Ads", description: "Keyword bidding, high-converting ad copy, quality score optimization, and video ads." },
      { title: "Search Engine Optimization (SEO)", description: "On-page optimization, technical SEO, keyword research, and high-authority link building." },
      { title: "E-Commerce Funnels & Shopify Growth", description: "Scaling direct-to-consumer stores and local e-commerce brands." },
      { title: "Content Creation with Canva & CapCut", description: "Design high-converting ad creatives and viral short-form video content." },
      { title: "Google Analytics 4 (GA4)", description: "Tracking conversions, setting custom events, and calculating ROAS." }
    ],
    modules: [
      {
        number: "01",
        title: "Digital Foundations & Brand Architecture",
        description: "Understanding consumer buyer journeys, brand positioning, and content calendars.",
        topics: ["Marketing Funnels (AIDA)", "Customer Persona Definition", "Competitor Research", "Content Planning"],
        practicalTask: "Design a complete 30-day multi-channel digital marketing plan."
      },
      {
        number: "02",
        title: "Search Engine Optimization (SEO) Masterclass",
        description: "Ranking websites organically on Google Search for high-intent commercial keywords.",
        topics: ["Keyword Research with Semrush", "On-Page SEO & Content Strategy", "Technical SEO Auditing", "Local Google Business Profile"],
        practicalTask: "Perform a live SEO audit and optimization on a real website."
      },
      {
        number: "03",
        title: "Paid Advertising (Meta & Google Ads)",
        description: "Setting up profitable ad campaigns with conversion tracking and audience segmentation.",
        topics: ["Meta Business Suite & Pixel", "Lookalike & Custom Audiences", "Google Search Ads & Bidding", "YouTube Ads"],
        practicalTask: "Create and launch a live test ad campaign with conversion tracking."
      },
      {
        number: "04",
        title: "Analytics, Reporting & Freelance Scaling",
        description: "Measuring return on ad spend (ROAS) and pitching high-ticket marketing retainers.",
        topics: ["GA4 Conversion Tracking", "Looker Studio Client Dashboards", "Freelance Client Acquisition", "Contract & Proposal Writing"],
        practicalTask: "Build an automated Looker Studio executive reporting dashboard."
      }
    ],
    tools: [
      { name: "Meta Ads Manager", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/facebook/facebook-original.svg" },
      { name: "Google Ads", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/google/google-original.svg" },
      { name: "Google Analytics 4", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/google/google-original.svg" },
      { name: "Canva Pro", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/canva/canva-original.svg" },
      { name: "Semrush / Ahrefs", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/google/google-original.svg" }
    ],
    projects: [
      {
        name: "E-Commerce Brand Scale Strategy",
        description: "Complete marketing campaign covering Meta Ads funnels, influencer outreach, and retention email flows for an e-commerce brand.",
        skills: "Meta Ads, Funnel Architecture, GA4 Tracking"
      }
    ],
    whoShouldEnroll: [
      { title: "Entrepreneurs & Business Owners", description: "Scale your own products and generate predictable customer leads." },
      { title: "Aspiring Freelancers", description: "Earn top-tier dollar retainers providing digital marketing services globally." },
      { title: "Marketing Students", description: "Gain practical, measurable campaign experience." }
    ],
    prerequisites: "Basic internet browsing knowledge and willingness to learn.",
    careerPaths: [
      { title: "Digital Marketing Specialist", description: "Manage overall digital campaigns for agencies or corporate brands." },
      { title: "Performance Marketing / Media Buyer", description: "Manage paid ad budgets on Meta and Google." },
      { title: "SEO Strategist", description: "Grow organic search traffic and search rankings." }
    ],
    certificate: "Certificate in Digital Marketing & Social Media Strategy from Pak Royal College.",
    fee: {
      amount: "PKR 20,000",
      installments: "2 Installments of PKR 10,000",
      note: "Covers all training materials and real campaign case studies."
    },
    faqs: [
      { question: "Is this course practical or just theory?", answer: "The course is 80% practical with live ad manager walkthroughs and real campaigns." }
    ]
  },
  {
    id: "crs-uiux",
    slug: "ui-ux-design-with-figma",
    title: "UI/UX Design Masterclass with Figma",
    category: "Short Courses",
    categoryLabel: "Design & UX",
    duration: "8 Weeks (2 Months)",
    level: "Beginner to Intermediate",
    mode: "Campus & Live Online",
    classesPerWeek: "2 Classes / Week (2.5 Hours each)",
    timing: "Morning / Evening Batches",
    image: "/images/course_design.jpg",
    shortDescription: "Learn user experience research, wireframing, interactive prototyping, design systems, and mobile app UI design in Figma.",
    overview: "Great digital products start with intuitive, aesthetically captivating user experience design. In this course, you will learn the end-to-end design thinking process from user personas to high-fidelity Figma prototypes and design handoff.",
    whatYouWillLearn: [
      { title: "Design Thinking & UX Research", description: "Conduct user interviews, competitor benchmarking, and user persona mapping." },
      { title: "Information Architecture & Wireframes", description: "Sitemaps, user flows, and low-fidelity structural wireframing." },
      { title: "Advanced Figma Prototyping", description: "Auto-layout, responsive constraints, interactive components, and smart animations." },
      { title: "Design Systems & Token Architecture", description: "Building scalable typography, color variables, and reusable component libraries." },
      { title: "Mobile & Web UI Design", description: "Crafting modern, accessible interfaces adhering to iOS Human Interface and Material Design." },
      { title: "Portfolio Presentation & Behance/Dribbble", description: "Showcasing compelling case studies that win clients and agency jobs." }
    ],
    modules: [
      {
        number: "01",
        title: "UX Research & Wireframing",
        description: "Empathizing with users, defining user problems, and sketching foundational wireframes.",
        topics: ["User Research Methods", "Empathy Maps & Personas", "User Journey Mapping", "Lo-Fi Wireframing"],
        practicalTask: "Create user flows and low-fidelity wireframes for a food delivery app."
      },
      {
        number: "02",
        title: "Visual Design & Figma Core",
        description: "Mastering layout grids, typography scales, color theory, and Figma vector tools.",
        topics: ["Typography & Hierarchy", "Color Psychology & Contrast", "Figma Auto-Layout 5.0", "Component Sets & Variants"],
        practicalTask: "Design responsive desktop and mobile landing page hero sections."
      },
      {
        number: "03",
        title: "Design Systems & Micro-Interactions",
        description: "Constructing professional design systems and advanced micro-animated prototypes.",
        topics: ["Figma Variables & Modes", "Micro-Interactions & Smart Animate", "Interactive Form Inputs", "Usability Testing"],
        practicalTask: "Build a complete design system with 20+ reusable components."
      },
      {
        number: "04",
        title: "Full Product Design & Case Study",
        description: "Synthesizing research, UI design, and prototype into a comprehensive portfolio case study.",
        topics: ["Developer Handoff Best Practices", "Behance Case Study Layout", "Design Critiques", "Portfolio Review"],
        practicalTask: "Publish a complete Behance case study for an iOS mobile application."
      }
    ],
    tools: [
      { name: "Figma", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/figma/figma-original.svg" },
      { name: "FigJam", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/figma/figma-original.svg" },
      { name: "Adobe Photoshop", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/photoshop/photoshop-original.svg" },
      { name: "Adobe Illustrator", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/illustrator/illustrator-original.svg" }
    ],
    projects: [
      {
        name: "Fintech Mobile Banking App UX Case Study",
        description: "End-to-end UX research, wireframing, visual design, interactive prototype, and usability testing for an intuitive money-transfer application.",
        skills: "UX Research, Figma Auto-Layout, Smart Animate, Design Systems"
      }
    ],
    whoShouldEnroll: [
      { title: "Graphic Designers", description: "Upgrade into high-paying UI/UX product design roles." },
      { title: "Developers", description: "Learn visual aesthetics to build cleaner user interfaces." },
      { title: "Creative Beginners", description: "Start an exciting career in digital product design." }
    ],
    prerequisites: "A laptop with internet access. No prior coding skills required.",
    careerPaths: [
      { title: "UI/UX Designer", description: "Design web and mobile apps for software agencies." },
      { title: "Product Designer", description: "Drive user experience strategy in technology companies." },
      { title: "Freelance UI Designer", description: "Deliver Figma prototypes to international clients." }
    ],
    certificate: "Certificate of Completion in UI/UX Design from Pak Royal College.",
    fee: {
      amount: "PKR 18,000",
      installments: "2 Installments of PKR 9,000",
      note: "Includes design templates and personal portfolio reviews."
    },
    faqs: [
      { question: "Do I need to know coding to become a UI/UX designer?", answer: "No coding is required. UI/UX focuses on user psychology, research, visual aesthetics, and prototyping in Figma." }
    ]
  },
  {
    id: "crs-cybersec",
    slug: "cybersecurity-and-ethical-hacking",
    title: "Cyber Security Fundamentals & Ethical Hacking",
    category: "Technical",
    categoryLabel: "Security & Systems",
    duration: "10 Weeks (2.5 Months)",
    level: "Intermediate",
    mode: "Campus Lab Based",
    classesPerWeek: "2 Classes / Week (3 Hours each)",
    timing: "Evening: 5:00 PM – 8:00 PM",
    image: "/images/course_coding.jpg",
    shortDescription: "Learn network penetration testing, Kali Linux tools, web application vulnerabilities (OWASP Top 10), and defensive cybersecurity practices.",
    overview: "As digital infrastructure expands, safeguarding information systems against cyber threats has become mission-critical. This course introduces ethical hacking methodologies, reconnaissance techniques, vulnerability exploitation, and remediation strategies in a controlled lab environment.",
    whatYouWillLearn: [
      { title: "Kali Linux & Penetration Testing Tools", description: "Master Nmap, Wireshark, Metasploit, Burp Suite, and John the Ripper." },
      { title: "Network Reconnaissance & Scanning", description: "Port scanning, service enumeration, and network traffic packet analysis." },
      { title: "Web Vulnerabilities (OWASP Top 10)", description: "SQL Injection, Cross-Site Scripting (XSS), CSRF, and broken authentication." },
      { title: "Defensive Security & Hardening", description: "Firewall rules, secure server configuration, and endpoint protection." }
    ],
    modules: [
      {
        number: "01",
        title: "Cyber Fundamentals & Networking Protocols",
        description: "Understanding TCP/IP, OSI model, subnetting, Wireshark packet capture, and Kali Linux setup.",
        topics: ["TCP/UDP Protocols", "Packet Analysis with Wireshark", "Kali Linux Command Line", "Anonymity & VPNs"],
        practicalTask: "Set up a secure penetration testing lab with virtual target machines."
      },
      {
        number: "02",
        title: "Scanning & Vulnerability Assessment",
        description: "Conducting network scans and identifying exploitable weaknesses.",
        topics: ["Nmap Advanced Scripting Engine", "Vulnerability Scanners (Nessus/OpenVAS)", "Banner Grabbing", "Exploitation Basics"],
        practicalTask: "Perform full network vulnerability audit on a simulated enterprise subnet."
      },
      {
        number: "03",
        title: "Web Application Penetration Testing",
        description: "Discovering and remediating vulnerabilities in web applications.",
        topics: ["Burp Suite Proxy Configuration", "SQL Injection Attacks & Prevention", "XSS & CSRF Attacks", "Authentication Flaws"],
        practicalTask: "Find and document 5 vulnerabilities on OWASP Juice Shop test environment."
      },
      {
        number: "04",
        title: "Incident Response & Defensive Hardening",
        description: "Securing systems against intrusion and writing formal security audit reports.",
        topics: ["Log Analysis & SIEM Basics", "Firewall & IPTables Rules", "Patch Management", "Professional Penetration Testing Reports"],
        practicalTask: "Write an executive vulnerability assessment report with remediation steps."
      }
    ],
    tools: [
      { name: "Kali Linux", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg" },
      { name: "Wireshark", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg" },
      { name: "Burp Suite", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" }
    ],
    projects: [
      {
        name: "Enterprise Network Penetration Test",
        description: "Comprehensive vulnerability assessment of a multi-server simulated infrastructure with documented proof-of-concept exploits and remediation guidelines.",
        skills: "Nmap, Metasploit, Burp Suite, Security Reporting"
      }
    ],
    whoShouldEnroll: [
      { title: "IT Administrators", description: "Learn offensive tactics to build stronger defensive shields." },
      { title: "CS & IT Students", description: "Specialize in the high-growth cybersecurity industry." }
    ],
    prerequisites: "Basic understanding of networking concepts (IP addresses, ports, routers).",
    careerPaths: [
      { title: "Junior Cybersecurity Analyst", description: "Monitor security operations and triage alerts." },
      { title: "Junior Penetration Tester", description: "Assess systems for security weaknesses." }
    ],
    certificate: "Certificate in Cybersecurity & Ethical Hacking from Pak Royal College.",
    fee: {
      amount: "PKR 25,000",
      installments: "2 Installments of PKR 12,500",
      note: "Includes access to isolated ethical hacking lab."
    },
    faqs: [
      { question: "Is this training legal?", answer: "Yes, all practical exercises are strictly conducted within isolated, legal lab environments for ethical defensive education." }
    ]
  },
  {
    id: "crs-graphic-design",
    slug: "graphic-design-and-multimedia",
    title: "Graphic Design & Multimedia Production",
    category: "Skill Development",
    categoryLabel: "Creative Arts",
    duration: "8 Weeks (2 Months)",
    level: "Beginner to Intermediate",
    mode: "Campus Lab",
    classesPerWeek: "3 Classes / Week (2 Hours each)",
    timing: "Morning / Evening Batches",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1200&auto=format&fit=crop",
    shortDescription: "Master Adobe Photoshop, Illustrator, InDesign, and Premiere Pro for brand identity creation, social media creatives, and video editing.",
    overview: "Unleash your visual creativity and learn professional design standards. Master photo editing, typography, vector illustration, brand identity kits, and video editing for social media reels.",
    whatYouWillLearn: [
      { title: "Adobe Photoshop Mastery", description: "Photo retouching, manipulation, poster design, and thumbnail creation." },
      { title: "Adobe Illustrator Vector Graphics", description: "Logo design, vector illustrations, icons, and print media layouts." },
      { title: "Video Editing with Premiere Pro", description: "Cutting, color grading, sound design, and TikTok/Reels optimization." },
      { title: "Brand Identity Design", description: "Developing cohesive color palettes, typography guidelines, and mockups." }
    ],
    modules: [
      {
        number: "01",
        title: "Photoshop & Digital Imagery",
        description: "Layers, masks, selections, color correction, and creative photo composites.",
        topics: ["Photo Retouching", "Layer Masks & Blending Modes", "Banner & Social Media Design", "Typography Layouts"],
        practicalTask: "Design 3 high-impact promotional posters for a brand launch."
      },
      {
        number: "02",
        title: "Illustrator & Vector Branding",
        description: "Pen tool mastery, geometric construction, logo design, and vector art.",
        topics: ["Pen Tool & Bezier Curves", "Logo Design Methodologies", "Iconography & Vector Illustration", "Packaging & Print Design"],
        practicalTask: "Create a complete brand identity package including logo, stationery, and brand guide."
      },
      {
        number: "03",
        title: "Premiere Pro & Video Editing",
        description: "Timeline editing, transitions, audio mixing, captions, and short-form video creation.",
        topics: ["Timeline Workflow", "Speed Ramping & Transitions", "Captions & Typography Animations", "Color Grading with Lumetri"],
        practicalTask: "Edit a dynamic 60-second commercial video reel for social media."
      }
    ],
    tools: [
      { name: "Adobe Photoshop", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/photoshop/photoshop-original.svg" },
      { name: "Adobe Illustrator", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/illustrator/illustrator-original.svg" },
      { name: "Adobe Premiere Pro", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/premierepro/premierepro-original.svg" }
    ],
    projects: [
      {
        name: "Complete Corporate Brand Identity Kit",
        description: "Vector logo, stationery, merchandise mockups, brand manual, and promotional launch video.",
        skills: "Photoshop, Illustrator, Premiere Pro"
      }
    ],
    whoShouldEnroll: [
      { title: "Creative Individuals", description: "Anyone passionate about visual art and multimedia." },
      { title: "Social Media Managers", description: "Create compelling creatives and video content independently." }
    ],
    prerequisites: "Basic computer familiarity.",
    careerPaths: [
      { title: "Graphic Designer", description: "Work in advertising agencies, design studios, or publishing houses." },
      { title: "Video Editor & Content Creator", description: "Produce videos for YouTube channels and digital brands." }
    ],
    certificate: "Certificate in Graphic Design & Multimedia from Pak Royal College.",
    fee: {
      amount: "PKR 16,000",
      installments: "2 Installments of PKR 8,000",
      note: "Full access to high-spec iMac and PC multimedia labs."
    },
    faqs: [
      { question: "Is drawing talent required?", answer: "No, graphic design is about visual communication, layout principles, and mastering software tools." }
    ]
  },
  {
    id: "crs-ielts",
    slug: "ielts-and-english-proficiency",
    title: "IELTS & Professional English Communication",
    category: "Skill Development",
    categoryLabel: "Language & Career",
    duration: "8 Weeks (2 Months)",
    level: "All Levels",
    mode: "Campus & Interactive Online",
    classesPerWeek: "3 Classes / Week (1.5 Hours each)",
    timing: "Morning / Afternoon Batches",
    image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=1200&auto=format&fit=crop",
    shortDescription: "Comprehensive training for IELTS Academic & General Training (Target Band 7.5+) and executive spoken English communication.",
    overview: "Achieve your dream score in IELTS for overseas university admissions or international immigration while sharpening your verbal articulation, presentation skills, and professional writing.",
    whatYouWillLearn: [
      { title: "IELTS Listening Mastery", description: "Note-taking strategies, accent familiarity, and multiple-choice tactics." },
      { title: "IELTS Reading Strategies", description: "Skimming, scanning, True/False/Not Given mastery, and time management." },
      { title: "IELTS Writing (Task 1 & Task 2)", description: "Graph descriptions, discursive essays, structural cohesion, and vocabulary." },
      { title: "IELTS Speaking & Fluency", description: "One-on-one mock speaking interviews with certified trainers and pronunciation coaching." }
    ],
    modules: [
      {
        number: "01",
        title: "IELTS Listening & Reading Mastery",
        description: "Speed reading techniques, keyword identification, and comprehensive listening practice tests.",
        topics: ["Academic Reading Passage Types", "Question Type Breakdown", "Listening Section Tactics", "Vocabulary Expansion"],
        practicalTask: "Complete 4 full-length timed reading and listening mock tests."
      },
      {
        number: "02",
        title: "IELTS Academic & General Writing",
        description: "Task 1 graphical analysis, Task 2 argumentative essays, lexical resource, and grammatical accuracy.",
        topics: ["Task 1 Visual Representation", "Task 2 Essay Architectures", "Coherence & Cohesion", "Common Grammatical Pitfalls"],
        practicalTask: "Submit and receive line-by-line expert feedback on 8 academic essays."
      },
      {
        number: "03",
        title: "IELTS Speaking & Mock Interviews",
        description: "Fluency building, idiom usage, topic elaboration, and video-recorded mock interview simulations.",
        topics: ["Part 1 Introduction Topics", "Part 2 Cue Card Elaboration", "Part 3 Abstract Discussion", "Fluency & Pronunciation"],
        practicalTask: "Undergo 3 individual one-on-one speaking simulations with band score evaluation."
      }
    ],
    tools: [
      { name: "Cambridge IELTS Material", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/google/google-original.svg" },
      { name: "Audio Listening Lab", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/apple/apple-original.svg" }
    ],
    projects: [
      {
        name: "Full IELTS Mock Exam Series",
        description: "4 rigorous full-length simulated exams under real test conditions with certified band score analysis.",
        skills: "Timed Test Strategy, Essay Review, Pronunciation Coaching"
      }
    ],
    whoShouldEnroll: [
      { title: "Students Planning Study Abroad", description: "Seeking admission to UK, Canada, Australia, and European universities." },
      { title: "Immigration Applicants", description: "Candidates aiming for high express entry points." },
      { title: "Professionals", description: "Elevate executive verbal English and business communication." }
    ],
    prerequisites: "Basic intermediate English understanding.",
    careerPaths: [
      { title: "International Student", description: "Gain acceptance into premier global universities." },
      { title: "Global Corporate Professional", description: "Communicate fluently in multinational environments." }
    ],
    certificate: "Certificate in English Language Proficiency from Pak Royal College.",
    fee: {
      amount: "PKR 15,000",
      installments: "Full payment at admission",
      note: "Includes official Cambridge IELTS practice books and audio materials."
    },
    faqs: [
      { question: "How many mock tests are included?", answer: "The course includes 4 full-length diagnostic mock examinations with detailed individual feedback." }
    ]
  }
];
