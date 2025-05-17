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

## Next Improvements
 - Refactoring `src/style.css`
   - break down into individual style sheets for each page for the unique components
   - factor out reusable portions of styling to maintain consistency
 - embedding `stats.fm` profile stats
   - either through an API pull or may need to webscrape it
   - need to contact the `stats.fm` team about how to grab info
   - OR find the iframe for it
 - make the mobile UI more robust
   - even more refactoring of `style.css`
 - 404 Page
   - Need to make it more fun
   - make it interactive? -> adding a game?
 - Component structure
   - update the pages to utilize a more reusable component structure