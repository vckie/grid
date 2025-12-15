
import { motion } from 'framer-motion';
import type { DashboardNode } from '../types';
import { Icon } from './Icon';
import { ChevronRight } from 'lucide-react';

interface GroupCardProps {
    item: DashboardNode;
    index: number;
    onClick: (item: DashboardNode) => void;
}

export const GroupCard = ({ item, index, onClick }: GroupCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            onClick={() => onClick(item)}
            className="group relative flex flex-col justify-between p-6 rounded-2xl glass-panel overflow-hidden transition-all duration-300 hover:shadow-2xl hover:bg-white/10 hover:-translate-y-1 cursor-pointer"
            layoutId={`card-${index}`}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Watermark Icon */}
            <div className="absolute -right-8 -bottom-12 text-primary/5 group-hover:text-primary/10 transition-colors pointer-events-none select-none">
                <Icon name={item.icon} className="w-48 h-48 -rotate-12 opacity-50" />
            </div>

            <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-start justify-between mb-4">
                    <div className="bg-primary/20 p-2 rounded-lg text-primary group-hover:text-white transition-colors">
                        <Icon name={item.icon} className="w-8 h-8" />
                    </div>
                    {/* Indicator that this is a group - More prominent now */}
                    <div className="bg-secondary/80 p-1.5 rounded-full ring-1 ring-white/10">
                        <ChevronRight className="w-4 h-4 text-primary" />
                    </div>
                </div>

                <h3 className="text-xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 group-hover:to-white">
                    {item.title}
                </h3>

                <p className="text-muted-foreground text-sm font-medium leading-relaxed mb-4">
                    {item.items?.length || 0} items
                </p>

                {/* Removed Expanded Content Logic - We drill down instead */}
            </div>
        </motion.div>
    );
};

