import Section from "./Section";
import { GraduationCap } from "lucide-react";

const Education = () => {
    return (
        <Section id="education" className="bg-zinc-900/50">
            <h2 className="text-3xl font-bold mb-12 text-center text-white">
                <span className="text-amber-500">Education</span>
            </h2>

            <div className="max-w-3xl mx-auto">
                <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-xl hover:border-amber-500/50 transition-all flex flex-col md:flex-row gap-6 items-start md:items-center">
                    <div className="bg-zinc-800 p-4 rounded-full border border-zinc-700 shrink-0">
                        <GraduationCap size={32} className="text-amber-500" />
                    </div>

                    <div className="flex-grow">
                        <h3 className="text-xl font-bold text-white">Bachelor of Computer Science and Engineering</h3>
                        <p className="text-zinc-400">Artificial Intelligence and Machine Learning</p>
                        <p className="text-zinc-500 mt-1">KPR Institute of Engineering and Technology</p>
                    </div>

                    <div className="text-right md:text-right w-full md:w-auto">
                        <span className="block text-amber-500 font-bold text-lg">2023 - 2027</span>
                        <span className="block text-zinc-400 text-sm mt-1">CGPA: 8.6/10</span>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Education;
