import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function optimizeImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const outputPath = filePath;
  
  try {
    const image = sharp(filePath);
    const metadata = await image.metadata();
    
    console.log(`Processing: ${path.basename(filePath)} (${metadata.width}x${metadata.height})`);
    
    if (ext === '.png') {
      await image
        .resize({ width: Math.min(metadata.width, 1200), withoutEnlargement: true })
        .png({ quality: 80, compressionLevel: 9 })
        .toFile(outputPath + '.tmp');
    } else if (ext === '.jpg' || ext === '.jpeg') {
      await image
        .resize({ width: Math.min(metadata.width, 1200), withoutEnlargement: true })
        .jpeg({ quality: 80 })
        .toFile(outputPath + '.tmp');
    }
    
    // Replace original with optimized
    fs.renameSync(outputPath + '.tmp', outputPath);
    console.log(`✓ Optimized: ${path.basename(filePath)}`);
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

async function optimizeDirectory(dirPath) {
  const files = fs.readdirSync(dirPath);
  
  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const ext = path.extname(file).toLowerCase();
    
    if (fs.statSync(filePath).isFile() && ['.png', '.jpg', '.jpeg'].includes(ext)) {
      await optimizeImage(filePath);
    }
  }
}

async function main() {
  console.log('Starting image optimization...\n');
  
  const productsDir = path.join(__dirname, 'src/assets/products');
  const partnersDir = path.join(__dirname, 'src/assets/partners');
  const pharmevoLogo = path.join(__dirname, 'src/assets/pharmevo.png');
  
  // Optimize products
  if (fs.existsSync(productsDir)) {
    console.log('Optimizing products images...');
    await optimizeDirectory(productsDir);
  }
  
  // Optimize partners
  if (fs.existsSync(partnersDir)) {
    console.log('\nOptimizing partners images...');
    await optimizeDirectory(partnersDir);
  }
  
  // Optimize pharmevo logo
  if (fs.existsSync(pharmevoLogo)) {
    console.log('\nOptimizing pharmevo logo...');
    await optimizeImage(pharmevoLogo);
  }
  
  console.log('\n✓ All images optimized!');
}

main().catch(console.error);
