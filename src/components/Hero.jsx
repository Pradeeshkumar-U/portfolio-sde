import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { ArrowRight, Download } from "lucide-react";

const Hero = () => {
    return (
        <section
            id="hero"
            className="min-h-screen flex items-center justify-center relative overflow-hidden bg-zinc-950 pt-20"
        >
            {/* Abstract Background Elements */}
            <div className="absolute top-20 right-0 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-900/10 rounded-full blur-3xl" />

            <div className="container mx-auto w-[70rem] relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6 text-center md:text-left order-2 md:order-1">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-amber-500 font-medium tracking-wide text-lg mb-2">
                                HELLO, I'M
                            </h2>
                            <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-white leading-tight whitespace-nowrap">
                                Pradeeshkumar U
                            </h1>
                            <h3 className="text-2xl md:text-3xl text-zinc-400 mt-2 font-light">
                                Software Engineer
                            </h3>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-zinc-400 max-w-xl text-lg leading-relaxed mx-auto md:mx-0"
                        >
                            Passionate about building scalable mobile applications using Node.js, Flutter, and Firebase.
                            Focused on creating user-centric digital experiences.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start"
                        >
                            <Link
                                to="projects"
                                smooth={true}
                                duration={500}
                                offset={-70}
                                className="px-8 mx-5 lg:mx-0 py-3 bg-white text-black font-semibold rounded-lg hover:bg-zinc-200 transition-all flex items-center justify-center gap-2 cursor-pointer"
                            >
                                View Projects <ArrowRight size={20} />
                            </Link>
                            <a
                                href="/Pradeeshkumar_Resume.pdf"
                                download="Pradeeshkumar_Resume.pdf"
                                className="px-8 mx-5 lg:mx-0 py-3 bg-transparent border border-zinc-700 text-white font-semibold rounded-lg hover:bg-zinc-800 transition-all flex items-center justify-center gap-2"
                            >
                                Resume <Download size={20} />
                            </a>
                        </motion.div>
                    </div>

                    {/* Profile Image / Decorative Element */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex justify-center md:justify-end order-1 md:order-2"
                    >
                        <div className="relative w-64 h-64 md:w-80 md:h-80 border-2 border-zinc-800 rounded-full flex items-center justify-center bg-zinc-900/50 backdrop-blur-sm overflow-hidden">
                            <img
                                src="/portfolio.png"
                                alt="Pradeeshkumar U"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                    e.target.nextSibling.style.display = 'block'; // Show fallback
                                }}
                            />
                            {/* Placeholder for Profile Image Fallback */}
                            <span className="text-6xl font-bold text-zinc-700 hidden">PK</span>

                            {/* Rotating Ring */}
                            <div className="absolute inset-0 border-t-2 border-r-2 border-amber-500 rounded-full animate-spin-slow" style={{ animationDuration: '10s' }} />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
