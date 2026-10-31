import assert from 'node:assert/strict';
const base = process.env.TEST_BASE_URL || 'http://localhost:3000';
const token = process.env.TEST_NFC_TOKEN;
const phone = process.env.TEST_NFC_PHONE;
for (const path of ['/', '/connect', '/resume', '/sitemap.xml', '/connect/contact']) {
  const response = await fetch(base + path);
  assert.equal(response.status, 200, path);
  const text = await response.text();
  assert.ok(!text.includes('/tap/'), `${path}: private link leaked`);
  if (phone) assert.ok(!text.includes(phone), `${path}: phone leaked`);
  if (path.endsWith('/contact')) assert.ok(!text.includes('TEL;'), 'Public vCard contains a phone');
}
for (const path of ['/tap/invalid-test-token', '/tap/invalid-test-token/contact']) {
  const response = await fetch(base + path);
  assert.equal(response.status, 404);
  assert.match(response.headers.get('x-robots-tag') || '', /noindex/);
  assert.match(response.headers.get('cache-control') || '', /no-store/);
}
if (token && phone) {
  for (const suffix of ['', '/contact']) {
    const response = await fetch(`${base}/tap/${encodeURIComponent(token)}${suffix}`);
    assert.equal(response.status, 200);
    assert.match(response.headers.get('cache-control') || '', /no-store/);
    assert.match(response.headers.get('x-robots-tag') || '', /noindex, nofollow, noarchive/);
    assert.equal(response.headers.get('referrer-policy'), 'no-referrer');
    const text = await response.text();
    assert.ok(text.includes(phone));
    if (suffix) {
      assert.ok(text.startsWith('BEGIN:VCARD\r\nVERSION:3.0\r\n'));
      assert.ok(text.includes('TEL;TYPE=CELL:'));
      assert.ok(text.includes('EMAIL;TYPE=INTERNET:'));
      assert.ok(text.includes('TYPE=linkedin:'));
      assert.ok(text.includes('TYPE=github:'));
    }
  }
}
assert.match(await (await fetch(base + '/robots.txt')).text(), /Disallow: \/tap\//);
console.log('PASS: public routes, private access, vCards, robots and cache controls');
