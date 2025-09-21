import type { CareerPath } from "../interface/data.interface";

export const careerPaths: CareerPath = {
  Q1: {
    id: "Q1",
    text: "What subject area interests you most?",
    options: [
      { id: "A", text: "Mathematics & Logic", nextQuestion: "Q2_Math" },
      { id: "B", text: "Biology & Life Sciences", nextQuestion: "Q2_Bio" },
      { id: "C", text: "Chemistry & Materials", nextQuestion: "Q2_Chem" },
      {
        id: "D",
        text: "Social Studies & History",
        nextQuestion: "Q2_Social",
      },
      { id: "E", text: "Physics & Mechanics", nextQuestion: "Q2_Physics" },
    ],
  },
  Q2_Social: {
    id: "Q2_Social",
    text: "What aspect of social studies appeals to you?",
    options: [
      {
        id: "A",
        text: "Debating & Public Speaking",
        nextQuestion: "Q3_Debating",
      },
      { id: "B", text: "Historical Analysis", nextQuestion: "Q3_History" },
      { id: "C", text: "Cultural Studies", nextQuestion: "Q3_Culture" },
    ],
  },
  Q3_Debating: {
    id: "Q3_Debating",
    text: "What would you like to focus on?",
    options: [
      { id: "A", text: "Law & Legal Studies", nextQuestion: "Q4_Law" },
      { id: "B", text: "Public Policy", nextQuestion: "Q4_Policy" },
    ],
  },
  Q4_Law: {
    id: "Q4_Law",
    text: "Do you want to defend people's rights or create policies?",
    options: [
      { id: "A", text: "Defend Rights", nextQuestion: "Q5_Defend" },
      { id: "B", text: "Create Policies", nextQuestion: "Q5_Create" },
    ],
  },
  Q5_Defend: {
    id: "Q5_Defend",
    text: "In 10 years, do you see yourself...",
    options: [
      {
        id: "A",
        text: "As a Courtroom Lawyer",
        career: "Lawyer",
        degree: "BA LLB",
        contact: {
          name: "Sarah Johnson",
          title: "Senior Partner",
          email: "sarah.johnson@lawfirm.com",
          phone: "+1-555-0123",
          organization: "Johnson & Associates Law Firm",
        },
      },
      {
        id: "B",
        text: "As a Legal Advisor",
        career: "Legal Advisor",
        degree: "BA LLB",
        contact: {
          name: "Michael Chen",
          title: "Legal Counsel",
          email: "m.chen@corporate.com",
          phone: "+1-555-0124",
          organization: "Global Corporate Legal",
        },
      },
    ],
  },
  Q5_Create: {
    id: "Q5_Create",
    text: "In 10 years, do you see yourself...",
    options: [
      {
        id: "A",
        text: "As a Policy Maker/Politician",
        career: "Politician",
        degree: "BA Political Science, MBA Public Policy",
        contact: {
          name: "Dr. Emily Rodriguez",
          title: "State Senator",
          email: "emily.rodriguez@state.gov",
          phone: "+1-555-0125",
          organization: "State Legislature",
        },
      },
      {
        id: "B",
        text: "As a Public Policy Analyst",
        career: "Public Policy Analyst",
        degree: "BA Political Science, MPA",
        contact: {
          name: "James Wilson",
          title: "Senior Policy Analyst",
          email: "j.wilson@thinktank.org",
          phone: "+1-555-0126",
          organization: "Center for Public Policy Research",
        },
      },
    ],
  },
  Q2_Physics: {
    id: "Q2_Physics",
    text: "What area of physics interests you?",
    options: [
      {
        id: "A",
        text: "Machines & Engineering",
        nextQuestion: "Q3_Machines",
      },
      {
        id: "B",
        text: "Theoretical Physics",
        nextQuestion: "Q3_Theoretical",
      },
    ],
  },
  Q3_Machines: {
    id: "Q3_Machines",
    text: "What would you like to work with?",
    options: [
      { id: "A", text: "Robotics & Automation", nextQuestion: "Q4_Robotics" },
      { id: "B", text: "Mechanical Systems", nextQuestion: "Q4_Mechanical" },
    ],
  },
  Q4_Robotics: {
    id: "Q4_Robotics",
    text: "Do you enjoy building prototypes or programming robots?",
    options: [
      { id: "A", text: "Building Prototypes", nextQuestion: "Q5_Prototypes" },
      { id: "B", text: "Programming Robots", nextQuestion: "Q5_Programming" },
    ],
  },
  Q5_Prototypes: {
    id: "Q5_Prototypes",
    text: "In 10 years, do you see yourself...",
    options: [
      {
        id: "A",
        text: "Designing Robots",
        career: "Robotics Engineer",
        degree: "Mechanical Engineering, Robotics Specialization",
        contact: {
          name: "Dr. Alex Kim",
          title: "Lead Robotics Engineer",
          email: "alex.kim@techcorp.com",
          phone: "+1-555-0127",
          organization: "TechCorp Robotics Division",
        },
      },
      {
        id: "B",
        text: "Building Industrial Systems",
        career: "Automation Engineer",
        degree: "Mechanical Engineering",
        contact: {
          name: "Maria Santos",
          title: "Senior Automation Engineer",
          email: "m.santos@industrial.com",
          phone: "+1-555-0128",
          organization: "Industrial Solutions Inc.",
        },
      },
    ],
  },
  Q5_Programming: {
    id: "Q5_Programming",
    text: "In 10 years, do you see yourself...",
    options: [
      {
        id: "A",
        text: "Teaching Robots to Think",
        career: "AI Automation Specialist",
        degree: "Computer Science, AI Specialization",
        contact: {
          name: "Dr. David Park",
          title: "AI Research Director",
          email: "d.park@ai-research.org",
          phone: "+1-555-0129",
          organization: "AI Research Institute",
        },
      },
      {
        id: "B",
        text: "Developing Smart Systems",
        career: "AI Engineer",
        degree: "Computer Science, Machine Learning",
        contact: {
          name: "Lisa Zhang",
          title: "Senior AI Engineer",
          email: "l.zhang@techstartup.com",
          phone: "+1-555-0130",
          organization: "TechStartup AI",
        },
      },
    ],
  },
  Q2_Math: {
    id: "Q2_Math",
    text: "What aspect of mathematics interests you most?",
    options: [
      {
        id: "A",
        text: "Pure Mathematics & Theory",
        nextQuestion: "Q3_PureMath",
      },
      {
        id: "B",
        text: "Applied Mathematics",
        nextQuestion: "Q3_AppliedMath",
      },
      {
        id: "C",
        text: "Statistics & Data Analysis",
        nextQuestion: "Q3_Stats",
      },
    ],
  },
  Q3_PureMath: {
    id: "Q3_PureMath",
    text: "What area of pure mathematics appeals to you?",
    options: [
      {
        id: "A",
        text: "Algebra & Number Theory",
        nextQuestion: "Q4_Algebra",
      },
      { id: "B", text: "Geometry & Topology", nextQuestion: "Q4_Geometry" },
      { id: "C", text: "Analysis & Calculus", nextQuestion: "Q4_Analysis" },
    ],
  },
  Q4_Algebra: {
    id: "Q4_Algebra",
    text: "Do you prefer theoretical research or practical applications?",
    options: [
      { id: "A", text: "Theoretical Research", nextQuestion: "Q5_Research" },
      { id: "B", text: "Practical Applications", nextQuestion: "Q5_Applied" },
    ],
  },
  Q5_Research: {
    id: "Q5_Research",
    text: "In 10 years, do you see yourself...",
    options: [
      {
        id: "A",
        text: "As a University Professor",
        career: "Mathematics Professor",
        degree: "PhD in Mathematics",
        contact: {
          name: "Prof. Robert Thompson",
          title: "Professor of Mathematics",
          email: "r.thompson@university.edu",
          phone: "+1-555-0131",
          organization: "State University Mathematics Department",
        },
      },
      {
        id: "B",
        text: "As a Research Scientist",
        career: "Research Mathematician",
        degree: "PhD in Mathematics",
      },
    ],
  },
  Q5_Applied: {
    id: "Q5_Applied",
    text: "In 10 years, do you see yourself...",
    options: [
      {
        id: "A",
        text: "Working in Finance",
        career: "Quantitative Analyst",
        degree: "MS Mathematics, Finance",
        contact: {
          name: "Jennifer Lee",
          title: "Senior Quantitative Analyst",
          email: "j.lee@investmentbank.com",
          phone: "+1-555-0132",
          organization: "Goldman Sachs Investment Banking",
        },
      },
      {
        id: "B",
        text: "Working in Technology",
        career: "Algorithm Developer",
        degree: "MS Mathematics, Computer Science",
      },
    ],
  },
  Q3_AppliedMath: {
    id: "Q3_AppliedMath",
    text: "What field would you like to apply mathematics to?",
    options: [
      {
        id: "A",
        text: "Engineering & Technology",
        nextQuestion: "Q4_Engineering",
      },
      { id: "B", text: "Finance & Economics", nextQuestion: "Q4_Finance" },
      { id: "C", text: "Science & Research", nextQuestion: "Q4_Science" },
    ],
  },
  Q4_Engineering: {
    id: "Q4_Engineering",
    text: "What type of engineering problems interest you?",
    options: [
      {
        id: "A",
        text: "Optimization & Operations Research",
        nextQuestion: "Q5_Optimization",
      },
      {
        id: "B",
        text: "Computational Methods",
        nextQuestion: "Q5_Computational",
      },
    ],
  },
  Q5_Optimization: {
    id: "Q5_Optimization",
    text: "In 10 years, do you see yourself...",
    options: [
      {
        id: "A",
        text: "Optimizing Supply Chains",
        career: "Operations Research Analyst",
        degree: "MS Applied Mathematics, Operations Research",
      },
      {
        id: "B",
        text: "Designing Algorithms",
        career: "Algorithm Engineer",
        degree: "MS Applied Mathematics, Computer Science",
      },
    ],
  },
  Q5_Computational: {
    id: "Q5_Computational",
    text: "In 10 years, do you see yourself...",
    options: [
      {
        id: "A",
        text: "Developing Scientific Software",
        career: "Computational Scientist",
        degree: "MS Applied Mathematics, Computer Science",
      },
      {
        id: "B",
        text: "Working with Big Data",
        career: "Data Scientist",
        degree: "MS Applied Mathematics, Statistics",
      },
    ],
  },
  Q3_Stats: {
    id: "Q3_Stats",
    text: "What type of statistical work interests you?",
    options: [
      {
        id: "A",
        text: "Data Analysis & Business Intelligence",
        nextQuestion: "Q4_DataAnalysis",
      },
      {
        id: "B",
        text: "Research & Clinical Trials",
        nextQuestion: "Q4_Research",
      },
    ],
  },
  Q4_DataAnalysis: {
    id: "Q4_DataAnalysis",
    text: "What industry would you like to work in?",
    options: [
      { id: "A", text: "Technology & Software", nextQuestion: "Q5_Tech" },
      {
        id: "B",
        text: "Healthcare & Biotech",
        nextQuestion: "Q5_Healthcare",
      },
    ],
  },
  Q5_Tech: {
    id: "Q5_Tech",
    text: "In 10 years, do you see yourself...",
    options: [
      {
        id: "A",
        text: "Leading Data Teams",
        career: "Chief Data Officer",
        degree: "MS Statistics, MBA",
        contact: {
          name: "Rachel Green",
          title: "Chief Data Officer",
          email: "r.green@datacorp.com",
          phone: "+1-555-0137",
          organization: "DataCorp Analytics",
        },
      },
      {
        id: "B",
        text: "Building ML Models",
        career: "Machine Learning Engineer",
        degree: "MS Statistics, Computer Science",
      },
    ],
  },
  Q5_Healthcare: {
    id: "Q5_Healthcare",
    text: "In 10 years, do you see yourself...",
    options: [
      {
        id: "A",
        text: "Analyzing Medical Data",
        career: "Biostatistician",
        degree: "MS Biostatistics, PhD",
      },
      {
        id: "B",
        text: "Designing Clinical Trials",
        career: "Clinical Research Statistician",
        degree: "MS Statistics, PhD",
      },
    ],
  },
  Q4_Geometry: {
    id: "Q4_Geometry",
    text: "Do you prefer theoretical research or practical applications?",
    options: [
      { id: "A", text: "Theoretical Research", nextQuestion: "Q5_Research" },
      { id: "B", text: "Practical Applications", nextQuestion: "Q5_Applied" },
    ],
  },
  Q4_Analysis: {
    id: "Q4_Analysis",
    text: "Do you prefer theoretical research or practical applications?",
    options: [
      { id: "A", text: "Theoretical Research", nextQuestion: "Q5_Research" },
      { id: "B", text: "Practical Applications", nextQuestion: "Q5_Applied" },
    ],
  },
  Q4_Finance: {
    id: "Q4_Finance",
    text: "What type of financial work interests you?",
    options: [
      { id: "A", text: "Risk Management", nextQuestion: "Q5_Risk" },
      { id: "B", text: "Investment Analysis", nextQuestion: "Q5_Investment" },
    ],
  },
  Q5_Risk: {
    id: "Q5_Risk",
    text: "In 10 years, do you see yourself...",
    options: [
      {
        id: "A",
        text: "Managing Portfolio Risk",
        career: "Risk Manager",
        degree: "MS Applied Mathematics, Finance",
      },
      {
        id: "B",
        text: "Developing Risk Models",
        career: "Quantitative Risk Analyst",
        degree: "MS Applied Mathematics, Statistics",
      },
    ],
  },
  Q5_Investment: {
    id: "Q5_Investment",
    text: "In 10 years, do you see yourself...",
    options: [
      {
        id: "A",
        text: "Managing Investment Strategies",
        career: "Portfolio Manager",
        degree: "MS Applied Mathematics, CFA",
      },
      {
        id: "B",
        text: "Developing Trading Algorithms",
        career: "Quantitative Trader",
        degree: "MS Applied Mathematics, Computer Science",
      },
    ],
  },
  Q4_Science: {
    id: "Q4_Science",
    text: "What scientific field interests you?",
    options: [
      { id: "A", text: "Physics & Astronomy", nextQuestion: "Q5_Physics" },
      { id: "B", text: "Biology & Medicine", nextQuestion: "Q5_Bio" },
    ],
  },
  Q5_Physics: {
    id: "Q5_Physics",
    text: "In 10 years, do you see yourself...",
    options: [
      {
        id: "A",
        text: "Modeling Physical Systems",
        career: "Computational Physicist",
        degree: "PhD Applied Mathematics, Physics",
      },
      {
        id: "B",
        text: "Analyzing Astronomical Data",
        career: "Astrophysicist",
        degree: "PhD Applied Mathematics, Astronomy",
      },
    ],
  },
  Q5_Bio: {
    id: "Q5_Bio",
    text: "In 10 years, do you see yourself...",
    options: [
      {
        id: "A",
        text: "Modeling Biological Systems",
        career: "Mathematical Biologist",
        degree: "PhD Applied Mathematics, Biology",
      },
      {
        id: "B",
        text: "Analyzing Medical Data",
        career: "Biostatistician",
        degree: "PhD Applied Mathematics, Biostatistics",
      },
    ],
  },
  Q4_Research: {
    id: "Q4_Research",
    text: "What type of research interests you?",
    options: [
      { id: "A", text: "Clinical Research", nextQuestion: "Q5_Clinical" },
      { id: "B", text: "Epidemiological Studies", nextQuestion: "Q5_Epi" },
    ],
  },
  Q5_Clinical: {
    id: "Q5_Clinical",
    text: "In 10 years, do you see yourself...",
    options: [
      {
        id: "A",
        text: "Designing Clinical Trials",
        career: "Clinical Research Statistician",
        degree: "PhD Statistics, Biostatistics",
      },
      {
        id: "B",
        text: "Analyzing Drug Efficacy",
        career: "Pharmaceutical Statistician",
        degree: "PhD Statistics, Pharmacology",
      },
    ],
  },
  Q5_Epi: {
    id: "Q5_Epi",
    text: "In 10 years, do you see yourself...",
    options: [
      {
        id: "A",
        text: "Studying Disease Patterns",
        career: "Epidemiologist",
        degree: "PhD Statistics, Epidemiology",
      },
      {
        id: "B",
        text: "Public Health Research",
        career: "Public Health Statistician",
        degree: "PhD Statistics, Public Health",
      },
    ],
  },
  Q2_Bio: {
    id: "Q2_Bio",
    text: "What aspect of biology interests you most?",
    options: [
      {
        id: "A",
        text: "Molecular Biology & Genetics",
        nextQuestion: "Q3_Molecular",
      },
      {
        id: "B",
        text: "Ecology & Environmental Science",
        nextQuestion: "Q3_Ecology",
      },
      { id: "C", text: "Human Biology & Medicine", nextQuestion: "Q3_Human" },
    ],
  },
  Q3_Molecular: {
    id: "Q3_Molecular",
    text: "What area of molecular biology appeals to you?",
    options: [
      { id: "A", text: "Genetics & Genomics", nextQuestion: "Q4_Genetics" },
      {
        id: "B",
        text: "Biochemistry & Proteins",
        nextQuestion: "Q4_Biochem",
      },
    ],
  },
  Q4_Genetics: {
    id: "Q4_Genetics",
    text: "Do you prefer research or clinical applications?",
    options: [
      {
        id: "A",
        text: "Research & Discovery",
        nextQuestion: "Q5_Genetics_Research",
      },
      {
        id: "B",
        text: "Clinical Applications",
        nextQuestion: "Q5_Genetics_Clinical",
      },
    ],
  },
  Q5_Genetics_Research: {
    id: "Q5_Genetics_Research",
    text: "In 10 years, do you see yourself...",
    options: [
      {
        id: "A",
        text: "As a Research Scientist",
        career: "Geneticist",
        degree: "PhD Genetics, Molecular Biology",
        contact: {
          name: "Dr. Amanda Foster",
          title: "Senior Geneticist",
          email: "a.foster@geneticslab.org",
          phone: "+1-555-0133",
          organization: "National Genetics Research Center",
        },
      },
      {
        id: "B",
        text: "As a University Professor",
        career: "Biology Professor",
        degree: "PhD Genetics, Biology",
      },
    ],
  },
  Q5_Genetics_Clinical: {
    id: "Q5_Genetics_Clinical",
    text: "In 10 years, do you see yourself...",
    options: [
      {
        id: "A",
        text: "As a Genetic Counselor",
        career: "Genetic Counselor",
        degree: "MS Genetics, Counseling",
      },
      {
        id: "B",
        text: "As a Clinical Geneticist",
        career: "Clinical Geneticist",
        degree: "MD, PhD Genetics",
      },
    ],
  },
  Q4_Biochem: {
    id: "Q4_Biochem",
    text: "What type of biochemistry work interests you?",
    options: [
      { id: "A", text: "Drug Development", nextQuestion: "Q5_Pharma" },
      { id: "B", text: "Biotechnology", nextQuestion: "Q5_Biotech" },
    ],
  },
  Q5_Pharma: {
    id: "Q5_Pharma",
    text: "In 10 years, do you see yourself...",
    options: [
      {
        id: "A",
        text: "Developing New Drugs",
        career: "Pharmaceutical Scientist",
        degree: "PhD Biochemistry, Pharmacology",
      },
      {
        id: "B",
        text: "Testing Drug Safety",
        career: "Toxicologist",
        degree: "PhD Biochemistry, Toxicology",
      },
    ],
  },
  Q5_Biotech: {
    id: "Q5_Biotech",
    text: "In 10 years, do you see yourself...",
    options: [
      {
        id: "A",
        text: "Engineering Proteins",
        career: "Protein Engineer",
        degree: "PhD Biochemistry, Biotechnology",
      },
      {
        id: "B",
        text: "Developing Biotech Products",
        career: "Biotechnology Researcher",
        degree: "PhD Biochemistry, Molecular Biology",
      },
    ],
  },
  Q2_Chem: {
    id: "Q2_Chem",
    text: "What aspect of chemistry interests you most?",
    options: [
      { id: "A", text: "Organic Chemistry", nextQuestion: "Q3_Organic" },
      { id: "B", text: "Inorganic Chemistry", nextQuestion: "Q3_Inorganic" },
      { id: "C", text: "Physical Chemistry", nextQuestion: "Q3_Physical" },
    ],
  },
  Q3_Organic: {
    id: "Q3_Organic",
    text: "What area of organic chemistry appeals to you?",
    options: [
      { id: "A", text: "Drug Synthesis", nextQuestion: "Q4_Drug_Synthesis" },
      { id: "B", text: "Materials Science", nextQuestion: "Q4_Materials" },
    ],
  },
  Q4_Drug_Synthesis: {
    id: "Q4_Drug_Synthesis",
    text: "Do you prefer research or industry work?",
    options: [
      {
        id: "A",
        text: "Academic Research",
        nextQuestion: "Q5_Academic_Chem",
      },
      {
        id: "B",
        text: "Pharmaceutical Industry",
        nextQuestion: "Q5_Pharma_Chem",
      },
    ],
  },
  Q5_Academic_Chem: {
    id: "Q5_Academic_Chem",
    text: "In 10 years, do you see yourself...",
    options: [
      {
        id: "A",
        text: "As a University Professor",
        career: "Chemistry Professor",
        degree: "PhD Organic Chemistry",
        contact: {
          name: "Prof. Sarah Mitchell",
          title: "Professor of Organic Chemistry",
          email: "s.mitchell@chemistry.edu",
          phone: "+1-555-0135",
          organization: "University Chemistry Department",
        },
      },
      {
        id: "B",
        text: "As a Research Scientist",
        career: "Research Chemist",
        degree: "PhD Organic Chemistry",
      },
    ],
  },
  Q5_Pharma_Chem: {
    id: "Q5_Pharma_Chem",
    text: "In 10 years, do you see yourself...",
    options: [
      {
        id: "A",
        text: "Leading Drug Discovery",
        career: "Medicinal Chemist",
        degree: "PhD Organic Chemistry, Pharmacology",
        contact: {
          name: "Dr. Kevin Patel",
          title: "Senior Medicinal Chemist",
          email: "k.patel@pharma.com",
          phone: "+1-555-0136",
          organization: "Pfizer Pharmaceutical Research",
        },
      },
      {
        id: "B",
        text: "Managing Chemical Processes",
        career: "Process Chemist",
        degree: "PhD Organic Chemistry, Chemical Engineering",
      },
    ],
  },
  Q3_Ecology: {
    id: "Q3_Ecology",
    text: "What area of ecology interests you?",
    options: [
      {
        id: "A",
        text: "Conservation Biology",
        nextQuestion: "Q4_Conservation",
      },
      {
        id: "B",
        text: "Environmental Science",
        nextQuestion: "Q4_Environmental",
      },
    ],
  },
  Q4_Conservation: {
    id: "Q4_Conservation",
    text: "Do you prefer field work or policy work?",
    options: [
      { id: "A", text: "Field Research", nextQuestion: "Q5_Field_Bio" },
      { id: "B", text: "Policy & Advocacy", nextQuestion: "Q5_Policy_Bio" },
    ],
  },
  Q5_Field_Bio: {
    id: "Q5_Field_Bio",
    text: "In 10 years, do you see yourself...",
    options: [
      {
        id: "A",
        text: "As a Wildlife Biologist",
        career: "Wildlife Biologist",
        degree: "MS Ecology, Wildlife Biology",
      },
      {
        id: "B",
        text: "As a Conservation Scientist",
        career: "Conservation Scientist",
        degree: "PhD Ecology, Conservation Biology",
      },
    ],
  },
  Q5_Policy_Bio: {
    id: "Q5_Policy_Bio",
    text: "In 10 years, do you see yourself...",
    options: [
      {
        id: "A",
        text: "As an Environmental Policy Maker",
        career: "Environmental Policy Analyst",
        degree: "MS Ecology, Public Policy",
      },
      {
        id: "B",
        text: "As a Conservation Manager",
        career: "Conservation Manager",
        degree: "MS Ecology, Management",
      },
    ],
  },
  Q3_Human: {
    id: "Q3_Human",
    text: "What area of human biology interests you?",
    options: [
      { id: "A", text: "Medicine & Healthcare", nextQuestion: "Q4_Medicine" },
      {
        id: "B",
        text: "Exercise & Sports Science",
        nextQuestion: "Q4_Sports",
      },
    ],
  },
  Q4_Medicine: {
    id: "Q4_Medicine",
    text: "Do you want to be a doctor or researcher?",
    options: [
      { id: "A", text: "Medical Doctor", nextQuestion: "Q5_Doctor" },
      {
        id: "B",
        text: "Medical Researcher",
        nextQuestion: "Q5_Medical_Researcher",
      },
    ],
  },
  Q5_Doctor: {
    id: "Q5_Doctor",
    text: "In 10 years, do you see yourself...",
    options: [
      {
        id: "A",
        text: "As a Family Physician",
        career: "Family Physician",
        degree: "MD, Residency",
        contact: {
          name: "Dr. Michael Brown",
          title: "Family Medicine Physician",
          email: "m.brown@medicalcenter.com",
          phone: "+1-555-0134",
          organization: "City Medical Center",
        },
      },
      {
        id: "B",
        text: "As a Specialist",
        career: "Medical Specialist",
        degree: "MD, Fellowship",
      },
    ],
  },
  Q5_Medical_Researcher: {
    id: "Q5_Medical_Researcher",
    text: "In 10 years, do you see yourself...",
    options: [
      {
        id: "A",
        text: "As a Biomedical Researcher",
        career: "Biomedical Researcher",
        degree: "PhD Biology, MD",
      },
      {
        id: "B",
        text: "As a Clinical Researcher",
        career: "Clinical Researcher",
        degree: "PhD Biology, Clinical Research",
      },
    ],
  },
  Q4_Sports: {
    id: "Q4_Sports",
    text: "What aspect of sports science interests you?",
    options: [
      { id: "A", text: "Athletic Performance", nextQuestion: "Q5_Athletic" },
      { id: "B", text: "Exercise Physiology", nextQuestion: "Q5_Exercise" },
    ],
  },
  Q5_Athletic: {
    id: "Q5_Athletic",
    text: "In 10 years, do you see yourself...",
    options: [
      {
        id: "A",
        text: "As a Sports Scientist",
        career: "Sports Scientist",
        degree: "MS Exercise Science, PhD",
      },
      {
        id: "B",
        text: "As a Performance Coach",
        career: "Performance Coach",
        degree: "MS Exercise Science, Coaching",
      },
    ],
  },
  Q5_Exercise: {
    id: "Q5_Exercise",
    text: "In 10 years, do you see yourself...",
    options: [
      {
        id: "A",
        text: "As an Exercise Physiologist",
        career: "Exercise Physiologist",
        degree: "MS Exercise Science, PhD",
      },
      {
        id: "B",
        text: "As a Fitness Researcher",
        career: "Fitness Researcher",
        degree: "PhD Exercise Science",
      },
    ],
  },
  Q4_Materials: {
    id: "Q4_Materials",
    text: "What type of materials interest you?",
    options: [
      { id: "A", text: "Polymers & Plastics", nextQuestion: "Q5_Polymers" },
      { id: "B", text: "Nanomaterials", nextQuestion: "Q5_Nano" },
    ],
  },
  Q5_Polymers: {
    id: "Q5_Polymers",
    text: "In 10 years, do you see yourself...",
    options: [
      {
        id: "A",
        text: "As a Polymer Scientist",
        career: "Polymer Scientist",
        degree: "PhD Organic Chemistry, Materials Science",
      },
      {
        id: "B",
        text: "As a Materials Engineer",
        career: "Materials Engineer",
        degree: "PhD Organic Chemistry, Engineering",
      },
    ],
  },
  Q5_Nano: {
    id: "Q5_Nano",
    text: "In 10 years, do you see yourself...",
    options: [
      {
        id: "A",
        text: "As a Nanotechnologist",
        career: "Nanotechnologist",
        degree: "PhD Chemistry, Nanotechnology",
      },
      {
        id: "B",
        text: "As a Materials Researcher",
        career: "Materials Researcher",
        degree: "PhD Chemistry, Materials Science",
      },
    ],
  },
  Q3_Inorganic: {
    id: "Q3_Inorganic",
    text: "What area of inorganic chemistry interests you?",
    options: [
      {
        id: "A",
        text: "Materials & Catalysis",
        nextQuestion: "Q4_Catalysis",
      },
      {
        id: "B",
        text: "Coordination Chemistry",
        nextQuestion: "Q4_Coordination",
      },
    ],
  },
  Q4_Catalysis: {
    id: "Q4_Catalysis",
    text: "What type of catalytic work interests you?",
    options: [
      {
        id: "A",
        text: "Industrial Catalysis",
        nextQuestion: "Q5_Industrial",
      },
      {
        id: "B",
        text: "Research Catalysis",
        nextQuestion: "Q5_Catalysis_Research",
      },
    ],
  },
  Q5_Industrial: {
    id: "Q5_Industrial",
    text: "In 10 years, do you see yourself...",
    options: [
      {
        id: "A",
        text: "As a Process Engineer",
        career: "Process Engineer",
        degree: "PhD Inorganic Chemistry, Chemical Engineering",
      },
      {
        id: "B",
        text: "As a Catalysis Specialist",
        career: "Catalysis Specialist",
        degree: "PhD Inorganic Chemistry",
      },
    ],
  },
  Q5_Catalysis_Research: {
    id: "Q5_Catalysis_Research",
    text: "In 10 years, do you see yourself...",
    options: [
      {
        id: "A",
        text: "As a Research Scientist",
        career: "Research Scientist",
        degree: "PhD Inorganic Chemistry",
      },
      {
        id: "B",
        text: "As a University Professor",
        career: "Chemistry Professor",
        degree: "PhD Inorganic Chemistry",
      },
    ],
  },
  Q4_Coordination: {
    id: "Q4_Coordination",
    text: "What type of coordination chemistry interests you?",
    options: [
      {
        id: "A",
        text: "Bioinorganic Chemistry",
        nextQuestion: "Q5_Bioinorganic",
      },
      {
        id: "B",
        text: "Organometallic Chemistry",
        nextQuestion: "Q5_Organometallic",
      },
    ],
  },
  Q5_Bioinorganic: {
    id: "Q5_Bioinorganic",
    text: "In 10 years, do you see yourself...",
    options: [
      {
        id: "A",
        text: "As a Bioinorganic Chemist",
        career: "Bioinorganic Chemist",
        degree: "PhD Inorganic Chemistry, Biochemistry",
      },
      {
        id: "B",
        text: "As a Medicinal Chemist",
        career: "Medicinal Chemist",
        degree: "PhD Inorganic Chemistry, Pharmacology",
      },
    ],
  },
  Q5_Organometallic: {
    id: "Q5_Organometallic",
    text: "In 10 years, do you see yourself...",
    options: [
      {
        id: "A",
        text: "As an Organometallic Chemist",
        career: "Organometallic Chemist",
        degree: "PhD Inorganic Chemistry",
      },
      {
        id: "B",
        text: "As a Catalysis Researcher",
        career: "Catalysis Researcher",
        degree: "PhD Inorganic Chemistry",
      },
    ],
  },
  Q3_Physical: {
    id: "Q3_Physical",
    text: "What area of physical chemistry interests you?",
    options: [
      { id: "A", text: "Quantum Chemistry", nextQuestion: "Q4_Quantum" },
      { id: "B", text: "Thermodynamics", nextQuestion: "Q4_Thermo" },
    ],
  },
  Q4_Quantum: {
    id: "Q4_Quantum",
    text: "What type of quantum chemistry work interests you?",
    options: [
      {
        id: "A",
        text: "Computational Chemistry",
        nextQuestion: "Q5_Computational_Chem",
      },
      {
        id: "B",
        text: "Theoretical Chemistry",
        nextQuestion: "Q5_Theoretical_Chem",
      },
    ],
  },
  Q5_Computational_Chem: {
    id: "Q5_Computational_Chem",
    text: "In 10 years, do you see yourself...",
    options: [
      {
        id: "A",
        text: "As a Computational Chemist",
        career: "Computational Chemist",
        degree: "PhD Physical Chemistry, Computer Science",
      },
      {
        id: "B",
        text: "As a Software Developer",
        career: "Chemistry Software Developer",
        degree: "PhD Physical Chemistry, Computer Science",
      },
    ],
  },
  Q5_Theoretical_Chem: {
    id: "Q5_Theoretical_Chem",
    text: "In 10 years, do you see yourself...",
    options: [
      {
        id: "A",
        text: "As a Theoretical Chemist",
        career: "Theoretical Chemist",
        degree: "PhD Physical Chemistry",
      },
      {
        id: "B",
        text: "As a University Professor",
        career: "Chemistry Professor",
        degree: "PhD Physical Chemistry",
      },
    ],
  },
  Q4_Thermo: {
    id: "Q4_Thermo",
    text: "What type of thermodynamics work interests you?",
    options: [
      { id: "A", text: "Chemical Engineering", nextQuestion: "Q5_Chem_Eng" },
      {
        id: "B",
        text: "Materials Science",
        nextQuestion: "Q5_Materials_Chem",
      },
    ],
  },
  Q5_Chem_Eng: {
    id: "Q5_Chem_Eng",
    text: "In 10 years, do you see yourself...",
    options: [
      {
        id: "A",
        text: "As a Chemical Engineer",
        career: "Chemical Engineer",
        degree: "PhD Physical Chemistry, Chemical Engineering",
      },
      {
        id: "B",
        text: "As a Process Engineer",
        career: "Process Engineer",
        degree: "PhD Physical Chemistry, Chemical Engineering",
      },
    ],
  },
  Q5_Materials_Chem: {
    id: "Q5_Materials_Chem",
    text: "In 10 years, do you see yourself...",
    options: [
      {
        id: "A",
        text: "As a Materials Chemist",
        career: "Materials Chemist",
        degree: "PhD Physical Chemistry, Materials Science",
      },
      {
        id: "B",
        text: "As a Materials Engineer",
        career: "Materials Engineer",
        degree: "PhD Physical Chemistry, Materials Science",
      },
    ],
  },
  Q4_Environmental: {
    id: "Q4_Environmental",
    text: "What area of environmental science interests you?",
    options: [
      { id: "A", text: "Climate Science", nextQuestion: "Q5_Climate" },
      { id: "B", text: "Pollution Control", nextQuestion: "Q5_Pollution" },
    ],
  },
  Q5_Climate: {
    id: "Q5_Climate",
    text: "In 10 years, do you see yourself...",
    options: [
      {
        id: "A",
        text: "As a Climate Scientist",
        career: "Climate Scientist",
        degree: "PhD Environmental Science, Climate",
      },
      {
        id: "B",
        text: "As an Environmental Consultant",
        career: "Environmental Consultant",
        degree: "MS Environmental Science, Climate",
      },
    ],
  },
  Q5_Pollution: {
    id: "Q5_Pollution",
    text: "In 10 years, do you see yourself...",
    options: [
      {
        id: "A",
        text: "As an Environmental Engineer",
        career: "Environmental Engineer",
        degree: "MS Environmental Science, Engineering",
      },
      {
        id: "B",
        text: "As a Pollution Control Specialist",
        career: "Pollution Control Specialist",
        degree: "MS Environmental Science, Engineering",
      },
    ],
  },
  Q3_History: {
    id: "Q3_History",
    text: "What area of history interests you?",
    options: [
      {
        id: "A",
        text: "Political History",
        nextQuestion: "Q4_Political_History",
      },
      {
        id: "B",
        text: "Cultural History",
        nextQuestion: "Q4_Cultural_History",
      },
    ],
  },
  Q4_Political_History: {
    id: "Q4_Political_History",
    text: "Do you prefer research or teaching?",
    options: [
      {
        id: "A",
        text: "Research & Analysis",
        nextQuestion: "Q5_History_Research",
      },
      {
        id: "B",
        text: "Teaching & Education",
        nextQuestion: "Q5_History_Teaching",
      },
    ],
  },
  Q5_History_Research: {
    id: "Q5_History_Research",
    text: "In 10 years, do you see yourself...",
    options: [
      {
        id: "A",
        text: "As a Historian",
        career: "Historian",
        degree: "PhD History",
      },
      {
        id: "B",
        text: "As a Political Analyst",
        career: "Political Analyst",
        degree: "PhD History, Political Science",
      },
    ],
  },
  Q5_History_Teaching: {
    id: "Q5_History_Teaching",
    text: "In 10 years, do you see yourself...",
    options: [
      {
        id: "A",
        text: "As a History Professor",
        career: "History Professor",
        degree: "PhD History",
      },
      {
        id: "B",
        text: "As a High School Teacher",
        career: "History Teacher",
        degree: "MA History, Education",
      },
    ],
  },
  Q4_Cultural_History: {
    id: "Q4_Cultural_History",
    text: "What aspect of cultural history interests you?",
    options: [
      { id: "A", text: "Art & Literature", nextQuestion: "Q5_Art_History" },
      {
        id: "B",
        text: "Social Movements",
        nextQuestion: "Q5_Social_History",
      },
    ],
  },
  Q5_Art_History: {
    id: "Q5_Art_History",
    text: "In 10 years, do you see yourself...",
    options: [
      {
        id: "A",
        text: "As an Art Historian",
        career: "Art Historian",
        degree: "PhD Art History",
      },
      {
        id: "B",
        text: "As a Museum Curator",
        career: "Museum Curator",
        degree: "MA Art History, Museum Studies",
      },
    ],
  },
  Q5_Social_History: {
    id: "Q5_Social_History",
    text: "In 10 years, do you see yourself...",
    options: [
      {
        id: "A",
        text: "As a Social Historian",
        career: "Social Historian",
        degree: "PhD History, Sociology",
      },
      {
        id: "B",
        text: "As a Cultural Researcher",
        career: "Cultural Researcher",
        degree: "PhD History, Anthropology",
      },
    ],
  },
  Q3_Culture: {
    id: "Q3_Culture",
    text: "What area of cultural studies interests you?",
    options: [
      { id: "A", text: "Anthropology", nextQuestion: "Q4_Anthropology" },
      { id: "B", text: "Sociology", nextQuestion: "Q4_Sociology" },
    ],
  },
  Q4_Anthropology: {
    id: "Q4_Anthropology",
    text: "What type of anthropology interests you?",
    options: [
      {
        id: "A",
        text: "Cultural Anthropology",
        nextQuestion: "Q5_Cultural_Anthro",
      },
      {
        id: "B",
        text: "Physical Anthropology",
        nextQuestion: "Q5_Physical_Anthro",
      },
    ],
  },
  Q5_Cultural_Anthro: {
    id: "Q5_Cultural_Anthro",
    text: "In 10 years, do you see yourself...",
    options: [
      {
        id: "A",
        text: "As a Cultural Anthropologist",
        career: "Cultural Anthropologist",
        degree: "PhD Anthropology",
      },
      {
        id: "B",
        text: "As a Field Researcher",
        career: "Field Researcher",
        degree: "PhD Anthropology, Ethnography",
      },
    ],
  },
  Q5_Physical_Anthro: {
    id: "Q5_Physical_Anthro",
    text: "In 10 years, do you see yourself...",
    options: [
      {
        id: "A",
        text: "As a Physical Anthropologist",
        career: "Physical Anthropologist",
        degree: "PhD Anthropology, Biology",
      },
      {
        id: "B",
        text: "As a Forensic Anthropologist",
        career: "Forensic Anthropologist",
        degree: "PhD Anthropology, Forensic Science",
      },
    ],
  },
  Q4_Sociology: {
    id: "Q4_Sociology",
    text: "What area of sociology interests you?",
    options: [
      {
        id: "A",
        text: "Social Research",
        nextQuestion: "Q5_Social_Research",
      },
      { id: "B", text: "Social Work", nextQuestion: "Q5_Social_Work" },
    ],
  },
  Q5_Social_Research: {
    id: "Q5_Social_Research",
    text: "In 10 years, do you see yourself...",
    options: [
      {
        id: "A",
        text: "As a Sociologist",
        career: "Sociologist",
        degree: "PhD Sociology",
      },
      {
        id: "B",
        text: "As a Social Researcher",
        career: "Social Researcher",
        degree: "PhD Sociology, Statistics",
      },
    ],
  },
  Q5_Social_Work: {
    id: "Q5_Social_Work",
    text: "In 10 years, do you see yourself...",
    options: [
      {
        id: "A",
        text: "As a Social Worker",
        career: "Social Worker",
        degree: "MSW, Sociology",
      },
      {
        id: "B",
        text: "As a Community Organizer",
        career: "Community Organizer",
        degree: "MA Sociology, Social Work",
      },
    ],
  },
  Q4_Policy: {
    id: "Q4_Policy",
    text: "What type of policy work interests you?",
    options: [
      { id: "A", text: "Government Policy", nextQuestion: "Q5_Government" },
      {
        id: "B",
        text: "International Policy",
        nextQuestion: "Q5_International",
      },
    ],
  },
  Q5_Government: {
    id: "Q5_Government",
    text: "In 10 years, do you see yourself...",
    options: [
      {
        id: "A",
        text: "As a Government Policy Analyst",
        career: "Government Policy Analyst",
        degree: "MA Public Policy, Political Science",
      },
      {
        id: "B",
        text: "As a Civil Servant",
        career: "Civil Servant",
        degree: "MA Public Administration",
      },
    ],
  },
  Q5_International: {
    id: "Q5_International",
    text: "In 10 years, do you see yourself...",
    options: [
      {
        id: "A",
        text: "As an International Relations Specialist",
        career: "International Relations Specialist",
        degree: "MA International Relations, Public Policy",
      },
      {
        id: "B",
        text: "As a Diplomat",
        career: "Diplomat",
        degree: "MA International Relations, Foreign Service",
      },
    ],
  },
  Q4_Mechanical: {
    id: "Q4_Mechanical",
    text: "What type of mechanical systems interest you?",
    options: [
      {
        id: "A",
        text: "Automotive Engineering",
        nextQuestion: "Q5_Automotive",
      },
      {
        id: "B",
        text: "Aerospace Engineering",
        nextQuestion: "Q5_Aerospace",
      },
    ],
  },
  Q5_Automotive: {
    id: "Q5_Automotive",
    text: "In 10 years, do you see yourself...",
    options: [
      {
        id: "A",
        text: "As an Automotive Engineer",
        career: "Automotive Engineer",
        degree: "BS Mechanical Engineering, Automotive",
      },
      {
        id: "B",
        text: "As a Vehicle Designer",
        career: "Vehicle Designer",
        degree: "BS Mechanical Engineering, Design",
      },
    ],
  },
  Q5_Aerospace: {
    id: "Q5_Aerospace",
    text: "In 10 years, do you see yourself...",
    options: [
      {
        id: "A",
        text: "As an Aerospace Engineer",
        career: "Aerospace Engineer",
        degree: "BS Aerospace Engineering",
      },
      {
        id: "B",
        text: "As a Space Systems Engineer",
        career: "Space Systems Engineer",
        degree: "BS Aerospace Engineering, Space Systems",
      },
    ],
  },
  Q3_Theoretical: {
    id: "Q3_Theoretical",
    text: "What area of theoretical physics interests you?",
    options: [
      {
        id: "A",
        text: "Quantum Physics",
        nextQuestion: "Q4_Quantum_Physics",
      },
      {
        id: "B",
        text: "Particle Physics",
        nextQuestion: "Q4_Particle_Physics",
      },
    ],
  },
  Q4_Quantum_Physics: {
    id: "Q4_Quantum_Physics",
    text: "What aspect of quantum physics interests you?",
    options: [
      {
        id: "A",
        text: "Quantum Computing",
        nextQuestion: "Q5_Quantum_Computing",
      },
      {
        id: "B",
        text: "Quantum Mechanics Research",
        nextQuestion: "Q5_Quantum_Research",
      },
    ],
  },
  Q5_Quantum_Computing: {
    id: "Q5_Quantum_Computing",
    text: "In 10 years, do you see yourself...",
    options: [
      {
        id: "A",
        text: "As a Quantum Computing Engineer",
        career: "Quantum Computing Engineer",
        degree: "PhD Physics, Computer Science",
      },
      {
        id: "B",
        text: "As a Quantum Algorithm Developer",
        career: "Quantum Algorithm Developer",
        degree: "PhD Physics, Mathematics",
      },
    ],
  },
  Q5_Quantum_Research: {
    id: "Q5_Quantum_Research",
    text: "In 10 years, do you see yourself...",
    options: [
      {
        id: "A",
        text: "As a Theoretical Physicist",
        career: "Theoretical Physicist",
        degree: "PhD Physics, Mathematics",
      },
      {
        id: "B",
        text: "As a Quantum Physicist",
        career: "Quantum Physicist",
        degree: "PhD Physics, Quantum Mechanics",
      },
    ],
  },
  Q4_Particle_Physics: {
    id: "Q4_Particle_Physics",
    text: "What aspect of particle physics interests you?",
    options: [
      {
        id: "A",
        text: "Experimental Particle Physics",
        nextQuestion: "Q5_Experimental_Particle",
      },
      {
        id: "B",
        text: "Theoretical Particle Physics",
        nextQuestion: "Q5_Theoretical_Particle",
      },
    ],
  },
  Q5_Experimental_Particle: {
    id: "Q5_Experimental_Particle",
    text: "In 10 years, do you see yourself...",
    options: [
      {
        id: "A",
        text: "As an Experimental Physicist",
        career: "Experimental Physicist",
        degree: "PhD Physics, Particle Physics",
      },
      {
        id: "B",
        text: "As a Research Scientist at CERN",
        career: "Research Scientist",
        degree: "PhD Physics, High Energy Physics",
      },
    ],
  },
  Q5_Theoretical_Particle: {
    id: "Q5_Theoretical_Particle",
    text: "In 10 years, do you see yourself...",
    options: [
      {
        id: "A",
        text: "As a Theoretical Particle Physicist",
        career: "Theoretical Particle Physicist",
        degree: "PhD Physics, Mathematics",
      },
      {
        id: "B",
        text: "As a Cosmologist",
        career: "Cosmologist",
        degree: "PhD Physics, Astronomy",
      },
    ],
  },
};
