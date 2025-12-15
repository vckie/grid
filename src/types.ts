export interface DashboardNode {
    title?: string;
    domain?: string; // Legacy support
    description: string;
    tags?: string[];
    icon?: string;
    items?: DashboardNode[];
    url?: string;
}
