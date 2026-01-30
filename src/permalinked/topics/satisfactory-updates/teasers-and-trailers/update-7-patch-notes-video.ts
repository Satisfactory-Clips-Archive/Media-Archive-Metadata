import {
	YouTubePlaylist,
} from '../../../../utils.ts';
import {
	yt_ST6V_dash_a4u8Qs,
// eslint-disable-next-line imports/no-internal-modules
} from '../../../../common/youtube.ts';

// eslint-disable-next-line imports/no-internal-modules
import Update7 from '../released/satisfactory-update-7.ts';

import {
	SchemaGenerators,
} from '../../../../SchemaTypes.ts';

const VideoPage = [
	SchemaGenerators.withContext(SchemaGenerators.WebPage(
		'Update 7 Patch Notes Video - Behind the Scenes',
		{
		// eslint-disable-next-line @stylistic/max-len
		description: 'Satisfactory Livestream clips about the Update 7 Patch Notes Video',
		about: [
			yt_ST6V_dash_a4u8Qs,
			YouTubePlaylist('PLbjDnnBIxiErudM4oVI8PObNJ3llSQOC5', {
				name: 'Update 7 Patch Notes Video',
				// eslint-disable-next-line @stylistic/max-len
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

export default VideoPage;
