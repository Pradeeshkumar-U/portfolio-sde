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
                        I am a passionate <span className="text-amber-500 font-semibold">Software Engineer</span> currently pursuing my Bachelor's in Computer Science and Engineering (AI & ML) at KPR Institute of Engineering and Technology (2023-2027).
                    </p>
                    <p className="text-zinc-400 leading-relaxed mb-4">
                        With a strong foundation in <span className="text-white">Full Stack Development</span>, I specialize in building scalable mobile applications. My expertise spans across Node.js, Express.js and Flutter, backed by robust database knowledge in MongoDB, PostgreSQL, and Redis.
                    </p>
                    <p className="text-zinc-400 leading-relaxed">
                        I thrive on creating user-focused products and am always eager to learn new technologies to solve real-world problems.
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-zinc-800 p-6 rounded-lg text-center hover:bg-zinc-700 transition-colors border border-zinc-700">
                        <h3 className="text-3xl font-bold text-amber-500">20k+</h3>
                        <p className="text-sm text-zinc-400 mt-2">App Downloads</p>
                    </div>
                    <div className="bg-zinc-800 p-6 rounded-lg text-center hover:bg-zinc-700 transition-colors border border-zinc-700">
                        <h3 className="text-3xl font-bold text-amber-500">5+</h3>
                        <p className="text-sm text-zinc-400 mt-2">Projects Completed</p>
                    </div>
                    <div className="bg-zinc-800 p-6 rounded-lg text-center hover:bg-zinc-700 transition-colors border border-zinc-700">
                        <h3 className="text-3xl font-bold text-amber-500">8.73</h3>
                        <p className="text-sm text-zinc-400 mt-2">CGPA</p>
                    </div>
                    <div className="bg-zinc-800 p-6 rounded-lg text-center hover:bg-zinc-700 transition-colors border border-zinc-700">
                        <h3 className="text-3xl font-bold text-amber-500">2+</h3>
                        <p className="text-sm text-zinc-400 mt-2">Years Coding</p>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default About;
