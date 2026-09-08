const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const svgLogo = `<svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGradient" x1="0" y1="0" x2="512" y2="512" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#0073E6"/>
      <stop offset="100%" stop-color="#054FB9"/>
    </linearGradient>
    <linearGradient id="iconGradient" x1="128" y1="128" x2="384" y2="384" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="100%" stop-color="#B3C7F7"/>
    </linearGradient>
  </defs>
  <rect width="512" height="512" rx="128" fill="url(#bgGradient)"/>
  <rect x="12" y="12" width="488" height="488" rx="116" stroke="#8BABF1" stroke-width="12" stroke-opacity="0.4"/>
  
  <!-- Dog Face Line Art -->
  <!-- Left Ear -->
  <path d="M 135 150 C 90 190, 80 270, 130 310 C 150 326, 170 300, 160 270 C 150 240, 145 190, 170 160 Z" fill="url(#iconGradient)"/>
  <!-- Right Ear -->
  <path d="M 377 150 C 422 190, 432 270, 382 310 C 362 326, 342 300, 352 270 C 362 240, 367 190, 342 160 Z" fill="url(#iconGradient)"/>
  
  <!-- Head dome -->
  <path d="M 160 190 C 190 140, 322 140, 352 190 C 372 230, 372 320, 342 360 C 310 400, 202 400, 170 360 C 140 320, 140 230, 160 190 Z" fill="none" stroke="url(#iconGradient)" stroke-width="24" stroke-linejoin="round"/>
  
  <!-- Eyes -->
  <circle cx="205" cy="235" r="18" fill="url(#iconGradient)"/>
  <circle cx="307" cy="235" r="18" fill="url(#iconGradient)"/>
  
  <!-- Nose & Muzzle -->
  <path d="M 226 290 Q 256 265 286 290 Q 256 325 226 290 Z" fill="url(#iconGradient)"/>
  <path d="M 256 305 L 256 340 M 256 340 C 236 360, 216 350, 206 335 M 256 340 C 276 360, 296 350, 306 335" stroke="url(#iconGradient)" stroke-width="18" stroke-linecap="round" fill="none"/>
</svg>`;

async function generate() {
  const publicImgDir = path.join(__dirname, '../public/images');
  const publicDir = path.join(__dirname, '../public');
  const appDir = path.join(__dirname, '../app');

  const logoBuffer = Buffer.from(svgLogo);

  // 1. Generate 512x512 PNG
  await sharp(logoBuffer)
    .resize(512, 512)
    .png()
    .toFile(path.join(publicImgDir, 'pawsmetric_logo.png'));
  console.log('Generated pawsmetric_logo.png (512x512)');

  // 2. Generate 180x180 Apple Icon
  await sharp(logoBuffer)
    .resize(180, 180)
    .png()
    .toFile(path.join(appDir, 'apple-icon.png'));
  console.log('Generated app/apple-icon.png (180x180)');

  // 3. Generate 32x32 Icon
  await sharp(logoBuffer)
    .resize(32, 32)
    .png()
    .toFile(path.join(appDir, 'icon.png'));
  console.log('Generated app/icon.png (32x32)');

  // 4. Generate favicon.ico
  await sharp(logoBuffer)
    .resize(32, 32)
    .png()
    .toFile(path.join(publicDir, 'favicon.ico'));
  console.log('Generated public/favicon.ico (32x32)');
}

generate().catch(console.error);
