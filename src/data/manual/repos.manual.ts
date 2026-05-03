import type { RepoProps } from "@/types/repo";
import thredisSvgRaw from "@/assets/project-cards/thredis_card.svg?raw";
import rayProfilerSvgRaw from "@/assets/project-cards/ray_profiler_card.svg?raw";

/** Avoids separate asset fetches (subpath `base`, gh-pages, ad blockers on `/assets/`). */
function svgDataUrl(markup: string): string {
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(markup)}`;
}

const thredisPreview = svgDataUrl(thredisSvgRaw);
const rayProfilerPreview = svgDataUrl(rayProfilerSvgRaw);

/** Vite `public/` paths; must match `import.meta.env.BASE_URL` (see vite.config). */
const withBase = (pathFromPublicRoot: string) =>
  `${import.meta.env.BASE_URL}${pathFromPublicRoot.replace(/^\//, "")}`;

export const manualRepos: Record<string, RepoProps> = {
  "mcl-ros": {
    source: "manual",
    displayName: "Robotic Manipulation & Planning",
    description: "Implemented a 6-DOF robotic manipulator planning system using Task-Space Regions (TSRs). The workflow includes: Defining TSR constraints for grasping -> Sample-based planning (RRT) -> Inverse Kinematics solver -> Trajectory execution. Used Python and Jacobian Key Pseudoinverse methods for redundant manipulators.",
    topics: ["robotics", "motion-planning", "manipulation", "rrt", "python"],
    language: "Python",
    homepage: "#",
    previewImage: withBase("images/robotics_sim_real.png"),
    featured: true,
    category: "research",
  },
  "medical-prescription-ner": {
    source: "manual",
    displayName: "Automated Medical Prescription NER",
    description: "Developed an OCR and Named Entity Recognition pipeline to extract drug names from handwritten medical prescriptions. Workflow: Image Input -> Pytesseract OCR -> Text Preprocessing -> spaCy NLP Pipeline -> Entity Extraction -> API Query (drugs.com). Achieved 85% accuracy on sample datasets.",
    topics: ["nlp", "ocr", "spacy", "pytesseract", "api-integration"],
    language: "Python",
    homepage: withBase("pdf/Final%20Report.pdf"),
    previewImage: withBase("images/generated/ner_workflow_flowchart.png"),
    featured: true,
    category: "coursework",
  },
  "distributed-event-engine": {
    source: "manual",
    displayName: "Enterprise Distributed Compute Engine",
    description: "Architected a high-throughput distributed computing engine for Fidelity Investments. System processes massive financial datasets using a master-worker architecture (EC2). Features: Redis for state management, FastAPI for job orchestration, and Dask for parallel execution across thousands of CPU cores.",
    topics: ["distributed-systems", "fastapi", "dask", "redis", "aws-ec2", "fidelity"],
    language: "Python",
    homepage: withBase("pdf/distributed_computing_system.pdf"),
    previewImage: withBase("images/generated/distributed_compute_architecture.png"),
    featured: true,
    category: "work",
  },

  "jssstu-placement-portal": {
    source: "manual",
    displayName: "JSSSTU Official Placement Portal",
    description:
      "Developed a full-stack placement portal supporting over 2,500 students, featuring authentication, resume management, feedback workflows, admin analytics, and 80+ REST APIs, deployed on AWS for scalability and high availability.",
    topics: ["full-stack", "distributed-systems", "cloud", "backend"],
    language: "FastAPI / React",
    homepage: "https://sjceplacements.org/",
    previewImage: withBase("images/placement_portal_logo.png"),
    featured: true,
    category: "product",
  },
  "recommendify": {
    source: "manual",
    displayName: "Recommendify - Movie Recommender",
    description:
      "A content-based movie recommendation system built with Flask and Scikit-learn. Uses cosine similarity to recommend movies based on genres, production companies, and keywords. Features a clean, responsive UI for user interaction.",
    topics: ["machine-learning", "flask", "python", "scikit-learn", "content-filtering"],
    language: "Python",
    homepage: "https://github.com/harshshah1618/recommendify",
    previewImage: withBase("images/generated/recommendify_flow_diagram.png"),
    featured: true,
    category: "product",
  },

  "thredis": {
    source: "manual",
    name: "thredis",
    portfolioOrder: 0,
    displayName: "THredis: Tomasulo-Style Pipelining for Redis",
    description:
      "A Redis-compatible in-memory key-value store that adds execution-level pipelining: commands from the same connection execute concurrently on independent worker threads while preserving client-visible reply order and same-key semantics. Architecture mirrors Tomasulo out-of-order execution with IO threads dispatching through lock-free SPSC queues to hash-partitioned workers, atomic reply-ready coordination, and in-order drain. Evaluated vs Redis, KeyDB, and DragonflyDB across memtier_benchmark, redis-benchmark, and YCSB.",
    topics: ["redis", "distributed-systems", "concurrency", "c-cpp", "key-value-store", "pipelining"],
    language: "C++",
    homepage: withBase("pdf/thredis.pdf"),
    previewImage: thredisPreview,
    featured: true,
    category: "research",
    pushed_at: "2026-05-01T12:00:00Z",
  },

  "ray-critical-path-profiler": {
    source: "manual",
    name: "ray-critical-path-profiler",
    portfolioOrder: 1,
    displayName: "Critical-Path Profiler for Ray (CS546)",
    description:
      "ray-profiler records data dependencies by instrumenting ray.remote submission (ObjectRef edges including shallow list/tuple unpacking), combines them with Ray State API task timelines to reconstruct the execution DAG, computes the critical path as the longest causal chain, splits wall time into waiting vs compute using state transitions, and presents results in a self-contained HTML dashboard. Evaluation covers Ray batch prediction, skewed analytics via Modin on Ray, and a Daft-on-Ray shuffle/UDF pipeline.",
    topics: ["ray", "distributed-computing", "profiling", "python", "dag", "critical-path"],
    language: "Python",
    homepage: withBase("pdf/ray_critical_path_profiler.pdf"),
    previewImage: rayProfilerPreview,
    featured: true,
    category: "coursework",
    pushed_at: "2026-04-29T12:00:00Z",
  },
};
