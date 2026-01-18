import React, { useState, useRef, useEffect } from 'react';

// Resume Data - David A. Farquharson
const resumeData = {
  name: "David A. Farquharson",
  initials: "DF",
  title: "Senior Defense & Technology Leader",
  tagline: "Pentagon strategist. White House technologist. Engineering mind with relentless curiosity.",
  location: "Arlington, VA",
  clearance: "DOD Secret Clearance",
  email: "david.a.farquharson@gmail.com",
  phone: "+1 202-256-4073",
  
  summary: `A rare blend of strategic defense leadership and hands-on technical mastery. From architecting the White House website to managing multi-million dollar Army programs at the Pentagon, I bring an engineer's precision to complex government challenges. My career spans HQDA G-3/5/7, USAREUR-AF, and the Executive Office of the President—always diving deep into the unfamiliar, mastering it, and delivering results that matter.`,
  
  keyTraits: [
    { trait: "Tenacious Learner", desc: "I don't just learn—I master. From blockchain to budget analysis, I dive deep until I own it.", color: "#0891b2" },
    { trait: "Engineering Mind", desc: "Whether it's code architecture or program strategy, I build systems that scale.", color: "#7c3aed" },
    { trait: "Strategic Clarity", desc: "I translate Pentagon complexity into actionable plans and measurable outcomes.", color: "#059669" },
    { trait: "Cross-Functional Leader", desc: "Led teams across DoD, Army, EUCOM, and civilian contractors to unified success.", color: "#dc2626" }
  ],
  
  experience: [
    {
      title: "Resources Branch Chief, GS-14",
      org: "HQDA, G-3/5/7 (DAMO-SSR), Army International Affairs Division",
      location: "Pentagon",
      period: "Jun 2024 – Present",
      highlights: [
        "Lead resource analysis for Army and four Combatant Commands' international activities",
        "Manage six Army Management Decision Packages (MDEPs) worth millions in funding",
        "Analyze legislation, OMB directives, and DoD guidelines to advise Army senior leaders",
        "Drive Planning, Programming, Budgeting and Execution (PPBE) across worldwide operations"
      ]
    },
    {
      title: "Budget Analyst, NH-03",
      org: "Deputy Assistant Secretary of the Army for Defense Exports and Cooperation",
      location: "Crystal City, VA",
      period: "Apr 2023 – Jun 2024",
      highlights: [
        "Managed FMS/FMF programs involving millions in Foreign Military Financing",
        "Served as primary budget analyst for OMA, RDT&E and FMS Administrative funds",
        "Coordinated Army-wide POM submissions with DSCA and Army Budget Office",
        "Built obligation plans and monthly financial reports for DASA DE&C leadership"
      ]
    },
    {
      title: "Program Analyst, GS-13",
      org: "US Army Europe and Africa (USAREUR-AF)",
      location: "Wiesbaden, Germany",
      period: "Mar 2022 – Apr 2023",
      award: "Civilian Service Achievement Medal",
      highlights: [
        "Led USAREUR-AF Integrated Priority List (IPL) process for EUCOM",
        "Analyzed operational capability gaps across theater for senior decision-makers",
        "Represented command at DA, DoD, OMB conferences on assigned programs",
        "Coordinated with ROK MND on Wartime Host Nation Support programs"
      ]
    },
    {
      title: "Management and Program Analyst, GS-12",
      org: "7th Army Training Command, JMRC",
      location: "Hohenfels, Germany",
      period: "Jan 2020 – Mar 2022",
      highlights: [
        "Contracting Officer Representative for Rotational Mission Support contract",
        "Developed Performance Work Statements, IGCEs, and requirement documentation",
        "Coordinated Army-wide POM submissions and budget analysis"
      ]
    },
    {
      title: "Program Analyst / COR, GS-13",
      org: "U.S. Army Program Analysis and Evaluation (PA&E)",
      location: "Pentagon",
      period: "May 2016 – Jan 2019",
      highlights: [
        "RAND Arroyo Center COR managing Staff Years of Technical Effort execution",
        "Coordinated with Army Budget Office and OSD on contract performance",
        "Automated OSD CAPE's Select & Native Programming exhibits",
        "Managed Advisory and Assistance Services lifecycle reporting"
      ]
    },
    {
      title: "Web Designer",
      org: "The White House (Executive Office of the President)",
      location: "Washington, DC",
      period: "Oct 2007 – Mar 2009",
      highlights: [
        "Architected and maintained whitehouse.gov for 43rd & 44th Administrations",
        "Launched President's Weekly Radio Address on iTunes",
        "Managed live video streams of White House events",
        "Led web efforts during 43rd to 44th Presidential Transition",
        "Designed OMB website for Obama Administration"
      ]
    },
    {
      title: "Application Developer",
      org: "Science Applications International Corporation (SAIC)",
      location: "McLean, VA",
      period: "Mar 2005 – Sep 2007",
      highlights: [
        "Developed GSA's Blue Pages Electronic Production System",
        "Macintosh System Administrator and desktop publishing trainer",
        "Telecommunications Market Analyst creating SOWs and cost estimates"
      ]
    }
  ],
  
  skills: {
    "AI & Automation": { color: "#7c3aed", items: ["Claude API", "OpenAI API", "n8n Workflows", "MCP (Model Context Protocol)", "LangChain", "Prompt Engineering", "RAG Systems", "AI Agents"] },
    "Infrastructure & DevOps": { color: "#059669", items: ["Proxmox VE", "Linux VMs", "Contabo VPS", "Tailscale VPN", "Docker", "Self-Hosted Services", "Nginx", "SSH/Security"] },
    "Web3 & Tokenization": { color: "#0891b2", items: ["Real World Asset (RWA) Tokenization", "Digital Asset Management", "Ethereum/EVM", "Smart Contracts", "Solidity", "IPFS", "DeFi Protocols"] },
    "Development": { color: "#2563eb", items: ["Node.js", "React", "React Native", "TypeScript", "Python", "REST APIs", "Git/GitHub", "VS Code"] },
    "Data & Backend": { color: "#dc2626", items: ["PostgreSQL", "MongoDB", "Redis", "SQL Server", "API Integration", "JSON/XML", "Data Pipelines"] },
    "Creative & Design": { color: "#d946ef", items: ["AI Image Generation", "CAD/3D Printing", "Unity3D", "Game Design", "Figma", "Video Production"] }
  },
  
  education: {
    degree: "Bachelor of Arts: Political Science and International Relations",
    school: "Stony Brook University",
    location: "Stony Brook, NY",
    courses: "Calculus, Probability & Statistics, Computer Science, Statistical Analysis/Research"
  },
  
  fullContext: `David A. Farquharson is a senior defense leader and technologist currently serving as Resources Branch Chief (GS-14) at HQDA G-3/5/7 in the Pentagon. He holds a DOD Secret Clearance.

STRATEGIC & DEFENSE EXPERTISE:
David brings deep expertise in defense planning, resourcing, and international security cooperation:

Planning & Resourcing:
- Expert in PPBE (Planning, Programming, Budgeting, and Execution) process
- POM development and budget formulation across multiple MDEPs
- Congressional justification and OMB coordination experience
- Manages six Army Management Decision Packages worth millions

Security Cooperation & International Affairs:
- Foreign Military Sales (FMS) and Foreign Military Financing (FMF) expertise
- DSCA coordination and security assistance programs
- International agreements and partner nation engagement
- NATO interoperability and coalition operations experience
- Worked with ROK Ministry of National Defense on WHNS programs

Acquisition & Contracts:
- Certified Contracting Officer Representative (COR)
- RAND Arroyo Center COR managing millions in research contracts
- Performance Work Statements, IGCEs, and A&AS management
- FAR/DFAR compliance experience

Strategic Engagement & Networks:
- Briefs senior Pentagon leadership regularly (General/Flag Officer level)
- Strong Capitol Hill connections and congressional liaison experience
- Extensive Washington DC diplomatic and think tank network
- Interagency coordination across DoD, State, and other agencies
- COCOM support across four Combatant Commands

Key Strengths:
- TENACIOUS LEARNER: David consistently dives into unfamiliar domains and masters them. He taught himself blockchain, AI automation workflows, infrastructure management, and complex DoD budget systems.
- ENGINEERING MINDSET: Approaches problems systematically, building scalable solutions whether in code or organizational processes. Self-hosts his own VPS infrastructure via Contabo, managed with Proxmox VE.
- STRATEGIC LEADERSHIP: Translates complex Pentagon requirements into actionable plans across Army and Combatant Commands.
- CROSS-FUNCTIONAL EXPERTISE: Bridges technical and policy worlds, having worked at White House, Pentagon, USAREUR-AF, and defense contractors.

Current Technical Focus (2024+):
- AI & Automation: Claude API, OpenAI API, n8n workflows, MCP (Model Context Protocol), prompt engineering, RAG systems, AI agents
- Infrastructure: Self-hosted VPS on Contabo, Proxmox VE virtualization, Linux VMs, Tailscale VPN, Docker containers
- Web3/Tokenization: Pivoting to Real World Asset (RWA) tokenization, digital asset management, Ethereum/EVM, smart contracts
- Development: Node.js, React, React Native, TypeScript, Python - embracing AI-augmented coding
- Creative: AI image generation, CAD/3D printing (owns 3D printer), Unity3D game development

Career Highlights:
- Currently manages six Army MDEPs and advises senior leaders on international programs
- Received Civilian Service Achievement Medal at USAREUR-AF
- Designed and maintained whitehouse.gov for two presidential administrations
- RAND Arroyo Center COR managing millions in research contracts
- Led USAREUR-AF Integrated Priority List (IPL) process for EUCOM

David's unique value is his rare combination of high-level Pentagon strategic work with cutting-edge technical skills. He bridges the gap between defense policy and technology implementation. His extensive DC network—spanning Capitol Hill, diplomatic circles, and think tanks—combined with his hands-on technical abilities makes him uniquely positioned for senior roles in defense, international affairs, and technology leadership.`
};

const suggestedQuestions = [
  "Would David be good for a role requiring both technical skills and strategic thinking?",
  "How does his White House experience translate to other leadership roles?",
  "Tell me about his biggest achievement.",
  "What makes David different from other candidates?",
  "How does he handle learning new technologies or domains?"
];

const fitCheckExamples = {
  strong: {
    title: "Senior Program Analyst – Defense Technology",
    description: "We need someone with deep DoD budget experience, technical background, and ability to lead cross-functional initiatives. You'll manage multi-million dollar programs and coordinate with senior leadership.",
  },
  weak: {
    title: "Junior Frontend Developer – Consumer Startup",
    description: "We need a junior developer focused exclusively on React Native mobile apps for consumer social media. Must have 5+ years of mobile-only development experience."
  }
};

export default function App() {
  const [activeTab, setActiveTab] = useState('experience');
  const [showAIChat, setShowAIChat] = useState(false);
  const [chatMessages, setChatMessages] = useState([]);
  const [chatInput, setChatInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [fitCheckMode, setFitCheckMode] = useState('strong');
  const [jobDescription, setJobDescription] = useState('');
  const [fitAnalysis, setFitAnalysis] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatMessages]);

  const handleChatSubmit = async (question) => {
    const userQuestion = question || chatInput;
    if (!userQuestion.trim()) return;
    
    setChatMessages(prev => [...prev, { role: 'user', content: userQuestion }]);
    setChatInput('');
    setIsTyping(true);

    try {
      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          system: `You are an AI assistant embedded in David Farquharson's resume website. Answer questions about David based on this context:

${resumeData.fullContext}

Key traits to emphasize:
- Tenacious learner who dives deep into unfamiliar domains
- Engineering mindset that builds scalable solutions
- Strategic clarity in complex government environments
- Cross-functional leadership across technical and policy domains

Respond conversationally but professionally. Be specific with examples from his experience. Keep responses concise (2-4 paragraphs max). Always be honest—if something isn't a strength, acknowledge it while highlighting what does transfer.`,
          messages: [{ role: "user", content: userQuestion }]
        })
      });

      const data = await response.json();
      const aiResponse = data.content?.map(item => item.text || "").join("") || "I apologize, I couldn't process that question. Please try again.";
      
      setChatMessages(prev => [...prev, { role: 'assistant', content: aiResponse }]);
    } catch (error) {
      setChatMessages(prev => [...prev, { 
        role: 'assistant', 
        content: "I'm having trouble connecting right now. Please try again in a moment." 
      }]);
    }
    
    setIsTyping(false);
  };

  const handleFitCheck = async () => {
    if (!jobDescription.trim()) return;
    
    setIsAnalyzing(true);
    setFitAnalysis(null);

    try {
      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1500,
          system: `You are an AI that analyzes job fit for David Farquharson. Be brutally honest.

David's background:
${resumeData.fullContext}

Analyze the job description and return a JSON object with this exact structure:
{
  "fitLevel": "strong" | "moderate" | "weak",
  "headline": "One line assessment (e.g., 'Strong Fit — Let's Talk' or 'Honest Assessment — Probably Not Your Person')",
  "matches": [
    {"title": "Skill/experience that matches", "evidence": "Specific example from David's background"}
  ],
  "gaps": [
    {"title": "Gap or missing requirement", "explanation": "Honest assessment of the gap"}
  ],
  "transfers": "What skills/experience transfer even if not a direct match",
  "recommendation": "2-3 sentence honest recommendation - would you hire David for this role?"
}

Be specific and reference actual experience. If it's not a good fit, say so clearly.`,
          messages: [{ role: "user", content: `Analyze this job description:\n\n${jobDescription}` }]
        })
      });

      const data = await response.json();
      const text = data.content?.map(item => item.text || "").join("") || "";
      const cleanJson = text.replace(/```json|```/g, "").trim();
      const analysis = JSON.parse(cleanJson);
      setFitAnalysis(analysis);
    } catch (error) {
      setFitAnalysis({
        fitLevel: "error",
        headline: "Analysis Error",
        matches: [],
        gaps: [],
        transfers: "",
        recommendation: "There was an error analyzing the job description. Please try again."
      });
    }
    
    setIsAnalyzing(false);
  };

  const loadExample = (type) => {
    setFitCheckMode(type);
    const example = fitCheckExamples[type];
    setJobDescription(`${example.title}\n\n${example.description}`);
    setFitAnalysis(null);
  };

  return (
    <div className="app">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Source+Serif+4:wght@400;500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');
        
        * { margin: 0; padding: 0; box-sizing: border-box; }
        
        :root {
          --bg-primary: #f4f6f8;
          --bg-secondary: #ffffff;
          --bg-card: #ffffff;
          --bg-elevated: #eef1f5;
          --accent: #1e3a5f;
          --accent-light: #2d5a8a;
          --accent-lighter: #e3edf7;
          --text-primary: #1a202c;
          --text-secondary: #475569;
          --text-muted: #64748b;
          --border: #e2e8f0;
          --border-dark: #cbd5e0;
          --success: #059669;
          --success-bg: #ecfdf5;
          --warning: #d97706;
          --warning-bg: #fffbeb;
          --error: #dc2626;
          --error-bg: #fef2f2;
        }
        
        body {
          font-family: 'Inter', -apple-system, sans-serif;
          background: var(--bg-primary);
          color: var(--text-primary);
          line-height: 1.6;
        }
        
        .app {
          min-height: 100vh;
          background: var(--bg-primary);
        }
        
        /* Navigation */
        .nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          padding: 0.875rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: rgba(255, 255, 255, 0.97);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--border);
        }
        
        .nav-logo {
          font-family: 'Source Serif 4', serif;
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--accent);
          letter-spacing: -0.02em;
        }
        
        .nav-links {
          display: flex;
          gap: 0.25rem;
          align-items: center;
        }
        
        .nav-link {
          padding: 0.5rem 1rem;
          border: none;
          background: transparent;
          color: var(--text-secondary);
          font-family: 'Inter', sans-serif;
          font-size: 0.9rem;
          font-weight: 500;
          cursor: pointer;
          border-radius: 6px;
          transition: all 0.2s ease;
        }
        
        .nav-link:hover {
          color: var(--text-primary);
          background: var(--bg-elevated);
        }
        
        .nav-link.active {
          color: var(--accent);
          background: var(--accent-lighter);
        }
        
        .nav-cta {
          padding: 0.5rem 1.25rem;
          border: none;
          background: var(--accent);
          color: white;
          font-family: 'Inter', sans-serif;
          font-size: 0.9rem;
          font-weight: 500;
          cursor: pointer;
          border-radius: 6px;
          transition: all 0.2s ease;
          margin-left: 0.5rem;
        }
        
        .nav-cta:hover {
          background: var(--accent-light);
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(30, 58, 95, 0.25);
        }
        
        /* Hero Section */
        .hero {
          padding: 8rem 2rem 4rem;
          max-width: 1100px;
          margin: 0 auto;
        }
        
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.45rem 1rem;
          background: var(--accent-lighter);
          border: 1px solid rgba(30, 58, 95, 0.15);
          border-radius: 100px;
          font-size: 0.8rem;
          color: var(--accent);
          margin-bottom: 1.5rem;
          font-weight: 600;
        }
        
        .hero-badge-icon {
          width: 8px;
          height: 8px;
          background: var(--accent);
          border-radius: 50%;
        }
        
        .hero-name {
          font-family: 'Source Serif 4', serif;
          font-size: clamp(2.75rem, 7vw, 4rem);
          font-weight: 700;
          letter-spacing: -0.03em;
          line-height: 1.1;
          margin-bottom: 0.75rem;
          color: var(--text-primary);
        }
        
        .hero-title {
          font-size: 1.1rem;
          color: var(--accent);
          margin-bottom: 1rem;
          font-weight: 600;
        }
        
        .hero-tagline {
          font-size: 1.15rem;
          color: var(--text-secondary);
          max-width: 580px;
          margin-bottom: 2rem;
          line-height: 1.7;
        }
        
        .hero-cta {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.875rem 1.75rem;
          background: var(--accent);
          color: white;
          font-weight: 600;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          font-size: 0.95rem;
          transition: all 0.2s ease;
        }
        
        .hero-cta:hover {
          background: var(--accent-light);
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(30, 58, 95, 0.3);
        }
        
        /* Traits Grid */
        .traits {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 1rem;
          margin-top: 3rem;
        }
        
        .trait-card {
          padding: 1.5rem;
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 12px;
          transition: all 0.2s ease;
          position: relative;
          overflow: hidden;
        }
        
        .trait-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
        }
        
        .trait-card:hover {
          border-color: var(--border-dark);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
          transform: translateY(-3px);
        }
        
        .trait-title {
          font-size: 0.85rem;
          margin-bottom: 0.5rem;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          font-weight: 700;
        }
        
        .trait-desc {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }
        
        /* Main Content */
        .main-content {
          max-width: 1100px;
          margin: 0 auto;
          padding: 2rem;
        }
        
        /* Section Title */
        .section-title {
          font-family: 'Source Serif 4', serif;
          font-size: 1.75rem;
          margin-bottom: 2rem;
          font-weight: 600;
          color: var(--text-primary);
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        
        .section-title::after {
          content: '';
          flex: 1;
          height: 1px;
          background: var(--border);
        }
        
        /* Experience Section */
        .experience-section {
          margin-bottom: 4rem;
        }
        
        .timeline {
          position: relative;
          padding-left: 1.5rem;
        }
        
        .timeline::before {
          content: '';
          position: absolute;
          left: 0;
          top: 6px;
          bottom: 20px;
          width: 2px;
          background: linear-gradient(to bottom, var(--accent), var(--border));
          border-radius: 2px;
        }
        
        .timeline-item {
          position: relative;
          padding-bottom: 2.5rem;
          padding-left: 1.5rem;
        }
        
        .timeline-item::before {
          content: '';
          position: absolute;
          left: -1.5rem;
          top: 6px;
          width: 10px;
          height: 10px;
          background: var(--bg-primary);
          border: 2px solid var(--accent);
          border-radius: 50%;
          transform: translateX(-4px);
        }
        
        .timeline-title {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.25rem;
        }
        
        .timeline-org {
          font-size: 1rem;
          color: var(--accent);
          font-weight: 500;
        }
        
        .timeline-meta {
          display: flex;
          gap: 1.5rem;
          font-size: 0.85rem;
          color: var(--text-muted);
          margin-top: 0.35rem;
        }
        
        .timeline-award {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          padding: 0.3rem 0.75rem;
          background: linear-gradient(135deg, #fef3c7, #fde68a);
          color: #92400e;
          border-radius: 100px;
          font-size: 0.8rem;
          margin-top: 0.5rem;
          font-weight: 600;
        }
        
        .timeline-highlights {
          margin-top: 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }
        
        .highlight-item {
          display: flex;
          gap: 0.75rem;
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }
        
        .highlight-item::before {
          content: '→';
          color: var(--accent-light);
          flex-shrink: 0;
          font-weight: 500;
        }
        
        /* Skills Section */
        .skills-section {
          margin-bottom: 4rem;
        }
        
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.25rem;
        }
        
        .skill-category {
          padding: 1.5rem;
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 12px;
          transition: all 0.2s ease;
        }
        
        .skill-category:hover {
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
        }
        
        .skill-category-title {
          font-size: 0.75rem;
          margin-bottom: 1rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-weight: 700;
        }
        
        .skill-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        
        .skill-tag {
          padding: 0.4rem 0.75rem;
          background: var(--bg-elevated);
          border-radius: 6px;
          font-size: 0.85rem;
          color: var(--text-secondary);
          transition: all 0.15s ease;
          border: 1px solid transparent;
        }
        
        .skill-tag:hover {
          transform: translateY(-1px);
        }
        
        /* Education Card */
        .education-card {
          padding: 2rem;
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 12px;
        }
        
        .education-degree {
          font-family: 'Source Serif 4', serif;
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 0.35rem;
        }
        
        .education-school {
          color: var(--accent);
          font-size: 1.05rem;
          font-weight: 500;
        }
        
        .education-location {
          color: var(--text-muted);
          font-size: 0.9rem;
          margin-bottom: 1rem;
        }
        
        .education-courses {
          font-size: 0.95rem;
          color: var(--text-secondary);
        }
        
        /* Fit Check Section */
        .fit-check-section {
          margin-bottom: 4rem;
        }
        
        .fit-check-tabs {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }
        
        .fit-tab {
          padding: 0.6rem 1.25rem;
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 8px;
          color: var(--text-secondary);
          cursor: pointer;
          font-size: 0.9rem;
          font-weight: 500;
          transition: all 0.15s ease;
        }
        
        .fit-tab:hover {
          border-color: var(--border-dark);
        }
        
        .fit-tab.active {
          background: var(--accent);
          border-color: var(--accent);
          color: white;
        }
        
        .fit-check-card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 2rem;
        }
        
        .fit-label {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.9rem;
          color: var(--text-secondary);
          margin-bottom: 0.75rem;
          font-weight: 500;
        }
        
        .fit-textarea {
          width: 100%;
          min-height: 140px;
          padding: 1rem;
          background: var(--bg-elevated);
          border: 1px solid var(--border);
          border-radius: 10px;
          color: var(--text-primary);
          font-family: 'Inter', sans-serif;
          font-size: 0.95rem;
          resize: vertical;
          transition: all 0.15s ease;
          margin-bottom: 1.25rem;
        }
        
        .fit-textarea:focus {
          outline: none;
          border-color: var(--accent);
          background: var(--bg-card);
        }
        
        .fit-textarea::placeholder {
          color: var(--text-muted);
        }
        
        .fit-submit {
          padding: 0.875rem 1.75rem;
          background: var(--accent);
          border: none;
          border-radius: 8px;
          color: white;
          font-weight: 600;
          font-size: 0.95rem;
          cursor: pointer;
          transition: all 0.2s ease;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
        }
        
        .fit-submit:hover:not(:disabled) {
          background: var(--accent-light);
          transform: translateY(-1px);
          box-shadow: 0 4px 15px rgba(30, 58, 95, 0.25);
        }
        
        .fit-submit:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
        
        /* Fit Results */
        .fit-results {
          margin-top: 2rem;
          animation: fadeIn 0.3s ease;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .fit-headline {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.25rem 1.5rem;
          border-radius: 12px;
          margin-bottom: 1.5rem;
        }
        
        .fit-headline.strong {
          background: var(--success-bg);
          border: 1px solid rgba(5, 150, 105, 0.2);
        }
        
        .fit-headline.moderate {
          background: var(--warning-bg);
          border: 1px solid rgba(217, 119, 6, 0.2);
        }
        
        .fit-headline.weak, .fit-headline.error {
          background: var(--error-bg);
          border: 1px solid rgba(220, 38, 38, 0.2);
        }
        
        .fit-icon {
          width: 44px;
          height: 44px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.25rem;
          font-weight: 600;
        }
        
        .fit-headline.strong .fit-icon { background: rgba(5, 150, 105, 0.15); color: var(--success); }
        .fit-headline.moderate .fit-icon { background: rgba(217, 119, 6, 0.15); color: var(--warning); }
        .fit-headline.weak .fit-icon, .fit-headline.error .fit-icon { background: rgba(220, 38, 38, 0.15); color: var(--error); }
        
        .fit-headline-text h3 {
          font-size: 1.05rem;
          margin-bottom: 0.2rem;
          font-weight: 600;
        }
        
        .fit-headline.strong h3 { color: var(--success); }
        .fit-headline.moderate h3 { color: var(--warning); }
        .fit-headline.weak h3, .fit-headline.error h3 { color: var(--error); }
        
        .fit-headline-text p {
          font-size: 0.9rem;
          color: var(--text-secondary);
        }
        
        .fit-section-title {
          font-size: 0.7rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.15em;
          margin-bottom: 0.75rem;
          font-weight: 600;
        }
        
        .fit-matches, .fit-gaps {
          margin-bottom: 1.5rem;
        }
        
        .fit-item {
          padding: 1rem 1.25rem;
          background: var(--bg-elevated);
          border-radius: 10px;
          margin-bottom: 0.6rem;
        }
        
        .fit-item-title {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 600;
          margin-bottom: 0.35rem;
          font-size: 0.95rem;
        }
        
        .fit-item-title.match { color: var(--success); }
        .fit-item-title.gap { color: var(--error); }
        
        .fit-item p {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }
        
        .fit-transfers, .fit-recommendation {
          padding: 1rem 1.25rem;
          background: var(--bg-elevated);
          border-radius: 10px;
          margin-bottom: 0.75rem;
        }
        
        .fit-recommendation {
          border-left: 3px solid var(--accent);
          background: var(--accent-lighter);
        }
        
        .fit-recommendation p {
          color: var(--accent);
          font-style: italic;
        }
        
        /* Contact Section */
        .contact-section {
          margin-top: 4rem;
          padding: 3rem 2rem;
          background: var(--bg-card);
          border-top: 1px solid var(--border);
        }
        
        .contact-content {
          max-width: 1100px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 2rem;
        }
        
        .contact-info h3 {
          font-family: 'Source Serif 4', serif;
          font-size: 1.5rem;
          margin-bottom: 0.35rem;
          font-weight: 600;
        }
        
        .contact-info p {
          color: var(--text-secondary);
        }
        
        .contact-links {
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
        }
        
        .contact-link {
          padding: 0.75rem 1.25rem;
          background: var(--bg-elevated);
          border: 1px solid var(--border);
          border-radius: 8px;
          color: var(--text-secondary);
          text-decoration: none;
          font-size: 0.9rem;
          transition: all 0.15s ease;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        
        .contact-link:hover {
          border-color: var(--accent);
          color: var(--accent);
          background: var(--accent-lighter);
        }
        
        /* Modal */
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 1rem;
          animation: fadeIn 0.2s ease;
        }
        
        .modal {
          width: 100%;
          max-width: 580px;
          max-height: 85vh;
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 16px;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.2);
        }
        
        .modal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.25rem 1.5rem;
          border-bottom: 1px solid var(--border);
        }
        
        .modal-header-left {
          display: flex;
          align-items: center;
          gap: 0.875rem;
        }
        
        .modal-avatar {
          width: 44px;
          height: 44px;
          background: var(--accent);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Source Serif 4', serif;
          font-weight: 700;
          color: white;
          font-size: 1rem;
        }
        
        .modal-title {
          font-weight: 600;
          font-size: 1rem;
        }
        
        .modal-status {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.85rem;
          color: var(--text-muted);
        }
        
        .modal-status-dot {
          width: 8px;
          height: 8px;
          background: var(--success);
          border-radius: 50%;
        }
        
        .modal-close {
          width: 36px;
          height: 36px;
          background: var(--bg-elevated);
          border: none;
          border-radius: 8px;
          color: var(--text-muted);
          cursor: pointer;
          font-size: 1.25rem;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.15s ease;
        }
        
        .modal-close:hover {
          background: var(--border);
          color: var(--text-primary);
        }
        
        .modal-body {
          flex: 1;
          overflow-y: auto;
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.875rem;
        }
        
        .chat-welcome {
          text-align: center;
          padding: 2rem 1rem;
        }
        
        .chat-welcome-icon {
          width: 56px;
          height: 56px;
          background: var(--accent-lighter);
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1rem;
          font-size: 1.5rem;
          color: var(--accent);
        }
        
        .chat-welcome h3 {
          font-family: 'Source Serif 4', serif;
          font-size: 1.25rem;
          margin-bottom: 0.5rem;
          font-weight: 600;
        }
        
        .chat-welcome p {
          color: var(--text-secondary);
          font-size: 0.95rem;
        }
        
        .suggested-questions {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-top: 1.5rem;
        }
        
        .suggested-btn {
          padding: 0.875rem 1rem;
          background: var(--bg-elevated);
          border: 1px solid var(--border);
          border-radius: 10px;
          color: var(--text-secondary);
          text-align: left;
          cursor: pointer;
          font-size: 0.9rem;
          transition: all 0.15s ease;
          line-height: 1.4;
        }
        
        .suggested-btn:hover {
          border-color: var(--accent);
          color: var(--text-primary);
          background: var(--bg-card);
        }
        
        .chat-message {
          display: flex;
          gap: 0.75rem;
          animation: slideIn 0.25s ease;
        }
        
        @keyframes slideIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .chat-message.user {
          flex-direction: row-reverse;
        }
        
        .chat-avatar {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.75rem;
          font-weight: 600;
          flex-shrink: 0;
        }
        
        .chat-message.assistant .chat-avatar {
          background: var(--accent);
          color: white;
        }
        
        .chat-message.user .chat-avatar {
          background: var(--bg-elevated);
          color: var(--text-secondary);
        }
        
        .chat-bubble {
          max-width: 85%;
          padding: 0.875rem 1rem;
          border-radius: 12px;
          font-size: 0.95rem;
          line-height: 1.55;
        }
        
        .chat-message.assistant .chat-bubble {
          background: var(--bg-elevated);
          color: var(--text-primary);
        }
        
        .chat-message.user .chat-bubble {
          background: var(--accent);
          color: white;
        }
        
        .typing-indicator {
          display: flex;
          gap: 0.3rem;
          padding: 0.25rem 0;
        }
        
        .typing-dot {
          width: 7px;
          height: 7px;
          background: var(--text-muted);
          border-radius: 50%;
          animation: typingBounce 1.4s infinite ease-in-out;
        }
        
        .typing-dot:nth-child(1) { animation-delay: 0s; }
        .typing-dot:nth-child(2) { animation-delay: 0.2s; }
        .typing-dot:nth-child(3) { animation-delay: 0.4s; }
        
        @keyframes typingBounce {
          0%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-5px); }
        }
        
        .modal-footer {
          padding: 1rem 1.5rem;
          border-top: 1px solid var(--border);
        }
        
        .chat-input-group {
          display: flex;
          gap: 0.75rem;
        }
        
        .chat-input {
          flex: 1;
          padding: 0.875rem 1rem;
          background: var(--bg-elevated);
          border: 1px solid var(--border);
          border-radius: 10px;
          color: var(--text-primary);
          font-family: 'Inter', sans-serif;
          font-size: 0.95rem;
          transition: all 0.15s ease;
        }
        
        .chat-input:focus {
          outline: none;
          border-color: var(--accent);
          background: var(--bg-card);
        }
        
        .chat-input::placeholder {
          color: var(--text-muted);
        }
        
        .chat-send {
          width: 46px;
          height: 46px;
          background: var(--accent);
          border: none;
          border-radius: 10px;
          color: white;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.15s ease;
          font-size: 1rem;
        }
        
        .chat-send:hover:not(:disabled) {
          background: var(--accent-light);
          transform: scale(1.02);
        }
        
        .chat-send:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        
        /* Responsive */
        @media (max-width: 768px) {
          .nav { padding: 0.75rem 1rem; }
          .nav-links { gap: 0.15rem; }
          .nav-link { padding: 0.4rem 0.65rem; font-size: 0.85rem; }
          .hero { padding: 6rem 1rem 2rem; }
          .hero-tagline { font-size: 1.05rem; }
          .main-content { padding: 1rem; }
          .timeline { padding-left: 1.25rem; }
          .timeline-item { padding-left: 1.25rem; }
          .timeline-item::before { left: -1.25rem; }
          .modal { max-height: 92vh; }
        }
      `}</style>

      {/* Navigation */}
      <nav className="nav">
        <div className="nav-logo">{resumeData.initials}</div>
        <div className="nav-links">
          <button 
            className={`nav-link ${activeTab === 'experience' ? 'active' : ''}`}
            onClick={() => setActiveTab('experience')}
          >
            Experience
          </button>
          <button 
            className={`nav-link ${activeTab === 'fitcheck' ? 'active' : ''}`}
            onClick={() => setActiveTab('fitcheck')}
          >
            Fit Check
          </button>
          <button className="nav-cta" onClick={() => setShowAIChat(true)}>
            Ask AI
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-badge">
          <span className="hero-badge-icon"></span>
          {resumeData.clearance} · {resumeData.location}
        </div>
        <h1 className="hero-name">{resumeData.name}</h1>
        <p className="hero-title">{resumeData.title}</p>
        <p className="hero-tagline">{resumeData.tagline}</p>
        <button className="hero-cta" onClick={() => setShowAIChat(true)}>
          ✦ Ask AI About My Background
        </button>
        
        <div className="traits">
          {resumeData.keyTraits.map((trait, i) => (
            <div 
              key={i} 
              className="trait-card"
              style={{ '--trait-color': trait.color }}
            >
              <div 
                className="trait-title" 
                style={{ color: trait.color }}
              >
                {trait.trait}
              </div>
              <div className="trait-desc">{trait.desc}</div>
              <style>{`
                .trait-card:nth-child(${i + 1})::before {
                  background: linear-gradient(90deg, ${trait.color}, transparent);
                }
              `}</style>
            </div>
          ))}
        </div>
      </section>

      {/* Main Content */}
      <main className="main-content">
        {activeTab === 'experience' && (
          <>
            <section className="experience-section">
              <h2 className="section-title">Professional Experience</h2>
              <div className="timeline">
                {resumeData.experience.map((exp, i) => (
                  <div key={i} className="timeline-item">
                    <h3 className="timeline-title">{exp.title}</h3>
                    <p className="timeline-org">{exp.org}</p>
                    <div className="timeline-meta">
                      <span>{exp.location}</span>
                      <span>{exp.period}</span>
                    </div>
                    {exp.award && (
                      <span className="timeline-award">★ {exp.award}</span>
                    )}
                    <div className="timeline-highlights">
                      {exp.highlights.map((h, j) => (
                        <div key={j} className="highlight-item">{h}</div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="skills-section">
              <h2 className="section-title">Strategic & Defense Expertise</h2>
              <div className="skills-grid">
                <div className="skill-category">
                  <div className="skill-category-title" style={{ color: '#1e3a5f' }}>
                    Planning & Resourcing
                  </div>
                  <div className="skill-tags">
                    {["PPBE Process", "POM Development", "MDEP Management", "Congressional Justification", "OMB Coordination"].map((skill, i) => (
                      <span 
                        key={i} 
                        className="skill-tag"
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = `#1e3a5f15`;
                          e.currentTarget.style.color = '#1e3a5f';
                          e.currentTarget.style.borderColor = `#1e3a5f50`;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'var(--bg-elevated)';
                          e.currentTarget.style.color = 'var(--text-secondary)';
                          e.currentTarget.style.borderColor = 'transparent';
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="skill-category">
                  <div className="skill-category-title" style={{ color: '#7c3aed' }}>
                    Security Cooperation
                  </div>
                  <div className="skill-tags">
                    {["Foreign Military Sales (FMS)", "Foreign Military Financing (FMF)", "DSCA Coordination", "NATO Interoperability"].map((skill, i) => (
                      <span 
                        key={i} 
                        className="skill-tag"
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = `#7c3aed15`;
                          e.currentTarget.style.color = '#7c3aed';
                          e.currentTarget.style.borderColor = `#7c3aed50`;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'var(--bg-elevated)';
                          e.currentTarget.style.color = 'var(--text-secondary)';
                          e.currentTarget.style.borderColor = 'transparent';
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="skill-category">
                  <div className="skill-category-title" style={{ color: '#059669' }}>
                    Acquisition & Contracts
                  </div>
                  <div className="skill-tags">
                    {["Contracting Officer Rep (COR)", "Performance Work Statements", "IGCE Development", "FAR/DFAR Compliance"].map((skill, i) => (
                      <span 
                        key={i} 
                        className="skill-tag"
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = `#05966915`;
                          e.currentTarget.style.color = '#059669';
                          e.currentTarget.style.borderColor = `#05966950`;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'var(--bg-elevated)';
                          e.currentTarget.style.color = 'var(--text-secondary)';
                          e.currentTarget.style.borderColor = 'transparent';
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="skill-category">
                  <div className="skill-category-title" style={{ color: '#dc2626' }}>
                    Strategic Engagement
                  </div>
                  <div className="skill-tags">
                    {["Senior Leader Briefings", "Capitol Hill Liaison", "Diplomatic Relations", "Think Tank Network"].map((skill, i) => (
                      <span 
                        key={i} 
                        className="skill-tag"
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = `#dc262615`;
                          e.currentTarget.style.color = '#dc2626';
                          e.currentTarget.style.borderColor = `#dc262650`;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'var(--bg-elevated)';
                          e.currentTarget.style.color = 'var(--text-secondary)';
                          e.currentTarget.style.borderColor = 'transparent';
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="skill-category">
                  <div className="skill-category-title" style={{ color: '#ea580c' }}>
                    Analysis & Operations
                  </div>
                  <div className="skill-tags">
                    {["Capability Gap Analysis", "Integrated Priority List (IPL)", "Risk Assessment", "Interagency Coordination"].map((skill, i) => (
                      <span 
                        key={i} 
                        className="skill-tag"
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = `#ea580c15`;
                          e.currentTarget.style.color = '#ea580c';
                          e.currentTarget.style.borderColor = `#ea580c50`;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'var(--bg-elevated)';
                          e.currentTarget.style.color = 'var(--text-secondary)';
                          e.currentTarget.style.borderColor = 'transparent';
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="skill-category">
                  <div className="skill-category-title" style={{ color: '#0891b2' }}>
                    Clearance & Access
                  </div>
                  <div className="skill-tags">
                    {["DOD Secret Clearance", "Pentagon HQDA Staff", "EUCOM/USAREUR-AF", "White House EOB"].map((skill, i) => (
                      <span 
                        key={i} 
                        className="skill-tag"
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = `#0891b215`;
                          e.currentTarget.style.color = '#0891b2';
                          e.currentTarget.style.borderColor = `#0891b250`;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'var(--bg-elevated)';
                          e.currentTarget.style.color = 'var(--text-secondary)';
                          e.currentTarget.style.borderColor = 'transparent';
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section className="skills-section">
              <h2 className="section-title">Technical Expertise</h2>
              <div className="skills-grid">
                {Object.entries(resumeData.skills).map(([category, { color, items }]) => (
                  <div key={category} className="skill-category">
                    <div 
                      className="skill-category-title"
                      style={{ color }}
                    >
                      {category}
                    </div>
                    <div className="skill-tags">
                      {items.map((skill, i) => (
                        <span 
                          key={i} 
                          className="skill-tag"
                          style={{ 
                            '--hover-color': color,
                            '--hover-bg': `${color}15`
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = `${color}12`;
                            e.currentTarget.style.color = color;
                            e.currentTarget.style.borderColor = `${color}40`;
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'var(--bg-elevated)';
                            e.currentTarget.style.color = 'var(--text-secondary)';
                            e.currentTarget.style.borderColor = 'transparent';
                          }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="skills-section">
              <h2 className="section-title">Education</h2>
              <div className="education-card">
                <div className="education-degree">{resumeData.education.degree}</div>
                <div className="education-school">{resumeData.education.school}</div>
                <div className="education-location">{resumeData.education.location}</div>
                <div className="education-courses">
                  <strong>Relevant Coursework:</strong> {resumeData.education.courses}
                </div>
              </div>
            </section>
          </>
        )}

        {activeTab === 'fitcheck' && (
          <section className="fit-check-section">
            <h2 className="section-title">Job Fit Analyzer</h2>
            <div className="fit-check-tabs">
              <button 
                className={`fit-tab ${fitCheckMode === 'strong' ? 'active' : ''}`}
                onClick={() => loadExample('strong')}
              >
                Strong Fit Example
              </button>
              <button 
                className={`fit-tab ${fitCheckMode === 'weak' ? 'active' : ''}`}
                onClick={() => loadExample('weak')}
              >
                Weak Fit Example
              </button>
            </div>
            
            <div className="fit-check-card">
              <label className="fit-label">📄 Job description to analyze</label>
              <textarea
                className="fit-textarea"
                placeholder="Paste a job description here to see how well my experience aligns with your requirements..."
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
              />
              
              <button 
                className="fit-submit" 
                onClick={handleFitCheck}
                disabled={isAnalyzing || !jobDescription.trim()}
              >
                {isAnalyzing ? (
                  <>
                    <span className="typing-indicator" style={{padding: 0}}>
                      <span className="typing-dot"></span>
                      <span className="typing-dot"></span>
                      <span className="typing-dot"></span>
                    </span>
                    Analyzing...
                  </>
                ) : (
                  <>✦ Analyze Fit</>
                )}
              </button>

              {fitAnalysis && (
                <div className="fit-results">
                  <div className={`fit-headline ${fitAnalysis.fitLevel}`}>
                    <div className="fit-icon">
                      {fitAnalysis.fitLevel === 'strong' ? '✓' : 
                       fitAnalysis.fitLevel === 'moderate' ? '◐' : '!'}
                    </div>
                    <div className="fit-headline-text">
                      <h3>{fitAnalysis.headline}</h3>
                      <p>
                        {fitAnalysis.fitLevel === 'strong' 
                          ? "Your requirements align well with my experience."
                          : fitAnalysis.fitLevel === 'moderate'
                          ? "There's potential here. Let me break it down."
                          : "I want to be direct about the fit here."}
                      </p>
                    </div>
                  </div>

                  {fitAnalysis.matches?.length > 0 && (
                    <div className="fit-matches">
                      <div className="fit-section-title">Where I Match</div>
                      {fitAnalysis.matches.map((match, i) => (
                        <div key={i} className="fit-item">
                          <div className="fit-item-title match">✓ {match.title}</div>
                          <p>{match.evidence}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {fitAnalysis.gaps?.length > 0 && (
                    <div className="fit-gaps">
                      <div className="fit-section-title">Gaps to Note</div>
                      {fitAnalysis.gaps.map((gap, i) => (
                        <div key={i} className="fit-item">
                          <div className="fit-item-title gap">○ {gap.title}</div>
                          <p>{gap.explanation}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {fitAnalysis.transfers && (
                    <div className="fit-transfers">
                      <div className="fit-section-title">Transferable Experience</div>
                      <p style={{color: 'var(--text-secondary)'}}>{fitAnalysis.transfers}</p>
                    </div>
                  )}

                  <div className="fit-recommendation">
                    <div className="fit-section-title">My Recommendation</div>
                    <p>{fitAnalysis.recommendation}</p>
                  </div>
                </div>
              )}
            </div>
          </section>
        )}
      </main>

      {/* Contact Footer */}
      <footer className="contact-section">
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Connect</h3>
            <p>Open to discussing opportunities in defense technology and strategic leadership.</p>
          </div>
          <div className="contact-links">
            <a href={`mailto:${resumeData.email}`} className="contact-link">
              ✉ {resumeData.email}
            </a>
            <a href={`tel:${resumeData.phone}`} className="contact-link">
              ☏ {resumeData.phone}
            </a>
          </div>
        </div>
      </footer>

      {/* AI Chat Modal */}
      {showAIChat && (
        <div className="modal-overlay" onClick={() => setShowAIChat(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-header-left">
                <div className="modal-avatar">{resumeData.initials}</div>
                <div>
                  <div className="modal-title">Ask AI About David</div>
                  <div className="modal-status">
                    <span className="modal-status-dot"></span>
                    Ready to answer your questions
                  </div>
                </div>
              </div>
              <button className="modal-close" onClick={() => setShowAIChat(false)}>×</button>
            </div>
            
            <div className="modal-body">
              {chatMessages.length === 0 ? (
                <div className="chat-welcome">
                  <div className="chat-welcome-icon">✦</div>
                  <h3>What would you like to know?</h3>
                  <p>Ask specific questions about my experience, skills, or fit for your role.</p>
                  <div className="suggested-questions">
                    {suggestedQuestions.map((q, i) => (
                      <button 
                        key={i} 
                        className="suggested-btn"
                        onClick={() => handleChatSubmit(q)}
                      >
                        "{q}"
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <>
                  {chatMessages.map((msg, i) => (
                    <div key={i} className={`chat-message ${msg.role}`}>
                      <div className="chat-avatar">
                        {msg.role === 'assistant' ? 'DF' : '?'}
                      </div>
                      <div className="chat-bubble">{msg.content}</div>
                    </div>
                  ))}
                  {isTyping && (
                    <div className="chat-message assistant">
                      <div className="chat-avatar">DF</div>
                      <div className="chat-bubble">
                        <div className="typing-indicator">
                          <span className="typing-dot"></span>
                          <span className="typing-dot"></span>
                          <span className="typing-dot"></span>
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={chatEndRef} />
                </>
              )}
            </div>
            
            <div className="modal-footer">
              <div className="chat-input-group">
                <input
                  type="text"
                  className="chat-input"
                  placeholder="Ask a follow-up question..."
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && handleChatSubmit()}
                />
                <button 
                  className="chat-send" 
                  onClick={() => handleChatSubmit()}
                  disabled={!chatInput.trim() || isTyping}
                >
                  ➤
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
