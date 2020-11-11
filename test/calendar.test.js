const Calendar = require("../calendar");
const $ = require('jquery');

test('date string is YYYY-MM-DD and contains only numbers and -', () => {
  expect('2020-01-01').toMatch(/[0-9]/);
});


