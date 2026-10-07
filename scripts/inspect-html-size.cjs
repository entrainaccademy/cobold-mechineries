const http = require('http');

http.get('http://localhost:3005/', res => {
  let d = '';
  res.on('data', c => d += c);
  res.on('end', () => {
    console.log('Total HTML length:', d.length);

    // Check script tags / RSC payload
    const scripts = d.match(/<script[\s\S]*?<\/script>/g) || [];
    console.log(`Found ${scripts.length} script tags.`);
    scripts.forEach((s, i) => {
      console.log(`Script ${i}: ${s.length} chars (src: ${s.match(/src="([^"]+)"/)?.[1] || 'inline'})`);
      if (s.length > 5000) {
        console.log(`   Sample: ${s.substring(0, 300)}...`);
      }
    });

    // Check SVG or inline images or base64
    const base64 = d.match(/data:image\/[a-zA-Z]+;base64,[^"'\s]+/g) || [];
    console.log(`Found ${base64.length} base64 images, total chars:`, base64.reduce((acc, b) => acc + b.length, 0));
  });
});
