import {
	YouTubePlaylist,
// eslint-disable-next-line imports/no-relative-parent-imports
} from '../../../../utils.ts';
import {
	SchemaGenerators,
// eslint-disable-next-line imports/no-relative-parent-imports
} from '../../../../SchemaTypes.ts';

const Golf = [
	SchemaGenerators.withContext(SchemaGenerators.WebPage('Golf', {
		// eslint-disable-next-line @stylistic/max-len
		description: 'Satisfactory Livestream clips relating to the Golf feature request created during the April 27th, 2021 Livestream',
		subjectOf: [
			YouTubePlaylist('PLbjDnnBIxiEqUEBB3kU_ZkkEp6YBvweep', {
				name: 'Golf',
				startDate: '2021-04-27',
			}),
		],
		relatedLink: [
			// eslint-disable-next-line @stylistic/max-len
			'https://questions.satisfactorygame.com/post/60882899aa0ba107e325b301',
		],
		image: [
			SchemaGenerators.ImageObject(
				// eslint-disable-next-line @stylistic/max-len
				'https://i-img-archive.satisfactory.video/content/topics/features/requested-features/golf--bg.webp',
				336,
				504,
				'image/webp',
			),
		],
	})),
];

export default Golf;
