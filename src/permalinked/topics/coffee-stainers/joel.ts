import {
	CoffeeStainer,
	SatisfactoryWikiImage,
	YouTubeVideo,
// eslint-disable-next-line imports/no-relative-parent-imports
} from '../../../utils.ts';
import {
	SchemaGenerators,
// eslint-disable-next-line imports/no-relative-parent-imports
} from '../../../SchemaTypes.ts';

export const Joel = [
	SchemaGenerators.withContext(CoffeeStainer('Joel Rydholm', {
		jobTitle: 'Producer',
		subjectOf: [
			YouTubeVideo('LDbnPHbnba0', {
				name: 'Developer Highlight - Sound Design',
				description: [
					// eslint-disable-next-line @stylistic/max-len
					'Joel Rydholm tells you all about making beeps and boops and stuff for Satisfactory.',
					'btw sound design is not the same as graphic design',
				].join("\n"),
				uploadDate: '2018-09-19',
			}),
		],
		image: [
			SatisfactoryWikiImage(
				// eslint-disable-next-line @stylistic/max-len
				'https://satisfactory.wiki.gg/images/d/db/Joel_adjusting_collar.png',
				1456,
				966,
				'image/png',
				'Joel adjusting collar.png',
				{
					// eslint-disable-next-line @stylistic/max-len
					name: 'Joel Rydholm, adjusting his collar while wearing an orange beanie.',
				},
			),
		],
	})),
];

export default Joel;
