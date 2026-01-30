import {
	YouTubeVideo,
	CoffeeStainer,
// eslint-disable-next-line imports/no-relative-parent-imports
} from '../../../utils.ts';
import {
	yt_UT9iNA3WGT4,
// eslint-disable-next-line @stylistic/max-len
// eslint-disable-next-line imports/no-internal-modules, imports/no-relative-parent-imports
} from '../../../common/youtube.ts';
import {
	SchemaGenerators,
// eslint-disable-next-line imports/no-relative-parent-imports
} from '../../../SchemaTypes.ts';

const Nathalie = [
	SchemaGenerators.withContext(CoffeeStainer('Nathalie Verweij', {
		jobTitle: 'UI/UX Designer',
		subjectOf: [
			YouTubeVideo('SslJr_Fv6qw', {
				name: 'Developer Highlight - UI/UX Design',
				description: 'Meet Nathalie as she discusses UI/UX Design',
				uploadDate: '2019-01-19',
			}),
			yt_UT9iNA3WGT4,
		],
		url: [
			'https://twitter.com/_ninyn',
		],
	})),
];

export default Nathalie;
