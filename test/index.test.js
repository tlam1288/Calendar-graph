const FastSensorAPI = require("../index");

test("make a GET request to API to get tokenID ", () => {
    expect(FastSensorAPI(tokenID)).toBe(tokenID);
});