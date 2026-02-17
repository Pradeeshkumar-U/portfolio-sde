import Section from "./Section";
import { Calendar, Briefcase } from "lucide-react";

const Experience = () => {
    const experiences = [
        {
            role: "Software Developer Intern",
            company: "Foretec Electric",
            period: "Dec 2025 – Jan 2026",
            description: [
                "Implemented a subscription management system with secure monthly recurring payments.",
                "Designed a scalable backend using MongoDB and Express.js with JWT-based authentication.",
                "Enforced single-device access per subscription by validating device-level usage.",
            ],
        },
        {
            role: "Mobile App Developer",
            company: "Onekit Inc",
            period: "Jul 2025 – Present",
            description: [
                "Building a cross-platform ticket booking mobile application using Flutter.",
                "Integrating Firebase Authentication, Firestore, and Cloud Functions for real-time data.",
                "Designing efficient Firestore data schemas and backend workflows.",
            ],
        },
    ];

    return (
        <Section id="experience" className="bg-zinc-950">
            <h2 className="text-3xl font-bold mb-12 text-center text-white">
                Professional <span className="text-amber-500">Experience</span>
            </h2>

            <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-zinc-700 before:to-transparent">
                {experiences.map((exp, index) => (
                    <div
                        key={index}
                        className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                    >
                        {/* Icon */}
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-zinc-700 bg-zinc-900 group-hover:bg-amber-500 transition-colors shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-lg z-10">
                            <Briefcase size={18} className="text-zinc-400 group-hover:text-white" />
                        </div>

                        {/* Content Card */}
                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-zinc-900 p-4 md:p-6 rounded-xl border border-zinc-800 shadow-lg hover:border-amber-500/50 transition-all">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2 sm:gap-0">
                                <h3 className="font-bold text-base md:text-lg text-white">{exp.role}</h3>
                                <span className="text-xs text-amber-500 font-semibold px-2 py-1 bg-amber-500/10 rounded-full w-fit">
                                    {exp.period}
                                </span>
                            </div>
                            <h4 className="text-zinc-400 font-medium mb-3 flex items-center gap-2 text-sm md:text-base">
                                <Briefcase size={14} /> {exp.company}
                            </h4>
                            <ul className="list-disc list-outside ml-4 space-y-2 text-zinc-400 text-xs md:text-sm">
                                {exp.description.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Experience;
