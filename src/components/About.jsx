import Section from "./Section";

const About = () => {
    return (
        <Section id="about" className="bg-zinc-900/50 md:px-12 lg:px-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="mb-8 md:mb-0">
                    <h2 className="text-3xl font-bold mb-6 border-l-4 border-amber-500 pl-4 text-white">
                        About Me
                    </h2>
                    <p className="text-zinc-400 leading-relaxed mb-4">
                        I am an <span className="text-amber-500 font-semibold">Aspiring Software Engineer</span> currently pursuing my Bachelor of Computer Science and Engineering (Artificial Intelligence and Machine Learning) at KPR Institute of Engineering and Technology (2023-2027) with an <span className="text-white font-medium">8.73/10 CGPA</span>.
                    </p>
                    <p className="text-zinc-400 leading-relaxed mb-4">
                        Experienced in building scalable cross-platform mobile and backend applications with <span className="text-white">Node.js, Express.js, .NET, Spring Boot, and Flutter</span>, using <span className="text-white">MongoDB, Firebase, Supabase, and PostgreSQL</span>.
                    </p>
                    <p className="text-zinc-400 leading-relaxed">
                        I have solved <span className="text-amber-500 font-medium">150+ LeetCode problems</span>, demonstrating strong data structures and algorithms skills, and actively contribute as a Flight Cadet in the NCC and Public Relations Officer at IEEE CIS.
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-zinc-800 p-6 rounded-lg text-center hover:bg-zinc-700 transition-colors border border-zinc-700">
                        <h3 className="text-3xl font-bold text-amber-500">25k+</h3>
                        <p className="text-sm text-zinc-400 mt-2">App Downloads</p>
                    </div>
                    <div className="bg-zinc-800 p-6 rounded-lg text-center hover:bg-zinc-700 transition-colors border border-zinc-700">
                        <h3 className="text-3xl font-bold text-amber-500">150+</h3>
                        <p className="text-sm text-zinc-400 mt-2">LeetCode Solved</p>
                    </div>
                    <div className="bg-zinc-800 p-6 rounded-lg text-center hover:bg-zinc-700 transition-colors border border-zinc-700">
                        <h3 className="text-3xl font-bold text-amber-500">8.73</h3>
                        <p className="text-sm text-zinc-400 mt-2">CGPA</p>
                    </div>
                    <div className="bg-zinc-800 p-6 rounded-lg text-center hover:bg-zinc-700 transition-colors border border-zinc-700">
                        <h3 className="text-3xl font-bold text-amber-500">Top 1%</h3>
                        <p className="text-sm text-zinc-400 mt-2">NPTEL IIT Ropar</p>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default About;
