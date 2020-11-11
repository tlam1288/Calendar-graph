const Calendar = require("../calendar");


describe("Calendar", () => {
  describe("Initialization", () => {
    // Positive test
    it("should save the begin and end dates that are chosen as the range", () => {
      // Arrange
      const beginDate = new Date();
      const endDate = new Date();
      // Assert
      expect(beginDate.date).toEqual("");
      expect(endDate.date).toEqual("");
    });
  });

  describe("beginDate", () => {
    // Positive Tests
    it("should save the begin date chosen to beginDate", () => {
      // Arrange
      const beginDate = new Date();
      const beginText = "2020-06-01";
      

      // Act
      beginDate.beginDate(beginText);
      
      // Assert
     
      expect(beginDate).toEqual(beginText);
      
    });

    // Exception test
    it("should throw an error if no date is chosen", () => {
      // Arrange
      const beginDate = new Date();
      const err = new Error(
        "Expected parameter 'date' to be a non empty string"
      );
      const cb = () => beginDate.beginDate();

      // Assert
      expect(cb).toThrowError(err);
    });
  });

  describe("endDate", () => {
    // Positive test
    it("should save the end date chosen to endDate", () => {
      // Arrange
      const endDate = new Date();
      const endText = "2020-06-02";

      // Act
      endDate.endDate(endText);

      // Assert
      expect(endDate).toEqual(endText);
    });

    // Negative test
    it("should throw an error if no date is chosen", () => {
      // Arrange
      const endDate = new Date();

      // Act
      const err = new Error(
        "Expected parameter 'date' to be a non empty string"
      );
      const cb = () => endDate.endDate();


      // Assert
      expect(cb).toThrowError(err);
    });
  });
});
