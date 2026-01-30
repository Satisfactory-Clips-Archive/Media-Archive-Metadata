import {
	WebPageRelatingToSatisfactoryWikiArticles,
	SatisfactoryWikiImage,
} from '../../../../utils.ts';
import {
	SchemaGenerators,
} from '../../../../SchemaTypes.ts';

export default [
	SchemaGenerators.withContext(WebPageRelatingToSatisfactoryWikiArticles(
		'Lizard Doggo',
		'Satisfactory Livestream clips about the Lizard Doggo',
		[
			'Lizard_Doggo',
		],
		{
		alternateName: [
			'Space Rabbit',
		],
		image: [
			SatisfactoryWikiImage(
				'https://satisfactory.wiki.gg/images/7/79/Lizard_Doggo.png',
				257,
				257,
				'image/png',
				'Lizard Doggo.png',
				{
					"name": "Lizard Doggo, cropped from the GDC 2018 Teaser Trailer.",
				}
			),
		],
		}
	)),
];
