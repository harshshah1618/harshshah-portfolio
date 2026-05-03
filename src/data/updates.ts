export interface Update {
    date: string;
    title: string;
    description: string;
    type: "hackathon" | "news" | "achievement";
    link?: string;
    tags?: string[];
}

export const updates: Update[] = [
    {
        date: "Jan 2026",
        title: "ICAROS Lab",
        description: "Working on Quality Diversity Algorithms for Reinforcement Learning.",
        type: "news",
        tags: ["RL", "Robotics"],
    },
    {
        date: "Jan 2026",
        title: "USC Liquid Propulsion Lab",
        description: "Working as a software engineer on the Digital Acquisition and Controls Team.",
        type: "news",
        tags: ["Avionics", "Python"],
    },
   
    {
        date: "Jan 2026",
        title: "Google Origin Weekend",
        description: "Secured a Top 10 finish. Pitched a project that could reduce the number of Tire Wear Particles entering the environment.",
        type: "hackathon",
        tags: ["GCP", "Hackathon", "Top 10"],
    },
     {
        date: "Nov 2025",
        title: "Q3 Quantum Computing Hackathon hosted by IBM",
        description: "Ranked in the Top 10 finalists. Explored quantum algorithms for optimization problems. Built a MVP for a quantum calculator and demonstarted possible use cases.",
        type: "hackathon",
        tags: ["Quantum Computing", "Hackathon", "Top 10"],
    },
     {
        date: "Aug 2025",
        title: "Started my Master's program at USC!",
        description: "I have taken Algorithms, Machine Learning, Robotics and AI as my core subjects.",
        type: "news",
        tags: ["USC", "Masters"],
    },
    {
        date: "Nov 2022",
        title: "JPMC Code for Good",
        description: "Finalist in the prestigious Code for Good hackathon by JPMorgan Chase & Co. Developed a social good solution for a non-profit.",
        type: "hackathon",
        tags: ["Social Good", "Hackathon", "Finalist"],
    },
];
