import {
	CoffeeStainer,
	YouTubeVideo,
// eslint-disable-next-line imports/no-relative-parent-imports
} from '../../../utils.ts';
import {
	SchemaGenerators,
// eslint-disable-next-line imports/no-relative-parent-imports
} from '../../../SchemaTypes.ts';

const Tobias = [
	SchemaGenerators.withContext(CoffeeStainer('Tobias Carlsson', {
		alternateName: [
			'Lym',
		],
		jobTitle: 'Programmer',
		subjectOf: [
			YouTubeVideo('FyOHDcxtEUA', {
				// eslint-disable-next-line @stylistic/max-len
				name: 'Dev Vlog: How drones work in Satisfactory (w/ old WIP footage)',
				// eslint-disable-next-line @stylistic/max-len
				description: 'Hang out with Tobias and Jace as they discuss how drones work, how they were made, as well as showing off some old Work-In-Progress shots from early development.',
				uploadDate: '2021-07-23',
			}),
		],
	})),
];

export default Tobias;
