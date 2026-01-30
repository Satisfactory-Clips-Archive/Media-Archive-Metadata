import {
	SatisfactoryWikiImage,
	WebPageAboutSatisfactory,
} from '../../../utils.ts';
import {
	SchemaGenerators,
} from '../../../SchemaTypes.ts';

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
