import {
	YouTubePlaylist,
// eslint-disable-next-line imports/no-relative-parent-imports
} from '../../../utils.ts';
import {
	SchemaGenerators,
// eslint-disable-next-line imports/no-relative-parent-imports
} from '../../../SchemaTypes.ts';

const Vulkan = [
	SchemaGenerators.withContext(SchemaGenerators.Software({
		name: 'Vulkan',
		url: 'https://www.vulkan.org/',
		applicationCategory: [
			'Graphics API',
		],
		author: SchemaGenerators.Organization({
			'name': 'Khronos Group',
			url: 'https://www.khronos.org/',
		}),
		image: [
			SchemaGenerators.ImageObject(
				// eslint-disable-next-line @stylistic/max-len
				'https://i-img-archive.satisfactory.video/content/topics/technology/vulkan--bg.webp',
				504,
				504,
				'image/webp',
				{
					name: '🖖',
				},
			),
		],
		subjectOf: [
			YouTubePlaylist('PLbjDnnBIxiEoYcnK5o9ipaJlkK58MApga', {
				name: 'Vulkan',
				startDate: '2021-02-04',
			}),
		],
	})),
];

export default Vulkan;
