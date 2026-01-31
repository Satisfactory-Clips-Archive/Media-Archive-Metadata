import {
	satisfactory,
// eslint-disable-next-line @stylistic/max-len
// eslint-disable-next-line imports/no-internal-modules, imports/no-relative-parent-imports
} from '../../../../common/satisfactory.ts';
import {
	YouTubePlaylist,
// eslint-disable-next-line imports/no-relative-parent-imports
} from '../../../../utils.ts';
import type {
	Schema,
	SchemaProperties,
// eslint-disable-next-line imports/no-relative-parent-imports
} from '../../../../SchemaTypes.ts';
import {
	SchemaGenerators,
// eslint-disable-next-line imports/no-relative-parent-imports
} from '../../../../SchemaTypes.ts';

declare type Update5 = SchemaProperties.VideoGame & {
	softwareVersion: string,
	subjectOf: [
		Schema.CreativeWorkSeries<SchemaProperties.CreativeWorkSeries>,
		Schema.CreativeWorkSeries<SchemaProperties.CreativeWorkSeries>,
		...Schema.SubjectOfSubtypes[],
	],
};

const Update5: Update5 = {
	...satisfactory,
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
};

const Update = [
	SchemaGenerators.withContext(
		SchemaGenerators.VideoGame<Update5>({...Update5}),
	),
];

export {
	Update5,
};

export default Update;
