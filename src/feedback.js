exports.initFeedbacks = function () {
	var self = this
	var dynamicVariableChoices = self.dynamicVariableChoices
	const feedbacks = {}

	const fg = self.rgb(255, 255, 255)
	const bg = self.rgb(255, 0, 0)

	var currentVariable = [
		{ id: 0, label: this.label + ':' + this.data.variable[0].name.replace(/\s+/g, '_') },
		{ id: 1, label: this.label + ':' + this.data.variable[1].name.replace(/\s+/g, '_') },
		{ id: 2, label: this.label + ':' + this.data.variable[2].name.replace(/\s+/g, '_') },
		{ id: 3, label: this.label + ':' + this.data.variable[3].name.replace(/\s+/g, '_') },
		{ id: 4, label: this.label + ':' + this.data.variable[4].name.replace(/\s+/g, '_') },
		{ id: 5, label: this.label + ':' + this.data.variable[5].name.replace(/\s+/g, '_') },
		{ id: 6, label: this.label + ':' + this.data.variable[6].name.replace(/\s+/g, '_') },
		{ id: 7, label: this.label + ':' + this.data.variable[7].name.replace(/\s+/g, '_') },
		{ id: 8, label: this.label + ':' + this.data.variable[8].name.replace(/\s+/g, '_') },
		{ id: 9, label: this.label + ':' + this.data.variable[9].name.replace(/\s+/g, '_') },
	]

	feedbacks.varMatchString = {
		type: 'boolean',
		label: 'Value matches a Custom String',
		description: 'Value matches a Custom String',
		style: {
			color: fg,
			bgcolor: bg
		},
		options: [
			{
				type: 'dropdown',
				label: 'Select Variable',
				id: 'varSelect',
				choices: currentVariable,
				default: currentVariable[0].id,
			},
			{
				type: 'dropdown',
				label: 'Type of bollean action',
				id: 'func',
				default: 'eq',
				choices: [
					{ id: 'eq', label: '=' },
					{ id: 'ne', label: '!=' },
					{ id: 'gt', label: '>' },
					{ id: 'lt', label: '<' },
				],
			},
			{
				type: 'textinput',
				label: 'Value',
				id: 'value',
			},
		],
	}

	feedbacks.varMatchVar = {
		type: 'boolean',
		label: 'Value matches an other Variable',
		description: 'Value matches a Custom String',
		style: {
			color: fg,
			bgcolor: bg
		},
		options: [
			{
				type: 'dropdown',
				label: 'Select Variable',
				id: 'varSelect',
				choices: currentVariable,
				default: currentVariable[0].id,
			},
			{
				type: 'dropdown',
				label: 'Type of bollean action',
				id: 'func',
				default: 'eq',
				choices: [
					{ id: 'eq', label: '=' },
					{ id: 'ne', label: '!=' },
					{ id: 'gt', label: '>' },
					{ id: 'lt', label: '<' },
				],
			},
			{
				type: 'dropdown',
				id: 'value',
				label: 'Variable to match',
				tooltip: 'The instance label and variable name',
				choices: dynamicVariableChoices,
				minChoicesForSearch: 5,
				default: dynamicVariableChoices[0].id,
			},
		],
	}

	return feedbacks
}

exports.executeFeedback = function (feedback, bank) {
	var self = this
	var opt = feedback.options
	var variable = self.data.variable

	if (feedback.type === 'varMatchString') {
		switch (opt.func) {
			case 'gt':
				if (parseFloat(variable[opt.varSelect].value) >= opt.value) {
					return true
				}
				break
			case 'lt':
				if (parseFloat(variable[opt.varSelect].value) <= opt.value) {
					return true
				}
				break
			case 'ne':
				if (variable[opt.varSelect].value != opt.value) {
					return true
				}
				break
			default:
				if (variable[opt.varSelect].value == opt.value) {
					return true
				}
				break
		}
	}

	if (feedback.type === 'varMatchVar') {
		var str = opt.value.split(':') // Split instance and variable
		var selctInstances = str[0]
		var selctVariable = str[1]
		var temp

		// Gets the value of the selected value
		this.system.emit('variable_get', selctInstances, selctVariable, (definitions) => (temp = definitions))

		switch (opt.func) {
			case 'gt':
				if (parseFloat(variable[opt.varSelect].value) >= temp) {
					return true
				}
				break
			case 'lt':
				if (parseFloat(variable[opt.varSelect].value) <= temp) {
					return true
				}
				break
			case 'ne':
				if (variable[opt.varSelect].value != temp) {
					return true
				}
				break
			default:
				if (variable[opt.varSelect].value == temp) {
					return true
				}
				break
		}
	}
	return false
}
