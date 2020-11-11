const FastSensorAPI = require("../index");
var $ = require('jquery');


test('AJAX call to get the tokenID', () => {
    return fetchData().then(data => {
      expect(data).toBe('tokenID');
    });
  });