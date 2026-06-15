import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const dirs = ['src/assets', 'public'];

async function convert() {
  for (const dir of dirs) {
    const fullPath = path.resolve(dir);
    if (!fs.existsSync(fullPath)) continue;
    
    const files = fs.readdirSync(fullPath);
    for (const file of files) {
      if (/\.(png|jpe?g)$/i.test(file)) {
        const inputPath = path.join(fullPath, file);
        const outputPath = path.join(fullPath, file.replace(/\.(png|jpe?g)$/i, '.webp'));
        
        if (fs.existsSync(outputPath)) {
          console.log(`Skipping ${inputPath}, already converted`);
          continue;
        }

        console.log(`Converting ${inputPath} to ${outputPath}`);
        await sharp(inputPath)
          .webp({ quality: 80 })
          .toFile(outputPath);
      }
    }
  }
}

convert().catch(console.error);
