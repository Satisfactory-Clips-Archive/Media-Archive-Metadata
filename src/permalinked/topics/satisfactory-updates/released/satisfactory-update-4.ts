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

declare type Update4 = SchemaProperties.VideoGame & {
	softwareVersion: string,
	subjectOf: [
		Schema.CreativeWorkSeries<any>,
		Schema.CreativeWorkSeries<any>,
		...Schema.SubjectOfSubtypes[],
	],
};

export const Update4:Update4 = Object.assign({}, satisfactory, {
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
});

export const Version_Update4 = [
	SchemaGenerators.withContext(
		SchemaGenerators.VideoGame<Update4>(Object.assign({}, Update4)),
	),
];
