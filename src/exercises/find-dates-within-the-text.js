/*
Within a text you need to find the Dates (in different formats) and return a list of Dates found.
Dates format to support:

    - month day, year
    - Month/day/year
    - Month-day-year

It must support cardinal and ordinal numbers, ex: March 1st, Feb 5th as well as March 1, February 5

String Example Input

The Mexican Revolution, which occurred from 1910 to 1920, was a pivotal period in Mexican history. 
It began on November 20, 1910, with an armed uprising against President Porfirio Díaz, who had held power for over three decades. 
The promulgation of the Mexican Constitution on Feb 5th, 1917, introduced significant reforms, addressing issues such as land reform, 
workers' rights, and the separation of church and state. March 21st, 1917, marked the presidency of Venustiano Carranza, 
whose tenure focused on consolidating power and implementing reforms. 
The assassination of Emiliano Zapata on 04/10/1919, deeply impacted the revolution, particularly the agrarian movement. 
Finally, on 05-21-1920, Álvaro Obregón led a successful revolt against Carranza's government, resulting in his presidency. 
These important dates highlight key moments in the Mexican Revolution's trajectory, shaping the course of Mexico's future.

Example Output: 
    - November 20, 1910
    - Feb 5th, 1917
    - March 21st, 1917
    - 04/10/1919
    - 05-21-1920
*/

const findDates = (text) => {
  // Months names (case insensitive)
  const monthNames =
    '(January|February|March|April|May|June|July|August|September|October|November|December|Jan|Feb|Mar|Apr|Jun|Jul|Aug|Sep|Sept|Oct|Nov|Dec)';

  // Day options (1st, 2nd, 3rd, 4th...)
  const day = '(0?[1-9]|[12][0-9]|3[01])(st|nd|rd|th)?';

  // year options (4 digits)
  const year = '\\d{4}';

  // Format 1: Month day, year (with optional ordinal)
  const formatDate1 = new RegExp(`${monthNames} ${day}, ${year}`, 'gi');

  // Format 2: MM/DD/YYYY
  const formatDate2 = /\b(0?[1-9]|1[0-2])\/(0?[1-9]|[12]\d|3[01])\/\d{4}\b/g;

  // Format 3: MM-DD-YYYY
  const formatDate3 = /\b(0?[1-9]|1[0-2])-(0?[1-9]|[12]\d|3[01])-\d{4}\b/g;

  // join all the matches
  const matches = [
    ...(text.match(formatDate1) || []),
    ...(text.match(formatDate2) || []),
    ...(text.match(formatDate3) || []),
  ];

  return matches;
};

const text = `
The Mexican Revolution, which occurred from 1910 to 1920, was a pivotal period in Mexican history.
It began on November 20, 1910, with an armed uprising against President Porfirio Díaz, who had held power for over three decades.
The promulgation of the Mexican Constitution on Feb 5th, 1917, introduced significant reforms, addressing issues such as land reform, 
workers' rights, and the separation of church and state. March 21st, 1917, marked the presidency of Venustiano Carranza, 
whose tenure focused on consolidating power and implementing reforms.
The assassination of Emiliano Zapata on 04/10/1919, deeply impacted the revolution, particularly the agrarian movement.
Finally, on 05-21-1920, Alvaro Obregón led a successful revolt against Carranza's government, resulting in his presidency.
These important dates highlight key moments in the Mexican Revolution's trajectory, shaping the course of Mexico's future.
`;

console.log(findDates(text));

module.exports = findDates;
