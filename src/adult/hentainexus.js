// == HentaiNexus ==================================================================================
export default {
  name: 'HentaiNexus',
  url: /https?:\/\/(www.)?hentainexus.com\/read\/.+/,
  homepage: 'https://hentainexus.com/',
  language: ['English'],
  category: 'hentai',
  waitVar: 'baseTitle',
  run() {
    return {
      title: W.baseTitle.replace(' :: HentaiNexus', ''),
      series: $('#pageChangeSnap > p > a').attr('href'),
      quant: W.pageData.length,
      prev: '#',
      next: '#',
      listImages: W.pageData,
    };
  },
};
