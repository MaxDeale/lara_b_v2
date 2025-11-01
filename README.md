# Lara Berge Illustrations - Next.js Version

A modern Next.js version of the Lara Berge Illustrations website with an improved gallery interface.

## Features

- **Modern Next.js Framework**: Built with Next.js 14 and React
- **SASS Styling**: All styles converted from plain CSS to SASS modules
- **Improved Gallery**: Enhanced UI with lightbox, keyboard navigation, and hover effects
- **Easy Image Management**: Simply add images to the gallery array - no manual HTML needed
- **Preserved Original Design**: Home and About pages maintain 100% of the original visual design

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Adding New Images to the Gallery

To add new images to the gallery:

1. Place your image file in `public/assets/img/portpics/`
2. Open `app/gallery/page.tsx`
3. Add the filename to the `GALLERY_IMAGES` array:
```typescript
const GALLERY_IMAGES = [
  'beargrlpicnic-min.jpg',
  'your-new-image.jpg',  // Add here
  // ... other images
]
```

4. (Optional) Add a custom title in the `IMAGE_TITLES` object:
```typescript
const IMAGE_TITLES: Record<string, string> = {
  'your-new-image.jpg': 'Your Custom Title',
  // ... other titles
}
```

That's it! The image will automatically appear in the gallery with all the same features (lightbox, hover effects, etc.).

## Project Structure

```
larabv2/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Home page
│   ├── about/             # About page
│   ├── gallery/           # Gallery page (improved)
│   ├── contact/           # Contact page
│   └── layout.tsx         # Root layout
├── components/            # React components
│   ├── Footer.tsx
│   └── Navbar.tsx
├── styles/                # SASS modules
│   ├── globals.scss
│   ├── main.module.scss
│   ├── about.module.scss
│   ├── contact.module.scss
│   └── gallery.module.scss
└── public/                # Static assets
    └── assets/
        └── img/
            └── portpics/  # Gallery images go here
```

## Gallery Features

- **Responsive Grid Layout**: Automatically adjusts to screen size
- **Lightbox View**: Click any image to view full-size
- **Keyboard Navigation**: 
  - Arrow keys to navigate between images
  - Escape to close
- **Hover Effects**: Smooth transitions and overlays
- **Lazy Loading**: Images load as you scroll

## Build for Production

```bash
npm run build
npm start
```

## Notes

- All original visual designs for home and about pages are preserved
- The gallery has been upgraded with modern UI features
- All images are automatically loaded from the assets folder
- External links (like Society6 shop) are preserved

