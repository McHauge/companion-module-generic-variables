exports.getActions = function() {
	var self = this;
	var dynamicVariableChoices = self.dynamicVariableChoices;

	var currentVariable = [ 
		{id: 0, label: this.label + ':' + this.data.variable[0].name.replace(/\s+/g,"_")},
		{id: 1, label: this.label + ':' + this.data.variable[1].name.replace(/\s+/g,"_")},
		{id: 2, label: this.label + ':' + this.data.variable[2].name.replace(/\s+/g,"_")},
		{id: 3, label: this.label + ':' + this.data.variable[3].name.replace(/\s+/g,"_")},
		{id: 4, label: this.label + ':' + this.data.variable[4].name.replace(/\s+/g,"_")},
		{id: 5, label: this.label + ':' + this.data.variable[5].name.replace(/\s+/g,"_")},
		{id: 6, label: this.label + ':' + this.data.variable[6].name.replace(/\s+/g,"_")},
		{id: 7, label: this.label + ':' + this.data.variable[7].name.replace(/\s+/g,"_")},
		{id: 8, label: this.label + ':' + this.data.variable[8].name.replace(/\s+/g,"_")},
		{id: 9, label: this.label + ':' + this.data.variable[9].name.replace(/\s+/g,"_")},	
	];

	return {
		'setValue': {
			label: 'Set Value by string/number',
			options: [
				{
					type: 'dropdown',
					label: 'Select Variable',
					id: 'varSelect',
					choices: currentVariable,
					default: currentVariable[0].id
				},
				{
					type: 'textinput',
					label: 'Value',
					id: 'value',
				}
			]
		},
		'setValueByVariable': {
			label: 'Set Value by Variable',
			options: [
				{
					type: 'dropdown',
					label: 'Select Variable',
					id: 'varSelect',
					choices: currentVariable,
					default: currentVariable[0].id
				},
				{
					type: 'dropdown',
					id: 'value',
					label: 'Variable to copy value from',
					tooltip: 'The instance label and variable name',
					choices: dynamicVariableChoices,
					minChoicesForSearch: 5,
					default: dynamicVariableChoices[0].id
				},
			]
		},
	}
};

exports.executeAction = function(action) {
	var self = this;
	var opt = action.options;
	var conf = self.config;
	var variable = self.data.variable;
	var cmd;

	switch(action.action) {
		case 'setValue':	cmd = opt.value; break;
		case 'setValueByVariable':	
			var str = opt.value.split(':'); // Split instance and variable
			var selctInstances = str[0]; 
			var selctVariable = str[1]; 
			var temp;

			// Gets the value of the selected value
			this.system.emit('variable_get', selctInstances , selctVariable , (definitions) => temp = definitions );
			cmd = temp;
			break;
	}	

	if (cmd !== undefined) {
		conf.value = cmd;
		variable[opt.varSelect].value = cmd;
	}

	this.config = conf;
	this.data.variable = variable;

};
