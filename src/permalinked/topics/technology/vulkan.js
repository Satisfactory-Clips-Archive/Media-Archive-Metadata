import {
	ImageObject,
	YouTubePlaylist,
} from '../../../utils.js';

export default [
	{
		'@context': 'https://schema.org',
		'@type': 'Software',
		name: 'Vulkan',
		url: 'https://www.vulkan.org/',
		applicationCategory: [
			'Graphics API',
		],
		author: {
			'@type': 'Organization',
			'name': 'Khronos Group',
			url: 'https://www.khronos.org/',
		},
		image: [
			ImageObject(
				{
					contentUrl: 'https://i.img.archive.satisfactory.video/content/topics/technology/vulkan--bg.webp',
					width: 504,
					height: 504,
					encodingFormat: 'image/webp',
				},
				{
					name: '🖖',
				}
			)
		],
		subjectOf: [
			YouTubePlaylist('PLbjDnnBIxiEoYcnK5o9ipaJlkK58MApga', {
				name: 'Vulkan',
				startDate: '2021-02-04'
			}),
		],
	},
];
