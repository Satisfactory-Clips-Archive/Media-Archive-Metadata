import {
	default as coffee_stain
} from '../../../common/coffee-stain.js';
import {
	ImageObject,
	YouTubePlaylist,
	YouTubeVideo,
} from '../../../utils.js';

export default [
	{
		'@context': 'https://schema.org',
		'@type': 'VideoGame',
		name: 'I <3 Strawberries',
		alternateName: [
			'I Love Strawberries',
		],
		url: 'https://www.coffeestainstudios.com/games/i-3-strawberries/',
		author: coffee_stain,
		operatingSystem: 'iOS',
		applicationCategory: [
			'Game',
			'Puzzle Platformer',
		],
		image: [
			ImageObject(
				'https://www.coffeestainstudios.com/media/1277/ils-square-module-2.jpg',
				768,
				768,
				'image/jpeg',
				{
					name: 'I <3 Strawberries logo',
				}
			),
		],
		subjectOf: [
			YouTubePlaylist('PLbjDnnBIxiErA3azFQ6tmG_bui881Xkpm', {
				name: 'I Love Strawberries',
				startDate: '2021-08-17',
			}),
		],
		trailer: [
			YouTubeVideo('zscDMIhwDKU', {
				name: 'I Love Strawberries Gameplay Trailer',
				description: [
					'Déjà vu? Our first ever developed game I Love Strawberries is relaunched for iPhone: https://itunes.apple.com/app/i-3-stra...',
					'',
					'Oh, we did a few additions/changes also:',
					'',
					'* iPhone5 screen support',
					'* Constipation sound has been removed',
					'* Facebook Integration removed (no you can\'t annoy people there anymore..)',
					'* Optimizations & some tweaks',
					'',
					'Best',
					'Coffee Stain Studios',
				].join('\n'),
				uploadDate: '2014-02-25',
			}),
		],
	},
];
