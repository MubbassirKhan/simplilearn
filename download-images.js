const https = require('https');
const fs = require('fs');
const path = require('path');

// Image assets from Figma
const assets = {
  // Background Images
  heroBg: 'https://www.figma.com/api/mcp/asset/f4d69924-ffb9-4e3f-8b21-d81af9c671f7',
  insightsBg: 'https://www.figma.com/api/mcp/asset/c7802f3a-cece-4340-bc36-efbac5364a1a',
  patternBg: 'https://www.figma.com/api/mcp/asset/57f60684-94d3-458e-b45f-9be56560384c',
  footerBg: 'https://www.figma.com/api/mcp/asset/78e3e8d0-ec40-4f73-b1ab-67531288df37',
  
  // Speaker Images
  robLauber: 'https://www.figma.com/api/mcp/asset/cffa97cc-3006-43d3-8b69-02739d0e0e1c',
  krishnaKumar: 'https://www.figma.com/api/mcp/asset/08191e7b-c074-4c1c-9d9a-d88510576f82',
  sudiptoMitra: 'https://www.figma.com/api/mcp/asset/df12a0e2-fcbd-46c6-a0bb-1416feab5142',
  
  // Logo
  logo: 'https://www.figma.com/api/mcp/asset/29136212-b2a6-4cc7-b3ad-9609f66581e4',
  
  // Icons
  analytics: 'https://www.figma.com/api/mcp/asset/bec42bb6-18c9-4afa-8573-9a1f7dd8eb13',
  rocketLaunch: 'https://www.figma.com/api/mcp/asset/c5a43347-aac9-49dc-a515-521ddb56a252',
  accountTree: 'https://www.figma.com/api/mcp/asset/7e604a40-8e01-44f6-8c1c-b016ad3ec10a',
  flowsheet: 'https://www.figma.com/api/mcp/asset/dd132435-f574-4f5d-82ca-33046264e9dc',
  history: 'https://www.figma.com/api/mcp/asset/b47cbe1b-b6ee-4858-b82b-f29313821df8',
  verifiedUser: 'https://www.figma.com/api/mcp/asset/10d89fb9-2458-4b42-9b8a-3c7e026cdef5',
};

// Create directories if they don't exist
const dirs = {
  backgrounds: path.join(__dirname, 'public', 'images', 'backgrounds'),
  speakers: path.join(__dirname, 'public', 'images', 'speakers'),
  icons: path.join(__dirname, 'public', 'images', 'icons'),
  logo: path.join(__dirname, 'public', 'images'),
};

Object.values(dirs).forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// Function to download an image
function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath);
    
    https.get(url, (response) => {
      // Handle redirects
      if (response.statusCode === 301 || response.statusCode === 302) {
        return downloadImage(response.headers.location, filepath)
          .then(resolve)
          .catch(reject);
      }
      
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
        return;
      }
      
      response.pipe(file);
      
      file.on('finish', () => {
        file.close();
        console.log(`✓ Downloaded: ${path.basename(filepath)}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(filepath, () => {}); // Delete the file on error
      reject(err);
    });
  });
}

// Map assets to their local paths
const downloads = [
  // Backgrounds
  { url: assets.heroBg, path: path.join(dirs.backgrounds, 'hero-bg.png') },
  { url: assets.insightsBg, path: path.join(dirs.backgrounds, 'insights-bg.png') },
  { url: assets.patternBg, path: path.join(dirs.backgrounds, 'pattern-bg.png') },
  { url: assets.footerBg, path: path.join(dirs.backgrounds, 'footer-bg.png') },
  
  // Speakers
  { url: assets.robLauber, path: path.join(dirs.speakers, 'rob-lauber.png') },
  { url: assets.krishnaKumar, path: path.join(dirs.speakers, 'krishna-kumar.png') },
  { url: assets.sudiptoMitra, path: path.join(dirs.speakers, 'sudipto-mitra.png') },
  
  // Logo
  { url: assets.logo, path: path.join(dirs.logo, 'logo.png') },
  
  // Icons
  { url: assets.analytics, path: path.join(dirs.icons, 'analytics.png') },
  { url: assets.rocketLaunch, path: path.join(dirs.icons, 'rocket-launch.png') },
  { url: assets.accountTree, path: path.join(dirs.icons, 'account-tree.png') },
  { url: assets.flowsheet, path: path.join(dirs.icons, 'flowsheet.png') },
  { url: assets.history, path: path.join(dirs.icons, 'history.png') },
  { url: assets.verifiedUser, path: path.join(dirs.icons, 'verified-user.png') },
];

// Download all images
async function downloadAll() {
  console.log('Starting image downloads...\n');
  
  for (const item of downloads) {
    try {
      await downloadImage(item.url, item.path);
    } catch (error) {
      console.error(`✗ Failed to download ${path.basename(item.path)}:`, error.message);
    }
  }
  
  console.log('\n✓ All downloads complete!');
  console.log('\nNext steps:');
  console.log('1. Update src/lib/assets.ts to use local paths');
  console.log('2. Remove this script or keep it for future updates');
}

downloadAll().catch(console.error);
