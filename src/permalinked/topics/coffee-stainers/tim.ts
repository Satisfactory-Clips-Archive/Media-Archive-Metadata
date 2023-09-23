import {
	SatisfactoryWikiImage,
} from '../../../utils.js';
import {
	SchemaGenerators,
} from '../../../SchemaTypes.js';

export default [
	SchemaGenerators.Person('Tim Badylak', {
		"jobTitle": "Producer",
		"image": [
			SatisfactoryWikiImage(
				'https://satisfactory.wiki.gg/images/a/a7/Tim_Badylak.png',
				726,
				428,
				'image/png',
				'Tim_Badylak.png',
				{
					"name": "Tim's only known sighting whilst working at Coffee Stain.",
				}
			),
		]
	}),
];
