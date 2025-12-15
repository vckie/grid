
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import type { DashboardNode } from '../types';
import { Icon } from './Icon';

interface DashboardCardProps {
    item: DashboardNode;
    index: number;
}

export const DashboardCard = ({ item, index }: DashboardCardProps) => {
    const displayTitle = item.title || item.domain || 'Untitled';
    const href = item.domain?.startsWith('http') ? item.domain : `https://${item.domain}`;

    return (
        <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            className="group relative flex flex-col justify-between p-6 rounded-2xl glass-panel overflow-hidden hover:bg-white/10 transition-colors"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Watermark Icon */}
            <div className="absolute -right-8 -bottom-12 text-primary/5 group-hover:text-primary/10 transition-colors pointer-events-none select-none">
                <Icon name={item.icon} className="w-48 h-48 -rotate-12 opacity-50" />
            </div>

            <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                    <div className="bg-primary/20 p-2 rounded-lg text-primary group-hover:text-white transition-colors">
                        <Icon
                            name={item.icon}
                            className="w-6 h-6 sm:w-8 sm:h-8"
                        />
                    </div>
                    <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors opacity-0 group-hover:opacity-100" />
                </div>

                <h3 className="text-xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 group-hover:to-white">
                    {displayTitle}
                </h3>

                <p className="text-muted-foreground text-sm font-medium leading-relaxed mb-6">
                    {item.description}
                </p>
            </div>

            <div className="relative z-10 flex flex-wrap gap-2 mt-auto">
                {item.tags?.map((tag) => (
                    <span
                        key={tag}
                        className="px-2.5 py-1 text-xs font-semibold rounded-full bg-secondary/50 text-secondary-foreground border border-white/5"
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </motion.a>
    );
};
