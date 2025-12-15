import {
    Shield,
    LineChart,
    Workflow,
    Container,
    Network,
    Shuffle,
    Code2,
    KeyRound,
    Cloud,
    Radar,
    Briefcase,
    FileText,
    Globe
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
    'shield-search': Shield,
    'chart-line': LineChart,
    'workflow': Workflow,
    'docker': Container,
    'graph': Network,
    'shuffle': Shuffle,
    'code-braces': Code2,
    'account-key': KeyRound,
    'cloud': Cloud,
    'radar': Radar,
    'briefcase': Briefcase,
    'post': FileText,
};

interface IconProps {
    name?: string;
    className?: string;
}

export const Icon = ({ name, className }: IconProps) => {
    if (!name) return <Globe className={className} />;

    // Check if the name is an image URL
    if (name.startsWith('http') || name.startsWith('/')) {
        return (
            <img
                src={name}
                alt="Icon"
                className={`${className} object-contain`} // Ensure image preserves aspect ratio
            />
        );
    }

    const IconComponent = iconMap[name] || Globe;
    return <IconComponent className={className} />;
};
