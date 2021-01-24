import {readFileSync} from 'fs';
import {resolve, dirname} from 'path';
import {fileURLToPath} from 'url';

export default JSON.parse(
	readFileSync(
		resolve(
			dirname(
				fileURLToPath(
					import.meta.url
				)
			)
			+ '/schema.json'
		)
	)
);
