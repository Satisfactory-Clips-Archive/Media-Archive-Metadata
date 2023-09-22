import {
	ImageObject,
	WebPageAboutSatisfactory,
} from '../../../utils.js';

export default [
	WebPageAboutSatisfactory('Community Highlights', {
		"description": "Satisfactory Livestream clips about the Satisfactory Community Highlights",
		"relatedLink": [
			"https://communityhighlights.satisfactory.video/"
		],
		"image": [
			ImageObject(
				{
					width: 800,
					height: 800,
					encodingFormat: 'image/png',
					contentUrl: 'https://communityhighlights.satisfactory.video/logo-square.png',
				},
				{
					"name": "Logo for the Satisfactory Community Highlights Archive."
				}
			),
		],
	}),
];
