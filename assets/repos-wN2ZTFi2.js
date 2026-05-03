import{r as s}from"./index-TcwiqcC9.js";var l=s.createContext(void 0);function x(e){const i=s.useContext(l);return e||i||"ltr"}function w(e,[i,n]){return Math.min(n,Math.max(i,e))}const c={},d=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" role="img" aria-labelledby="ttl">
  <title id="ttl">THredis: pipelined key-value execution</title>
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#1e293b"/>
    </linearGradient>
    <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#f97316"/>
      <stop offset="100%" stop-color="#ea580c"/>
    </linearGradient>
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#020617" flood-opacity=".45"/>
    </filter>
  </defs>
  <rect width="800" height="450" rx="28" fill="url(#bg)"/>
  <text x="48" y="58" fill="#94a3b8" font-family="ui-sans-serif,system-ui,Segoe UI,sans-serif" font-size="14" letter-spacing=".12em">RESEARCH SYSTEMS / KV STORE</text>
  <text x="48" y="108" fill="#f8fafc" font-family="ui-sans-serif,system-ui,Segoe UI,sans-serif" font-size="36" font-weight="700">THredis</text>
  <text x="48" y="142" fill="#cbd5e1" font-family="ui-sans-serif,system-ui,Segoe UI,sans-serif" font-size="15">Tomasulo-style reservation, in-order replies</text>
  <g transform="translate(48 190)" filter="url(#shadow)">
    <rect x="0" y="0" width="120" height="56" rx="10" fill="#334155" stroke="#475569" stroke-width="1.5"/>
    <text x="60" y="34" text-anchor="middle" fill="#e2e8f0" font-family="ui-monospace,Consolas,monospace" font-size="14" font-weight="600">I/O</text>
  </g>
  <path d="M168 218h32" stroke="url(#accent)" stroke-width="3" stroke-linecap="round"/>
  <polygon points="200,218 214,211 214,225" fill="#ea580c"/>
  <g transform="translate(220 178)" filter="url(#shadow)">
    <rect x="0" y="0" width="150" height="80" rx="12" fill="#1e293b" stroke="#64748b" stroke-width="1.5"/>
    <text x="75" y="32" text-anchor="middle" fill="#94a3b8" font-family="ui-sans-serif,system-ui,sans-serif" font-size="11" letter-spacing=".08em">SPSC QUEUES</text>
    <rect x="16" y="44" width="118" height="10" rx="4" fill="#0f172a" stroke="#334155"/>
    <rect x="16" y="44" width="52" height="10" rx="4" fill="url(#accent)" opacity=".9"/>
    <rect x="16" y="60" width="118" height="10" rx="4" fill="#0f172a" stroke="#334155"/>
    <rect x="16" y="60" width="88" height="10" rx="4" fill="#475569"/>
  </g>
  <path d="M370 218h36" stroke="url(#accent)" stroke-width="3" stroke-linecap="round"/>
  <polygon points="406,218 420,211 420,225" fill="#ea580c"/>
  <g transform="translate(432 174)" fill="#334155" stroke="#64748b">
    <rect x="0" y="0" width="88" height="88" rx="12"/>
    <rect x="112" y="0" width="88" height="88" rx="12"/>
    <rect x="224" y="0" width="88" height="88" rx="12"/>
  </g>
  <text x="476" y="214" text-anchor="middle" fill="#cbd5e1" font-family="ui-monospace,Consolas,monospace" font-size="12" font-weight="600">W1</text>
  <text x="588" y="214" text-anchor="middle" fill="#cbd5e1" font-family="ui-monospace,Consolas,monospace" font-size="12" font-weight="600">W2</text>
  <text x="700" y="214" text-anchor="middle" fill="#cbd5e1" font-family="ui-monospace,Consolas,monospace" font-size="12" font-weight="600">Wn</text>
  <text x="476" y="236" text-anchor="middle" fill="#64748b" font-family="ui-sans-serif,system-ui,sans-serif" font-size="10">shard</text>
  <text x="588" y="236" text-anchor="middle" fill="#64748b" font-family="ui-sans-serif,system-ui,sans-serif" font-size="10">shard</text>
  <text x="700" y="236" text-anchor="middle" fill="#64748b" font-family="ui-sans-serif,system-ui,sans-serif" font-size="10">shard</text>
  <g transform="translate(48 300)" filter="url(#shadow)">
    <rect x="0" y="0" width="704" height="92" rx="14" fill="#162032" stroke="#334155" stroke-width="1.5"/>
    <text x="24" y="30" fill="#94a3b8" font-family="ui-sans-serif,sans-serif" font-size="12" letter-spacing=".1em">IN-ORDER DRAIN / REPLY READY BITMASK</text>
    <rect x="24" y="44" width="656" height="18" rx="6" fill="#0f172a" stroke="#1e293b"/>
    <rect x="24" y="44" width="520" height="18" rx="6" fill="url(#accent)" opacity=".35"/>
    <rect x="24" y="44" width="120" height="18" rx="6" fill="url(#accent)" opacity=".95"/>
    <circle cx="40" cy="53" r="4" fill="#fbbf24"/><circle cx="58" cy="53" r="4" fill="#22c55e"/><circle cx="76" cy="53" r="4" fill="#38bdf8"/>
    <circle cx="94" cy="53" r="4" fill="#a78bfa"/>
    <path d="M600 71h76" stroke="#64748b" stroke-width="2" stroke-dasharray="6 6"/>
    <text x="24" y="84" fill="#64748b" font-family="ui-sans-serif,sans-serif" font-size="11">Pipelined batch to single syscall flush</text>
  </g>
</svg>
`,f=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" role="img" aria-labelledby="ttl">
  <title id="ttl">Ray critical-path profiler</title>
  <defs>
    <linearGradient id="bg2" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0c1929"/>
      <stop offset="100%" stop-color="#111827"/>
    </linearGradient>
    <linearGradient id="pathHi" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#22d3ee"/>
      <stop offset="100%" stop-color="#2563eb"/>
    </linearGradient>
    <filter id="glow" x="-30%" y="-30%" width="160%" height="160%">
      <feDropShadow dx="0" dy="0" stdDeviation="4" flood-color="#22d3ee" flood-opacity=".35"/>
    </filter>
  </defs>
  <rect width="800" height="450" rx="28" fill="url(#bg2)"/>
  <text x="48" y="58" fill="#94a3b8" font-family="ui-sans-serif,system-ui,Segoe UI,sans-serif" font-size="14" letter-spacing=".12em">CS546 / RAY CORE</text>
  <text x="48" y="108" fill="#f9fafb" font-family="ui-sans-serif,system-ui,Segoe UI,sans-serif" font-size="32" font-weight="700">Critical-path profiler</text>
  <text x="48" y="142" fill="#cbd5e1" font-family="ui-sans-serif,system-ui,Segoe UI,sans-serif" font-size="15">ObjectRef edges, DAG, longest chain, HTML dashboard</text>
  <g font-family="ui-monospace,Consolas,monospace" font-size="11" fill="#e5e7eb">
    <g transform="translate(120 220)">
      <rect x="-36" y="-22" width="72" height="44" rx="10" fill="#1f2937" stroke="#374151" stroke-width="1.5"/>
      <text x="0" y="5" text-anchor="middle" font-weight="600">T0</text>
    </g>
    <g transform="translate(280 200)">
      <rect x="-36" y="-22" width="72" height="44" rx="10" fill="#1f2937" stroke="#374151" stroke-width="1.5"/>
      <text x="0" y="5" text-anchor="middle" font-weight="600">T1</text>
    </g>
    <g transform="translate(280 268)">
      <rect x="-36" y="-22" width="72" height="44" rx="10" fill="#1f2937" stroke="#374151" stroke-width="1.5"/>
      <text x="0" y="5" text-anchor="middle" font-weight="600">T2</text>
    </g>
    <g transform="translate(440 220)">
      <rect x="-40" y="-24" width="80" height="48" rx="12" fill="#0c4a6e" stroke="url(#pathHi)" stroke-width="2.5" filter="url(#glow)"/>
      <text x="0" y="6" text-anchor="middle" font-weight="700" fill="#e0f2fe">T3</text>
    </g>
    <g transform="translate(600 220)">
      <rect x="-36" y="-22" width="72" height="44" rx="10" fill="#1f2937" stroke="#374151" stroke-width="1.5"/>
      <text x="0" y="5" text-anchor="middle" font-weight="600">T4</text>
    </g>
  </g>
  <g fill="none" stroke-width="2.2" stroke-linecap="round">
    <path d="M156 220h86" stroke="#334155"/>
    <path d="M316 200q40-30 80 20" stroke="#334155"/>
    <path d="M316 268q40 30 80-16" stroke="#334155"/>
    <path d="M320 200h84" stroke="url(#pathHi)" stroke-width="3"/>
    <path d="M320 268h84" stroke="#334155"/>
    <path d="M480 220h96" stroke="url(#pathHi)" stroke-width="3"/>
    <path d="M636 220h40" stroke="#334155"/>
  </g>
  <text x="48" y="340" fill="#64748b" font-family="ui-sans-serif,sans-serif" font-size="12">Critical path highlighted: wait vs compute from State API</text>
  <rect x="48" y="358" width="704" height="56" rx="12" fill="#0b1220" stroke="#1f2937" stroke-width="1"/>
  <text x="64" y="386" fill="#94a3b8" font-family="ui-monospace,monospace" font-size="13">dashboard.html | timeline | CP length | breakdown</text>
  <rect x="64" y="394" width="420" height="6" rx="3" fill="#1f2937"/>
  <rect x="64" y="394" width="280" height="6" rx="3" fill="url(#pathHi)" opacity=".8"/>
</svg>
`;function o(e){return`data:image/svg+xml;charset=utf-8,${encodeURIComponent(e)}`}const h=o(d),p=o(f),t=e=>`/harshshah-portfolio/${e.replace(/^\//,"")}`,m={"mcl-ros":{source:"manual",displayName:"Robotic Manipulation & Planning",description:"Implemented a 6-DOF robotic manipulator planning system using Task-Space Regions (TSRs). The workflow includes: Defining TSR constraints for grasping -> Sample-based planning (RRT) -> Inverse Kinematics solver -> Trajectory execution. Used Python and Jacobian Key Pseudoinverse methods for redundant manipulators.",topics:["robotics","motion-planning","manipulation","rrt","python"],language:"Python",homepage:"#",previewImage:t("images/robotics_sim_real.png"),featured:!0,category:"research"},"medical-prescription-ner":{source:"manual",displayName:"Automated Medical Prescription NER",description:"Developed an OCR and Named Entity Recognition pipeline to extract drug names from handwritten medical prescriptions. Workflow: Image Input -> Pytesseract OCR -> Text Preprocessing -> spaCy NLP Pipeline -> Entity Extraction -> API Query (drugs.com). Achieved 85% accuracy on sample datasets.",topics:["nlp","ocr","spacy","pytesseract","api-integration"],language:"Python",homepage:t("pdf/Final%20Report.pdf"),previewImage:t("images/generated/ner_workflow_flowchart.png"),featured:!0,category:"coursework"},"distributed-event-engine":{source:"manual",displayName:"Enterprise Distributed Compute Engine",description:"Architected a high-throughput distributed computing engine for Fidelity Investments. System processes massive financial datasets using a master-worker architecture (EC2). Features: Redis for state management, FastAPI for job orchestration, and Dask for parallel execution across thousands of CPU cores.",topics:["distributed-systems","fastapi","dask","redis","aws-ec2","fidelity"],language:"Python",homepage:t("pdf/distributed_computing_system.pdf"),previewImage:t("images/generated/distributed_compute_architecture.png"),featured:!0,category:"work"},"jssstu-placement-portal":{source:"manual",displayName:"JSSSTU Official Placement Portal",description:"Developed a full-stack placement portal supporting over 2,500 students, featuring authentication, resume management, feedback workflows, admin analytics, and 80+ REST APIs, deployed on AWS for scalability and high availability.",topics:["full-stack","distributed-systems","cloud","backend"],language:"FastAPI / React",homepage:"https://sjceplacements.org/",previewImage:t("images/placement_portal_logo.png"),featured:!0,category:"product"},recommendify:{source:"manual",displayName:"Recommendify - Movie Recommender",description:"A content-based movie recommendation system built with Flask and Scikit-learn. Uses cosine similarity to recommend movies based on genres, production companies, and keywords. Features a clean, responsive UI for user interaction.",topics:["machine-learning","flask","python","scikit-learn","content-filtering"],language:"Python",homepage:"https://github.com/harshshah1618/recommendify",previewImage:t("images/generated/recommendify_flow_diagram.png"),featured:!0,category:"product"},thredis:{source:"manual",name:"thredis",portfolioOrder:0,displayName:"THredis: Tomasulo-Style Pipelining for Redis",description:"A Redis-compatible in-memory key-value store that adds execution-level pipelining: commands from the same connection execute concurrently on independent worker threads while preserving client-visible reply order and same-key semantics. Architecture mirrors Tomasulo out-of-order execution with IO threads dispatching through lock-free SPSC queues to hash-partitioned workers, atomic reply-ready coordination, and in-order drain. Evaluated vs Redis, KeyDB, and DragonflyDB across memtier_benchmark, redis-benchmark, and YCSB.",topics:["redis","distributed-systems","concurrency","c-cpp","key-value-store","pipelining"],language:"C++",homepage:t("pdf/thredis.pdf"),previewImage:h,featured:!0,category:"research",pushed_at:"2026-05-01T12:00:00Z"},"ray-critical-path-profiler":{source:"manual",name:"ray-critical-path-profiler",portfolioOrder:1,displayName:"Critical-Path Profiler for Ray (CS546)",description:"ray-profiler records data dependencies by instrumenting ray.remote submission (ObjectRef edges including shallow list/tuple unpacking), combines them with Ray State API task timelines to reconstruct the execution DAG, computes the critical path as the longest causal chain, splits wall time into waiting vs compute using state transitions, and presents results in a self-contained HTML dashboard. Evaluation covers Ray batch prediction, skewed analytics via Modin on Ray, and a Daft-on-Ray shuffle/UDF pipeline.",topics:["ray","distributed-computing","profiling","python","dag","critical-path"],language:"Python",homepage:t("pdf/ray_critical_path_profiler.pdf"),previewImage:p,featured:!0,category:"coursework",pushed_at:"2026-04-29T12:00:00Z"}},g={...c,...m},u=Object.fromEntries(Object.entries(g).filter(([,e])=>e.featured===!0));function a(e){return new Date(e.pushed_at??e.created_at??0).getTime()}const b=Object.values(u).sort((e,i)=>{const n=e.portfolioOrder??1e4,r=i.portfolioOrder??1e4;return n!==r?n-r:a(i)-a(e)});export{w as c,b as f,g as r,x as u};
