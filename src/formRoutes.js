import FormOne from './forms/formOne/FormOne';
import FormTwo from './forms/formTwo/FormTwo';
import FormThree from './forms/formThree/FormThree';
import FormFour from './forms/formFour/FormFour';
import FormFive from './forms/formFive/FormFive';

export const formRoutes = [
	{
		path: 'visual_arts_works',
		component: FormThree,
	},
	{
		path: 'literary_works',
		component: FormTwo,
	},
	{
		path: 'performing_arts_works',
		component: FormOne,
	},
	{
		path: 'serial_work',
		component: FormFive,
	},
	{
		path: 'sound_recording_works',
		component: FormFour,
	},
];
