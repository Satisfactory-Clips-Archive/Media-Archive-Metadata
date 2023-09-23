import {
	YouTubePlaylist,
} from '../../../utils.js';
import {
	SchemaGenerators,
} from '../../../SchemaTypes.js';

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
			SchemaGenerators.ImageObject(
				'https://i-img-archive.satisfactory.video/content/topics/technology/vulkan--bg.webp',
				504,
				504,
				'image/webp',
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
