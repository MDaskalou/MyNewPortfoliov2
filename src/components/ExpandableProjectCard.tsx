import Image from 'next/image';
import { FaGithub, FaPlay, FaTimes, FaChevronDown } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { memo } from 'react';

type ProjectProps = {
    title: string;
    description: string;
    longDescription: string;
    imageUrl: string;
    tags: string[];
    githubUrl: string;
    liveUrl?: string;
    isExpanded: boolean;
    onToggle: () => void;
};

function ExpandableProjectCard({
                                   title,
                                   description,
                                   longDescription,
                                   imageUrl,
                                   tags,
                                   githubUrl,
                                   liveUrl,
                                   isExpanded,
                                   onToggle,
                               }: ProjectProps) {
    return (
        <motion.div
            layout
            initial={false}
            className={`group relative flex flex-col overflow-hidden rounded-xl bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 shadow-2xl border transition-all duration-500 ${
                isExpanded
                    ? 'border-indigo-500/50 shadow-indigo-500/20'
                    : 'border-gray-800/50'
            }`}
            style={{ transformOrigin: 'center center' }}
        >
            {/* Gradient overlay effect */}
            <div className={`absolute inset-0 bg-gradient-to-br transition-all duration-500 pointer-events-none z-10 ${
                isExpanded
                    ? 'from-indigo-600/20 via-purple-600/10 to-pink-600/20'
                    : 'from-indigo-600/0 via-purple-600/0 to-pink-600/0 group-hover:from-indigo-600/10 group-hover:via-purple-600/5 group-hover:to-pink-600/10'
            }`} />

            {/* Clickable header area */}
            <div
                onClick={onToggle}
                className="cursor-pointer"
            >
                {/* Bild med overlay */}
                <motion.div
                    layout
                    className="relative w-full overflow-hidden"
                    animate={{ height: isExpanded ? 320 : 224 }}
                    transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                >
                    <Image
                        src={imageUrl}
                        alt={`Skärmdump av ${title}`}
                        fill
                        className={`object-cover transition-transform duration-500 ${
                            isExpanded ? 'scale-105' : 'group-hover:scale-110'
                        }`}
                        loading="lazy"
                    />
                    {/* Gradient overlay på bild */}
                    <div className={`absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent transition-opacity duration-300 ${
                        isExpanded ? 'opacity-70' : 'opacity-60 group-hover:opacity-40'
                    }`} />

                    {/* Expand/Collapse indicator */}
                    <motion.div
                        className="absolute top-4 right-4 rounded-full bg-gray-900/80 backdrop-blur-sm p-3 shadow-lg border border-gray-700/50"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <motion.div
                            animate={{ rotate: isExpanded ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <FaChevronDown className="text-indigo-400" />
                        </motion.div>
                    </motion.div>

                    {/* Status badge */}
                    {!isExpanded && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="absolute bottom-4 left-4 px-3 py-1.5 rounded-full bg-indigo-600/90 backdrop-blur-sm text-xs font-medium text-white border border-indigo-400/30"
                        >
                            Klicka för mer info
                        </motion.div>
                    )}
                </motion.div>

                {/* Basic content - always visible */}
                <motion.div layout className="relative p-6 z-20">
                    <motion.h3
                        layout
                        className={`mb-3 text-2xl font-bold transition-colors duration-300 ${
                            isExpanded ? 'text-indigo-400' : 'text-white group-hover:text-indigo-400'
                        }`}
                    >
                        {title}
                    </motion.h3>
                    <motion.p
                        layout
                        className="text-gray-400 leading-relaxed"
                    >
                        {description}
                    </motion.p>
                </motion.div>
            </div>

            {/* Expanded content */}
            <AnimatePresence initial={false}>
                {isExpanded && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{
                            opacity: 1,
                            height: 'auto',
                            transition: {
                                height: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
                                opacity: { duration: 0.3, delay: 0.2 }
                            }
                        }}
                        exit={{
                            opacity: 0,
                            height: 0,
                            transition: {
                                height: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
                                opacity: { duration: 0.2 }
                            }
                        }}
                        className="relative z-20"
                    >
                        <div className="px-6 pb-6 space-y-6">
                            {/* Separator line */}
                            <div className="h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />

                            {/* Long description */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                            >
                                <h4 className="text-lg font-semibold text-indigo-400 mb-3">
                                    Om Projektet
                                </h4>
                                <p className="text-gray-300 leading-relaxed">
                                    {longDescription}
                                </p>
                            </motion.div>

                            {/* Taggar */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                            >
                                <h4 className="text-lg font-semibold text-indigo-400 mb-3">
                                    Teknologier
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {tags.map((tag, index) => (
                                        <motion.span
                                            key={tag}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: 0.4 + index * 0.05 }}
                                            className="relative overflow-hidden rounded-full bg-indigo-600/20 px-4 py-2 text-sm font-medium text-indigo-300 border border-indigo-500/30 hover:bg-indigo-600/30 hover:border-indigo-500/50 transition-all duration-300"
                                        >
                                            {tag}
                                        </motion.span>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Länkar */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="flex flex-wrap gap-3 pt-2"
                            >
                                <a
                                    href={githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 rounded-lg bg-gray-800/80 backdrop-blur-sm px-5 py-3 text-sm font-medium text-gray-300 transition-all duration-300 hover:bg-gray-700 hover:text-white border border-gray-700/50 hover:border-gray-600 hover:shadow-lg hover:shadow-gray-700/20"
                                    onClick={(e) => e.stopPropagation()}
                                    aria-label={`Visa ${title} på GitHub`}
                                >
                                    <FaGithub className="text-lg" />
                                    <span>Visa på GitHub</span>
                                </a>
                                {liveUrl && (
                                    <a
                                        href={liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 px-5 py-3 text-sm font-medium text-white transition-all duration-300 hover:from-indigo-500 hover:to-purple-500 hover:shadow-lg hover:shadow-indigo-500/30"
                                        onClick={(e) => e.stopPropagation()}
                                        aria-label={`Visa live demo av ${title}`}
                                    >
                                        <FaPlay className="text-sm" />
                                        <span>Se Live Demo</span>
                                    </a>
                                )}
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Dekorativ glow effect */}
            <div className={`absolute -bottom-20 -right-20 w-40 h-40 bg-indigo-600/20 rounded-full blur-3xl transition-opacity duration-500 pointer-events-none ${
                isExpanded ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
            }`} />
        </motion.div>
    );
}

export default memo(ExpandableProjectCard);