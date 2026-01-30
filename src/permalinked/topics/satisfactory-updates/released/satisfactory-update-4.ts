import {
	satisfactory,
// eslint-disable-next-line @stylistic/max-len
// eslint-disable-next-line imports/no-internal-modules, imports/no-relative-parent-imports
} from '../../../../common/satisfactory.ts';
import {
	YouTubePlaylist,
// eslint-disable-next-line imports/no-relative-parent-imports
} from '../../../../utils.ts';
import {
	Schema,
	SchemaGenerators,
	SchemaProperties,
// eslint-disable-next-line imports/no-relative-parent-imports
} from '../../../../SchemaTypes.ts';

declare type Update4 = SchemaProperties.VideoGame & {
	softwareVersion: string,
	subjectOf: [
		Schema.CreativeWorkSeries<any>,
		Schema.CreativeWorkSeries<any>,
		...Schema.SubjectOfSubtypes[],
	],
};

const Update4:Update4 = Object.assign({}, satisfactory, {
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

const Update = [
	SchemaGenerators.withContext(
		SchemaGenerators.VideoGame<Update4>(Object.assign({}, Update4)),
	),
];

export {
	Update4,
};

export default Update;
