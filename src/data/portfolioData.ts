import { 
  Project, 
  SkillGroup, 
  ExperienceItem, 
  EducationItem, 
  AchievementItem, 
  CertificationItem, 
  GitHubRepoItem 
} from '../types';

export const PERSONAL_INFO = {
  fullName: 'Jonnalagadda Yaswanth Krishna',
  displayName: 'Yaswanth Krishna',
  role: 'Aspiring Data Engineer | Python & SQL Developer | AI/ML Systems Builder',
  eyebrowStatus: 'OPEN TO DATA ENGINEERING, PYTHON BACKEND & AI/ML INTERNSHIPS',
  heroHeadline: 'Hi, I’m Yaswanth Krishna.',
  heroSupportingLine: 'I build data pipelines, Python backend systems, and practical AI applications.',
  heroSummary: 'Final-year CSE undergraduate at RGUKT Ongole (2027), with a 9.3/10 CGPA and three months of software development internship experience. Interested in turning raw data and complex workflows into reliable, useful systems.',
  aboutIntroduction: 'I’m Jonnalagadda Yaswanth Krishna, a final-year Computer Science and Engineering undergraduate at Rajiv Gandhi University of Knowledge Technologies (RGUKT), Ongole, graduating in 2027. I build Python backend applications, SQL-based data workflows, and applied AI systems. My work spans data ingestion, transformation, relational modelling, API development, and practical machine-learning applications. I’m currently focused on strengthening my Data Engineering and cloud foundations while building an Agentic SQL Analyst backed by PostgreSQL and Google Gemini.',
  howIWork: [
    'I prefer understanding the complete data flow: source, ingestion, transformation, storage, and consumption.',
    'I value SQL fundamentals, readable Python, explicit validation, and clear system boundaries.',
    'I’m strengthening problem-solving and cloud foundations through consistent practice and hands-on projects.'
  ],
  terminalCopy: '> Building an Agentic SQL Analyst with PostgreSQL + Gemini',
  location: 'Andhra Pradesh, India; open to opportunities in Hyderabad and elsewhere',
  email: 'yaswanthkrishnajonnalagadda@gmail.com',
  github: 'https://github.com/Yaswanth332',
  githubUsername: 'Yaswanth332',
  
  // Confirmed links provided by Yaswanth
  linkedinUrl: 'https://www.linkedin.com/in/jonnalagaddayaswanthkrishna/',
  linkedinPlaceholderLabel: 'LinkedIn Profile',
  
  leetcodeUrl: 'https://leetcode.com/u/Yaswanth_332/',
  sqlPracticeRepoUrl: 'https://github.com/Yaswanth332/SQL-LeetCode-50',
  
  // Confirmed Resume PDF
  resumePath: '/resume/Yaswanth_Krishna_Resume.pdf',
  hasResumePdf: true,

  cgpa: '9.3/10',
  university: 'Rajiv Gandhi University of Knowledge Technologies (RGUKT), Ongole',
  graduationYear: '2027',
  profileImage: '/images/yaswanth-krishna.jpg',
  portraitAlt: 'Portrait of Jonnalagadda Yaswanth Krishna',
};

export const RECRUITER_SNAPSHOT = [
  { 
    metric: '9.3 / 10', 
    label: 'B.Tech CSE CGPA', 
    detail: 'RGUKT Ongole, Class of 2027' 
  },
  { 
    metric: '3 months', 
    label: 'Software Dev Internship', 
    detail: 'CodeTantra (SolidJS, React, Java, MongoDB)' 
  },
  { 
    metric: '2027', 
    label: 'Expected Graduation', 
    detail: 'B.Tech Computer Science & Engineering' 
  },
  { 
    metric: 'AQVH Runner-Up', 
    label: 'Competition Achievement', 
    detail: 'Amaravathi Quantum Valley Hackathon 2025' 
  },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: 'Programming & Querying',
    iconName: 'Code',
    skills: [
      { name: 'Python', level: 'Used in projects', detail: 'ETL, FastAPI, Django, Pandas, ML' },
      { name: 'SQL', level: 'Used in projects', detail: 'Complex joins, window functions, CTEs, indexing' },
      { name: 'Java', level: 'Working knowledge', detail: 'Backend REST APIs & OOP fundamentals' },
      { name: 'JavaScript', level: 'Working knowledge', detail: 'Interactive UI and enterprise workflows' },
      { name: 'DSA / Problem Solving', level: 'Working knowledge', detail: 'Arrays, hashing, two pointers, stacks' },
    ],
  },
  {
    category: 'Data Engineering & Databases',
    iconName: 'Database',
    skills: [
      { name: 'PostgreSQL', level: 'Used in projects', detail: 'Schema introspection, metadata, stored procedures' },
      { name: 'MySQL', level: 'Used in projects', detail: 'Relational storage, transactional schemas' },
      { name: 'SQLite', level: 'Working knowledge', detail: 'Local caching and embedded application databases' },
      { name: 'Pandas', level: 'Used in projects', detail: 'Data manipulation, normalization, validation' },
      { name: 'SQLAlchemy', level: 'Used in projects', detail: 'ORM, connection pooling, and SQL generation' },
      { name: 'Medallion Architecture', level: 'Used in projects', detail: 'Bronze (raw), Silver (cleansed), Gold (marts)' },
      { name: 'Star Schema Modeling', level: 'Used in projects', detail: 'Fact and dimension tables, analytical lineage' },
      { name: 'Data Quality Validation', level: 'Used in projects', detail: 'Null checks, constraint validation, row reconciliation' },
      { name: 'CSV & API Ingestion', level: 'Used in projects', detail: 'Batch loaders, COPY FROM STDIN streaming' },
    ],
  },
  {
    category: 'Backend & APIs',
    iconName: 'Server',
    skills: [
      { name: 'FastAPI', level: 'Used in projects', detail: 'High-performance asynchronous REST endpoints' },
      { name: 'Django', level: 'Used in projects', detail: 'MVC architecture, ORM, authentication' },
      { name: 'REST APIs', level: 'Used in projects', detail: 'Schema design, JSON payloads, error handling' },
      { name: 'Pydantic', level: 'Used in projects', detail: 'Type-safe data validation and parsing' },
      { name: 'psycopg2', level: 'Used in projects', detail: 'PostgreSQL database adapter and cursor control' },
    ],
  },
  {
    category: 'AI / ML / Computer Vision',
    iconName: 'BrainCircuit',
    skills: [
      { name: 'Google Gemini API', level: 'Used in projects', detail: 'Schema-aware SQL generation and context budgeting' },
      { name: 'scikit-learn', level: 'Used in projects', detail: 'Classification, regression, evaluation pipelines' },
      { name: 'XGBoost', level: 'Used in projects', detail: 'Gradient-boosted decision trees' },
      { name: 'OpenCV', level: 'Used in projects', detail: 'Image preprocessing, perspective transforms, ArUco' },
      { name: 'Tesseract OCR', level: 'Used in projects', detail: 'Optical character recognition for lab documents' },
      { name: 'Whisper', level: 'Used in projects', detail: 'Local speech-to-text transcription models' },
      { name: 'Qiskit (Simulation)', level: 'Working knowledge', detail: 'Quantum circuits, superposition, random entropy' },
    ],
  },
  {
    category: 'Cloud, DevOps & Tools',
    iconName: 'Wrench',
    skills: [
      { name: 'Docker', level: 'Used in projects', detail: 'Containerization, Dockerfile, multi-stage builds' },
      { name: 'Git & GitHub', level: 'Used in projects', detail: 'Branching, PRs, version control' },
      { name: 'Linux / Bash', level: 'Working knowledge', detail: 'Shell navigation, CLI utilities, permissions' },
      { name: 'Jenkins', level: 'Used in projects', detail: 'CI pipelines, automated test runs' },
      { name: 'AWS Fundamentals', level: 'Currently learning', detail: 'EC2, S3, RDS, IAM, CloudWatch, VPC' },
    ],
  },
  {
    category: 'Frontend Exposure',
    iconName: 'Layout',
    skills: [
      { name: 'React', level: 'Working knowledge', detail: 'Component state, hooks, Vite builds' },
      { name: 'SolidJS', level: 'Working knowledge', detail: 'Reactive components used at CodeTantra' },
      { name: 'TypeScript', level: 'Working knowledge', detail: 'Static typing and interface definitions' },
      { name: 'HTML / CSS', level: 'Working knowledge', detail: 'Semantic markup, accessibility, modern styling' },
      { name: 'Tailwind CSS', level: 'Working knowledge', detail: 'Utility-first responsive layouts' },
    ],
  },
];

export const FEATURED_PROJECTS: Project[] = [
  {
    id: 'agentic-sql-analyst',
    name: 'Agentic SQL Analyst',
    category: 'Data Engineering',
    statusBadge: 'In Progress / Current Build',
    tagline: 'PostgreSQL schema introspection and LLM-assisted SQL drafting with Pydantic validation',
    problem: 'Natural-language queries against enterprise databases frequently produce invalid SQL when models lack schema context or run unconstrained without execution safeguards.',
    built: 'A Python natural-language database assistant that introspects PostgreSQL schema metadata, injects schema context to draft SQL via the Google Gemini API, and validates model output using Pydantic models before execution.',
    description: 'An AI-assisted database analysis tool under active development. The system connects to PostgreSQL via psycopg2, introspects tables, columns, data types, and primary/foreign keys, and supplies this metadata to Google Gemini with configurable token budgets (1024, 2048, 4096 tokens). Output is parsed into structured Pydantic schemas to validate query intent before any execution is attempted.',
    technologies: ['Python', 'Google Gemini API', 'PostgreSQL', 'psycopg2', 'Pydantic', 'python-dotenv'],
    syntheticDataNote: 'Includes a local synthetic ride-sharing dataset generated for development: 600 users, 300 vehicles, 500 rides, 500 payments, and 500 ratings (2,400 synthetic rows). Labelled as local development data, not production throughput.',
    highlights: [
      'PostgreSQL schema introspection retrieving catalog metadata and relational keys dynamically',
      'Configurable Gemini token budgets (1,024 / 2,048 / 4,096 tokens) for controlled response economics',
      'Pydantic validation layer to enforce strict output schema and isolate generated SQL syntax',
      'Bulk data ingestion utilities implementing COPY ... FROM STDIN for fast relational seeding',
      'Synthetic ride-sharing database benchmark covering 2,400 total rows across 5 related tables',
    ],
    architectureStages: [
      { name: 'User Query', description: 'Natural language analytical question', status: 'Implemented' },
      { name: 'Schema Introspection', description: 'psycopg2 queries PostgreSQL information_schema', status: 'Implemented' },
      { name: 'Gemini SQL Draft', description: 'Context-conditioned SQL draft generation with token budget', status: 'Implemented' },
      { name: 'Pydantic Validation', description: 'Validating model JSON structure & SQL query tokens', status: 'In Progress' },
      { name: 'Controlled Execution', description: 'Read-only credentials, SELECT-only filter, row limits & query timeouts', status: 'Planned' },
      { name: 'Result Explanation', description: 'Summarizing execution tabular output into natural response', status: 'Planned' },
    ],
    securityReliabilityNotes: [
      'Recommended read-only PostgreSQL role for execution stage',
      'SELECT-only validation denying DDL (CREATE, DROP, ALTER) and DML (INSERT, UPDATE, DELETE)',
      'Enforced query timeout and maximum row limit (e.g., LIMIT 100) to prevent runaway scans',
    ],
    personalContribution: 'Designed and implemented the PostgreSQL database schema, data seeding scripts using psycopg2 COPY, Gemini API prompt wrapper, and schema introspection module. Currently building the Pydantic validation pipeline.',
    githubUrl: '#',
    // TODO: add public repository URL after publishing
    githubUrlComment: 'TODO: add public repository URL after publishing',
    caseStudyAvailable: true,
    featured: true,
    priority: 1,
  },
  {
    id: 'retail-data-warehouse',
    name: 'Retail Data Warehouse Pipeline',
    category: 'Data Engineering',
    statusBadge: 'Completed Project',
    tagline: 'End-to-end Medallion ETL pipeline with FastAPI, SQLAlchemy, MySQL & Streamlit',
    problem: 'Retail sales operations produce fragmented CSV transaction records with dirty records, null keys, and format discrepancies, impeding unified sales analytics.',
    built: 'A Python ETL data pipeline accepting retail CSV data via FastAPI, keeping raw Bronze copies, normalizing data with Pandas, loading Star Schema tables in MySQL with SQLAlchemy, and serving analytics in Streamlit.',
    description: 'An end-to-end data pipeline that ingests retail transactions, applies data validation, and models the data through Bronze, Silver, and Gold layers. The architecture maintains raw staging, cleansed standardized entities, and analytical marts with customer and product dimensions and a sales fact table. Source code includes simulated S3 object storage staging locally.',
    technologies: ['Python', 'FastAPI', 'Pandas', 'SQLAlchemy', 'MySQL', 'Streamlit'],
    syntheticDataNote: 'Tested with local retail transaction datasets and simulated S3 object-storage ingestion workflow.',
    highlights: [
      'Modular Medallion pipeline: Bronze (raw staging), Silver (cleansed), Gold (Star Schema marts)',
      'FastAPI ingestion endpoint receiving batch transaction CSV uploads',
      'Pandas transformation routines handling date standardization, deduplication, and currency conversion',
      'SQLAlchemy relational loading into MySQL dimensional tables (Customer, Product, Date, Sales Fact)',
      'Interactive Streamlit dashboard displaying revenue trends, product velocity, and regional metrics',
    ],
    architectureStages: [
      { name: 'CSV Upload', description: 'FastAPI micro-batch ingestion endpoint', status: 'Implemented' },
      { name: 'Bronze Layer', description: 'Raw unmodified transaction snapshots', status: 'Implemented' },
      { name: 'Silver Layer', description: 'Pandas cleansing, deduplication & type enforcement', status: 'Implemented' },
      { name: 'Gold Layer', description: 'SQLAlchemy Star Schema dimensional model (Fact & Dims)', status: 'Implemented' },
      { name: 'Analytics View', description: 'Streamlit dashboard for sales trend exploration', status: 'Implemented' },
    ],
    securityReliabilityNotes: [
      'Idempotent ingestion runs to avoid duplicate fact record insertion',
      'Transaction rollbacks on schema or data-type mismatch during batch loading',
      'AWS S3 staging implemented as a simulated local file workflow',
    ],
    personalContribution: 'Built the FastAPI ingestion service, Pandas transformation scripts, MySQL relational schema, and Streamlit analytics interface.',
    githubUrl: 'https://github.com/Yaswanth332/Data-Engineering-',
    caseStudyAvailable: true,
    featured: true,
    priority: 2,
  },
  {
    id: 'postgresql-data-warehouse',
    name: 'PostgreSQL SQL Data Warehouse',
    category: 'Data Engineering',
    statusBadge: 'Completed Project',
    tagline: 'Medallion architecture warehouse with automated data quality checks and Star Schema',
    problem: 'Disparate operational CRM and ERP CSV exports lack data quality validation, structured relational modeling, and clean analytical views for business queries.',
    built: 'A PostgreSQL warehouse ingesting multi-source CSV files, organizing data into Bronze, Silver, and Gold layers, running validation checks, and modeling relationships using a Star Schema.',
    description: 'A structured data warehousing project in PostgreSQL that standardizes operational data exports into analytics-ready data marts. It ingests source CSVs into Bronze staging tables, uses SQL stored procedures and queries in the Silver layer for deduplication and schema normalization, and establishes Gold fact and dimension tables with verified referential integrity.',
    technologies: ['PostgreSQL', 'SQL', 'Medallion Architecture', 'Star Schema', 'Data Quality Validation'],
    highlights: [
      'Automated multi-source CSV ingestion into PostgreSQL staging Bronze tables',
      'Silver-layer SQL procedures for deduplication, whitespace trimming, and timestamp casting',
      'Gold-layer analytical dimensional models with Star Schema fact and dimension tables',
      'Built-in data quality check queries verifying row reconciliation, foreign key integrity, and non-null constraints',
      'Analytical SQL queries and view definitions for accelerated executive reporting',
    ],
    architectureStages: [
      { name: 'Source CSVs', description: 'CRM and ERP raw extract files', status: 'Implemented' },
      { name: 'Bronze Staging', description: 'Raw unconstrained staging tables in PostgreSQL', status: 'Implemented' },
      { name: 'Silver Transformation', description: 'SQL procedures for deduplication & casting', status: 'Implemented' },
      { name: 'Gold Marts', description: 'Star Schema fact and dimension analytical models', status: 'Implemented' },
      { name: 'Data Quality Suite', description: 'SQL assertion queries verifying data integrity', status: 'Implemented' },
    ],
    securityReliabilityNotes: [
      'Constraint checks: unique primary keys, valid foreign key references, positive numeric ranges',
      'Data lineage preservation between staging Bronze and final Gold analytical views',
    ],
    personalContribution: 'Wrote all SQL DDL and DML scripts, designed the dimensional star schema, and implemented data quality verification test queries.',
    githubUrl: 'https://github.com/Yaswanth332/Sql-DataWareHouse-Project-',
    caseStudyAvailable: true,
    featured: true,
    priority: 3,
  },
  {
    id: 'qumail',
    name: 'QuMail — Quantum-Inspired Secure Email Prototype',
    category: 'Backend & Systems',
    statusBadge: 'Hackathon Prototype',
    tagline: 'Cryptographic email workflow exploring simulated quantum randomness and AES-GCM',
    problem: 'Deterministic pseudo-random number generators can theoretically introduce key predictability weaknesses in sensitive cryptographic handshakes.',
    built: 'A hackathon prototype exploring secure email communication using AES-GCM encryption and simulated quantum randomness / QKD concepts via IBM Qiskit circuits and ephemeral key handling.',
    description: 'A security-focused prototype built during a hackathon to explore how quantum computing concepts can strengthen messaging security. Uses Qiskit Aer simulation to model quantum circuits, put qubits into equal superposition, and harvest measurement collapse entropy to derive unbiased random seeds for ephemeral session keys and OTP generation. This is a simulated prototype, not a deployed physical quantum network.',
    technologies: ['Python', 'Qiskit', 'Qiskit Aer', 'Cryptography', 'Backend APIs', 'React', 'Docker'],
    highlights: [
      'Quantum circuit simulation using Hadamard gates to model equal superposition states',
      'Measurement collapse simulation harvesting unbiased bitstrings for OTP and ephemeral key seeds',
      'AES-GCM authenticated encryption for email payloads ensuring confidentiality and tamper resistance',
      'Backend REST API for secure message exchange and temporary token expiration',
      'Containerized with Docker for straightforward local demonstration',
    ],
    architectureStages: [
      { name: 'Qiskit Circuit', description: 'Hadamard superposition & measurement collapse simulation', status: 'Implemented' },
      { name: 'Entropy Harvesting', description: 'Unbiased bitstring extraction for key generation', status: 'Implemented' },
      { name: 'AES-GCM Encryption', description: 'Message payload encryption with authentication tag', status: 'Implemented' },
      { name: 'Backend API', description: 'Ephemeral key handling and delivery service', status: 'Implemented' },
      { name: 'Client Interface', description: 'React messaging UI prototype', status: 'Implemented' },
    ],
    securityReliabilityNotes: [
      'Simulated quantum entropy prototype on classical hardware (Qiskit Aer simulator)',
      'Ephemeral session keys with strict time-to-live (TTL) expiration',
      'Clear project disclaimer: experimental prototype, not a production-grade QKD deployment',
    ],
    personalContribution: 'Constructed the Qiskit quantum circuit simulation routines, key extraction logic, and Python backend API endpoints.',
    githubUrl: 'https://github.com/Yaswanth332/QuMail',
    caseStudyAvailable: true,
    featured: true,
    priority: 4,
  },
  {
    id: 'agrismart',
    name: 'AGRISMART — Crop Recommendation & Soil Analysis',
    category: 'AI / ML',
    statusBadge: 'Completed Project',
    tagline: 'Django agricultural decision support platform with ML predictions and OCR input',
    problem: 'Smallholder farmers frequently rely on subjective estimates rather than scientific soil data and localized climate context, leading to suboptimal crop yields.',
    built: 'A full-stack Django platform combining soil parameters (N-P-K, pH), live weather context via external APIs, and scikit-learn machine-learning classifiers to recommend optimal crops, including Tesseract OCR for soil test reports.',
    description: 'An agricultural decision-support web application that helps farmers make evidence-based planting decisions. The system accepts manual soil input or scans soil test certificates using Tesseract OCR, retrieves real-time weather information from external meteorological APIs, and runs classification models trained on regional agronomic datasets.',
    technologies: ['Python', 'Django', 'scikit-learn', 'Pandas', 'NumPy', 'Tesseract OCR', 'Weather API', 'SQLite'],
    highlights: [
      'Multi-factor machine learning classifier evaluating nitrogen, phosphorus, potassium, pH, and rainfall',
      'Tesseract OCR pipeline allowing farmers to extract mineral values from photographed soil test reports',
      'Integration with external weather REST APIs for real-time localized temperature and humidity data',
      'Django full-stack architecture with user profiles, query histories, and recommendation summaries',
      'Visual yield and nutrient trend charts rendered using Pandas and Matplotlib',
    ],
    architectureStages: [
      { name: 'Input Ingestion', description: 'Manual form data or Tesseract OCR soil report extraction', status: 'Implemented' },
      { name: 'Weather API', description: 'Live localized meteorological enrichment', status: 'Implemented' },
      { name: 'ML Classifier', description: 'scikit-learn model predicting optimal crop varieties', status: 'Implemented' },
      { name: 'Django Backend', description: 'Authentication, query logging, and business logic', status: 'Implemented' },
      { name: 'Dashboard View', description: 'Recommendation explanation and historical trends', status: 'Implemented' },
    ],
    securityReliabilityNotes: [
      'Fallback default values for weather parameters when external API limits or timeouts occur',
      'Document validation to filter unreadable or corrupted OCR images before model inference',
    ],
    personalContribution: 'Trained and evaluated the crop recommendation classifiers, built the Django web application and views, and integrated OCR and weather APIs.',
    githubUrl: 'https://github.com/Yaswanth332/AGRISMART/tree/yaswanth',
    caseStudyAvailable: true,
    featured: true,
    priority: 5,
  },
  {
    id: 'credit-card-churn',
    name: 'Credit Card Customer Churn Prediction',
    category: 'AI / ML',
    statusBadge: 'Completed Project',
    tagline: 'End-to-end customer attrition classification with SMOTE class balancing & Streamlit app',
    problem: 'Financial institutions suffer high revenue loss from customer attrition, but churners represent a small minority of users (~16%), causing standard models to miss at-risk accounts.',
    built: 'An end-to-end classification pipeline featuring data cleaning, feature engineering, SMOTE oversampling, model benchmarking (Random Forest vs. XGBoost), and an interactive Streamlit risk assessment application.',
    description: 'A machine-learning project analyzing banking customer behavioral and transactional records to identify churn risk before cancellation occurs. The project addressed extreme class imbalance using SMOTE, engineered key behavioral ratios (credit limit utilization, transaction change count), tuned decision thresholds for high recall, and packaged the final model into a Streamlit interface.',
    technologies: ['Python', 'Pandas', 'scikit-learn', 'XGBoost', 'SMOTE', 'Streamlit', 'Joblib'],
    highlights: [
      'Addressed ~16% severe class imbalance using Synthetic Minority Over-sampling Technique (SMOTE)',
      'Engineered behavioral features: credit limit utilization ratio, revolving balance trend, transaction frequency',
      'Tuned decision thresholds via ROC curves prioritizing high sensitivity to catch at-risk customers',
      'Exported model artifacts with Joblib and deployed an interactive Streamlit inference UI',
    ],
    metrics: [
      { label: 'Repository-Reported Accuracy', value: '95.36%', note: 'Documented test set accuracy' },
      { label: 'Repository-Reported Precision', value: '81.23%', note: 'Positive class precision' },
      { label: 'Repository-Reported Recall', value: '92.66%', note: 'Prioritized to catch churners' },
      { label: 'Repository-Reported F1 Score', value: '86.57%', note: 'Balanced classification score' },
    ],
    architectureStages: [
      { name: 'Data Cleaning', description: 'Handling outliers, categorical encoding, and feature scaling', status: 'Implemented' },
      { name: 'Class Balancing', description: 'SMOTE oversampling on training split only to avoid data leakage', status: 'Implemented' },
      { name: 'Model Training', description: 'Benchmarking Random Forest vs XGBoost with cross-validation', status: 'Implemented' },
      { name: 'Threshold Tuning', description: 'Optimizing probability threshold for 92.66% recall', status: 'Implemented' },
      { name: 'Streamlit UI', description: 'Interactive single-customer risk scoring & feature importance view', status: 'Implemented' },
    ],
    securityReliabilityNotes: [
      'Reported metrics are repository-evaluated test set performance; not audited live production metrics',
      'Applied SMOTE strictly to training folds to prevent evaluation data leakage',
    ],
    personalContribution: 'Performed complete exploratory data analysis, engineered features, trained and tuned XGBoost models, and built the Streamlit application.',
    githubUrl: 'https://github.com/Yaswanth332/credit-card-churn-analysis-App',
    caseStudyAvailable: true,
    featured: true,
    priority: 6,
  },
  {
    id: 'road-crack-detection',
    name: 'Road Crack Detection — Research Project',
    category: 'Research',
    statusBadge: 'Academic Research Exploration',
    tagline: 'Computer-vision exploration of pavement defect segmentation and ArUco marker calibration',
    problem: 'Automated civil infrastructure inspection requires reliable crack detection and physical dimension measurement without expensive specialized vehicle rigs.',
    built: 'A research project exploring segmentation methods, SAM-assisted pseudo-labeling, and OpenCV ArUco calibration for millimeter-level physical crack measurement under faculty guidance.',
    description: 'An academic research investigation supervised by faculty guide P. Sindhu at RGUKT Ongole. The project explores using computer-vision segmentation techniques to detect road surface fractures, leveraging SAM (Segment Anything Model) for pseudo-labeling pavement datasets, and applying OpenCV ArUco marker calibration to translate pixel dimensions into physical millimeter measurements.',
    technologies: ['Python', 'OpenCV', 'SAM (Segment Anything)', 'NumPy', 'ArUco Calibration'],
    highlights: [
      'Investigated pavement defect segmentation under varying illumination and surface textures',
      'Explored SAM-assisted pseudo-labeling to accelerate training data annotation',
      'Implemented OpenCV ArUco marker detection to calibrate camera perspective and physical scale',
      'Explored pixel-to-millimeter physical measurement conversion for crack width estimation',
      'Conducted under academic faculty guidance from P. Sindhu at RGUKT Ongole',
    ],
    architectureStages: [
      { name: 'Image Acquisition', description: 'Pavement surface capture with calibrated reference markers', status: 'Implemented' },
      { name: 'Preprocessing', description: 'Contrast enhancement & adaptive thresholding with OpenCV', status: 'Implemented' },
      { name: 'Segmentation', description: 'SAM-assisted defect contour segmentation', status: 'Implemented' },
      { name: 'Scale Calibration', description: 'ArUco marker detection establishing millimeter-per-pixel ratio', status: 'Implemented' },
      { name: 'Dimension Estimation', description: 'Quantifying defect width and perimeter metrics', status: 'In Progress' },
    ],
    securityReliabilityNotes: [
      'Academic research exploration; does not claim commercial field deployment or audited field accuracy',
      'Requires standardized reference marker placement for physical dimensional calibration',
    ],
    personalContribution: 'Implemented image preprocessing pipelines, ArUco scale detection scripts, and defect contour segmentation experiments under faculty supervision.',
    githubUrl: 'https://github.com/Yaswanth332/OMR-ANALYSER', // Related CV repository
    githubUrlComment: 'OpenCV / computer-vision codebase reference',
    caseStudyAvailable: true,
    featured: false,
    priority: 7,
  },
  {
    id: 'docker-jenkins-devops',
    name: 'Dockerized Node.js App & Jenkins CI Pipeline',
    category: 'Backend & Systems',
    statusBadge: 'DevOps Practice Project',
    tagline: 'Containerized Node.js service with automated unit testing and scripted Jenkins pipeline',
    problem: 'Maintaining consistent build, test, and container packaging workflows across development and testing environments.',
    built: 'A hands-on DevOps practice implementation covering a containerized Node.js application, multi-stage Docker build/run workflows, automated unit tests, and a scripted Jenkins CI pipeline.',
    description: 'A practical DevOps project demonstrating continuous integration fundamentals. Implemented a Node.js microservice packaged inside lightweight Docker containers, wrote automated unit tests (passing 3/3 local test cases), and scripted a Jenkins pipeline to automate repository checkout, dependency installation, test execution, and image builds.',
    technologies: ['Node.js', 'Docker', 'Docker Compose', 'Jenkins', 'GitHub'],
    highlights: [
      'Dockerized Node.js application with multi-stage build optimization',
      'Configured Jenkins CI pipeline for automated testing and container image creation',
      'Automated unit test execution verifying endpoint responses (3 passing tests documented)',
      'Docker Compose configuration for local multi-container orchestration',
    ],
    architectureStages: [
      { name: 'Code Push', description: 'Git commit pushed to GitHub repository', status: 'Implemented' },
      { name: 'Jenkins Trigger', description: 'CI webhook or polling triggers pipeline execution', status: 'Implemented' },
      { name: 'Automated Tests', description: 'Node.js test runner verifies unit test assertions', status: 'Implemented' },
      { name: 'Docker Build', description: 'Multi-stage Dockerfile packages application image', status: 'Implemented' },
      { name: 'Artifact Creation', description: 'Tagged container image ready for local container runtime', status: 'Implemented' },
    ],
    securityReliabilityNotes: [
      'DevOps practice project; local test suite verified with 3 passing tests',
      'Not a large-scale production multi-cluster deployment',
    ],
    personalContribution: 'Wrote the Dockerfiles, Docker Compose service definitions, unit tests, and Jenkinsfile pipeline script.',
    githubUrl: 'https://github.com/Yaswanth332/Task_1',
    caseStudyAvailable: true,
    featured: false,
    priority: 8,
  },
];

export const WORK_EXPERIENCE: ExperienceItem[] = [
  {
    role: 'Software Development Intern',
    company: 'CodeTantra',
    location: 'Hyderabad, India',
    period: '2026',
    duration: '3 months',
    type: 'Internship',
    description: 'Contributed to an education and examination-management platform in a production codebase, working across frontend validation interfaces, backend API integrations, and scheduling workflows.',
    technologies: ['JavaScript', 'TypeScript', 'React', 'SolidJS', 'Java', 'JSP', 'REST APIs', 'MongoDB', 'Git'],
    responsibilities: [
      'Contributed to an education and examination-management platform in a production codebase.',
      'Implemented validation behavior for evaluation-rule workflows in React.',
      'Built an Evaluation Assignment Rule interface in SolidJS and integrated it with Java backend APIs and MongoDB-backed configuration.',
      'Investigated and fixed issues in Evaluation Playground and evaluation/scheduling workflows, including navigation, rendering, and schedule-change validation.',
      'Worked with JavaScript/TypeScript, React, SolidJS, Java/JSP, REST APIs, MongoDB, and Git.',
    ],
  },
];

export const EDUCATION_HISTORY: EducationItem[] = [
  {
    degree: 'B.Tech in Computer Science and Engineering',
    institution: 'Rajiv Gandhi University of Knowledge Technologies (RGUKT)',
    location: 'Ongole, Andhra Pradesh, India',
    period: '2023 – 2027',
    grade: 'CGPA: 9.3 / 10',
    field: 'Computer Science & Engineering',
    highlights: [
      'Consistent academic excellence with a 9.3 / 10 CGPA across core engineering coursework',
      'Coursework: Data Structures & Algorithms, Database Management Systems, Operating Systems, Computer Networks, Object-Oriented Programming',
      'Active technical leadership and collegiate engineering project development',
    ],
    secondaryEducation: {
      classXII: '9.93 / 10',
      classX: '10 / 10',
    },
  },
];

export const LEADERSHIP_ACHIEVEMENTS: AchievementItem[] = [
  {
    title: 'Runner-Up — Amaravathi Quantum Valley Hackathon (AQVH) 2025',
    roleOrContext: 'Technical Competition',
    year: '2025',
    description: 'Awarded Runner-Up honors for developing a quantum-inspired cryptographic authentication prototype demonstrating technical rigor and problem solving.',
  },
  {
    title: 'Team Lead — Smart India Hackathon (SIH) 2025',
    roleOrContext: 'Team Leadership & Engineering',
    year: '2025',
    description: 'Led a 6-member engineering team to design, coordinate, and implement a working software solution addressing real-world problem statements under hackathon constraints.',
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  { 
    title: 'NPTEL Cloud Computing Certification', 
    issuer: 'NPTEL / IIT',
    gradeOrScore: 'Score: 95%' 
  },
  { 
    title: 'APSCHE Cloud Computing Fundamentals', 
    issuer: 'Andhra Pradesh State Council of Higher Education (APSCHE)' 
  },
  { 
    title: 'APSSDC Cloud & DevOps Certification', 
    issuer: 'Andhra Pradesh State Skill Development Corporation (APSSDC)' 
  },
  { 
    title: 'Django Web Architecture & API Certificate', 
    issuer: 'LinkedIn Learning' 
  },
];

export const PROBLEM_SOLVING_DATA = {
  sqlRepoUrl: 'https://github.com/Yaswanth332/SQL-LeetCode-50',
  summary: 'Strengthening problem-solving and algorithmic foundations through consistent practice across SQL analytical queries and core data structure patterns.',
  focusAreas: [
    {
      topic: 'SQL Analytical Patterns',
      detail: 'Window functions (ROW_NUMBER, RANK, DENSE_RANK, LEAD/LAG), CTEs, self-joins, rolling aggregations, and query optimization.',
      link: 'https://github.com/Yaswanth332/SQL-LeetCode-50',
      status: 'Documented in GitHub repository'
    },
    {
      topic: 'Data Structures & Algorithms',
      detail: 'Consistent practice across arrays, hashing, two pointers, and stacks, with focus on pattern recognition and time/space complexity analysis.',
      status: 'Active daily practice'
    },
  ],
  leetcodeUrl: 'https://leetcode.com/u/Yaswanth_332/',
};

export const GITHUB_REPOSITORIES: GitHubRepoItem[] = [
  {
    name: 'Sql-DataWareHouse-Project-',
    description: 'PostgreSQL data warehouse implementing Medallion Bronze-Silver-Gold architecture, data quality checks, and Star Schema.',
    tech: ['PostgreSQL', 'SQL', 'Medallion Architecture', 'Star Schema'],
    url: 'https://github.com/Yaswanth332/Sql-DataWareHouse-Project-',
    category: 'Data Engineering',
  },
  {
    name: 'Data-Engineering-',
    description: 'Retail data warehouse pipeline with FastAPI micro-batch ingestion, Pandas transformation, SQLAlchemy, and MySQL.',
    tech: ['Python', 'FastAPI', 'Pandas', 'SQLAlchemy', 'MySQL'],
    url: 'https://github.com/Yaswanth332/Data-Engineering-',
    category: 'Data Engineering',
  },
  {
    name: 'SQL-LeetCode-50',
    description: 'Documented solutions to top 50 SQL problems covering joins, window functions, CTEs, and business metrics.',
    tech: ['SQL', 'PostgreSQL', 'Window Functions', 'CTEs'],
    url: 'https://github.com/Yaswanth332/SQL-LeetCode-50',
    category: 'SQL Practice',
  },
  {
    name: 'credit-card-churn-analysis-App',
    description: 'End-to-end churn prediction model with SMOTE class balancing, XGBoost tuning, and interactive Streamlit UI.',
    tech: ['Python', 'scikit-learn', 'XGBoost', 'SMOTE', 'Streamlit'],
    url: 'https://github.com/Yaswanth332/credit-card-churn-analysis-App',
    category: 'Machine Learning',
  },
  {
    name: 'AGRISMART',
    description: 'Crop recommendation and soil analysis platform combining Django, machine learning, and Tesseract OCR.',
    tech: ['Python', 'Django', 'scikit-learn', 'Tesseract OCR'],
    url: 'https://github.com/Yaswanth332/AGRISMART/tree/yaswanth',
    category: 'AI / Full-Stack',
  },
  {
    name: 'QuMail',
    description: 'Cryptographic email prototype exploring simulated quantum superposition entropy with Qiskit and AES-GCM.',
    tech: ['Python', 'Qiskit', 'Cryptography', 'Docker'],
    url: 'https://github.com/Yaswanth332/QuMail',
    category: 'Quantum Simulation',
  },
  {
    name: 'Task_1',
    description: 'DevOps practice project containerizing a Node.js application with multi-stage Docker builds and automated unit tests.',
    tech: ['Node.js', 'Docker', 'Docker Compose'],
    url: 'https://github.com/Yaswanth332/Task_1',
    category: 'DevOps',
  },
  {
    name: 'Task_2_Jenkins_Pipeline',
    description: 'Jenkins CI pipeline automation for testing, building, and deploying containerized applications.',
    tech: ['Jenkins', 'CI/CD', 'Docker', 'Shell'],
    url: 'https://github.com/Yaswanth332/Task_2_Jenkins_Pipeline',
    category: 'DevOps',
  },
  {
    name: 'OMR-ANALYSER',
    description: 'Computer-vision pipeline exploring image preprocessing, thresholding, and contour detection with OpenCV.',
    tech: ['Python', 'OpenCV', 'NumPy'],
    url: 'https://github.com/Yaswanth332/OMR-ANALYSER',
    category: 'Computer Vision',
  },
];
