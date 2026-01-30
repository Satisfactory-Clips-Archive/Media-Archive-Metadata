import {
	SatisfactoryWikiImage,
	WebPageAboutSatisfactory,
} from '../../../utils.ts';
import {
	SchemaGenerators,
} from '../../../SchemaTypes.ts';

const Wiki = [
	// eslint-disable-next-line @stylistic/max-len
	SchemaGenerators.withContext(WebPageAboutSatisfactory('Satisfactory Wiki', {
		// eslint-disable-next-line @stylistic/max-len
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

export default Wiki;
