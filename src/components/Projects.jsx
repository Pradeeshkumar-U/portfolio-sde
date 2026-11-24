import Section from "./Section";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
    const projects = [
        {
            title: "Tamil FM Radio",
            category: "Mobile App • 25,000+ Downloads",
            description: "Built and deployed a Flutter-based mobile application for real-time radio streaming with optimized audio playback, achieving 25,000+ downloads. Managed application data in PostgreSQL and developed a Node.js admin backend for secure content management.",
            stack: ["Flutter", "Dart", "PostgreSQL", "Node.js", "Express.js", "Play Store"],
            links: { demo: "https://play.google.com/store/apps/details?id=com.lazyPanda.Diwan" },
            image: "/projects/tamilfm.png"
        },
        {
            title: "IEEE 519 Limit Finder",
            category: "Subscription Platform",
            description: "Architected a production-ready subscription platform to manage recurring plans, user access control, and subscription state transitions. Designed optimized MongoDB data models and exposed secure REST APIs.",
            stack: ["Flutter", "Dart", "MongoDB", "Express.js", "Node.js", "Play Store"],
            links: { demo: "https://play.google.com/store/apps/details?id=com.foretec.tdd" },
            image: "/projects/ieee.png"
        },
        {
            title: "KPRIET Hostellers App",
            category: "Campus Mobile Application",
            description: "Built and deployed a Flutter-based mobile application for QR-based meal tracking with real-time validation, preventing duplicate attendance. Developed a Spring Boot backend with database integration for secure authentication and scan logging.",
            stack: ["Flutter", "Dart", "Spring Boot", "REST APIs", "Database Integration"],
            links: { demo: "" },
            image: "/projects/kpriet.svg"
        },
    ];

    return (
        <Section id="projects" className="bg-zinc-900/50">
            <h2 className="text-3xl font-bold mb-12 text-center text-white">
                Featured <span className="text-amber-500">Projects</span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="group bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden hover:border-amber-500/50 transition-all hover:-translate-y-1 shadow-lg flex flex-col h-full"
                    >
                        {/* Project Image */}
                        <div className="h-48 bg-zinc-800 relative overflow-hidden group-hover:bg-zinc-700 transition-colors shrink-0">
                            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent opacity-60 z-10" />
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-500"
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.style.display = 'none';
                                    e.target.nextSibling.style.display = 'flex'; // Show fallback
                                }}
                            />
                            {/* Fallback if image fails to load */}
                            <div className="absolute inset-0 flex items-center justify-center hidden bg-zinc-800">
                                <h3 className="text-2xl font-bold text-zinc-700 group-hover:text-amber-500 transition-colors z-10">{project.title[0]}</h3>
                            </div>
                        </div>

                        <div className="p-4 md:p-6 flex flex-col flex-grow">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-amber-500 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-xs text-zinc-500 mt-1 uppercase tracking-wider">{project.category}</p>
                                </div>
                            </div>

                            <p className="text-zinc-400 text-sm mb-6 line-clamp-3">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.stack.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-3 py-1 bg-zinc-800 text-zinc-300 text-xs rounded-full border border-zinc-700"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="mt-auto flex gap-4 pt-4 border-t border-zinc-800">
                                {project.links?.demo ? (
                                    <a
                                        href={project.links.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-sm text-white hover:text-amber-500 transition-colors"
                                    >
                                        <ExternalLink size={16} />
                                        {project.links.demo.includes("play.google.com") ? "Play Store" : "View Deployment"}
                                    </a>
                                ) : (
                                    <span className="flex items-center gap-2 text-sm text-zinc-400">
                                        <ExternalLink size={16} /> Production App
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Projects;
