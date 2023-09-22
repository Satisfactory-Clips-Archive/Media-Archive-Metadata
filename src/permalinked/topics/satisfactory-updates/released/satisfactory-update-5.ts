import {
	default as satisfactory,
} from '../../../../common/satisfactory.js';
import {
	YouTubePlaylist,
} from '../../../../utils.js';

export default [
	Object.assign({}, satisfactory, {
		"@context": "https://schema.org",
		softwareVersion: 'Update 5',
		subjectOf: [
			YouTubePlaylist('PLzGEn7MzkWRtpdC8k8j0bknq-Je4LyNvk', {
				name: 'Satisfactory - Update 5',
				startDate: '2021-07-30',
			}),
			YouTubePlaylist('PLbjDnnBIxiEov1pe4Y3Fr8AFfJuu7jIR6', {
				name: 'Satisfactory Update 5',
				startDate: '2020-05-19',
			}),
		],
	}),
];
