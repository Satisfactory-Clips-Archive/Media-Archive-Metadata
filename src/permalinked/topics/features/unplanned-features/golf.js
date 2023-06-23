import {
	WebPage,
	ImageObject,
	YouTubePlaylist,
} from '../../../../utils.js';

export default [
	WebPage('Golf', {
		description: 'Satisfactory Livestream clips relating to the Golf feature request created during the April 27th, 2021 Livestream',
		subjectOf: [
			YouTubePlaylist('PLbjDnnBIxiEqUEBB3kU_ZkkEp6YBvweep', {
				name: 'Golf',
				startDate: '2021-04-27',
			}),
		],
		relatedLink: [
			'https://questions.satisfactorygame.com/post/60882899aa0ba107e325b301',
		],
		image: [
			ImageObject(
				{
					contentUrl: 'https://i-img-archive.satisfactory.video/content/topics/features/requested-features/golf--bg.webp',
					width: 336,
					height: 504,
					encodingFormat: 'image/webp',
				}
			),
		]
	}),
];
