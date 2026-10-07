const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function optimizeImages() {
  console.log('--- Starting Image Optimization ---');

  // 1. Logo: blacklogotr.png
  // Used in Navbar (h-8 mobile = ~108x32, h-15 desktop = ~202x60) and Footer (h-12 = ~162x48)
  // We produce a crisp WebP at max width 600 (more than enough for 3x retina on desktop)
  const logoPath = path.join(__dirname, '../src/assets/blacklogotr.png');
  const logoWebpPath = path.join(__dirname, '../src/assets/blacklogotr.webp');
  const publicLogoWebp = path.join(__dirname, '../public/blacklogotr.webp');
  
  if (fs.existsSync(logoPath)) {
    const origSize = fs.statSync(logoPath).size;
    const meta = await sharp(logoPath).metadata();
    console.log(`Original logo: ${meta.width}x${meta.height}, ${origSize} bytes`);
    
    // Save crisp webp maintaining transparency
    await sharp(logoPath)
      .resize({ width: 600, fit: 'inside', withoutEnlargement: true })
      .webp({ quality: 90, effort: 6 })
      .toFile(logoWebpPath);
    
    await sharp(logoPath)
      .resize({ width: 600, fit: 'inside', withoutEnlargement: true })
      .webp({ quality: 90, effort: 6 })
      .toFile(publicLogoWebp);

    const publicLogoPng = path.join(__dirname, '../public/blacklogotr.png');
    const tempCompressedPng = path.join(__dirname, '../public/blacklogotr_opt.png');
    await sharp(logoPath)
      .resize({ width: 800, fit: 'inside', withoutEnlargement: true })
      .png({ compressionLevel: 9, palette: true })
      .toFile(tempCompressedPng);
    if (fs.existsSync(tempCompressedPng)) {
      fs.copyFileSync(tempCompressedPng, publicLogoPng);
      fs.unlinkSync(tempCompressedPng);
      console.log(`Optimized public/blacklogotr.png to ${fs.statSync(publicLogoPng).size} bytes`);
    }
      
    const newSize = fs.statSync(logoWebpPath).size;
    console.log(`Optimized logo (WebP): ${newSize} bytes (Saved ${origSize - newSize} bytes, ${(100 - (newSize/origSize*100)).toFixed(1)}%)`);
  }

  // 2. hm_about1.jpg
  // Used in Home (Company Overview) and About (Story)
  const aboutPath = path.join(__dirname, '../src/assets/hm_about1.jpg');
  const aboutWebpPath = path.join(__dirname, '../src/assets/hm_about1.webp');
  if (fs.existsSync(aboutPath)) {
    const origSize = fs.statSync(aboutPath).size;
    const meta = await sharp(aboutPath).metadata();
    console.log(`Original hm_about1: ${meta.width}x${meta.height}, ${origSize} bytes`);

    await sharp(aboutPath)
      .resize({ width: 1000, fit: 'inside', withoutEnlargement: true })
      .webp({ quality: 82, effort: 6 })
      .toFile(aboutWebpPath);

    const newSize = fs.statSync(aboutWebpPath).size;
    console.log(`Optimized hm_about1 (WebP): ${newSize} bytes (Saved ${origSize - newSize} bytes, ${(100 - (newSize/origSize*100)).toFixed(1)}%)`);
  }

  // 3. eatveg.png (Client logo)
  const eatvegPath = path.join(__dirname, '../src/assets/eatveg.png');
  const eatvegWebpPath = path.join(__dirname, '../src/assets/eatveg.webp');
  if (fs.existsSync(eatvegPath)) {
    const origSize = fs.statSync(eatvegPath).size;
    const meta = await sharp(eatvegPath).metadata();
    console.log(`Original eatveg: ${meta.width}x${meta.height}, ${origSize} bytes`);

    // Client logos are displayed at ~144x64 max. 300px width is plenty for 2x retina
    await sharp(eatvegPath)
      .resize({ width: 300, fit: 'inside', withoutEnlargement: true })
      .webp({ quality: 88, effort: 6 })
      .toFile(eatvegWebpPath);

    const newSize = fs.statSync(eatvegWebpPath).size;
    console.log(`Optimized eatveg (WebP): ${newSize} bytes (Saved ${origSize - newSize} bytes, ${(100 - (newSize/origSize*100)).toFixed(1)}%)`);
  }

  // 4. mfc.png (Client logo)
  const mfcPath = path.join(__dirname, '../src/assets/mfc.png');
  const mfcWebpPath = path.join(__dirname, '../src/assets/mfc.webp');
  if (fs.existsSync(mfcPath)) {
    const origSize = fs.statSync(mfcPath).size;
    const meta = await sharp(mfcPath).metadata();
    console.log(`Original mfc: ${meta.width}x${meta.height}, ${origSize} bytes`);

    await sharp(mfcPath)
      .resize({ width: 300, fit: 'inside', withoutEnlargement: true })
      .webp({ quality: 88, effort: 6 })
      .toFile(mfcWebpPath);

    const newSize = fs.statSync(mfcWebpPath).size;
    console.log(`Optimized mfc (WebP): ${newSize} bytes (Saved ${origSize - newSize} bytes, ${(100 - (newSize/origSize*100)).toFixed(1)}%)`);
  }

  // 5. p13.png (Product image)
  const p13Path = path.join(__dirname, '../src/assets/Products/p13.png');
  const p13WebpPath = path.join(__dirname, '../src/assets/Products/p13.webp');
  if (fs.existsSync(p13Path)) {
    const origSize = fs.statSync(p13Path).size;
    const meta = await sharp(p13Path).metadata();
    console.log(`Original p13: ${meta.width}x${meta.height}, ${origSize} bytes`);

    await sharp(p13Path)
      .resize({ width: 500, fit: 'inside', withoutEnlargement: true })
      .webp({ quality: 85, effort: 6 })
      .toFile(p13WebpPath);

    const newSize = fs.statSync(p13WebpPath).size;
    console.log(`Optimized p13 (WebP): ${newSize} bytes (Saved ${origSize - newSize} bytes, ${(100 - (newSize/origSize*100)).toFixed(1)}%)`);
  }

  // 6. Other client logos in src/assets if they are uncompressed
  const otherLogos = ['icon_sml2.png', 'neva2.png', 'sattara2n.png', 'chicky_bells.png', 'supreme2.png'];
  for (const name of otherLogos) {
    const srcPath = path.join(__dirname, '../src/assets', name);
    const destPath = path.join(__dirname, '../src/assets', name.replace(/\.(png|jpg|jpeg)$/, '.webp'));
    if (fs.existsSync(srcPath)) {
      const origSize = fs.statSync(srcPath).size;
      await sharp(srcPath)
        .resize({ width: 280, fit: 'inside', withoutEnlargement: true })
        .webp({ quality: 88, effort: 6 })
        .toFile(destPath);
      const newSize = fs.statSync(destPath).size;
      console.log(`Optimized ${name} (WebP): ${origSize} -> ${newSize} bytes`);
    }
  }

  // 7. Product showcase images on Home: p3.jpeg, p5.jpg, docota 4.jpg, p6.jpeg, TableTopFoodMixer2.jpeg, p17.jpg
  const homeProducts = [
    { src: 'Products/p3.jpeg', dest: 'Products/p3.webp' },
    { src: 'Products/p5.jpg', dest: 'Products/p5.webp' },
    { src: 'docota 4.jpg', dest: 'docota 4.webp' },
    { src: 'Products/p6.jpeg', dest: 'Products/p6.webp' },
    { src: 'TableTopFoodMixer2.jpeg', dest: 'TableTopFoodMixer2.webp' },
    { src: 'Products/p17.jpg', dest: 'Products/p17.webp' },
  ];
  for (const item of homeProducts) {
    const srcPath = path.join(__dirname, '../src/assets', item.src);
    const destPath = path.join(__dirname, '../src/assets', item.dest);
    if (fs.existsSync(srcPath)) {
      const origSize = fs.statSync(srcPath).size;
      await sharp(srcPath)
        .resize({ width: 500, fit: 'inside', withoutEnlargement: true })
        .webp({ quality: 82, effort: 6 })
        .toFile(destPath);
      const newSize = fs.statSync(destPath).size;
      console.log(`Optimized ${item.src} (WebP): ${origSize} -> ${newSize} bytes`);
    }
  }

  // 8. Sliders (Gallery/Banners): slider1.jpg (529KB), slider2.jpg (1078KB), slider3.jpeg (2420KB)
  const sliders = [
    { src: 'slider1.jpg', dest: 'slider1.webp' },
    { src: 'slider2.jpg', dest: 'slider2.webp' },
    { src: 'slider3.jpeg', dest: 'slider3.webp' },
  ];

  for (const item of sliders) {
    const srcPath = path.join(__dirname, '../src/assets', item.src);
    const destPath = path.join(__dirname, '../src/assets', item.dest);
    if (fs.existsSync(srcPath)) {
      const origSize = fs.statSync(srcPath).size;
      await sharp(srcPath)
        .resize({ width: 1200, fit: 'inside', withoutEnlargement: true })
        .webp({ quality: 80, effort: 6 })
        .toFile(destPath);
      const newSize = fs.statSync(destPath).size;
      console.log(`Optimized ${item.src} (WebP): ${origSize} -> ${newSize} bytes (Saved ${origSize - newSize} bytes, ${(100 - (newSize/origSize*100)).toFixed(1)}%)`);
    }
  }

  // 9. Services images: service1-service7 (total ~1.2MB)
  for (let i = 1; i <= 7; i++) {
    const srcPath = path.join(__dirname, `../src/assets/service${i}.jpg`);
    const destPath = path.join(__dirname, `../src/assets/service${i}.webp`);
    if (fs.existsSync(srcPath)) {
      const origSize = fs.statSync(srcPath).size;
      await sharp(srcPath)
        .resize({ width: 800, fit: 'inside', withoutEnlargement: true })
        .webp({ quality: 80, effort: 6 })
        .toFile(destPath);
      const newSize = fs.statSync(destPath).size;
      console.log(`Optimized service${i}.jpg (WebP): ${origSize} -> ${newSize} bytes (Saved ${origSize - newSize} bytes, ${(100 - (newSize/origSize*100)).toFixed(1)}%)`);
    }
  }

  console.log('--- Image Optimization Complete ---');
}

optimizeImages().catch(err => {
  console.error('Error optimizing images:', err);
  process.exit(1);
});
