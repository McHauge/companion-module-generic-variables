const instance_skel = require('../../../instance_skel')
const { executeAction, getActions } = require('./actions')
const { getConfigFields } = require('./config')
const { executeFeedback, initFeedbacks } = require('./feedback')
const { updateVariableDefinitions, updateVariableValues, storeConfigValues } = require('./variables')
const { updateDynamicVariableChoices } = require('./VariableChoices')

/**
 * Companion instance class for Generic Variables
 */
class VariablesInstance extends instance_skel {
	constructor(system, id, config) {
		super(system, id, config)

		// Default instance state
		this.data = {
			startup: true,
			apiPollSingle: true,
			apiPollDynamicly: config.dynPoll || false,
			variable: [
				{
					name: config.varName1 || 'Generic 1',
					value: config.valueBoot1 || 'NaN',
					bootValue: config.valueBoot1 || 'NaN',
				},
				{
					name: config.varName2 || 'Generic 2',
					value: config.valueBoot2 || 'NaN',
					bootValue: config.valueBoot2 || 'NaN',
				},
				{
					name: config.varName3 || 'Generic 3',
					value: config.valueBoot3 || 'NaN',
					bootValue: config.valueBoot3 || 'NaN',
				},
				{
					name: config.varName4 || 'Generic 4',
					value: config.valueBoot4 || 'NaN',
					bootValue: config.valueBoot4 || 'NaN',
				},
				{
					name: config.varName5 || 'Generic 5',
					value: config.valueBoot5 || 'NaN',
					bootValue: config.valueBoot5 || 'NaN',
				},
				{
					name: config.varName6 || 'Generic 6',
					value: config.valueBoot6 || 'NaN',
					bootValue: config.valueBoot6 || 'NaN',
				},
				{
					name: config.varName7 || 'Generic 7',
					value: config.valueBoot7 || 'NaN',
					bootValue: config.valueBoot7 || 'NaN',
				},
				{
					name: config.varName8 || 'Generic 8',
					value: config.valueBoot8 || 'NaN',
					bootValue: config.valueBoot8 || 'NaN',
				},
				{
					name: config.varName9 || 'Generic 9',
					value: config.valueBoot9 || 'NaN',
					bootValue: config.valueBoot9 || 'NaN',
				},
				{
					name: config.varName10 || 'Generic 10',
					value: config.valueBoot10 || 'NaN',
					bootValue: config.valueBoot10 || 'NaN',
				},
			],
		}

		this.storeConfigValues = storeConfigValues
		this.updateVariableValues = updateVariableValues
		this.updateVariableDefinitions = updateVariableDefinitions
		this.config.apiPollInterval = this.config.apiPollInterval !== undefined ? this.config.apiPollInterval : 10000
		this.dynamicVariableChoices = []

		// this.addUpgradeToBooleanFeedbackScript({
		// 	'varMatchString': {
		// 		'fg': 'color',
		// 		'bg1': 'bgcolor',
		// 	},
		// 	'varMatchVar': {
		// 		'fg': 'color',
		// 		'bg1': 'bgcolor',
		// 	},
		// })
	}

	GetUpgradeScripts = function () {
		return [
			instance_skel.CreateConvertToBooleanFeedbackUpgradeScript({
				varMatchString: {
					'fg': 'color',
					'bg1': 'bgcolor',
				},
				varMatchVar: {
					'fg': 'color',
					'bg1': 'bgcolor',
				},
			}),
		]
	}
	

	// Init module
	init() {
		this.status(1, 'Connecting')
		;(this.data.apiPollSingle = !this.config.dynPoll),
			(this.data.apiPollDynamicly = this.config.dynPoll),
			this.storeConfigValues(this.config, this.data.variable)

		updateDynamicVariableChoices.bind(this)() // This also inits actions and feedbacks :)
		this.updateVariableDefinitions(this.data.variable)
		this.updateVariableValues(this.data.variable)
		this.checkFeedbacks()
		this.status(0, 'OK')
		this.data.startup = false
	}

	// New config saved
	updateConfig(config) {
		this.config = config
		;(this.data.apiPollSingle = !this.config.dynPoll),
			(this.data.apiPollDynamicly = this.config.dynPoll),
			this.storeConfigValues(this.config, this.data.variable)

		updateDynamicVariableChoices.bind(this)() // This also inits actions and feedbacks :)
		this.updateVariableDefinitions(this.data.variable)
		this.updateVariableValues(this.data.variable)
		this.checkFeedbacks()
		this.status(0, 'OK')
	}

	// Set config page fields
	config_fields() {
		return getConfigFields.bind(this)()
	}

	// Instance removal clean up
	destroy() {
		if (this.pollAPI) {
			clearInterval(this.pollAPI)
		}

		if (this.pollAPISingle) {
			clearInterval(this.pollAPISingle)
		}

		if (this.pollFeedback) {
			clearInterval(this.pollFeedback)
		}

		this.debug('destroy', this.id)
	}

	// Set available actions
	actions() {
		this.system.emit('instance_actions', this.id, getActions.bind(this)())
	}

	// Execute action
	action(action) {
		executeAction.bind(this)(action)
		this.updateVariableValues(this.data.variable)
		this.checkFeedbacks()
	}

	// Set available feedback choices
	init_feedbacks() {
		const feedbacks = initFeedbacks.bind(this)()
		this.setFeedbackDefinitions(feedbacks)
	}

	// Execute feedback
	feedback(feedback, bank) {
		return executeFeedback.bind(this)(feedback, bank)
	}
}

module.exports = VariablesInstance

// // Gets a list of variables and instances
// this.system.emit('variable_get_definitions', (definitions) =>
// 	console.log(Object.entries(definitions))
// );

// // Gets a value of a variable from another instance
// this.system.emit('variable_get', 'internal' , 'time_hms' , (definitions) =>
// 	console.log(definitions)
// );
