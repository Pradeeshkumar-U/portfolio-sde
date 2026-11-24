import Section from "./Section";
import { Award, ShieldCheck, Users, CheckCircle2 } from "lucide-react";

const Certifications = () => {
    const certificates = [
        {
            title: "Deep Learning (Top 1%)",
            issuer: "IIT Ropar • NPTEL",
            description: "Completed comprehensive deep learning course ranking in the top 1% of participants.",
            highlight: "Top 1% Elite",
        },
        {
            title: "Machine Learning Specialization",
            issuer: "Coursera",
            description: "Foundational ML algorithms, supervised and unsupervised learning, and best practices.",
            highlight: "Specialization",
        },
        {
            title: "Deep Learning Specialization",
            issuer: "Coursera",
            description: "Neural networks, CNNs, RNNs, transformers, and deep learning model architectures.",
            highlight: "Specialization",
        },
        {
            title: "Problem Solving (Intermediate)",
            issuer: "HackerRank",
            description: "Demonstrated intermediate proficiency in data structures, algorithms, and complexity analysis.",
            highlight: "Verified Skill",
        },
    ];

    const activities = [
        {
            role: "Flight Cadet Rank",
            organization: "National Cadet Corps (NCC)",
            description: "Active cadet training focusing on discipline, aviation fundamentals, leadership, and team cooperation.",
        },
        {
            role: "Public Relations Officer",
            organization: "IEEE Computational Intelligence Society (CIS)",
            description: "Spearheaded outreach, event communications, and student engagement for technical workshops and seminars.",
        },
    ];

    return (
        <Section id="certifications" className="bg-zinc-950">
            <h2 className="text-3xl font-bold mb-12 text-center text-white">
                Certificates & <span className="text-amber-500">Activities</span>
            </h2>

            {/* Certifications Grid */}
            <div className="mb-14">
                <div className="flex items-center gap-2 mb-6 text-zinc-300">
                    <Award className="text-amber-500" size={22} />
                    <h3 className="text-xl font-semibold text-white">Certifications</h3>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {certificates.map((cert, index) => (
                        <div
                            key={index}
                            className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl hover:border-amber-500/40 transition-all flex flex-col justify-between shadow-lg"
                        >
                            <div>
                                <div className="flex justify-between items-start gap-4 mb-2">
                                    <h4 className="text-lg font-bold text-white group-hover:text-amber-500 transition-colors">
                                        {cert.title}
                                    </h4>
                                    <span className="text-xs font-semibold px-2.5 py-1 bg-amber-500/10 text-amber-500 rounded-full shrink-0 border border-amber-500/20">
                                        {cert.highlight}
                                    </span>
                                </div>
                                <p className="text-amber-500/90 text-sm font-medium mb-3">{cert.issuer}</p>
                                <p className="text-zinc-400 text-sm leading-relaxed">{cert.description}</p>
                            </div>
                            <div className="mt-4 pt-4 border-t border-zinc-800/80 flex items-center gap-2 text-xs text-zinc-500">
                                <CheckCircle2 size={14} className="text-amber-500" />
                                <span>Verified Credential</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Extracurricular Activities Grid */}
            <div>
                <div className="flex items-center gap-2 mb-6 text-zinc-300">
                    <Users className="text-amber-500" size={22} />
                    <h3 className="text-xl font-semibold text-white">Extracurricular & Leadership</h3>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {activities.map((act, index) => (
                        <div
                            key={index}
                            className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl hover:border-amber-500/40 transition-all shadow-lg flex gap-4 items-start"
                        >
                            <div className="p-3 bg-zinc-800 rounded-lg text-amber-500 shrink-0 border border-zinc-700/60 mt-1">
                                <ShieldCheck size={22} />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-white">{act.role}</h4>
                                <p className="text-amber-500 text-sm font-medium mb-2">{act.organization}</p>
                                <p className="text-zinc-400 text-sm leading-relaxed">{act.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Certifications;
