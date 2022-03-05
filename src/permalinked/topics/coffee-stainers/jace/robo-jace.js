import {
	YouTubePlaylist,
	Person,
	ImageObject,
	Tweet,
} from '../../../../utils.js';

export default [
	Person('Robo Jace', {
		subjectOf: [
			YouTubePlaylist('PLbjDnnBIxiErdTAJdeOIHMN2m3pR245LA', {
				name: 'Robo Jace',
				startDate: '2022-03-01',
				endDate: '2022-03-01,'
			}),
		],
		image: [
			ImageObject(
				{
					contentUrl: 'https://pbs.twimg.com/media/FMRR2wUXEAM3_Vs?format=jpg&name=medium',
					width: 976,
					height: 1080,
					encodingFormat: 'image/jpeg',
				},
				{
					exampleOfWork: Tweet('SatisfactoryAF', '1496469900965163013', {
						headline: 'how it started vs how its going',
						datePublished: '2022-02-23T13:00:02.000Z',
						image: [
							ImageObject(
								{
									contentUrl: 'https://pbs.twimg.com/media/FMRRj3NX0AAy1L1?format=png&name=small',
									width: 593,
									height: 233,
									encodingFormat: 'image/png',
								}
							),
							ImageObject(
								{
									contentUrl: 'https://pbs.twimg.com/media/FMRR2wUXEAM3_Vs?format=jpg&name=medium',
									width: 976,
									height: 1080,
									encodingFormat: 'image/jpeg',
								}
							),
						]
					}),
				}
			),
		],
	}),
];
