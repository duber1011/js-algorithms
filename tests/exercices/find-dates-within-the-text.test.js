describe('findDatesWithinTheText', () => {
  const findDatesWithinTheText = require('../../src/exercises/find-dates-within-the-text');

  test('should find dates in the format YYYY-MM-DD', () => {
    const text = 'Today is 01-10-2023 and tomorrow is 02-10-2023.';
    const expectedDates = ['01-10-2023', '02-10-2023'];
    expect(findDatesWithinTheText(text)).toEqual(expectedDates);
  });

  test('should find dates in the format DD/MM/YYYY', () => {
    const text = 'Today is 01/10/2023 and tomorrow is 02/10/2023.';
    const expectedDates = ['01/10/2023', '02/10/2023'];
    expect(findDatesWithinTheText(text)).toEqual(expectedDates);
  });

  test('should find dates in the format MM-DD-YYYY', () => {
    const text = 'Today is 10-01-2023 and tomorrow is 10-02-2023.';
    const expectedDates = ['10-01-2023', '10-02-2023'];
    expect(findDatesWithinTheText(text)).toEqual(expectedDates);
  });

  test('should not find invalid dates', () => {
    const text = 'Today is 01/10/2023';
    const expectedDates = ['01/10/2023'];
    expect(findDatesWithinTheText(text)).toEqual(expectedDates);
  });
});
