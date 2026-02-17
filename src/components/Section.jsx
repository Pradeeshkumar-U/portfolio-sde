import { motion } from "framer-motion";

const Section = ({
    id,
    children,
    className = "",
}) => {
    return (
        <section id={id} className={`py-20 px-6 max-w-7xl mx-auto ${className}`}>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                {children}
            </motion.div>
        </section>
    );
};

export default Section;
