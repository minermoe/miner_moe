const baseUrl = 'http://miner-mo.bitballoon.com';

module.exports = {
  test: {
    keepalive: 30 * 1000,
    timeout: 2 * 24 * 60 * 60 * 1000,
    url: `${ baseUrl }#test`,
  },
};
