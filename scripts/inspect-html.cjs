const http = require('http');

http.get('http://localhost:3005/', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    console.log('--- Inspecting Home HTML ---');
    console.log('Status:', res.statusCode);
    
    // Check fonts & stylesheets
    const links = data.match(/<link[^>]+>/g) || [];
    console.log('\n<link> tags:');
    links.forEach(l => console.log(' ', l));

    // Check images
    const imgs = data.match(/<img[^>]+>/g) || [];
    console.log(`\nFound ${imgs.length} <img> tags. First 6:`);
    imgs.slice(0, 6).forEach(img => console.log(' ', img));

    // Check if blacklogotr.webp is used
    console.log('\nHas blacklogotr.webp:', data.includes('blacklogotr') && (data.includes('.webp') || data.includes('blacklogotr.1trsn')));
    console.log('Has hm_about1.webp:', data.includes('hm_about1') && data.includes('.webp'));
    console.log('Has Google fonts external import:', data.includes('fonts.googleapis.com'));
  });
});
