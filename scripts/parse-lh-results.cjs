const fs = require('fs');

function report(filePath, label) {
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${filePath}`);
    return;
  }
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  const perf = data.categories.performance;
  const a = data.audits;

  console.log(`\n========================================`);
  console.log(`  LIGHTHOUSE MOBILE AUDIT: ${label}`);
  console.log(`========================================`);
  console.log(`Performance Score: ${Math.round(perf.score * 100)} / 100`);
  console.log(`FCP:               ${a['first-contentful-paint'].displayValue} (numeric: ${Math.round(a['first-contentful-paint'].numericValue)} ms)`);
  console.log(`LCP:               ${a['largest-contentful-paint'].displayValue} (numeric: ${Math.round(a['largest-contentful-paint'].numericValue)} ms)`);
  console.log(`Speed Index:       ${a['speed-index'].displayValue} (numeric: ${Math.round(a['speed-index'].numericValue)} ms)`);
  console.log(`TBT:               ${a['total-blocking-time'].displayValue} (numeric: ${Math.round(a['total-blocking-time'].numericValue)} ms)`);
  console.log(`CLS:               ${a['cumulative-layout-shift'].displayValue}`);

  console.log(`\n--- Key Audits ---`);
  const renderBlocking = a['render-blocking-resources'] || a['render-blocking-requests'];
  if (renderBlocking) {
    console.log(`Render-blocking savings: ${renderBlocking.displayValue || 'None'} (score: ${renderBlocking.score})`);
    if (renderBlocking.details && renderBlocking.details.items) {
      renderBlocking.details.items.forEach(it => console.log(`   - ${it.url} (wasted: ${it.wastedMs} ms)`));
    }
  }

  const properlySize = a['uses-responsive-images'] || a['properly-size-images'];
  if (properlySize) {
    console.log(`Properly size images: ${properlySize.displayValue || 'Passed'} (score: ${properlySize.score})`);
    if (properlySize.details && properlySize.details.items && properlySize.details.items.length) {
      properlySize.details.items.forEach(it => console.log(`   - ${it.url} (wasted: ${Math.round(it.wastedBytes / 1024)} KiB)`));
    }
  }

  const modernFormats = a['modern-image-formats'];
  if (modernFormats) {
    console.log(`Modern image formats: ${modernFormats.displayValue || 'Passed'} (score: ${modernFormats.score})`);
    if (modernFormats.details && modernFormats.details.items && modernFormats.details.items.length) {
      modernFormats.details.items.forEach(it => console.log(`   - ${it.url} (wasted: ${Math.round(it.wastedBytes / 1024)} KiB)`));
    }
  }

  const explicitDims = a['image-size-responsive'];
  if (explicitDims) {
    console.log(`Explicit image dimensions: score ${explicitDims.score}`);
  }

  const fontDisplay = a['font-display'];
  if (fontDisplay) {
    console.log(`Font display: score ${fontDisplay.score}`);
  }
}

report('scripts/lh_home_mobile.json', 'HOME (/)');
report('scripts/lh_about_mobile.json', 'ABOUT (/about)');
