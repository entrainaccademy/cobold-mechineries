const http = require('http');

http.get('http://localhost:3005/', res => {
  let d = '';
  res.on('data', c => d += c);
  res.on('end', () => {
    // Find all sections
    const sections = d.match(/<section[\s\S]*?<\/section>/g) || [];
    console.log(`Found ${sections.length} <section> elements.`);
    sections.forEach((s, i) => {
      console.log(`Section ${i}: ${s.length} bytes (starts with: ${s.substring(0, 100).replace(/\n/g, ' ')})`);
    });

    console.log('\nNavbar length:', (d.match(/<header[\s\S]*?<\/header>/)?.[0] || '').length);
    console.log('Footer length:', (d.match(/<footer[\s\S]*?<\/footer>/)?.[0] || '').length);
  });
});
