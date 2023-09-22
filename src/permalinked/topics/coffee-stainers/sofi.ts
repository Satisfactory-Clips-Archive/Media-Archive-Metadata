import {
	SatisfactoryWikiImage,
	YouTubeVideo,
	CoffeeStainer,
} from '../../../utils.js';

export default [
	CoffeeStainer('Sofi Sprangers', {
		jobTitle: 'Concept Artist',
		image: [
			SatisfactoryWikiImage(
				'https://satisfactory.wiki.gg/images/e/ea/Sofi_about_to_suddenly_say_Jace_in_a_deep_voice.png',
				1048,
				934,
				'image/png',
				'Sofi about to suddenly say Jace in a deep voice.png',
				{
					name: 'Sofi Sprangers, laughing on camera during the filming for a Developer Highlights episode.',
				}
			),
		],
		subjectOf: [
			YouTubeVideo('PkozY8_q-LE', {
				'name': 'Developer Highlight - Concept Art',
				'description': 'Sofi Sprangers talks about her time at Coffee Stain as a concept artist for Satisfactory.',
				'uploadDate': '2018-08-15',
			}),
		],
	}),
];
