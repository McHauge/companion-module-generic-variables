exports.getConfigFields = function () {

	return [
		{
			type: 'text',
			id: 'info1',
			width: 12,
			label: 'Information',
			value: 'This module will create 10 generic variable for you, if you need more add more that one instance.<br />Please fill the name of your custom variable, and the bootup value.'
		},
		{
			type: 'textinput',
			id: 'varName1',
			label: 'Variable Name 1',
			default: 'Generic 1',
			width: 6,
			tooltip: 'Please specify the name of your variable.'
		},
		{
			type: 'textinput',
			id: 'varBoot1',
			label: 'Bootup Value 1',
			default: '',
			width: 6,
			tooltip: 'Please specify the bootup value for your variable.'
		},
		{
			type: 'textinput',
			id: 'varName2',
			label: 'Variable Name 2',
			default: 'Generic 2',
			width: 6,
			tooltip: 'Please specify the name of your variable.'
		},
		{
			type: 'textinput',
			id: 'varBoot2',
			label: 'Bootup Value 2',
			default: '',
			width: 6,
			tooltip: 'Please specify the bootup value for your variable.'
		},
		{
			type: 'textinput',
			id: 'varName3',
			label: 'Variable Name 3',
			default: 'Generic 3',
			width: 6,
			tooltip: 'Please specify the name of your variable.'
		},
		{
			type: 'textinput',
			id: 'varBoot3',
			label: 'Bootup Value 3',
			default: '',
			width: 6,
			tooltip: 'Please specify the bootup value for your variable.'
		},
		{
			type: 'textinput',
			id: 'varName4',
			label: 'Variable Name 4',
			default: 'Generic 4',
			width: 6,
			tooltip: 'Please specify the name of your variable.'
		},
		{
			type: 'textinput',
			id: 'varBoot4',
			label: 'Bootup Value 4',
			default: '',
			width: 6,
			tooltip: 'Please specify the bootup value for your variable.'
		},
		{
			type: 'textinput',
			id: 'varName5',
			label: 'Variable Name 5',
			default: 'Generic 5',
			width: 6,
			tooltip: 'Please specify the name of your variable.'
		},
		{
			type: 'textinput',
			id: 'varBoot5',
			label: 'Bootup Value5',
			default: '',
			width: 6,
			tooltip: 'Please specify the bootup value for your variable.'
		},
		{
			type: 'textinput',
			id: 'varName6',
			label: 'Variable Name 6',
			default: 'Generic 6',
			width: 6,
			tooltip: 'Please specify the name of your variable.'
		},
		{
			type: 'textinput',
			id: 'varBoot6',
			label: 'Bootup Value 6',
			default: '',
			width: 6,
			tooltip: 'Please specify the bootup value for your variable.'
		},
		{
			type: 'textinput',
			id: 'varName7',
			label: 'Variable Name 7',
			default: 'Generic 7',
			width: 6,
			tooltip: 'Please specify the name of your variable.'
		},
		{
			type: 'textinput',
			id: 'varBoot7',
			label: 'Bootup Value 7',
			default: '',
			width: 6,
			tooltip: 'Please specify the bootup value for your variable.'
		},
		{
			type: 'textinput',
			id: 'varName8',
			label: 'Variable Name 8',
			default: 'Generic 8',
			width: 6,
			tooltip: 'Please specify the name of your variable.'
		},
		{
			type: 'textinput',
			id: 'varBoot8',
			label: 'Bootup Value 8',
			default: '',
			width: 6,
			tooltip: 'Please specify the bootup value for your variable.'
		},
		{
			type: 'textinput',
			id: 'varName9',
			label: 'Variable Name 9',
			default: 'Generic 9',
			width: 6,
			tooltip: 'Please specify the name of your variable.'
		},
		{
			type: 'textinput',
			id: 'varBoot9',
			label: 'Bootup Value 9',
			default: '',
			width: 6,
			tooltip: 'Please specify the bootup value for your variable.'
		},
		{
			type: 'textinput',
			id: 'varName10',
			label: 'Variable Name 10',
			default: 'Generic 10',
			width: 6,
			tooltip: 'Please specify the name of your variable.'
		},
		{
			type: 'textinput',
			id: 'varBoot10',
			label: 'Bootup Value 10',
			default: '',
			width: 6,
			tooltip: 'Please specify the bootup value for your variable.'
		},
		{
			type: 'text',
			id: 'apiPollInfo',
			width: 12,
			label: 'Variables Poll Interval warning',
			value:
				'Adjusting the Polling Interval can impact performance. <br />' +
				'A lower invterval allows for more responsive feedback, but may impact CPU usage. <br />' +
				'<strong>This only affects the dropdown list NOT the values of those variables.<br /> It ONLY adds thier names to the list!</strong>' 
		},
		{
			type: 'checkbox',
			id: 'dynPoll',
			width: 1,
			label: 'Enable',
			default: false
		},
		{
			type: 'textinput',
			id: 'apiPollInterval',
			label: 'Polling interval (ms) default: 10000 (10s), min: 250 (0.25s)',
			width: 11,
			default: 10000,
			min: 250,
			max: 100000,
			regex: this.REGEX_NUMBER
		},
		{
			type: 'text',
			id: 'info3',
			width: 12,
			label: 'Warning',
			value: 'Hitting save will <strong>reset</strong> your variable back to the boot value!'
		},
		// {
		// 	type: 'text',
		// 	id: 'info2',
		// 	width: 12,
		// 	label: 'Information',
		// 	value: 'Enable auto save last value between restarts.'
		// },
		// {
		// 	type: 'checkbox',
		// 	id: 'varSave',
		// 	width: 12,
		// 	label: 'Enable',
		// 	default: true
		// },
		// {
		// 	type: 'text',
		// 	id: 'info3',
		// 	width: 12,
		// 	label: '',
		// 	value: ''
		// },
		// {
		// 	type: 'textinput',
		// 	id: 'value',
		// 	width: 12,
		// 	label: 'This stores you last value, please ignore!',
		// 	value: ''
		// },
	];
};