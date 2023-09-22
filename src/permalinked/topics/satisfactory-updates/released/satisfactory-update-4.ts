import {
	default as satisfactory,
} from '../../../../common/satisfactory.js';
import {
	YouTubePlaylist,
} from '../../../../utils.js';

export default [
	Object.assign({}, satisfactory, {
		"@context": "https://schema.org",
		softwareVersion: 'Update 4',
		subjectOf: [
			YouTubePlaylist('PLzGEn7MzkWRura6DGohnzk1cwWS4HIoDr', {
				name: 'Satisfactory - Update 4',
				startDate: '2020-12-04',
				endDate: '2021-04-13',
			}),
			YouTubePlaylist('PLbjDnnBIxiEpH9vCWSguzYfXrsjagXgyE', {
				name: 'Satisfactory Update 4',
				startDate: '2020-02-11',
			}),
		],
	}),
];
