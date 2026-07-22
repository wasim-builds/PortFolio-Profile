// Portfolio Data — Mohammed Wasim Khan
// Auto-generated from GitHub profile analysis (July 2026)

const profile = {
    name: "Mohammed Wasim Khan",
    title: "AI Engineer & Full-Stack Developer",
    bio: "Building intelligent systems at the intersection of AI, cloud, and full-stack engineering. Active open-source contributor to Apple, AWS, Google, Microsoft, PyTorch, and more.",
    email: "wasim143mr@gmail.com",
    phone: "+91 9640011405",
    linkedin: "https://linkedin.com/in/mohammed-wasim-khan-757595245",
    github: "https://github.com/wasim-builds",
    location: "Visakhapatnam, India",
    resumeUrl: "./assets/wasim_ai_engineer.pdf"
};

const stats = {
    experience: "1+",
    projects: "25+",
    openSourcePRs: "25",
    repositories: "68",
    contributionsTo: "16+"
};

const contributions = [
    {
        org: "apple",
        repo: "swift-nio",
        count: 9,
        prs: [
            { num: 3678, title: "feat: Add unchecked variants to NIOLoopBound(Box)", type: "feat" },
            { num: 3677, title: "fix: Prevent arithmetic overflow in ByteCount factory methods", type: "fix" },
            { num: 3676, title: "docs: Document that ByteBuffer is a value type", type: "docs" },
            { num: 3675, title: "fix: Throw ChannelError.ioOnClosedChannel instead of IOError", type: "fix" },
            { num: 3674, title: "docs: Clarify replaceItem moves the item", type: "docs" },
            { num: 3673, title: "fix: Handle spurious wakeups in BaseSocketChannel", type: "fix" },
            { num: 3672, title: "fix: Bump default HTTP header limits to 128KB", type: "fix" },
            { num: 3669, title: "feat: Add one-shot attribute methods to FileSystemProtocol", type: "feat" },
            { num: 3668, title: "feat: Add onDiskSize property to FileInfo", type: "feat" }
        ],
        description: "Event-driven network application framework for high performance protocol servers & clients"
    },
    {
        org: "aws",
        repo: "aws-cdk",
        count: 4,
        prs: [
            { num: 38358, title: "docs: Clarify RouterType.GATEWAY supports Virtual Private Gateway", type: "docs" },
            { num: 38357, title: "fix: Tighten permissions in SubmitBatchJob", type: "fix" },
            { num: 38331, title: "fix: Handle RETAIN_ON_UPDATE_OR_DELETE in RDS subresources", type: "fix" },
            { num: 38330, title: "fix: Emit canonical root ARN for ResourcePolicy", type: "fix" }
        ],
        description: "AWS Cloud Development Kit — define cloud infrastructure in code"
    },
    {
        org: "pytorch",
        repo: "pytorch",
        count: 1,
        prs: [
            { num: 189996, title: "Fixes #189392", type: "fix" }
        ],
        description: "Tensors and Dynamic neural networks with GPU acceleration"
    },
    {
        org: "aws",
        repo: "sagemaker-python-sdk",
        count: 1,
        prs: [
            { num: 6068, title: "feat: Add application/x-parquet support to clarify.ModelConfig", type: "feat" }
        ],
        description: "Library for training and deploying ML models on Amazon SageMaker"
    },
    {
        org: "google",
        repo: "weather-tools",
        count: 1,
        prs: [
            { num: 554, title: "feat: Support datetime formatting in output template", type: "feat" }
        ],
        description: "Tools to make weather data accessible and useful"
    },
    {
        org: "microsoft",
        repo: "autogen",
        count: 1,
        prs: [
            { num: 7978, title: "fix: Enforce utf-8 encoding globally to resolve #5566", type: "fix" }
        ],
        description: "A programming framework for agentic AI"
    },
    {
        org: "pandas-dev",
        repo: "pandas",
        count: 1,
        prs: [
            { num: 66340, title: "DOC: Clarify sort_index determinism to fix #63154", type: "docs" }
        ],
        description: "Powerful data analysis & manipulation library for Python"
    },
    {
        org: "jax-ml",
        repo: "jax",
        count: 1,
        prs: [
            { num: 39230, title: "docs: Update transpose_kernel docstring for TF compatibility", type: "docs" }
        ],
        description: "Composable transformations of Python+NumPy programs"
    },
    {
        org: "huggingface",
        repo: "datasets",
        count: 1,
        prs: [
            { num: 8334, title: "fix: #5354", type: "fix" }
        ],
        description: "The largest hub of ready-to-use datasets for AI models"
    },
    {
        org: "elastic",
        repo: "go-elasticsearch",
        count: 1,
        prs: [
            { num: 1545, title: "docs: Replace TODO docstring in xkcdsearch", type: "docs" }
        ],
        description: "Official Go client for Elasticsearch"
    },
    {
        org: "Infosys",
        repo: "Infosys-Responsible-AI-Toolkit",
        count: 1,
        prs: [
            { num: 78, title: "fix: Correct spelling of dataRecieved to dataReceived", type: "fix" }
        ],
        description: "AI safety, security, explainability, fairness, and bias detection"
    },
    {
        org: "auth0",
        repo: "webauthn.me",
        count: 1,
        prs: [
            { num: 96, title: "fix: Parse timeout as integer instead of string", type: "fix" }
        ],
        description: "Learn about the Web Authentication API"
    }
];

const projects = [
    {
        title: "File Encryption Tool",
        category: "Security & Cryptography",
        tech: ["Go", "AES-GCM", "Docker", "CLI"],
        description: "Custom chunking architecture for authenticated encryption of files of any size without loading into RAM. Uses 64KB blocks with incremental nonces.",
        github: "https://github.com/wasim-builds/file-encryption",
        image: "./project-images/proj_encryption_1784026551552.jpg",
        featured: true,
        stars: 5
    },
    {
        title: "MediScan AI",
        category: "AI / Healthcare",
        tech: ["Python", "Gemini 2.0 Flash", "JavaScript", "Shell"],
        description: "Intelligent Medical Report Analyser using Gemini 2.0 Flash for automated report parsing and insights.",
        github: "https://github.com/wasim-builds/medical-report-analyser",
        image: "./project-images/proj_ai_bot_1784026431043.jpg",
        featured: true,
        stars: 0
    },
    {
        title: "AI Interview Bot",
        category: "AI / NLP",
        tech: ["React", "Vite", "Express", "Azure OpenAI", "MongoDB"],
        description: "Resume-aware interview coach with PDF intake, chat, and optional audio Q&A. Mock interview flows powered by Azure OpenAI.",
        github: "https://github.com/wasim-builds/placement-llm-bot",
        image: "./project-images/proj_ai_bot_1784026431043.jpg",
        featured: true,
        stars: 4
    },
    {
        title: "Ecommerce Dashboard",
        category: "Data Science / BI",
        tech: ["Python", "Streamlit", "Plotly", "Pandas"],
        description: "Interactive BI dashboard analyzing sales performance, profit margins, and customer trends with real-time visualizations.",
        github: "https://github.com/wasim-builds/ecommerce-sales-dashboard",
        image: "./project-images/proj_sleep_1784026507890.jpg",
        featured: true,
        stars: 5
    },
    {
        title: "MiniTensor CUDA",
        category: "ML Infrastructure",
        tech: ["CUDA", "C++", "CMake", "Docker"],
        description: "Custom CUDA tensor library for high-performance deep learning computations with GPU acceleration.",
        github: "https://github.com/wasim-builds/MiniTensor-CUDA",
        image: "./project-images/proj_emotion_1784026462439.jpg",
        featured: false,
        stars: 2
    },
    {
        title: "CodeToCareer Platform",
        category: "Web Platform",
        tech: ["React", "Express", "Node.js", "MongoDB"],
        description: "Full-stack platform connecting developers with career opportunities and skill-building resources.",
        github: "https://github.com/wasim-builds/CodeToCareer",
        image: "./project-images/proj_code2career_1784026442371.jpg",
        featured: false,
        stars: 0
    },
    {
        title: "Smart Attendance System",
        category: "Computer Vision",
        tech: ["Python", "OpenCV", "Deep Learning", "Face Recognition"],
        description: "Automated attendance tracking leveraging facial recognition for real-time identification.",
        github: "https://github.com/wasim-builds/face-recognition-attendance-system",
        image: "./project-images/proj_attendance_1784026485132.jpg",
        featured: false,
        stars: 4
    },
    {
        title: "Study Timer PWA",
        category: "Productivity",
        tech: ["Flask", "JavaScript", "PWA", "Dark Mode"],
        description: "Feature-rich Pomodoro timer with customizable intervals, task tracking, calendar integration, and offline support.",
        github: "https://github.com/wasim-builds/study-timer",
        image: "./project-images/proj_timer_1784026517877.jpg",
        featured: false,
        stars: 5
    },
    {
        title: "FocusFlow",
        category: "Mobile / React Native",
        tech: ["React Native", "Expo", "TypeScript"],
        description: "Beautiful Pomodoro productivity app built with React Native & Expo for cross-platform mobile.",
        github: "https://github.com/wasim-builds/FocusFlow",
        image: "./project-images/proj_timer_1784026517877.jpg",
        featured: false,
        stars: 0
    },
    {
        title: "FitMetrics",
        category: "Health Tech",
        tech: ["TypeScript", "JavaScript", "Kotlin", "Swift"],
        description: "Fitness metrics tracking application with cross-platform support.",
        github: "https://github.com/wasim-builds/FitMetrics",
        image: "./project-images/proj_todo_1784026529426.jpg",
        featured: false,
        stars: 0
    },
    {
        title: "Emotion Classifier",
        category: "NLP / ML",
        tech: ["Python", "NLP", "SVM", "ANN", "Scikit-learn"],
        description: "Text-based emotion classification using machine learning with Naive Bayes, SVM, and artificial neural networks.",
        github: "https://github.com/wasim-builds/Text-Based-Emotion-Classifier-Using-Machine-Learning",
        image: "./project-images/proj_emotion_1784026462439.jpg",
        featured: false,
        stars: 0
    },
    {
        title: "Spam Email Detection",
        category: "NLP / Security",
        tech: ["Python", "Scikit-learn", "NLP"],
        description: "Machine learning-powered spam email detection with natural language processing.",
        github: "https://github.com/wasim-builds/Spam-Email-Detection-Using-machine-learning",
        image: "./project-images/proj_spam_1784026474035.jpg",
        featured: false,
        stars: 0
    },
    {
        title: "Data Structures (Java)",
        category: "Computer Science",
        tech: ["Java", "DSA", "Algorithms"],
        description: "Comprehensive Java implementations of Linked Lists, Stacks, Queues, Trees, Graphs, and HashMaps.",
        github: "https://github.com/wasim-builds/Data-Structures-using-java",
        image: "./project-images/proj_code2career_1784026442371.jpg",
        featured: false,
        stars: 5
    },
    {
        title: "Python DSA (MAANG)",
        category: "Interview Prep",
        tech: ["Python", "Jupyter Notebook", "DSA"],
        description: "Python data structures and algorithms curated for MAANG-level interview preparation.",
        github: "https://github.com/wasim-builds/python-dsa-maang",
        image: "./project-images/proj_todo_1784026529426.jpg",
        featured: false,
        stars: 2
    },
    {
        title: "Movie Booking LLD",
        category: "System Design",
        tech: ["Python", "Low-Level Design"],
        description: "Low-level design implementation of a movie booking system — OOP principles and design patterns.",
        github: "https://github.com/wasim-builds/movie-booking-LLD",
        image: "./project-images/proj_game_1784026540816.jpg",
        featured: false,
        stars: 1
    }
];

const skills = [
    {
        category: "Languages",
        items: [
            { name: "Python", level: 95, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
            { name: "JavaScript", level: 90, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
            { name: "TypeScript", level: 85, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
            { name: "Go", level: 80, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" },
            { name: "Java", level: 80, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
            { name: "C++", level: 75, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
            { name: "Swift", level: 70, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg" },
            { name: "CUDA", level: 65, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cuda/cuda-original.svg" }
        ]
    },
    {
        category: "AI / ML",
        items: [
            { name: "PyTorch", level: 90, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
            { name: "TensorFlow", level: 80, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
            { name: "JAX", level: 75, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jax/jax-original.svg" },
            { name: "Hugging Face", level: 85, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/huggingface/huggingface-original.svg" },
            { name: "LangChain", level: 80, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/langchain/langchain-original.svg" },
            { name: "OpenAI / Azure AI", level: 85, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/openai/openai-original.svg" },
            { name: "Scikit-learn", level: 85, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg" },
            { name: "Gemini", level: 75, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg" }
        ]
    },
    {
        category: "Frontend",
        items: [
            { name: "React", level: 90, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
            { name: "React Native", level: 80, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
            { name: "Next.js", level: 80, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
            { name: "HTML5", level: 95, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
            { name: "CSS3", level: 90, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
            { name: "Tailwind", level: 85, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
            { name: "Figma", level: 75, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" }
        ]
    },
    {
        category: "Backend & Cloud",
        items: [
            { name: "Node.js", level: 90, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
            { name: "Express", level: 85, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
            { name: "Flask", level: 80, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
            { name: "AWS", level: 80, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
            { name: "Docker", level: 80, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
            { name: "MongoDB", level: 85, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
            { name: "PostgreSQL", level: 80, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
            { name: "MySQL", level: 80, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" }
        ]
    },
    {
        category: "Tools & DevOps",
        items: [
            { name: "Git", level: 95, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
            { name: "Linux", level: 85, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
            { name: "VS Code", level: 90, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
            { name: "GitHub Actions", level: 75, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
            { name: "Streamlit", level: 80, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/streamlit/streamlit-original.svg" },
            { name: "Pandas", level: 90, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" }
        ]
    }
];

const experience = [
    {
        title: "M.Tech (Integrated) in Software Engineering",
        org: "VIT-AP University",
        description: "Completed integrated Master of Technology program with focus on advanced software engineering, AI, and full-stack development.",
        date: "2019 — 2024",
        type: "education"
    },
    {
        title: "Software & Data Engineering Intern",
        org: "Rashtriya Ispat Nigam Limited (Vizag Steel Plant)",
        description: "Engineered scalable data architecture and full-stack healthcare management system. Ensured data integrity for 5,000+ daily transactions.",
        date: "Jul 2024 — Present",
        type: "work"
    },
    {
        title: "AI / ML Researcher",
        org: "VIT-AP University",
        description: "Researched advanced text classification for multilingual datasets using Naive Bayes, SVM, and ANNs. Architected interview-aware AI platforms using Azure OpenAI.",
        date: "Nov 2021 — Present",
        type: "research"
    }
];

export { profile, stats, contributions, projects, skills, experience };
