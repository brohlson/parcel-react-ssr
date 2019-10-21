/**
 * Handy buildscript courtesy of https://github.com/erel
 * https://github.com/stereobooster/react-snap/issues/38#issuecomment-487350403
 */

const builder = require('xmlbuilder');
const { readdir, writeFile } = require('fs');
const { promisify } = require('util');
const siteConfig = require('../util/siteConfig');

const asyncReaddir = promisify(readdir),
  asyncWriteFile = promisify(writeFile);

const asyncForEach = async (array, callback) => {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
};

let allRoots = [];

const readSite = async dir => {
  const directory = await asyncReaddir(dir, { withFileTypes: true });

  await asyncForEach(directory, async fileOrDirectory => {
    const { name } = fileOrDirectory;

    const root = `${dir}/${name}`;
    if (fileOrDirectory.isDirectory()) {
      await readSite(root);
    } else if (name === 'index.html') {
      allRoots = [...allRoots, root];
    }
  });
};

const blackList = [`${siteConfig.baseUrl}/some-page`];

(async () => {
  await readSite('dist');

  const siteUrls = allRoots.map(root =>
    root.replace('dist/', siteConfig.baseUrl).replace('/index.html', '')
  );

  const urlset = builder.create('urlset', {
    encoding: 'UTF-8',
    version: '1.0',
  });

  urlset.attribute('xmlns', 'http://www.sitemaps.org/schemas/sitemap/0.9');

  siteUrls
    .filter(url => !blackList.includes(url))
    .sort((a, b) => a.length - b.length)
    .forEach(url => {
      const u = urlset.ele('url');

      u.ele('loc', url);
      u.ele('priority', 0.5);
    });

  const sitemap = urlset.end({ pretty: true });

  await asyncWriteFile('dist/sitemap.xml', sitemap);
})();
