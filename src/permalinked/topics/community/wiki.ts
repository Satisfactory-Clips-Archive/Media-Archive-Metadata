import {
	SatisfactoryWikiImage,
	WebPageAboutSatisfactory,
} from '../../../utils.js';
import {
	SchemaGenerators,
} from '../../../SchemaTypes.js';

export default [
	SchemaGenerators.withContext(WebPageAboutSatisfactory('Satisfactory Wiki', {
		"description": "Satisfactory Livestream clips about the Satisfactory Wiki",
		"image": [
			SatisfactoryWikiImage(
				'https://satisfactory.wiki.gg/images/e/e6/Site-logo.png',
				811,
				315,
				'image/png',
				'Wiki.png',
				{
					"name": "Logo for the Satisfactory Wiki.",
				}
			),
		],
	})),
];
