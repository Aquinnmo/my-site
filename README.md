# Adam's Personal React Site

This is a personal website built with React. It showcases projects, experience, and interests.

## Features
- Modern responsive design
- Clean, functional mobile UI
- Project portfolio
- Experience and interests pages
- Team guessing game

## Getting Started

### Prerequisites
- Node.js (v16 or higher recommended)
- npm

### Installation
1. Clone the repository:
   ```sh
   git clone <your-repo-url>
   cd personal-site
   ```
2. Install dependencies:
   ```sh
   npm install
   ```

### Running the App
To start the development server:
```sh
npm run dev
```

The site will be available at `http://localhost:3000` by default.

## Project Structure
- `src/` - Source files
  - `components/` - Component files
  - `pages/` - Pages
- `public/` - Static assets
- `index.html` - Main HTML file
- `vercel.json` - Vercel deployment config

## Deployment
This project can be deployed on Vercel or any static hosting provider.

## Other Notes
This project uses the React Router for internal page management.

## License
MIT

<details>
<summary>Next Improvements</summary>

| Improvement | How |
|-----:|-----------|
| Refactoring `src/style.css` | - Break into individual style sheets per page/component  <br>- Factor out reusable styles for consistency |
| Embedding stats.fm profile stats | - Pull data via API or web scraping  <br>- Contact stats.fm for API access/docs  <br>- Try embedding via iframe |
| Make the mobile UI more robust | - Further modularize `style.css`  <br>- Improve mobile responsiveness |
| 404 Page | - Redesign to be fun and interactive  <br>- Add a mini-game or engaging element |
| Component structure | - Refactor pages to use reusable, modular components  <br>- Improve maintainability and scalability |

</details>