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
				{
					wikiname: 'Sofi about to suddenly say Jace in a deep voice.png',
					encodingFormat: 'image/png',
					width: 1048,
					height: 934,
					contentUrl: 'https://static.wikia.nocookie.net/satisfactory_gamepedia_en/images/e/ea/Sofi_about_to_suddenly_say_Jace_in_a_deep_voice.png/revision/latest?cb=20201212120620&format=original',
				},
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
