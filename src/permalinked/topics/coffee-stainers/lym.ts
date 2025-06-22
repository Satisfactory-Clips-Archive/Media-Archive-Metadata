import {
	YouTubeVideo,
	CoffeeStainer,
} from '../../../utils.js';
import {
	SchemaGenerators,
} from '../../../SchemaTypes.js';

export default [
	SchemaGenerators.withContext(CoffeeStainer('Tobias Carlsson', {
		alternateName: [
			'Lym'
		],
		jobTitle: 'Programmer',
		subjectOf: [
			YouTubeVideo('FyOHDcxtEUA', {
				name: 'Dev Vlog: How drones work in Satisfactory (w/ old WIP footage)',
				description: 'Hang out with Tobias and Jace as they discuss how drones work, how they were made, as well as showing off some old Work-In-Progress shots from early development.',
				uploadDate: '2021-07-23',
			}),
		],
	})),
];
