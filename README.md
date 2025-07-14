# 🎨 Pixel Art Editor

A playful and interactive pixel art canvas application built with Node.js and Express. Create beautiful pixel art with an intuitive interface, vibrant colors, and satisfying visual effects!

## ✨ Features

- **16×16 Interactive Grid**: Click to paint pixels with smooth animations
- **Vibrant Color Palette**: 16 carefully selected colors for creative expression
- **Hover Preview**: See color previews before painting
- **Smooth Animations**: Satisfying transitions and visual feedback
- **Download Functionality**: Save your artwork as PNG images
- **Clear Canvas**: Reset your work with confirmation dialog
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Keyboard Shortcuts**: Quick access to clear (C) and download (D)
- **Visual Feedback**: Ripple effects and notifications for better UX

## 🚀 Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the server:**
   ```bash
   npm start
   ```

3. **Open your browser:**
   Navigate to `http://localhost:3000` (or the port shown in terminal)

4. **Start creating:**
   - Click on colors in the palette to select them
   - Click on grid squares to paint
   - Hover over squares to preview colors
   - Use the Clear button to reset
   - Use the Download button to save your art

## 🎮 How to Use

### Basic Controls
- **Select Color**: Click any color in the palette
- **Paint Pixel**: Click on any grid square
- **Preview Color**: Hover over empty (white) squares
- **Clear Canvas**: Click the 🗑️ Clear button
- **Download Art**: Click the 💾 Download button

### Keyboard Shortcuts
- **C**: Clear the canvas
- **D**: Download current artwork

### Mobile Support
The application is fully responsive and touch-friendly:
- Tap to select colors
- Tap to paint pixels
- Optimized grid size for mobile screens
- Touch-friendly button sizes

## 🛠️ Technical Details

### Architecture
- **Backend**: Node.js with Express server
- **Frontend**: Vanilla JavaScript with modern ES6+ features
- **Styling**: Pure CSS with animations and responsive design
- **Grid System**: Div-based 16×16 grid for precise click handling

### Key Components
- **PixelArtEditor Class**: Main application logic
- **Color Management**: Dynamic color selection and preview
- **Canvas Generation**: HTML5 Canvas for image export
- **Animation System**: CSS transitions and JavaScript animations

### File Structure
```
pixel-art-editor/
├── public/
│   ├── index.html      # Main HTML structure
│   ├── styles.css      # Responsive CSS with animations
│   └── script.js       # Interactive JavaScript functionality
├── server.js           # Express server configuration
├── package.json        # Project dependencies and scripts
└── README.md          # This file
```

## 🎨 Color Palette

The application includes 16 vibrant colors:
- **Primary**: Black, White, Red, Green, Blue
- **Secondary**: Yellow, Magenta, Cyan, Orange
- **Extended**: Purple, Pink, Lime, Sky Blue
- **Pastels**: Light Red, Light Green, Light Blue

## 📱 Responsive Design

The application adapts to different screen sizes:
- **Desktop**: Full-sized 400×400px canvas with side controls
- **Tablet**: Stacked layout with optimized spacing
- **Mobile**: Compact 280×280px canvas with touch-friendly controls

## 🔧 Development

### Available Scripts
- `npm start`: Start the production server
- `npm run dev`: Start with nodemon for development

### Customization
You can easily customize:
- **Grid Size**: Modify `gridSize` in `script.js`
- **Colors**: Update the color palette in `index.html`
- **Animations**: Adjust CSS transitions in `styles.css`
- **Canvas Size**: Change dimensions in CSS

## 🌟 Features in Detail

### Interactive Grid
- Div-based grid system for precise click detection
- Smooth hover effects with scale animations
- Color preview on empty squares
- Click animations with ripple effects

### Color Management
- Visual color selection with active state indicators
- Smooth color transitions
- Preview system for better user experience

### Export Functionality
- HTML5 Canvas-based image generation
- High-quality PNG export (320×320px)
- Automatic filename with timestamp
- Success notifications

### User Experience
- Confirmation dialogs for destructive actions
- Keyboard shortcuts for power users
- Visual feedback for all interactions
- Responsive touch controls

## 🎯 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

MIT License - feel free to use this project for learning or personal projects!

## 🤝 Contributing

This is a complete, standalone project perfect for:
- Learning web development concepts
- Understanding responsive design
- Exploring canvas and image generation
- Practicing modern JavaScript

Enjoy creating pixel art! 🎨✨