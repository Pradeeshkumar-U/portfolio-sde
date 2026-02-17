import Section from "./Section";

const Skills = () => {
    const skillCategories = [
        {
            title: "Languages & Core",
            skills: ["Java", "Python", "JavaScript", "Dart", "SQL", "HTML5", "CSS3"],
        },
        {
            title: "Frameworks & Libraries",
            skills: ["React.js", "Node.js", "Express.js", "Flutter", "Tailwind CSS"],
        },
        {
            title: "Databases & Cloud",
            skills: ["MongoDB", "PostgreSQL", "Redis", "Firebase"],
        },
        {
            title: "Tools & DevOps",
            skills: ["Git", "GitHub", "VS Code", "Postman", "IntelliJ IDEA"],
        },
    ];

    return (
        <Section id="skills" className="bg-zinc-950">
            <h2 className="text-3xl font-bold mb-12 text-center text-white">
                Technical <span className="text-amber-500">Skills</span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {skillCategories.map((category, index) => (
                    <div
                        key={index}
                        className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl hover:border-amber-500/30 transition-colors"
                    >
                        <h3 className="text-lg font-bold text-white mb-4 border-b border-zinc-700 pb-2">
                            {category.title}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {category.skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="px-3 py-1 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-sm rounded-md transition-colors cursor-default"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Skills;
