import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import type { DashboardNode } from '../types';
import { DashboardCard } from './DashboardCard';
import { Icon } from './Icon';

interface GroupModalProps {
    group: DashboardNode;
    onClose: () => void;
}

export const GroupModal = ({ group, onClose }: GroupModalProps) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
            {/* Backdrop */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="absolute inset-0 bg-background/80 backdrop-blur-md"
            />

            {/* Modal Container */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative w-full max-w-6xl max-h-[90vh] flex flex-col glass-panel rounded-3xl overflow-hidden shadow-2xl border border-white/10"
            >
                {/* Header */}
                <div className="flex items-center justify-between p-6 md:p-8 border-b border-white/5 bg-white/5">
                    <div className="flex items-center gap-4">
                        <div className="bg-primary/20 p-3 rounded-xl text-primary">
                            <Icon name={group.icon} className="w-8 h-8" />
                        </div>
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                                {group.title}
                            </h2>
                            <p className="text-muted-foreground">{group.description}</p>
                        </div>
                    </div>

                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-white/10 rounded-full transition-colors text-muted-foreground hover:text-white"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>

                {/* Content (Scrollable) */}
                <div className="flex-1 overflow-y-auto p-6 md:p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {group.items?.map((item, idx) => (
                            <DashboardCard key={(item.domain || item.title || 'item') + idx} item={item} index={idx} />
                        ))}
                    </div>

                    {(!group.items || group.items.length === 0) && (
                        <div className="text-center py-20 text-muted-foreground">
                            No items in this group.
                        </div>
                    )}
                </div>
            </motion.div>
        </div>
    );
};
