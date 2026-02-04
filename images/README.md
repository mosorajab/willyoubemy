# Images Folder 🖼️

Add your funny images here! The app will display them when your Valentine clicks "NO".

## How to use:

1. **Drag and drop** your images directly into this folder from your desktop
2. Update the image names in `src/App.jsx` to match your file names

## Example:

If you have these files:
```
image1.jpg
funny-cat.png
meme.gif
reaction.jpg
```

Then in `src/App.jsx`, update the `images` array:
```javascript
const images = [
  "/images/image1.jpg",
  "/images/funny-cat.png",
  "/images/meme.gif",
  "/images/reaction.jpg",
  // ... more images
]
```

## Supported formats:
- JPG / JPEG
- PNG
- GIF
- WEBP

## Tips:
- Keep image names simple (no spaces or special characters)
- Images will appear in the order you list them in the array
- Each NO click shows the next image in the array
- Resize large images before adding them for faster loading

---

**Note:** You need exactly 9 images (or however many NO responses you have) for best results. If you have fewer images, they will repeat.
