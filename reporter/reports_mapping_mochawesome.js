const { mappingReports } = require('./helpers/mapping');
const data = require('../reports/mochawesome.json');
const fs = require('fs');

const hasil = mappingReports(data);

fs.writeFile('./reports/mochawesome_mapping.json', JSON.stringify(hasil, null, 4), (err) => {
	if (err) {  throw err; }
});