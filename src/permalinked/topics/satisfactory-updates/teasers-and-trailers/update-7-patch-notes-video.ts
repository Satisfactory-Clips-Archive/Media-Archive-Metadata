import {
	YouTubePlaylist,
} from '../../../../utils.js';
import {
	yt_ST6V_dash_a4u8Qs,
} from '../../../../common/youtube.js';

import Update7 from '../released/satisfactory-update-7.js';
import {
	SchemaGenerators,
} from '../../../../SchemaTypes.js';

export default [
	SchemaGenerators.withContext(SchemaGenerators.WebPage(
		'Update 7 Patch Notes Video - Behind the Scenes',
		{
		description: 'Satisfactory Livestream clips about the Update 7 Patch Notes Video',
		about: [
			yt_ST6V_dash_a4u8Qs,
			YouTubePlaylist('PLbjDnnBIxiErudM4oVI8PObNJ3llSQOC5', {
				name: 'Update 7 Patch Notes Video',
				description: 'Satisfactory Livestream clips about the Update 7 Patch Notes Video',
				startDate: '2022-11-22',
			}),
			Update7[0],
		],
		relatedLink: [
			'https://www.satisfactorygame.com/updates/update-7',
		],
	})),
];
