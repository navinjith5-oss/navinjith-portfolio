export interface ProfileData {
  name: string;
  headline: string;
  targetRoles: string[];
  intro: string;
  summary: string;
  location: string;
  email: string;
  phone: string;
  showPhoneOnPublicSite: boolean;
  linkedin: string;
  github: string;
  csaCertified: boolean;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  status: "Certified" | "Completed" | "In Progress";
  issueDate?: string;
  credentialUrl?: string;
  featured: boolean;
  category: "Professional Certification" | "Training" | "Coursework";
  description: string;
  verificationAvailable: boolean;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  specialization?: string;
  dates: string;
  status: "In Progress" | "Completed";
  notes?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  location: string;
  type: "Internship" | "Full-time" | "Project";
  summary: string;
  bulletPoints: string[];
  toolsUsed: string[];
}

export interface ProjectDetail {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  role: string;
  status: string;
  shortDescription: string;
  repoUrl: string;
  demoUrl?: string;
  technologies: string[];
  resumeBullets: string[];
  objective: string;
  publicScanner: {
    summary: string;
    features: string[];
    architecture: {
      step: number;
      component: string;
      role: string;
    }[];
    technologies: string[];
    boundaries: string[];
    codeSnippets: {
      title: string;
      filePath: string;
      language: string;
      githubUrl: string;
      code: string;
      explanation: string;
    }[];
  };
  aiPrototype: {
    summary: string;
    features: string[];
    technologies: string[];
    architecture: {
      step: number;
      component: string;
      role: string;
    }[];
    boundaries: string[];
  };
  limitations: string[];
  futureWork: string[];
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    proficiencyNote?: string;
    context?: string;
  }[];
}

export const portfolioData = {
  profile: {
    name: "Navinjith K",
    headline: "EC-Council Certified SOC Analyst | Cybersecurity",
    targetRoles: [
      "SOC Analyst (Tier 1)",
      "Entry-Level SOC Analyst",
      "Cybersecurity Analyst",
      "Information Security Analyst"
    ],
    intro: "Cyber Forensics graduate and MCA student with cybersecurity internship experience in threat monitoring, log analysis, vulnerability assessment, and incident response support.",
    summary: "EC-Council Certified SOC Analyst (CSA) and Cyber Forensics graduate currently pursuing Master of Computer Applications (MCA). Hands-on internship experience at RedTeam Hacker Academy conducting threat monitoring, SIEM log analysis, vulnerability scanning, and incident triage support. Developer of SecureLoop AI, an open-source web security assessment prototype integrating Nuclei scanning and JSONL normalization. Passionate about defensive security operations, threat detection, and structured security reporting.",
    location: "Kozhikode, Kerala, India",
    email: "navinjith5@gmail.com",
    phone: "+91 8289975405",
    showPhoneOnPublicSite: false, // Phone included in resume; email and LinkedIn primary on public site
    linkedin: "https://www.linkedin.com/in/navinjith-k-871107254",
    github: "https://github.com/navinjith-oss", // User's profile url as requested
    githubProfile: "https://github.com/navinjith-oss",
    csaCertified: true
  } as ProfileData,

  certifications: [
    {
      id: "csa",
      title: "EC-Council Certified SOC Analyst (CSA)",
      issuer: "EC-Council",
      status: "Certified",
      featured: true,
      category: "Professional Certification",
      description: "Industry certification validating foundational and operational SOC knowledge, including Tier 1 triage, incident handling, SIEM architecture, log correlation, and threat response procedures.",
      verificationAvailable: false
    },
    {
      id: "cicsa",
      title: "Certified IT Infrastructure and Cyber SOC Analyst (CICSA)",
      issuer: "RedTeam Hacker Academy",
      status: "Completed",
      featured: false,
      category: "Training",
      description: "Intensive training program covering SOC daily workflows, network packet inspection, enterprise endpoint monitoring, and hands-on log triage.",
      verificationAvailable: false
    },
    {
      id: "ibm-cyber",
      title: "IBM Advanced Cybersecurity Certificate",
      issuer: "IBM",
      status: "Completed",
      featured: false,
      category: "Coursework",
      description: "Comprehensive coursework examining enterprise cybersecurity architecture, cyber threat landscapes, defensive controls, and incident handling best practices.",
      verificationAvailable: false
    }
  ] as Certification[],

  education: [
    {
      id: "mca",
      degree: "Master of Computer Applications (MCA)",
      institution: "Adi Shankara Institute of Engineering and Technology",
      dates: "In Progress",
      status: "In Progress",
      notes: "Advanced study in computer applications and software architecture (admissions/completion dates not yet finalized)."
    },
    {
      id: "bca",
      degree: "Bachelor of Computer Applications (BCA) in Cyber Forensics",
      institution: "Yenepoya University",
      dates: "2021 – 2024",
      status: "Completed",
      notes: "Rigorous coursework in digital forensics, incident investigation fundamentals, network security protocols, and computer systems."
    }
  ] as Education[],

  experience: [
    {
      id: "redteam-internship",
      role: "Cybersecurity Intern",
      organization: "RedTeam Hacker Academy",
      period: "August 2024 – March 2025",
      location: "Kerala, India",
      type: "Internship",
      summary: "Participated in foundational Security Operations Center (SOC) activities including real-time event monitoring, log analysis, vulnerability assessments, and security reporting.",
      bulletPoints: [
        "Assisted with real-time threat monitoring and Tier 1 incident response procedures within simulated and training SOC environments.",
        "Analyzed authentication logs, network event streams, and endpoint activity to assist in identifying anomalies and triage security events.",
        "Conducted vulnerability assessments using industry scanners and drafted structured security assessment reports.",
        "Gained hands-on operational exposure to SIEM platforms (Splunk, IBM QRadar, Microsoft Sentinel) and standard SOC workflows."
      ],
      toolsUsed: [
        "Splunk",
        "IBM QRadar",
        "Microsoft Sentinel",
        "Wireshark",
        "Nessus",
        "Kali Linux",
        "Maltego",
        "SpiderFoot"
      ]
    }
  ] as ExperienceItem[],

  featuredProject: {
    id: "secureloop-ai",
    slug: "secureloop-ai",
    title: "SecureLoop AI | Web Security Assessment Prototype",
    subtitle: "Automated vulnerability scanning, normalized JSONL finding extraction, and AI-assisted security analysis prototype",
    role: "Sole Developer & Security Researcher (Academic/Prototype Project)",
    status: "Active Prototype",
    shortDescription: "Developed SecureLoop AI prototypes for web vulnerability assessment and AI-assisted security analysis. The public implementation combines Python/FastAPI, Nuclei, a React results interface, and Docker lab management. A separate prototype explores CWE-based attack-chain mapping and Groq-generated explanations and remediation suggestions with PostgreSQL storage.",
    repoUrl: "https://github.com/navinjith5-oss/secureloop-ai1",
    technologies: [
      "Python",
      "FastAPI",
      "Nuclei",
      "React",
      "JavaScript",
      "Vite",
      "Docker",
      "HTTPX",
      "JSON / JSONL",
      "pytest"
    ],
    resumeBullets: [
      "Built a Python/FastAPI prototype integrating Nuclei scanning, JSONL finding normalization, and a React results interface.",
      "Implemented scan authorization confirmation, background execution, status tracking, severity filtering, and Docker lab management.",
      "Prototyped rule-based CWE attack-chain mapping and Groq-generated explanations and remediation suggestions in a separate workflow with PostgreSQL storage."
    ],
    objective: "To bring vulnerability scan initiation, structured findings, request/response evidence, and analyst-readable explanations into a coherent assessment workflow, streamlining initial assessment for security teams.",
    publicScanner: {
      summary: "The publicly released scanner codebase is an operational FastAPI-driven assessment tool that executes Nuclei scans asynchronously, normalizes JSONL findings, manages target lab containers, and renders findings in a responsive React interface.",
      features: [
        "Explicit scan authorization confirmation required prior to dispatching scans (user confirmation assertion, not target ownership proof).",
        "Asynchronous scan dispatching with unique scan IDs, status polling, and finding retrieval endpoints.",
        "Nuclei scanner integration configured with vulnerability templates and stream JSONL output parsing.",
        "Finding normalization capturing template ID, name, severity, matched endpoint, description, references, tags, and request/response evidence.",
        "Interactive React results interface with full-text search, severity filtering (Critical, High, Medium, Low, Info), and detailed modal/drawer views.",
        "Docker target-lab container management (start, stop, status) with HTTP reachability checks."
      ],
      architecture: [
        {
          step: 1,
          component: "React Frontend (Vite)",
          role: "Captures user target URL, enforces explicit authorization confirmation checkbox, polls scan status, and renders normalized findings with severity filters."
        },
        {
          step: 2,
          component: "FastAPI Backend",
          role: "Validates authorization header/payload, assigns in-memory scan ID, launches background Nuclei scan process, and manages Docker target lab container state."
        },
        {
          step: 3,
          component: "Nuclei Engine & Docker Lab",
          role: "Executes vulnerability detection templates against the specified target (lab or approved URL) and streams raw findings in JSONL format."
        },
        {
          step: 4,
          component: "JSONL Finding Normalizer",
          role: "Parses Nuclei stream output into structured Pydantic models containing template IDs, severity, endpoints, and request/response evidence."
        }
      ],
      technologies: ["Python 3", "FastAPI", "Pydantic", "Nuclei", "React", "Vite", "Docker", "HTTPX", "pytest"],
      boundaries: [
        "When Nuclei CLI is not installed or available in the host environment, the service generates mock findings for UI development. These are explicitly labeled simulated.",
        "The reviewed scanner implementation tracks scans in memory and writes JSONL output; it does not use PostgreSQL for scan state.",
        "Docker container management manages local target lab environments; it accepts target URLs and is not an isolation sandbox for all network activity.",
        "Unit tests exist for health, scanner behavior, and authorization rejection, but do not imply formal production stress validation."
      ],
      codeSnippets: [
        {
          title: "Scan Authorization & Background Task Initiation",
          filePath: "backend/app/api/scan.py",
          language: "python",
          githubUrl: "https://github.com/navinjith5-oss/secureloop-ai1/blob/main/backend/app/api/scan.py",
          explanation: "Enforces explicit user authorization confirmation before initiating any background scan task, generating an isolated scan UUID for tracking.",
          code: `@router.post("/start", response_model=ScanStartResponse)
async def start_scan(request: ScanRequest, background_tasks: BackgroundTasks):
    # Explicit authorization check required by policy
    if not request.authorized:
        raise HTTPException(
            status_code=400,
            detail="Explicit scan authorization must be confirmed before proceeding."
        )
    
    scan_id = str(uuid.uuid4())
    scan_store[scan_id] = {
        "status": "queued",
        "target": str(request.target_url),
        "created_at": datetime.utcnow().isoformat(),
        "findings": []
    }
    
    background_tasks.add_task(run_nuclei_scan_task, scan_id, str(request.target_url))
    return ScanStartResponse(scan_id=scan_id, status="queued")`
        },
        {
          title: "Nuclei Execution & JSONL Normalization Pipeline",
          filePath: "backend/app/services/nuclei_service.py",
          language: "python",
          githubUrl: "https://github.com/navinjith5-oss/secureloop-ai1/blob/main/backend/app/services/nuclei_service.py",
          explanation: "Spawns Nuclei subprocess with JSONL output flags or falls back to clearly marked simulated development records when the binary is absent.",
          code: `async def run_nuclei_scan(target_url: str, output_path: str) -> List[Dict[str, Any]]:
    if not is_nuclei_available():
        logger.warning("Nuclei binary not detected. Returning simulated development findings.")
        return get_simulated_development_findings(target_url)
        
    cmd = [
        "nuclei",
        "-u", target_url,
        "-jsonl",
        "-o", output_path,
        "-silent"
    ]
    process = await asyncio.create_subprocess_exec(
        *cmd,
        stdout=asyncio.subprocess.PIPE,
        stderr=asyncio.subprocess.PIPE
    )
    await process.wait()
    return parse_nuclei_jsonl(output_path)`
        },
        {
          title: "Docker Lab Container Lifecycle Management",
          filePath: "backend/app/services/sandbox_service.py",
          language: "python",
          githubUrl: "https://github.com/navinjith5-oss/secureloop-ai1/blob/main/backend/app/services/sandbox_service.py",
          explanation: "Manages containerized test targets using the Docker API and verifies HTTP reachability before initiating assessment scans.",
          code: `def check_lab_status(container_name: str = "secureloop-dvwa-lab") -> Dict[str, Any]:
    try:
        client = docker.from_env()
        container = client.containers.get(container_name)
        return {
            "name": container_name,
            "status": container.status,
            "reachable": ping_container_endpoint(container)
        }
    except docker.errors.NotFound:
        return {"name": container_name, "status": "not_found", "reachable": False}`
        }
      ]
    },
    aiPrototype: {
      summary: "In a separate research iteration (private codebase), an experimental pipeline evaluates whether rule-based CWE matching combined with Groq LLM inference can help analysts correlate multi-step vulnerability patterns and draft human-reviewed remediation guidance.",
      features: [
        "Python orchestration synthesizing HTTP header/cookie checks and Nuclei findings.",
        "Rule-based CWE grouping identifying potential multi-vulnerability exposure combinations (e.g., Missing Anti-CSRF + Sensitive State Change).",
        "Groq LLM API integration prompting language models for technical vulnerability narratives and context.",
        "Remediation guidance synthesis requesting OWASP-aligned code/configuration fixes for analyst review.",
        "PostgreSQL / SQLAlchemy storage schema persisting normalized findings, attack chains, narratives, and remediation suggestions.",
        "Narrow automated security-header verification experiment targeting local mock environments."
      ],
      technologies: ["Python", "Groq API (LLM)", "PostgreSQL", "SQLAlchemy", "CWE Taxonomy", "OWASP Framework"],
      architecture: [
        {
          step: 1,
          component: "Finding Aggregator & CWE Mapper",
          role: "Groups findings by CWE identifier and evaluates deterministic rules to surface potential vulnerability combinations."
        },
        {
          step: 2,
          component: "Groq LLM Analysis Client",
          role: "Sends structured finding contexts to Groq LLM API to generate preliminary technical explanations and OWASP remediation references."
        },
        {
          step: 3,
          component: "PostgreSQL State Store",
          role: "Stores raw findings, mapped chains, LLM-generated narrative drafts, and proposed code diffs with strict schema validation."
        },
        {
          step: 4,
          component: "Security Analyst Review Gate",
          role: "Human analyst inspects and validates generated explanations; no automated exploitation or autonomous patching is performed."
        }
      ],
      boundaries: [
        "AI-assisted prototype is for analyst triage assistance only; matching a CWE rule does not prove exploitability or autonomous SOC operations.",
        "LLM-generated remediation suggestions require manual security engineer validation; requesting an OWASP reference does not guarantee correctness.",
        "The separate AI prototype is in a private research repository and is distinct from the public scanner implementation.",
        "No custom foundation model training, autonomous exploitation, universal self-healing, or measured benchmark accuracy is claimed."
      ]
    },
    limitations: [
      "Simulated Mock Findings: When Nuclei is not installed locally, the public scanner generates labeled mock findings for UI testing.",
      "Target Authorization: Scan authorization is a user assertion in the API request, not cryptographically verified target domain ownership.",
      "Separate Prototypes: The public scanner (FastAPI/React/JSONL) and the AI prototype (Groq/PostgreSQL) are distinct iterations and not a single monolithic cloud product.",
      "Unbenchmarked Performance: No detection accuracy rates, false-positive metrics, or commercial customer deployments have been claimed or measured."
    ],
    futureWork: [
      "Cryptographic Domain Ownership Verification: Implementing DNS TXT or HTTP well-known token verification prior to scanning external hosts.",
      "Unified Workflow Architecture: Consolidating the public scanner service with the PostgreSQL-backed AI analysis pipeline under a single Docker Compose stack.",
      "Automated Baseline Reporting: Generating standardized PDF/HTML executive and technical audit reports compliant with ISO 27001 / SOC 2 reporting guidelines.",
      "CI/CD Pipeline Integration: Creating GitHub Actions / GitLab CI plugins to trigger authorized scans as part of pull request security gates."
    ]
  },

  skills: [
    {
      title: "Security Operations & Monitoring",
      description: "Foundational capabilities in real-time threat observation, alert triage, and defense workflows.",
      skills: [
        { name: "SOC Monitoring (Tier 1)", context: "Internship & CSA coursework" },
        { name: "Threat Detection & Alert Triage", context: "Internship practice" },
        { name: "SIEM Log Analysis", context: "Splunk, QRadar, Sentinel" },
        { name: "Network Security Monitoring", context: "Wireshark packet capture" },
        { name: "Incident Response Support", context: "Standard triage workflows" },
        { name: "Threat Intelligence Gathering", context: "OSINT with Maltego & SpiderFoot" },
        { name: "Vulnerability Assessment", context: "Nessus & Nuclei scanner usage" },
        { name: "Security Assessment Reporting", context: "Structured audit reporting" }
      ]
    },
    {
      title: "Security Tools & Platforms",
      description: "Hands-on tools used in internship, academic labs, and personal cybersecurity research.",
      skills: [
        { name: "Splunk", proficiencyNote: "Hands-on exposure", context: "Log ingestion & query basics" },
        { name: "IBM QRadar", proficiencyNote: "Hands-on exposure", context: "Offense tracking & rules" },
        { name: "Microsoft Sentinel", proficiencyNote: "Hands-on exposure", context: "KQL queries & alerts" },
        { name: "Wireshark", proficiencyNote: "Hands-on exposure", context: "Packet analysis & protocol inspection" },
        { name: "Nessus", proficiencyNote: "Hands-on exposure", context: "Vulnerability scanning" },
        { name: "Kali Linux", proficiencyNote: "Hands-on exposure", context: "Security toolkit environment" },
        { name: "Maltego & SpiderFoot", proficiencyNote: "Familiarity", context: "Open source intelligence (OSINT)" },
        { name: "Burp Suite", proficiencyNote: "Basic knowledge", context: "Web traffic interception" },
        { name: "Nuclei", proficiencyNote: "Hands-on", context: "Template-based scanner integration" }
      ]
    },
    {
      title: "Frameworks & Security Foundations",
      description: "Core conceptual models and operational standards applied across defensive security.",
      skills: [
        { name: "MITRE ATT&CK", proficiencyNote: "Familiarity", context: "Tactics & techniques mapping" },
        { name: "Malware Analysis", proficiencyNote: "Fundamentals", context: "Static analysis concepts" },
        { name: "Firewall & IDS/IPS Management", proficiencyNote: "Fundamentals", context: "Rule configuration concepts" },
        { name: "Risk Assessment & Mitigation", proficiencyNote: "Fundamentals", context: "Vulnerability prioritization" },
        { name: "Disaster Recovery Planning", proficiencyNote: "Fundamentals", context: "Business continuity principles" },
        { name: "Cyber Forensics Investigation", proficiencyNote: "Degree focus", context: "Chain of custody & evidence fundamentals" }
      ]
    },
    {
      title: "Development & Systems",
      description: "Programming languages and container tools used to build security prototypes and automation.",
      skills: [
        { name: "Python", proficiencyNote: "FastAPI / HTTPX / Scripting", context: "SecureLoop AI backend" },
        { name: "JavaScript / React", proficiencyNote: "Frontend UI", context: "SecureLoop AI dashboard" },
        { name: "Docker", proficiencyNote: "Lab container management", context: "Target lab orchestration" },
        { name: "Linux / Bash", proficiencyNote: "System administration basics", context: "Kali / Ubuntu CLI" },
        { name: "JSON / JSONL & Pydantic", proficiencyNote: "Data normalization", context: "Finding parsers" },
        { name: "SQL & PostgreSQL", proficiencyNote: "Relational storage basics", context: "AI prototype persistence" }
      ]
    }
  ] as SkillCategory[],

  languages: [
    { language: "English", notes: "Professional working proficiency" },
    { language: "Malayalam", notes: "Native language" },
    { language: "Hindi", notes: "Conversational proficiency" }
  ]
};
