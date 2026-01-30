import {
	SatisfactoryWikiImage,
	YouTubeVideo,
	CoffeeStainer,
// eslint-disable-next-line imports/no-relative-parent-imports
} from '../../../utils.ts';
import {
	SchemaGenerators,
// eslint-disable-next-line imports/no-relative-parent-imports
} from '../../../SchemaTypes.ts';

const Sofi = [
	SchemaGenerators.withContext(CoffeeStainer('Sofi Sprangers', {
		jobTitle: 'Concept Artist',
		image: [
			SatisfactoryWikiImage(
				// eslint-disable-next-line @stylistic/max-len
				'https://satisfactory.wiki.gg/images/e/ea/Sofi_about_to_suddenly_say_Jace_in_a_deep_voice.png',
				1048,
				934,
				'image/png',
				'Sofi about to suddenly say Jace in a deep voice.png',
				{
					// eslint-disable-next-line @stylistic/max-len
					name: 'Sofi Sprangers, laughing on camera during the filming for a Developer Highlights episode.',
				}
			),
		],
		subjectOf: [
			YouTubeVideo('PkozY8_q-LE', {
				'name': 'Developer Highlight - Concept Art',
				// eslint-disable-next-line @stylistic/max-len
				'description': 'Sofi Sprangers talks about her time at Coffee Stain as a concept artist for Satisfactory.',
				'uploadDate': '2018-08-15',
			}),
		],
	})),
];

export default Sofi;
