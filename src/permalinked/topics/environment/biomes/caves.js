import {
	WebPage,
	YouTubePlaylist,
	SatisfactoryWikiImage,
} from '../../../../utils.js';

export default [
	WebPage('Caves', {
		description: 'Satisfactory Livestream clips about the Caves of MASSAGE-2(A-B)b',
		subjectOf: [
			YouTubePlaylist('PLbjDnnBIxiEqK9nRVDCg0Z3bb47I6gPod', {
				name: 'Caves',
				startDate: '2019-12-19',
			}),
		],
		image: [
			SatisfactoryWikiImage(
				{
					wikiname: 'Update_5_Teaser_Cave.webp',
					encodingFormat: 'image/webp',
					width: 1920,
					height: 1080,
					contentUrl: 'https://static.wikia.nocookie.net/satisfactory_gamepedia_en/images/f/fc/Update_5_Teaser_Cave.webp/revision/latest?cb=20210807135805',
				},
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
