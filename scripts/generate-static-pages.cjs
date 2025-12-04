const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const copyFile = promisify(fs.copyFile);
const mkdir = promisify(fs.mkdir);
const readdir = promisify(fs.readdir);
const writeFile = promisify(fs.writeFile);
const readFile = promisify(fs.readFile);

const buildDir = path.join(__dirname, '../dist');
const publicDir = path.join(__dirname, '../public');

async function copyPublicFiles() {
  try {
    const files = await readdir(publicDir);
    await Promise.all(
      files
        .filter((file) => file !== 'index.html' && file !== '.htaccess')
        .map((file) => {
          const sourcePath = path.join(publicDir, file);
          const destPath = path.join(buildDir, file);
          
          // Check if file exists before copying
          if (fs.existsSync(sourcePath)) {
            return copyFile(sourcePath, destPath);
          } else {
            console.log(`Skipping ${file} - file not found`);
            return Promise.resolve();
          }
        })
    );
  } catch (error) {
    console.log('Note: Some public files could not be copied:', error.message);
  }
}

async function generateRouteHTML(route) {
  const indexPath = path.join(buildDir, 'index.html');
  let indexContent = await readFile(indexPath, 'utf8');
  
  // Update the title
  const titles = {
    '/about/': 'من نحن',
    '/services/': 'خدماتنا',
    '/nationalities/': 'الجنسيات',
    '/blog/': 'المدونة',
    '/faq/': 'الأسئلة الشائعة',
    '/contact/': 'اتصل بنا',
    '/privacy/': 'سياسة الخصوصية',
    '/terms/': 'شروط الاستخدام',
  };
  
  const routeTitle = titles[route] || 'لمسة';
  
  // Replace title
  indexContent = indexContent.replace(
    /<title>.*?<\/title>/,
    `<title>${routeTitle} | لمسة</title>`
  );
  
  // Update meta description
  const descriptions = {
    '/about/': 'تعرف على مكتب لمسة للعمالة المنزلية - رؤيتنا وقيمنا وخدماتنا',
    '/services/': 'استكشف خدمات مكتب لمسة للعمالة المنزلية - عاملات منزلية من جميع الجنسيات',
    '/nationalities/': 'جنسيات العاملات المنزلية المتوفرة في مكتب لمسة',
    '/blog/': 'المدونة الرسمية لمكتب لمسة - نصائح ومعلومات عن العمالة المنزلية',
    '/faq/': 'الأسئلة الشائعة حول خدمات مكتب لمسة للعمالة المنزلية',
    '/contact/': 'تواصل مع مكتب لمسة للعمالة المنزلية - معلومات الاتصال',
    '/privacy/': 'سياسة الخصوصية لموقع مكتب لمسة للعمالة المنزلية',
    '/terms/': 'شروط وأحكام استخدام موقع مكتب لمسة للعمالة المنزلية',
  };
  
  const routeDescription = descriptions[route] || 'مكتب لمسة للعمالة المنزلية';
  
  indexContent = indexContent.replace(
    /<meta name="description" content=".*?"\/>/,
    `<meta name="description" content="${routeDescription}"/>`
  );
  
  // Update canonical URL - handle multiline and different formats
  indexContent = indexContent.replace(
    /<link[^>]*rel=["']canonical["'][^>]*href=["'][^"']*["'][^>]*\/>/,
    `<link rel="canonical" href="https://ads-lamsa.com${route}"/>`
  );
  
  // Update Open Graph tags
  indexContent = indexContent.replace(
    /<meta property="og:url" content=".*?"\/>/,
    `<meta property="og:url" content="https://ads-lamsa.com${route}"/>`
  );
  
  indexContent = indexContent.replace(
    /<meta property="og:title" content=".*?"\/>/,
    `<meta property="og:title" content="${routeTitle} | لمسة"/>`
  );
  
  indexContent = indexContent.replace(
    /<meta property="og:description" content=".*?"\/>/,
    `<meta property="og:description" content="${routeDescription}"/>`
  );
  
  // Also update Twitter Card URL if present
  indexContent = indexContent.replace(
    /<meta name="twitter:url" content=".*?"\/>/,
    `<meta name="twitter:url" content="https://ads-lamsa.com${route}"/>`
  );
  
  return indexContent;
}

async function createStaticRoutes() {
  const routes = [
    '/about/',
    '/services/',
    '/nationalities/',
    '/blog/',
    '/faq/',
    '/contact/',
    '/privacy/',
    '/terms/',
  ];

  console.log('Creating static routes...');
  
  // Create directories and generate HTML for each route
  for (const route of routes) {
    const dirPath = path.join(buildDir, route);
    await mkdir(dirPath, { recursive: true });
    
    // Generate custom HTML for each route
    const routeContent = await generateRouteHTML(route);
    await writeFile(path.join(dirPath, 'index.html'), routeContent);
    
    console.log(`✓ Generated: ${route}`);
  }
}

async function copyHTAccess() {
  try {
    const htaccessSource = path.join(publicDir, '.htaccess');
    const htaccessDest = path.join(buildDir, '.htaccess');
    
    if (fs.existsSync(htaccessSource)) {
      await copyFile(htaccessSource, htaccessDest);
      console.log('✓ Copied .htaccess file');
    } else {
      console.log('Skipping .htaccess - file not found');
    }
  } catch (error) {
    console.log('Note: .htaccess could not be copied:', error.message);
  }
}

async function run() {
  try {
    console.log('Starting static site generation...\n');
    
    await copyPublicFiles();
    await copyHTAccess();
    await createStaticRoutes();
    
    console.log('\n✅ Static site generation completed successfully!');
    console.log('\n📁 Generated structure:');
    console.log('build/');
    console.log('├── index.html (homepage)');
    console.log('├── about/');
    console.log('│   └── index.html');
    console.log('├── services/');
    console.log('│   └── index.html');
    console.log('├── nationalities/');
    console.log('│   └── index.html');
    console.log('├── blog/');
    console.log('│   └── index.html');
    console.log('├── faq/');
    console.log('│   └── index.html');
    console.log('├── contact/');
    console.log('│   └── index.html');
    console.log('├── privacy/');
    console.log('│   └── index.html');
    console.log('├── terms/');
    console.log('│   └── index.html');
    console.log('├── assets/');
    console.log('│   ├── css/');
    console.log('│   ├── js/');
    console.log('│   └── media/');
    console.log('├── robots.txt');
    console.log('├── sitemap.xml');
    console.log('└── .htaccess');
    
  } catch (error) {
    console.error('❌ Error during static site generation:', error);
    process.exit(1);
  }
}

run();
