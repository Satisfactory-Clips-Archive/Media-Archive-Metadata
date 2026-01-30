import {
	satisfactory,
// eslint-disable-next-line imports/no-internal-modules
} from '../../../../common/satisfactory.ts';
import {
	YouTubePlaylist,
} from '../../../../utils.ts';
import {
	SchemaGenerators,
	SchemaProperties,
	Schema,
} from '../../../../SchemaTypes.ts';

declare type Update5 = SchemaProperties.VideoGame & {
	softwareVersion: string,
	subjectOf: [
		Schema.CreativeWorkSeries<any>,
		Schema.CreativeWorkSeries<any>,
		...Schema.SubjectOfSubtypes[],
	],
};

export const Update5:Update5 = Object.assign({}, satisfactory, {
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
});

export const Version_Update5 = [
	SchemaGenerators.withContext(
		SchemaGenerators.VideoGame<Update5>(Object.assign({}, Update5)),
	),
];
