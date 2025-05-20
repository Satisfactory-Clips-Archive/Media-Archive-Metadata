import {SchemaGenerators} from "../../../SchemaTypes.js";
import {CoffeeStainer, YouTubeVideo} from "../../../utils.js";

export default [
	SchemaGenerators.withContext(CoffeeStainer('Jason Edwards', {
		jobTitle: [
			'Community Manager',
		],
		subjectOf: [
			YouTubeVideo('1uma1Z3yRUc', {
				name: 'A New Community Manager Approaches!',
				description: 'A New Community Manager Approaches!',
				uploadDate: '2025-05-16',
			}),
		],
	})),
];
