import type { RepoProps } from "@/types/repo";
import site from "@/data/generated/site.json";

export const manualRepos: Record<string, RepoProps> = {
  "mcl-ros": {
    source: "manual",
    displayName: "Robotic Manipulation & Planning",
    description: "Implemented a 6-DOF robotic manipulator planning system using Task-Space Regions (TSRs). The workflow includes: Defining TSR constraints for grasping -> Sample-based planning (RRT) -> Inverse Kinematics solver -> Trajectory execution. Used Python and Jacobian Key Pseudoinverse methods for redundant manipulators.",
    topics: ["robotics", "motion-planning", "manipulation", "rrt", "python"],
    language: "Python",
    homepage: "#",
    previewImage: `${site.base}images/robotics_sim_real.png`,
    featured: true,
    category: "research",
  },
  "medical-prescription-ner": {
    source: "manual",
    displayName: "Automated Medical Prescription NER",
    description: "Developed an OCR and Named Entity Recognition pipeline to extract drug names from handwritten medical prescriptions. Workflow: Image Input -> Pytesseract OCR -> Text Preprocessing -> spaCy NLP Pipeline -> Entity Extraction -> API Query (drugs.com). Achieved 85% accuracy on sample datasets.",
    topics: ["nlp", "ocr", "spacy", "pytesseract", "api-integration"],
    language: "Python",
    homepage: `${site.base}pdf/Final%20Report.pdf`,
    previewImage: `${site.base}images/generated/ner_workflow_flowchart.png`,
    featured: true,
    category: "coursework",
  },
  "distributed-event-engine": {
    source: "manual",
    displayName: "Enterprise Distributed Compute Engine",
    description: "Architected a high-throughput distributed computing engine for Fidelity Investments. System processes massive financial datasets using a master-worker architecture (EC2). Features: Redis for state management, FastAPI for job orchestration, and Dask for parallel execution across thousands of CPU cores.",
    topics: ["distributed-systems", "fastapi", "dask", "redis", "aws-ec2", "fidelity"],
    language: "Python",
    homepage: `${site.base}pdf/distributed_computing_system.pdf`,
    previewImage: `${site.base}images/generated/distributed_compute_architecture.png`,
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
    previewImage: `${site.base}images/placement_portal_logo.png`,
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
    previewImage: `${site.base}images/generated/recommendify_flow_diagram.png`,
    featured: true,
    category: "product",
  },
};
