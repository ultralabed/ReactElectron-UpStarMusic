const Artist = require('../models/artist');

/**
 * Searches through the Artist collection
 * @param {object} criteria An object with a name, age, and yearsActive
 * @param {string} sortProperty The property to sort the results by
 * @param {integer} offset How many records to skip in the result set
 * @param {integer} limit How many records to return in the result set
 * @return {promise} A promise that resolves with the artists, count, offset, and limit
 *{ all: [artists], count: count, offset: offset, limit: limit }
 */
module.exports = (criteria, sortProperty, offset = 0, limit = 20) => {
  const query = Artist.find(buildQuery(criteria))
                  .sort({ [sortProperty]: 1 })
                  .skip(offset)
                  .limit(limit);
  return Promise.all([query, Artist.count()])
    .then((results) => {
      return {
        all: results[0],
        count: results[1],
        offset,
        limit,
      };
    });
};

const buildQuery = (criteria) => {
  const { name, age } = criteria;
  const query = {};

  if (name) {
    query.$text = { $search: name };
  }

  if (age) {
    query.age = {
      $gte: age.min,
      $lte: age.max,
    };
  }

  return query;
};
