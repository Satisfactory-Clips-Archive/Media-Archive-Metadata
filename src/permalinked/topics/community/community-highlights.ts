import {
	WebPageAboutSatisfactory,
} from '../../../utils.js';
import {
	SchemaGenerators,
} from '../../../SchemaTypes.js';

export default [
	SchemaGenerators.withContext(WebPageAboutSatisfactory('Community Highlights', {
		"description": "Satisfactory Livestream clips about the Satisfactory Community Highlights",
		"relatedLink": [
			"https://communityhighlights.satisfactory.video/"
		],
		"image": [
			SchemaGenerators.ImageObject(
				'https://communityhighlights.satisfactory.video/logo-square.png',
				800,
				800,
				'image/png',
				{
					"name": "Logo for the Satisfactory Community Highlights Archive."
				}
			),
		],
	})),
];
