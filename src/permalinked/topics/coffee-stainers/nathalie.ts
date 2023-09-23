import {
	YouTubeVideo,
	CoffeeStainer,
} from '../../../utils.js';
import {
	yt_UT9iNA3WGT4,
} from '../../../common/youtube.js';
import {
	SchemaGenerators,
} from '../../../SchemaTypes.js';

export default [
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
