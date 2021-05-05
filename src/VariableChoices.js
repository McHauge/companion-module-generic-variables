exports.updateDynamicVariableChoices = function () {
	const getStatus = () => {
		if (this.data.apiPollSingle == false) {
			if (this.pollAPISingle) {
				clearInterval(this.pollAPISingle)
			}
		}

		var dynamicVariableChoices = []
		this.system.emit('variable_get_definitions', (definitions) =>
			Object.entries(definitions).forEach(([instanceLabel, variables]) =>
				variables.forEach((variable) =>
					dynamicVariableChoices.push({
						id: `${instanceLabel}:${variable.name}`,
						label: `${instanceLabel}:${variable.name}`,
					})
				)
			)
		)

		// Update Output and re-init actions and feedbacks with the new choices
		this.dynamicVariableChoices = dynamicVariableChoices
		this.actions()
		this.init_feedbacks()
		this.checkFeedbacks()
	}

	const getFeedback = () => {
		this.checkFeedbacks()
	}

	if (this.pollAPI) {
		clearInterval(this.pollAPI)
	}

	if (this.pollAPISingle) {
		clearInterval(this.pollAPISingle)
	}

	if (this.pollFeedback) {
		clearInterval(this.pollFeedback)
	}

	// Read rynamicly every X seconds after what is chosen in the config tab
	if (this.data.apiPollDynamicly == true) {
		if (this.config.apiPollInterval != 0) {
			this.pollAPI = setInterval(getStatus, this.config.apiPollInterval < 100 ? 100 : this.config.apiPollInterval)
		}
	}

	// Run once when intializing and once after 10 sec to read from modules loaded after this one
	if (this.data.apiPollSingle == true) {
		getStatus()
		this.pollAPISingle = setInterval(getStatus, 5000)
		this.data.apiPollSingle = false
	}

	this.pollFeedback = setInterval(getFeedback, 500)
}
