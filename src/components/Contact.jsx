import Section from "./Section";
import { Mail, Phone, MapPin, Github, Linkedin, Send, Code2 } from "lucide-react";

const Contact = () => {
    return (
        <Section id="contact" className="bg-zinc-900/50 mb-20">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-white mb-4">
                    Get In <span className="text-amber-500">Touch</span>
                </h2>
                <p className="text-zinc-400 max-w-xl mx-auto">
                    I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                {/* Contact Info */}
                <div className="space-y-6">
                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-zinc-800 rounded-lg text-amber-500">
                            <Mail size={24} />
                        </div>
                        <div>
                            <h3 className="text-white font-semibold">Email</h3>
                            <a href="mailto:pradeeshkumar6382@gmail.com" className="text-zinc-400 hover:text-white transition-colors">
                                pradeeshkumar6382@gmail.com
                            </a>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-zinc-800 rounded-lg text-amber-500">
                            <Phone size={24} />
                        </div>
                        <div>
                            <h3 className="text-white font-semibold">Phone</h3>
                            <p className="text-zinc-400">
                                +91 6382329704
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-zinc-800 rounded-lg text-amber-500">
                            <MapPin size={24} />
                        </div>
                        <div>
                            <h3 className="text-white font-semibold">Location</h3>
                            <p className="text-zinc-400">
                                Coimbatore, Tamil Nadu
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-4 mt-8 pt-8 border-t border-zinc-800">
                        <a href="https://github.com/Pradeeshkumar-U" target="_blank" rel="noopener noreferrer" className="p-3 bg-zinc-800 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-700 transition-all">
                            <Github size={24} />
                        </a>
                        <a href="https://www.linkedin.com/in/pradeeshkumar-u/" target="_blank" rel="noopener noreferrer" className="p-3 bg-zinc-800 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-700 transition-all">
                            <Linkedin size={24} />
                        </a>
                        <a href="https://leetcode.com/u/Pradeeshkumar-U/" target="_blank" rel="noopener noreferrer" className="p-3 bg-zinc-800 rounded-lg font-bold text-zinc-400 hover:text-white hover:bg-zinc-700 transition-all">
                            <Code2 />
                        </a>
                    </div>
                </div>

                {/* Contact Form */}
                <form
                    action="https://formspree.io/f/xdalzwpa"
                    method="POST"
                    className="space-y-4"
                >
                    <div>
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            required
                            className="w-full p-4 bg-zinc-900 border border-zinc-800 rounded-lg focus:outline-none focus:border-amber-500 text-white placeholder-zinc-600 transition-colors"
                        />
                    </div>
                    <div>
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            required
                            className="w-full p-4 bg-zinc-900 border border-zinc-800 rounded-lg focus:outline-none focus:border-amber-500 text-white placeholder-zinc-600 transition-colors"
                        />
                    </div>
                    <div>
                        <textarea
                            rows="4"
                            name="message"
                            placeholder="Your Message"
                            required
                            className="w-full p-4 bg-zinc-900 border border-zinc-800 rounded-lg focus:outline-none focus:border-amber-500 text-white placeholder-zinc-600 transition-colors resize-none"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full py-4 bg-amber-500 text-white font-semibold tracking-widest rounded-lg hover:bg-amber-400 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                    >
                        Send Message <Send size={18} />
                    </button>
                </form>
            </div>
        </Section>
    );
};

export default Contact;
