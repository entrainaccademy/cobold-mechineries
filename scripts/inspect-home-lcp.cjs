const fs = require('fs');

const data = JSON.parse(fs.readFileSync('scripts/lh_home_mobile.json', 'utf8'));
const a = data.audits;

console.log('--- Home LCP Element ---');
const lcpElement = a['largest-contentful-paint-element'];
if (lcpElement && lcpElement.details && lcpElement.details.items) {
  lcpElement.details.items.forEach(it => {
    console.log('Node snippet:', it.node ? it.node.snippet : 'N/A');
    console.log('Node selector:', it.node ? it.node.selector : 'N/A');
  });
}

console.log('\n--- Failed/Warning Audits on Home ---');
for (const [key, audit] of Object.entries(a)) {
  if (audit.score !== null && audit.score < 0.9 && audit.details && audit.details.type === 'opportunity') {
    console.log(`${audit.title}: ${audit.displayValue} (score: ${audit.score})`);
    if (audit.details.items && audit.details.items.length) {
      audit.details.items.slice(0, 5).forEach(it => {
        console.log(`   - ${it.url || it.node?.snippet || JSON.stringify(it)}`);
      });
    }
  }
}

console.log('\n--- LCP Diagnostics ---');
const lcpBreakdown = a['lcp-breakdown'] || a['largest-contentful-paint'];
console.log(JSON.stringify(lcpBreakdown, null, 2).substring(0, 800));
