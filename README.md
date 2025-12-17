# Nexus Dashboard

A centralized, performant, and aesthetic dashboard for all your self-hosted services and external tools. Built with React, TypeScript, and Tailwind CSS.

## Features

-   **Dynamic Configuration**: Add or remove services simply by editing a JSON file.
-   **Groups & Categories**: Organize your services into folders/groups.
-   **Instant Search**: Filter through your services and tags in real-time.
-   **Responsive Design**: Works perfectly on desktop, tablet, and mobile.
-   **Performance**: Optimized with Vite and lightweight animations.

## Installation & Running

1.  **Clone the repository**:
    ```bash
    git clone <repository-url>
    cd dashboard
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Start the development server**:
    ```bash
    npm run dev
    ```

## Configuration (Our Flow)

To add, remove, or modify the links on your dashboard, you do **not** need to touch the React code. Everything is driven by the `public/list.json` file.

### How to Edit

1.  Open `public/list.json`.
2.  Add a new object to the array for a new item or group.

### Schema Reference

There are two types of entries: **Items** (direct links) and **Groups** (folders containing items).

#### 1. Simple Item
```json
{
  "title": "Service Name",
  "description": "Brief description of the service",
  "url": "https://service.local",
  "icon": "cloud",
  "tags": ["infrastructure", "local"]
}
```

#### 2. Group (Folder)
```json
{
  "title": "My Group",
  "description": "Collection of related tools",
  "icon": "briefcase",
  "items": [
    {
      "title": "Tool Inside Group",
      "description": "...",
      "url": "...",
      "icon": "code-braces"
    }
  ]
}
```

### Icons

The dashboard supports:
1.  **Mapped Icons**: `shield-search`, `chart-line`, `workflow`, `docker`, `graph`, `shuffle`, `code-braces`, `account-key`, `cloud`, `radar`, `briefcase`, `post`.
2.  **Image URLs**: Provide a full URL (e.g., `https://example.com/icon.png`) or a local path (e.g., `/icons/my-icon.svg`) starting with `/` or `http`.

## Tech Stack

-   **Framework**: [React](https://react.dev/) + [Vite](https://vitejs.dev/)
-   **Language**: [TypeScript](https://www.typescriptlang.org/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **Icons**: [Lucide React](https://lucide.dev/)
-   **Animations**: [Framer Motion](https://www.framer.com/motion/)
