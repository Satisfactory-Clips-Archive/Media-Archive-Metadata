const {default:Ajv} = require('ajv');
const schema = require('./src/schema.json');
const data = require('./index');

const validator = (new Ajv()).compile(schema);

Object.entries(data).forEach((entry) => {
	const [permalink, rows] = entry;

	if ( ! (rows instanceof Array)) {
		throw new Error(`${permalink} has invalid data!`);
	}

	rows.forEach((row, i) => {
		if (validator(row)) {
			console.log(`${permalink} item ${i} is valid!`);
		} else {
			validator.errors.forEach((err) => {
				console.error(err);
				console.error(

					'params' in err,
					'allowedParams' in err.params,
					(err.params.allowedParams instanceof Array)
				);

				if (
					'params' in err
					&& 'allowedValues' in err.params
					&& (err.params.allowedValues instanceof Array)
				) {
					console.log(
						`${
							permalink
						} item ${
							i
						} has an invalid item that must be one of:`
					);

					err.params.allowedValues.forEach((allowed) => {
						console.error(allowed);
					});
				}
			});

			throw new Error(`${permalink} item ${i} is invalid!`);
		}
	});
});