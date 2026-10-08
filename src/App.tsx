import { FormEvent, useState } from 'react';
import { api, auth } from '@appdeploy/client';

const LOGO_PATH = '/resources/james-tech-logo.png';

import {
  ArrowRight,
  Award,
  BarChart3,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronRight,
  Database,
  Globe2,
  Headphones,
  Layers3,
  Menu,
  Network,
  Phone,
  Server,
  ShieldCheck,
  Sparkles,
  X,
  Github,
  Wrench,
  Camera,
  Code2,
  FileSpreadsheet,
} from 'lucide-react';

type Project = {
  title: string;
  category: string;
  problem: string;
  solution: string;
  architecture: string;
  technology: string[];
  features: string[];
  contribution: string;
  results: string;
  lessons: string;
  githubUrl?: string;
};
const projects: Project[] = [
  {
    title: 'Hospital Management System',
    category: 'Full-Stack Web Application',
    problem:
      'A healthcare organization needs a structured digital workflow for managing operational information and reducing dependence on disconnected processes.',
    solution:
      'A modular management application designed around practical workflows, structured data, role-aware screens and database integration.',
    architecture:
      'Responsive web interface → application/API layer → relational database.',
    technology: ['React', 'JavaScript', 'REST APIs', 'MySQL'],
    features: [
      'Structured records',
      'Dashboard-oriented workflows',
      'Database integration',
      'Responsive interface',
    ],
    contribution:
      'Full-stack application planning and development across interface, application logic and database integration.',
    results:
      'No unverified performance, financial or client metrics are claimed. The project is presented as implementation proof.',
    lessons:
      'Clear domain workflows and data relationships are essential before adding complexity to a business application.',
    githubUrl: 'https://github.com/jamestechsolution/Jame_Tech',
  },
  {
    title: 'MyDaily – Work & Reporting System',
    category: 'Productivity / Business Application',
    problem:
      'Daily work and reporting can become difficult to track when tasks, reports and reminders are separated across different tools.',
    solution:
      'A web application concept for recording daily work, organizing reports and supporting reminder-driven productivity workflows.',
    architecture:
      'Responsive web interface → application/API layer → persistent application data.',
    technology: ['React', 'Next.js', 'JavaScript', 'Database integration'],
    features: [
      'Daily work records',
      'Reporting workflow',
      'Task-oriented interface',
      'Reminder-ready architecture',
    ],
    contribution:
      'Product design and full-stack implementation work focused on practical daily operations.',
    results: 'No invented usage statistics or business outcomes are shown.',
    lessons:
      'Small operational workflows become more useful when data entry, reporting and follow-up are designed as one experience.',
  },
  {
    title: 'Dinigaas Trading Management Platform',
    category: 'Business Management / Enterprise Platform',
    problem:
      'A multi-sector organization needs a scalable digital platform that can bring corporate information and operational modules into one system.',
    solution:
      'A modular enterprise platform direction covering corporate presentation, CRM, investor/share workflows, LMIS and internal portals.',
    architecture:
      'Modular web frontend → backend/API services → shared relational data model.',
    technology: ['React', 'TypeScript', 'Tailwind CSS', 'Database integration'],
    features: [
      'Corporate website',
      'CRM direction',
      'Investor portal direction',
      'Departmental/internal portals',
    ],
    contribution:
      'Solution architecture, interface design and full-stack platform planning.',
    results: 'No client results or scale metrics are fabricated.',
    lessons:
      'Modularity and clear boundaries make multi-sector business systems easier to extend and maintain.',
  },
  {
    title: 'Employee Management System',
    category: 'HR / Business Application',
    problem:
      'Employee information and routine HR workflows benefit from a centralized, searchable and structured system.',
    solution:
      'A business application direction for employee records, organizational information and operational HR workflows.',
    architecture:
      'Web interface → API/application layer → structured employee data.',
    technology: [
      'JavaScript',
      'Web application development',
      'Database integration',
    ],
    features: [
      'Employee records',
      'Structured information',
      'Business workflow support',
      'Responsive UI',
    ],
    contribution:
      'Application design and implementation focused on practical employee-management workflows.',
    results:
      'No invented employee counts, savings or performance statistics are claimed.',
    lessons:
      'Good business systems begin with clean data structures, clear roles and simple workflows.',
  },
];
const expertise = [
  {
    icon: Headphones,
    title: 'IT & Computer Support',
    items: [
      'Computer troubleshooting',
      'Hardware/software maintenance',
      'Windows administration',
      'Printer and peripheral setup',
      'Backup and recovery',
      'System optimization',
    ],
  },
  {
    icon: Network,
    title: 'Networking',
    items: [
      'LAN/Wi-Fi configuration',
      'Router and switch configuration',
      'IP addressing',
      'Network troubleshooting',
      'Network security fundamentals',
      'Infrastructure support',
    ],
  },
  {
    icon: Camera,
    title: 'CCTV & Security',
    items: [
      'CCTV installation',
      'IP camera configuration',
      'DVR/NVR setup',
      'Remote monitoring',
      'Camera maintenance',
      'Security system support',
    ],
  },
  {
    icon: FileSpreadsheet,
    title: 'Excel & Business Data',
    items: [
      'Advanced Excel',
      'Data cleaning',
      'PivotTables',
      'Business dashboards',
      'Reports',
      'Data analysis and automation',
    ],
  },
  {
    icon: Database,
    title: 'Database Management',
    items: [
      'MySQL/PostgreSQL',
      'Database design',
      'SQL',
      'Relationships',
      'Backup and recovery',
      'Database security',
    ],
  },
  {
    icon: Code2,
    title: 'Web & Software Development',
    items: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Next.js',
      'Backend/API development',
      'Full-stack applications',
      'Database integration',
    ],
  },
];
const services = [
  [
    'Computer System Maintenance',
    'Keep computers, software and peripherals reliable and ready for daily work.',
    Wrench,
  ],
  [
    'CCTV Installation & Maintenance',
    'Configure, maintain and support practical camera and recording systems.',
    Camera,
  ],
  [
    'Network Installation & Support',
    'Support LAN/Wi-Fi infrastructure, devices, addressing and troubleshooting.',
    Network,
  ],
  [
    'Excel & Word Services',
    'Turn office documents and business data into cleaner, more useful working tools.',
    FileSpreadsheet,
  ],
  [
    'Database Design & Management',
    'Design structured relational data, SQL workflows, backups and secure access patterns.',
    Database,
  ],
  [
    'Website Development',
    'Build responsive, accessible websites with clear business goals and maintainable code.',
    Globe2,
  ],
  [
    'Web Application Development',
    'Develop interactive business applications with frontend, API and database integration.',
    Code2,
  ],
  [
    'Business Management Systems',
    'Translate operational workflows into practical digital systems and dashboards.',
    Layers3,
  ],
  [
    'IT Consulting',
    'Assess technology needs and recommend solutions around real organizational requirements.',
    BriefcaseBusiness,
  ],
  [
    'Technical Support',
    'Provide practical troubleshooting and technology guidance for day-to-day operations.',
    Headphones,
  ],
] as const;
const skills = [
  'IT Support',
  'Networking',
  'CCTV',
  'Microsoft Office',
  'Excel',
  'SQL',
  'Database Management',
  'Web Development',
  'Full-Stack Development',
  'System Administration',
  'Cybersecurity Fundamentals',
  'Cloud & Deployment',
];
const techGroups = [
  [
    'Frontend',
    ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS'],
  ],
  ['Backend', ['Node.js', 'REST APIs', 'PHP where appropriate']],
  ['Database', ['MySQL', 'PostgreSQL']],
  ['Tools', ['Git', 'GitHub', 'VS Code', 'API testing tools']],
  [
    'Infrastructure',
    ['Linux', 'Cloud deployment', 'DNS', 'SSL', 'CI/CD fundamentals'],
  ],
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false),
    [selected, setSelected] = useState<Project | null>(null),
    [submitted, setSubmitted] = useState(false),
    [error, setError] = useState('');
  const [adminOpen, setAdminOpen] = useState(false),
    [adminUser, setAdminUser] = useState<{ email?: string; name?: string } | null>(null),
    [adminData, setAdminData] = useState<{ counts: Record<string, number>; requests: Array<Record<string, unknown>> } | null>(null),
    [adminContent, setAdminContent] = useState<Record<string, Array<Record<string, unknown>>>>({}),
    [adminBusy, setAdminBusy] = useState(false),
    [adminMessage, setAdminMessage] = useState('');
  const [form, setForm] = useState({
    fullName: '',
    phone: '',
    email: '',
    organization: '',
    service: '',
    budget: '',
    contact: 'Email',
    description: '',
  });
  const go = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };
  async function openAdmin() {
    setAdminOpen(true);
    setAdminMessage('');
    if (!auth.isSignedIn()) return;
    const user = await auth.getUser();
    if (!user?.email) return;
    try {
      setAdminBusy(true);
      const overview = await api.get('/api/admin/overview');
      setAdminUser({ email: user.email, name: user.name });
      setAdminData(overview.data);
      const types = ['projects', 'services', 'skills', 'certifications', 'testimonials'];
      const loaded = await Promise.all(types.map(async type => [type, (await api.get('/api/admin/content/' + type)).data.items] as const));
      setAdminContent(Object.fromEntries(loaded));
    } catch {
      setAdminUser(null);
      setAdminMessage('Access denied or the admin workspace could not be loaded.');
    } finally {
      setAdminBusy(false);
    }
  }
  async function signInAdmin() {
    try {
      setAdminMessage('');
      await auth.signIn({ scope: 'openid email profile offline_access' });
      await openAdmin();
    } catch {
      setAdminMessage('Sign-in was cancelled or could not be completed.');
    }
  }
  async function addAdminContent(type: string) {
    const title = window.prompt('Title for ' + type + ':');
    if (!title?.trim()) return;
    try {
      await api.post('/api/admin/content/' + type, { title: title.trim(), status: 'published', summary: '', details: '' });
      await openAdmin();
      setAdminMessage('Content item added.');
    } catch {
      setAdminMessage('Unable to add this content item.');
    }
  }
  async function deleteAdminContent(type: string, id: string) {
    if (!window.confirm('Delete this content item?')) return;
    try {
      await api.delete('/api/admin/content/' + type + '/' + id);
      await openAdmin();
      setAdminMessage('Content item deleted.');
    } catch {
      setAdminMessage('Unable to delete this content item.');
    }
  }
  async function submit(e: FormEvent) {
    e.preventDefault();
    setError('');
    setSubmitted(false);
    try {
      await api.post('/api/service-requests', form);
      setSubmitted(true);
      setForm({
        fullName: '',
        phone: '',
        email: '',
        organization: '',
        service: '',
        budget: '',
        contact: 'Email',
        description: '',
      });
    } catch {
      setError('We could not submit the request right now. Please try again.');
    }
  }
  return (
    <div className="site-shell">
      <header className="nav-wrap">
        <nav className="nav container">
          <button
            className="brand"
            onClick={() => go('home')}
            aria-label="James Tech Solution home"
          >
            <img className="brand-logo" src={LOGO_PATH} alt="James Tech Solution logo" />
            <span>
              James Tech <b>Solution</b>
            </span>
          </button>
          <div className={menuOpen ? 'nav-links open' : 'nav-links'}>
            {[
              'home',
              'about',
              'expertise',
              'services',
              'projects',
              'skills',
              'certifications',
              'testimonials',
              'contact',
            ].map(item => (
              <button key={item} onClick={() => go(item)}>
                {item[0].toUpperCase() + item.slice(1)}
              </button>
            ))}
          </div>
          <button className="cta small" onClick={() => go('request')}>
            Request a Service <ArrowRight size={15} />
          </button>
          <button
            className="menu-button"
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </nav>
      </header>
      <main>
        <section id="home" className="hero">
          <div className="hero-grid container">
            <div className="hero-copy">
              <div className="eyebrow">
                <span /> ICT SOLUTIONS • SOFTWARE • INFRASTRUCTURE
              </div>
              <div className="hero-role">ICT Solutions Specialist <span>•</span> Full-Stack Developer <span>•</span> Database & Network Specialist</div>
              <h1>
                Technology solutions that solve <em>real business problems.</em>
              </h1>
              <p>
                I provide reliable ICT, software, networking, database, CCTV and
                digital solutions designed to help organizations work smarter,
                securely and efficiently.
              </p>
              <div className="hero-actions">
                <button className="cta" onClick={() => go('expertise')}>
                  Explore My Expertise <ArrowRight size={17} />
                </button>
                <button className="ghost" onClick={() => go('request')}>
                  Start a Project
                </button>
              </div>
              <div className="trust-row">
                {[
                  'IT Support',
                  'Networking',
                  'CCTV',
                  'Database',
                  'Web Development',
                ].map(x => (
                  <span key={x}>{x}</span>
                ))}
              </div>
              <div className="proof-strip" aria-label="Professional delivery approach">
                {[
                  ['01', 'Diagnose', 'Understand the real problem'],
                  ['02', 'Design', 'Choose a practical architecture'],
                  ['03', 'Build', 'Implement and test the solution'],
                  ['04', 'Support', 'Maintain and improve over time'],
                ].map(([n, t, d]) => (
                  <div className="proof-item" key={n}>
                    <span>{n}</span><div><strong>{t}</strong><small>{d}</small></div>
                  </div>
                ))}
              </div>
            </div>
            <div
              className="hero-visual"
              aria-label="Technology workspace illustration"
            >
              <div className="orb orb-one" />
              <div className="orb orb-two" />
              <div className="dashboard">
                <div className="dash-top">
                  <span>TECH OPERATIONS</span>
                  <span className="status">
                    <i /> SYSTEM READY
                  </span>
                </div>
                <div className="dash-screen">
                  <div className="screen-title">
                    <div>
                      <small>CONTROL CENTER</small>
                      <h3>Infrastructure Overview</h3>
                    </div>
                    <ShieldCheck />
                  </div>
                  <div className="metrics">
                    <div>
                      <Network />
                      <b>Network</b>
                      <strong>Connected</strong>
                    </div>
                    <div>
                      <Database />
                      <b>Database</b>
                      <strong>Protected</strong>
                    </div>
                    <div>
                      <Camera />
                      <b>Security</b>
                      <strong>Monitoring</strong>
                    </div>
                  </div>
                  <div className="chart">
                    <span style={{ height: '38%' }} />
                    <span style={{ height: '58%' }} />
                    <span style={{ height: '46%' }} />
                    <span style={{ height: '72%' }} />
                    <span style={{ height: '62%' }} />
                    <span style={{ height: '84%' }} />
                    <span style={{ height: '78%' }} />
                  </div>
                </div>
                <div className="rack">
                  <Server />
                  <div className="rack-lines">
                    <i />
                    <i />
                    <i />
                    <i />
                  </div>
                  <span>SERVER / API / DATA</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="about" className="section about">
          <div className="container split">
            <div>
              <div className="section-kicker">ABOUT</div>
              <h2>Practical technology, built around the problem.</h2>
            </div>
            <div>
              <p className="lead">
                James Tech Solution is a professional technology practice focused on practical, reliable and scalable ICT solutions—from troubleshooting and infrastructure to databases, websites and full-stack business applications.
              </p>
              <div className="principles">
                {[
                  'Problem solving',
                  'Professional service',
                  'Security',
                  'Reliability',
                  'Continuous learning',
                  'Customer satisfaction',
                  'Business-focused technology',
                ].map(x => (
                  <span key={x}>
                    <CheckCircle2 size={16} />
                    {x}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section id="expertise" className="section dark">
          <div className="container">
            <div className="section-kicker">EXPERTISE</div>
            <h2>My technical expertise.</h2>
            <p className="section-intro">
              A focused set of ICT capabilities spanning support,
              infrastructure, security, data and software.
            </p>
            <div className="card-grid">
              {expertise.map(({ icon: Icon, title, items }) => (
                <article className="expert-card" key={title}>
                  <div className="icon-box">
                    <Icon size={21} />
                  </div>
                  <h3>{title}</h3>
                  <ul>
                    {items.map(i => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
                  <button onClick={() => go('services')}>
                    View Details <ChevronRight size={15} />
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section id="services" className="section">
          <div className="container">
            <div className="section-kicker">SERVICES</div>
            <h2>Professional ICT services.</h2>
            <p className="section-intro">
              Clear deliverables, practical implementation and support from
              initial requirement through ongoing maintenance.
            </p>
            <div className="service-grid">
              {services.map(([title, desc, Icon]) => (
                <article className="service-card" key={title}>
                  <div className="service-icon">
                    <Icon size={20} />
                  </div>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                  <div className="deliverable">
                    Key deliverables{' '}
                    <span>Configuration • Implementation • Support</span>
                  </div>
                  <button onClick={() => go('request')}>
                    Request Service <ArrowRight size={15} />
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section id="projects" className="section projects">
          <div className="container">
            <div className="section-kicker">PROOF OF EXPERTISE</div>
            <div className="project-head">
              <div>
                <h2>Real projects demonstrate what I can build and deliver.</h2>
              </div>
              <span>Evidence-led • No invented metrics</span>
            </div>
            <div className="project-grid">
              {projects.map((p, i) => (
                <article
                  className="project-card"
                  key={p.title}
                  onClick={() => setSelected(p)}
                >
                  <div className="project-number">0{i + 1}</div>
                  <div className="project-art">
                    <div className="mini-window">
                      <span />
                      <span />
                      <span />
                      <div className="mini-lines" />
                    </div>
                  </div>
                  <small>{p.category}</small>
                  <h3>{p.title}</h3>
                  <p>{p.solution}</p>
                  <button>
                    Open Case Study <ArrowRight size={15} />
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section id="skills" className="section dark">
          <div className="container">
            <div className="section-kicker">TECHNICAL STACK</div>
            <h2>Tools I work with.</h2>
            <p className="section-intro">
              The stack below reflects the technologies specified for this
              professional portfolio; no fake skill percentages are used.
            </p>
            <div className="tech-grid">
              {techGroups.map(([group, items]) => (
                <div className="tech-group" key={group}>
                  <h3>{group}</h3>
                  <div>
                    {items.map(x => (
                      <span key={x}>{x}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="skill-list">
              {skills.map((x, i) => (
                <div className="skill-pill" key={x}>
                  <span>{x}</span>
                  <small>
                    {i < 4
                      ? 'Core focus'
                      : i < 8
                        ? 'Applied skill'
                        : 'Technical focus'}
                  </small>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="certifications" className="section">
          <div className="container narrow">
            <div className="section-kicker">CREDENTIALS</div>
            <div className="empty-panel">
              <Award size={30} />
              <h2>
                Certifications and professional training will be added here.
              </h2>
              <p>
                No certificates are fabricated. Add verified credentials
                whenever they are available.
              </p>
            </div>
          </div>
        </section>
        <section className="section process">
          <div className="container">
            <div className="section-kicker">WORK PROCESS</div>
            <h2>How I work.</h2>
            <div className="process-grid">
              {[
                [
                  '01',
                  'Understand',
                  'Understand the client’s problem and requirements.',
                ],
                [
                  '02',
                  'Analyze',
                  'Evaluate the technical requirements and recommend the right solution.',
                ],
                [
                  '03',
                  'Build',
                  'Develop, configure or implement the solution professionally.',
                ],
                [
                  '04',
                  'Test',
                  'Test functionality, security, reliability and usability.',
                ],
                [
                  '05',
                  'Deploy',
                  'Deploy or install the solution and provide documentation.',
                ],
                ['06', 'Support', 'Provide maintenance and technical support.'],
              ].map(([n, t, d]) => (
                <div className="process-step" key={n}>
                  <span>{n}</span>
                  <h3>{t}</h3>
                  <p>{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="section why">
          <div className="container">
            <div className="section-kicker">WHY JAMES TECH</div>
            <h2>Built for trust, not noise.</h2>
            <div className="why-grid">
              {[
                [
                  'Reliable',
                  'Professional and dependable technical support.',
                  CheckCircle2,
                ],
                [
                  'Secure',
                  'Security-conscious systems and responsible data handling.',
                  ShieldCheck,
                ],
                [
                  'Practical',
                  'Solutions designed around real business needs.',
                  Wrench,
                ],
                [
                  'Affordable',
                  'Professional technology solutions with clear value.',
                  BarChart3,
                ],
              ].map(([t, d, I]) => (
                <div className="why-card" key={t}>
                  <I />
                  <h3>{t}</h3>
                  <p>{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="testimonials" className="section testimonial-section">
          <div className="container narrow">
            <div className="section-kicker">TESTIMONIALS</div>
            <div className="quote">
              <span>“</span>
              <h2>
                Client testimonials will appear here as projects are completed.
              </h2>
              <p>
                Verified feedback will be added without fabricating client
                names, quotes or ratings.
              </p>
            </div>
          </div>
        </section>
        <section id="request" className="section request">
          <div className="container split request-grid">
            <div>
              <div className="section-kicker">SERVICE REQUEST</div>
              <h2>Tell me what needs to work better.</h2>
              <p className="lead">
                Share the problem, service you need and preferred contact
                method. The request is sent securely to the application backend.
              </p>
              <div className="contact-points">
                <div>
                  <Globe2 />
                  <span>
                    Location<strong>Ethiopia</strong>
                  </span>
                </div>
                <div>
                  <ShieldCheck />
                  <span>
                    Approach<strong>Practical & security-conscious</strong>
                  </span>
                </div>
              </div>
            </div>
            <form className="request-form" onSubmit={submit}>
              <div className="form-row">
                <label>
                  Full Name
                  <input
                    required
                    value={form.fullName}
                    onChange={e =>
                      setForm({ ...form, fullName: e.target.value })
                    }
                  />
                </label>
                <label>
                  Phone Number
                  <input
                    value={form.phone}
                    onChange={e => setForm({ ...form, phone: e.target.value })}
                  />
                </label>
              </div>
              <div className="form-row">
                <label>
                  Email
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                  />
                </label>
                <label>
                  Organization
                  <input
                    value={form.organization}
                    onChange={e =>
                      setForm({ ...form, organization: e.target.value })
                    }
                  />
                </label>
              </div>
              <div className="form-row">
                <label>
                  Service Required
                  <select
                    required
                    value={form.service}
                    onChange={e =>
                      setForm({ ...form, service: e.target.value })
                    }
                  >
                    <option value="">Select a service</option>
                    {[
                      'IT Support',
                      'Computer Maintenance',
                      'Networking',
                      'CCTV',
                      'Excel/Data',
                      'Database',
                      'Website',
                      'Web Application',
                      'Business System',
                      'Other',
                    ].map(x => (
                      <option key={x}>{x}</option>
                    ))}
                  </select>
                </label>
                <label>
                  Project Budget
                  <select
                    value={form.budget}
                    onChange={e => setForm({ ...form, budget: e.target.value })}
                  >
                    <option value="">Prefer not to say</option>
                    <option>To be discussed</option>
                    <option>Small project</option>
                    <option>Medium project</option>
                    <option>Large project</option>
                  </select>
                </label>
              </div>
              <label>
                Preferred Contact Method
                <select
                  value={form.contact}
                  onChange={e => setForm({ ...form, contact: e.target.value })}
                >
                  <option>Email</option>
                  <option>Phone</option>
                  <option>WhatsApp</option>
                </select>
              </label>
              <label>
                Project Description
                <textarea
                  required
                  minLength={10}
                  rows={5}
                  value={form.description}
                  onChange={e =>
                    setForm({ ...form, description: e.target.value })
                  }
                  placeholder="What problem are you trying to solve?"
                />
              </label>
              <button className="cta full" type="submit">
                Request Service <ArrowRight size={17} />
              </button>
              {submitted && (
                <div className="form-success">
                  <CheckCircle2 /> Request received. Thank you — your service
                  request was submitted successfully.
                </div>
              )}
              {error && <div className="form-error">{error}</div>}
            </form>
          </div>
        </section>
        <section id="contact" className="section contact">
          <div className="container contact-inner">
            <div>
              <div className="section-kicker">CONTACT</div>
              <h2>Let’s build something better.</h2>
              <p>James Tech Solution</p>
              <p className="muted">Ethiopia • Remote-ready • Business-focused technology</p>
            </div>
            <div className="contact-actions">
              <button className="ghost" onClick={() => go('request')}>
                <Phone size={17} /> Request a service
              </button>
              <span className="muted">
                Email, phone and WhatsApp details will be published when
                verified contact information is provided.
              </span>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className="container footer-inner">
          <div>
            <div className="footer-brand-wrap">
              <img className="footer-logo" src={LOGO_PATH} alt="James Tech Solution logo" />
              <div className="footer-brand">James Tech Solution</div>
            </div>
            <p>Building Future Generation through Technology.</p>
          </div>
          <div className="footer-links">
            {[
              'home',
              'about',
              'expertise',
              'services',
              'projects',
              'contact',
            ].map(x => (
              <button key={x} onClick={() => go(x)}>
                {x[0].toUpperCase() + x.slice(1)}
              </button>
            ))}
          </div>
          <span className="muted">
            © {new Date().getFullYear()} James Tech Solution
          </span>
          <button className="footer-admin" onClick={openAdmin} type="button">Admin</button>
        </div>
      </footer>
      {adminOpen && (
        <div className="modal-backdrop" onClick={() => setAdminOpen(false)}>
          <article className="case-modal admin-modal" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setAdminOpen(false)}><X /></button>
            <div className="section-kicker">ADMIN WORKSPACE</div>
            <h2>James Tech Solution Management</h2>
            {!adminUser ? (
              <div className="admin-login">
                <p>Secure management for service requests, projects, services, skills, certifications and testimonials.</p>
                <button className="cta" onClick={signInAdmin} disabled={adminBusy}>{adminBusy ? 'Opening sign-in…' : 'Sign in as administrator'}</button>
                <p className="muted">Administrator access is restricted to the verified owner email configured for this workspace.</p>
              </div>
            ) : (
              <div className="admin-body">
                <div className="admin-toolbar"><span>Signed in as <b>{adminUser.email}</b></span><button className="ghost" onClick={async () => { await auth.signOut(); setAdminUser(null); setAdminData(null); }}>Sign out</button></div>
                {adminMessage && <div className="form-success">{adminMessage}</div>}
                {adminData && <div className="admin-stats">{Object.entries(adminData.counts).map(([k,v]) => <div key={k}><strong>{v}</strong><span>{k.replace(/([A-Z])/g, ' $1')}</span></div>)}</div>}
                <h3>Service Requests</h3>
                <div className="admin-list">{(adminData?.requests ?? []).map(r => <div className="admin-row" key={String(r.id)}><div><b>{String(r.fullName)}</b><span>{String(r.email)} • {String(r.service)}</span></div><small>{String(r.createdAt ?? '')}</small></div>)}</div>
                <h3>Content Management</h3>
                <div className="admin-content-grid">{Object.entries(adminContent).map(([type, items]) => <section key={type}><div className="admin-section-head"><b>{type[0].toUpperCase()+type.slice(1)}</b><button onClick={() => addAdminContent(type)}>+ Add</button></div>{items.map(item => <div className="admin-row" key={String(item.id)}><span>{String(item.title)}</span><button onClick={() => deleteAdminContent(type, String(item.id))}>Delete</button></div>)}</section>)}</div>
              </div>
            )}
          </article>
        </div>
      )}
      {selected && (
        <div className="modal-backdrop" onClick={() => setSelected(null)}>
          <article className="case-modal" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelected(null)}>
              <X />
            </button>
            <div className="section-kicker">{selected.category}</div>
            <h2>{selected.title}</h2>
            <div className="case-grid">
              {[
                ['Challenge', selected.problem],
                ['Solution', selected.solution],
                ['Architecture', selected.architecture],
                ['Technology stack', selected.technology.join(' • ')],
                ['Key features', selected.features.join(' • ')],
                ['My role', selected.contribution],
                ['Results', selected.results],
                ['Lessons learned', selected.lessons],
              ].map(([k, v]) => (
                <div key={k}>
                  <h4>{k}</h4>
                  <p>{v}</p>
                </div>
              ))}
            </div>
            <div className="case-actions">
              <button className="ghost" disabled>
                Live Demo — link to be added
              </button>
              {selected.githubUrl ? (
                <a className="ghost" href={selected.githubUrl} target="_blank" rel="noreferrer">
                  <Github size={16} /> View GitHub Repository
                </a>
              ) : (
                <button className="ghost" disabled>
                  GitHub Repository — link to be added
                </button>
              )}
            </div>
          </article>
        </div>
      )}
    </div>
  );
}
export default App;
