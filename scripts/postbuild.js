const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const copyFile = promisify(fs.copyFile);
const mkdir = promisify(fs.mkdir);
const readdir = promisify(fs.readdir);
const writeFile = promisify(fs.writeFile);

const buildDir = path.join(__dirname, '../build');
const publicDir = path.join(__dirname, '../public');

async function copyPublicFiles() {
  const files = await readdir(publicDir);
  await Promise.all(
    files
      .filter((file) => file !== 'index.html' && file !== '.htaccess')
      .map((file) => copyFile(path.join(publicDir, file), path.join(buildDir, file)))
  );
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

  // Read the main index.html
  const indexPath = path.join(buildDir, 'index.html');
  const indexContent = await fs.promises.readFile(indexPath, 'utf8');

  // Create directories and copy index.html
  for (const route of routes) {
    const dirPath = path.join(buildDir, route);
    await mkdir(dirPath, { recursive: true });
    
    // Create a custom index.html for each route
    const routeContent = indexContent.replace(
      /<title>.*?<\/title>/,
      `<title>${getRouteTitle(route)} | لمسة</title>`
    );
    
    await writeFile(path.join(dirPath, 'index.html'), routeContent);
  }
}

function getRouteTitle(route) {
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
  return titles[route] || 'لمسة';
}

async function run() {
  try {
    console.log('Running postbuild script...');
    await copyPublicFiles();
    await createStaticRoutes();
    console.log('Postbuild completed successfully!');
    console.log('Generated folders:');
    const routes = ['/about/', '/services/', '/nationalities/', '/blog/', '/faq/', '/contact/', '/privacy/', '/terms/'];
    routes.forEach(route => console.log(`  - ${route}`));
  } catch (error) {
    console.error('Error during postbuild:', error);
    process.exit(1);
  }
}

run();
