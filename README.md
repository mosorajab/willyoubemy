# Will You Be My Valentine? 💕

A fun, modern interactive web app to ask your special someone to be your Valentine!

## Features ✨

- **Interactive YES Button**: Grows bigger every time "NO" is clicked
- **Fun Responses**: The NO button text changes with each click
- **Smooth Animations**: Beautiful transitions and floating hearts
- **Success Screen**: Confetti and celebration when she says YES!
- **Responsive Design**: Works perfectly on mobile and desktop
- **Modern UI**: Gradient backgrounds and gradient buttons

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Locally
```bash
npm run dev
```
Then open `http://localhost:5173` in your browser.

### 3. Deploy to GitHub Pages

#### First time setup:
```bash
# Initialize git if you haven't already
git init
git add .
git commit -m "Initial commit"

# Create a new repository on GitHub (name it 'willyoubemy')
# Then run:
git remote add origin https://github.com/YOUR_USERNAME/willyoubemy.git
git branch -M main
git push -u origin main
```

#### Build and deploy:
```bash
npm run build
npm run deploy
```

Your app will be available at: `https://YOUR_USERNAME.github.io/willyoubemy/`

### 4. Customize

Edit `src/App.jsx` to:
- Change the messages
- Modify the emojis
- Customize the responses array
- Change button text

Edit `src/App.css` to:
- Change colors (modify the gradient colors)
- Adjust font sizes
- Modify animation speeds

## Features in Detail

- **YES Button**: Starts at a base size and increases by 4px for each NO click
- **NO Button**: 
  - Changes text with each click
  - Moves away when hovered (fun effect)
  - Has up to 9 different funny responses
- **Success Screen**: Shows celebration with:
  - Large "YES!" text
  - Confetti animation
  - Heartbeat animation
  - Success messages

## Browser Support

Works on all modern browsers:
- Chrome/Edge
- Firefox
- Safari
- Mobile browsers

## Technologies Used

- **React 18**: Modern UI library
- **Vite**: Lightning-fast build tool
- **CSS3**: Animations and gradients
- **gh-pages**: Easy GitHub Pages deployment

## License

Made with ❤️ for your special Valentine!
