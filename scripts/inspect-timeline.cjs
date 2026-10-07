const fs = require('fs');

const data = JSON.parse(fs.readFileSync('scripts/lh_home_mobile.json', 'utf8'));
const reqs = data.audits['network-requests'].details.items;

const baseTime = reqs[0].networkRequestTime;
console.log('--- Network Requests on Home (Offset from First Request) ---');
reqs.sort((a, b) => a.networkRequestTime - b.networkRequestTime);
reqs.forEach(r => {
  const start = ((r.networkRequestTime - baseTime) / 1000).toFixed(2);
  const end = ((r.networkEndTime - baseTime) / 1000).toFixed(2);
  const size = (r.transferSize / 1024).toFixed(1);
  console.log(`${start}s - ${end}s (${size}KB, pri:${r.priority}): ${r.statusCode} ${r.resourceType} ${r.url.split('?')[0]}`);
});
