import {
	YouTubePlaylist,
	SatisfactoryWikiImage,
} from '../../../../utils.js';
import {
	SchemaGenerators,
} from '../../../../SchemaTypes.js';

export default [
	SchemaGenerators.WebPage('Caves', {
		description: 'Satisfactory Livestream clips about the Caves of MASSAGE-2(A-B)b',
		subjectOf: [
			YouTubePlaylist('PLbjDnnBIxiEqK9nRVDCg0Z3bb47I6gPod', {
				name: 'Caves',
				startDate: '2019-12-19',
			}),
		],
		image: [
			SatisfactoryWikiImage(
				'https://satisfactory.wiki.gg/images/f/fc/Update_5_Teaser_Cave.webp',
				1920,
				1080,
				'image/webp',
				'Update_5_Teaser_Cave.webp',
				{
					name: 'Update 5 Teaser Cave',
					description: [
						'Screengrab of a cave due to appear in Update 5.',
						'Taken from https://www.youtube.com/watch?v=MxvGbCCc6DI at time index 00.07.47.300',
					].join("\n\n"),
				}
			),
		],
	}),
]
