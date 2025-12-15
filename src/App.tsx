
import { useEffect, useState } from 'react';
import { Background } from './components/Background';
import { DashboardCard } from './components/DashboardCard';
import { GroupCard } from './components/GroupCard';
import { GroupModal } from './components/GroupModal';
import type { DashboardNode } from './types';
import { Monitor, Search } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';

function App() {
  const [items, setItems] = useState<DashboardNode[]>([]);
  const [filteredItems, setFilteredItems] = useState<DashboardNode[]>([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [activeGroup, setActiveGroup] = useState<DashboardNode | null>(null);

  useEffect(() => {
    fetch('/list.json')
      .then(res => res.json())
      .then(data => {
        setItems(data);
        setFilteredItems(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching list.json:', err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    // Search now only filters the TOP LEVEL items (the main dashboard)
    // If you search for something inside a group, maybe we should show the group?
    // For now, simplicity: Filter the currently visible list.

    // Actually, users typically want to find "that link" regardless of where it is.
    // BUT preserving the "Folder" metaphor means searching finds Folders.
    // Let's stick to: Search filters the root list.

    const lowerSearch = search.toLowerCase();

    const filtered = items.filter(item =>
      (item.title?.toLowerCase().includes(lowerSearch) || false) ||
      (item.domain?.toLowerCase().includes(lowerSearch) || false) ||
      item.description.toLowerCase().includes(lowerSearch) ||
      (item.tags?.some(tag => tag.toLowerCase().includes(lowerSearch)) || false)
    );

    setFilteredItems(filtered);
  }, [search, items]);

  const handleGroupClick = (group: DashboardNode) => {
    setActiveGroup(group);
    // Search is not cleared here, as the main grid remains visible.
  };

  // handleBack is no longer needed as the modal handles its own closing.

  return (
    <main className="min-h-screen relative p-4 sm:p-8 md:p-12">
      <Background />

      <div className="max-w-7xl mx-auto">
        <header className="mb-12 flex flex-col md:flex-row gap-6 md:items-center justify-between">
          <div className="flex items-center gap-4">
            {/* The header now always shows the main dashboard title */}
            <div className="p-3 bg-primary/20 rounded-xl backdrop-blur-md border border-white/10">
              <Monitor className="w-8 h-8 text-primary" />
            </div>

            <div>
              <h1 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                Nexus Dashboard
              </h1>
              <p className="text-muted-foreground mt-1">
                Centralized command center
              </p>
            </div>
          </div>

          <div className="relative w-full md:w-96 group">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <Search className="w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
            </div>
            <input
              type="text"
              placeholder="Search services, tags..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-secondary/50 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all backdrop-blur-sm"
            />
          </div>
        </header>

        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-primary"></div>
          </div>
        ) : (
          // The main grid is always visible, not animated by AnimatePresence directly
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, idx) => (
              item.items ? (
                <GroupCard
                  key={(item.title || 'group') + idx}
                  item={item}
                  index={idx}
                  onClick={handleGroupClick} // Now sets activeGroup for the modal
                />
              ) : (
                <DashboardCard key={(item.domain || item.title || 'item') + idx} item={item} index={idx} />
              )
            ))}
          </div>
        )}

        {!loading && filteredItems.length === 0 && (
          <div className="text-center py-20 text-muted-foreground">
            No items found.
          </div>
        )}
      </div>

      {/* Modal Overlay */}
      <AnimatePresence>
        {activeGroup && (
          <GroupModal
            group={activeGroup}
            onClose={() => setActiveGroup(null)}
          />
        )}
      </AnimatePresence>
    </main>
  );
}

export default App;

