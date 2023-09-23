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
	SchemaGenerators.withContext(CoffeeStainer('Hannah Beuger', {
		jobTitle: 'Level Designer',
		subjectOf: [
			YouTubeVideo('8WYNwGDLYNE', {
				'name': 'Developer Highlight - Level Design',
				'description': 'Come hang out with Hannah-banana as she tells you about her role as a Level Designer.',
				'uploadDate': '2019-10-24',
			}),
			yt_UT9iNA3WGT4,
		],
		url: [
			'https://twitter.com/HannahBeuger'
		],
	})),
];
