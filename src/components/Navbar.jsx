import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "About", to: "about" },
        { name: "Experience", to: "experience" },
        // Projects link removed as per request to only keep in Hero
        { name: "Skills", to: "skills" },
        { name: "Contact", to: "contact" },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled || isOpen ? "bg-zinc-900/95 backdrop-blur-md shadow-lg" : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-end md:justify-center items-center">

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.to}
                            smooth={true}
                            duration={500}
                            offset={-70}
                            className="text-zinc-400 hover:text-white cursor-pointer transition-colors text-sm font-medium uppercase tracking-wide"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-white hover:text-amber-500 transition-colors"
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-zinc-900 border-t border-zinc-800"
                    >
                        <div className="flex flex-col py-6 space-y-4 text-center">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.to}
                                    smooth={true}
                                    duration={500}
                                    offset={-70}
                                    onClick={() => setIsOpen(false)}
                                    className="text-zinc-400 hover:text-white text-xl font-medium cursor-pointer transition-colors py-2"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
