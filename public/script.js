class PixelArtEditor {
    constructor() {
        this.currentColor = '#000000';
        this.gridSize = 16;
        this.canvas = document.getElementById('pixelCanvas');
        this.colorOptions = document.querySelectorAll('.color-option');
        this.clearBtn = document.getElementById('clearBtn');
        this.downloadBtn = document.getElementById('downloadBtn');
        this.pixels = [];
        
        this.init();
    }
    
    init() {
        this.createGrid();
        this.setupColorPalette();
        this.setupButtons();
        this.addKeyboardShortcuts();
    }
    
    createGrid() {
        // Clear existing grid
        this.canvas.innerHTML = '';
        this.pixels = [];
        
        // Create 16x16 grid
        for (let i = 0; i < this.gridSize * this.gridSize; i++) {
            const pixel = document.createElement('div');
            pixel.className = 'pixel';
            pixel.dataset.index = i;
            pixel.style.backgroundColor = 'white';
            
            // Add event listeners
            pixel.addEventListener('click', (e) => this.paintPixel(e));
            pixel.addEventListener('mouseenter', (e) => this.previewColor(e));
            pixel.addEventListener('mouseleave', (e) => this.clearPreview(e));
            
            this.canvas.appendChild(pixel);
            this.pixels.push(pixel);
        }
    }
    
    setupColorPalette() {
        this.colorOptions.forEach(option => {
            option.addEventListener('click', (e) => {
                // Remove active class from all options
                this.colorOptions.forEach(opt => opt.classList.remove('active'));
                
                // Add active class to clicked option
                e.target.classList.add('active');
                
                // Update current color
                this.currentColor = e.target.dataset.color;
                
                // Add click animation
                e.target.style.transform = 'scale(0.9)';
                setTimeout(() => {
                    e.target.style.transform = '';
                }, 100);
            });
        });
    }
    
    setupButtons() {
        this.clearBtn.addEventListener('click', () => this.clearCanvas());
        this.downloadBtn.addEventListener('click', () => this.downloadImage());
    }
    
    addKeyboardShortcuts() {
        document.addEventListener('keydown', (e) => {
            if (e.key === 'c' || e.key === 'C') {
                this.clearCanvas();
            } else if (e.key === 'd' || e.key === 'D') {
                this.downloadImage();
            }
        });
    }
    
    paintPixel(e) {
        const pixel = e.target;
        const oldColor = pixel.style.backgroundColor;
        
        // Set new color
        pixel.style.backgroundColor = this.currentColor;
        
        // Add animation class
        pixel.classList.add('changing');
        setTimeout(() => {
            pixel.classList.remove('changing');
        }, 200);
        
        // Add satisfying sound effect (visual feedback)
        this.addRippleEffect(pixel);
    }
    
    previewColor(e) {
        const pixel = e.target;
        if (pixel.style.backgroundColor === 'white' || pixel.style.backgroundColor === 'rgb(255, 255, 255)') {
            pixel.style.backgroundColor = this.currentColor;
            pixel.classList.add('preview');
        }
    }
    
    clearPreview(e) {
        const pixel = e.target;
        if (pixel.classList.contains('preview')) {
            pixel.style.backgroundColor = 'white';
            pixel.classList.remove('preview');
        }
    }
    
    addRippleEffect(pixel) {
        const ripple = document.createElement('div');
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'rgba(255, 255, 255, 0.6)';
        ripple.style.transform = 'scale(0)';
        ripple.style.animation = 'ripple 0.6s linear';
        ripple.style.pointerEvents = 'none';
        
        const rect = pixel.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = rect.left - size / 2 + rect.width / 2 + 'px';
        ripple.style.top = rect.top - size / 2 + rect.height / 2 + 'px';
        
        document.body.appendChild(ripple);
        
        setTimeout(() => {
            document.body.removeChild(ripple);
        }, 600);
    }
    
    clearCanvas() {
        // Add confirmation for non-empty canvas
        const hasColors = this.pixels.some(pixel => 
            pixel.style.backgroundColor !== 'white' && 
            pixel.style.backgroundColor !== 'rgb(255, 255, 255)' &&
            pixel.style.backgroundColor !== ''
        );
        
        if (hasColors && !confirm('Are you sure you want to clear the canvas?')) {
            return;
        }
        
        // Clear all pixels with animation
        this.pixels.forEach((pixel, index) => {
            setTimeout(() => {
                pixel.style.backgroundColor = 'white';
                pixel.classList.add('changing');
                setTimeout(() => {
                    pixel.classList.remove('changing');
                }, 200);
            }, index * 10); // Staggered animation
        });
        
        // Button feedback
        this.clearBtn.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.clearBtn.style.transform = '';
        }, 100);
    }
    
    downloadImage() {
        // Create a canvas element for image generation
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const pixelSize = 20; // Size of each pixel in the final image
        
        canvas.width = this.gridSize * pixelSize;
        canvas.height = this.gridSize * pixelSize;
        
        // Draw each pixel
        this.pixels.forEach((pixel, index) => {
            const row = Math.floor(index / this.gridSize);
            const col = index % this.gridSize;
            const color = pixel.style.backgroundColor || 'white';
            
            ctx.fillStyle = color;
            ctx.fillRect(col * pixelSize, row * pixelSize, pixelSize, pixelSize);
        });
        
        // Create download link
        const link = document.createElement('a');
        link.download = `pixel-art-${Date.now()}.png`;
        link.href = canvas.toDataURL();
        
        // Trigger download
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        // Button feedback
        this.downloadBtn.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.downloadBtn.style.transform = '';
        }, 100);
        
        // Show success message
        this.showNotification('Image downloaded successfully! 🎉');
    }
    
    showNotification(message) {
        const notification = document.createElement('div');
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #2ed573;
            color: white;
            padding: 15px 20px;
            border-radius: 8px;
            font-weight: 600;
            z-index: 1000;
            animation: slideIn 0.3s ease;
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }
}

// Add CSS animations for ripple and notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new PixelArtEditor();
});