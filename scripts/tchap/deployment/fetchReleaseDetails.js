
/*
 Requires node 18 for support of fetch API
 If you call this func too much github will block you.
 Todo : use a token to get higher limits.

 input : version e.g. "4.3.10"
 output : array[asset] of length 3, with asset like :
 {
  fileName: 'tchap-4.3.10-preprod-20231017.tar.gz',
  url: 'https://github.com/tchapgouv/tchap-web-v4/releases/download/tchap-4.3.10/tchap-4.3.10-preprod-20231017.tar.gz',
  date: '20231017',
  env: 'preprod'
 }
*/

const releaseUrl = "https://api.github.com/repos/tchapgouv/tchap-web-v4/releases/tags/tchap-"; // + version;

const fetchReleaseDetails = (version) => {
  return fetch(releaseUrl + version)
    .then(res => res.json())
    .then(json => {
      const assetsUrl = json.assets_url;
      return fetch(assetsUrl);
    }).then(res => res.json())
    .then(assetsData => {
      return assetsData.map(asset => {
        const matches = asset.name.match(/^tchap-.*-(dev|preprod|prod)-([0-9]{8})/);
        return {
          url: asset.browser_download_url,
          fileName: asset.name,
          date: matches[2],
          env: matches[1]
        };
      })
    });
};

module.exports = {
  fetchReleaseDetails
}

