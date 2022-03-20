const fetch = require('node-fetch-commonjs');
(async () => {
  try {
    // const body = { a: 1 };

    // const response = await fetch('https://api.lokalise.com/api2/projects', {
    const response = await fetch('https://api.lokalise.com/api2/projects', {
      method: 'get',
      // body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
        'X-Api-Token': process.env.LOKALISE_API_KEY,
      },
    })
      .then((result) => {
        console.log('RESULT ---->', result);
      })
      .catch((error) => {
        console.log('ERROR ---->', error);
      });
  } catch (error) {
    console.error('ERROR ==>', error);
  }
})();
