import {
	SatisfactoryWikiBuildingImage,
	WebPageAboutSatisfactory,
} from '../../../../utils.js';
import {
	Uranium_Waste,
} from '../../../../common/wiki-images.js';
import {
	SchemaGenerators,
} from '../../../../SchemaTypes.js';

export default [
	SchemaGenerators.withContext(WebPageAboutSatisfactory('Nuclear Energy', {
		"image": [
			SatisfactoryWikiBuildingImage(
				'https://satisfactory.wiki.gg/images/4/46/Nuclear_Power_Plant.png',
				'Nuclear_Power_Plant.png',
				{
					"name": "In-game building icon for the Nuclear Power Plant.",
				}
			),
			Uranium_Waste,
		],
	})),
];
