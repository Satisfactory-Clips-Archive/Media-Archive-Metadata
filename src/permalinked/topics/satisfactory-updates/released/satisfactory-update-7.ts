import {
	default as satisfactory,
} from '../../../../common/satisfactory.js';
import {
	YouTubePlaylist,
} from '../../../../utils.js';

export default [
	Object.assign({}, satisfactory, {
		"@context": "https://schema.org",
		softwareVersion: 'Update 7',
		subjectOf: [
			YouTubePlaylist('PLzGEn7MzkWRvEuI1nzAGDk1Jy7Y4kXA9i', {
				name: 'Satisfactory Update 7',
				startDate: '2022-09-30',
				endDate: '2022-12-06',
			}),
			YouTubePlaylist('PLbjDnnBIxiEq99AIuldrDf7WJJpvEtkEO', {
				name: 'Satisfactory - Update 7',
				startDate: '2022-03-09',
			}),
		],
	}),
];
