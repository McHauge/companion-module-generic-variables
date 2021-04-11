exports.updateVariableDefinitions = function(varData) {
	const variables = [];

	const GEN_VAR = [
		{ label: varData[0].name || 'Generic 1',	name: varData[0].name.replace(/\s+/g,"_") || 'Generic_1'},
		{ label: varData[1].name || 'Generic 2',	name: varData[1].name.replace(/\s+/g,"_") || 'Generic_2'},
		{ label: varData[2].name || 'Generic 3',	name: varData[2].name.replace(/\s+/g,"_") || 'Generic_3'},
		{ label: varData[3].name || 'Generic 4',	name: varData[3].name.replace(/\s+/g,"_") || 'Generic_4'},
		{ label: varData[4].name || 'Generic 5',	name: varData[4].name.replace(/\s+/g,"_") || 'Generic_5'},
		{ label: varData[5].name || 'Generic 6',	name: varData[5].name.replace(/\s+/g,"_") || 'Generic_6'},
		{ label: varData[6].name || 'Generic 7',	name: varData[6].name.replace(/\s+/g,"_") || 'Generic_7'},
		{ label: varData[7].name || 'Generic 8',	name: varData[7].name.replace(/\s+/g,"_") || 'Generic_8'},
		{ label: varData[8].name || 'Generic 9',	name: varData[8].name.replace(/\s+/g,"_") || 'Generic_9'},
		{ label: varData[9].name || 'Generic 10',	name: varData[9].name.replace(/\s+/g,"_") || 'Generic_10'},
	]

	for (var input in GEN_VAR) {
		variables.push(GEN_VAR[input]);
	}

	this.setVariableDefinitions(variables);
};

exports.updateVariableValues = function(varData) {
	this.setVariable(varData[0].name.replace(/\s+/g,"_"), varData[0].value);
	this.setVariable(varData[1].name.replace(/\s+/g,"_"), varData[1].value);
	this.setVariable(varData[2].name.replace(/\s+/g,"_"), varData[2].value);
	this.setVariable(varData[3].name.replace(/\s+/g,"_"), varData[3].value);
	this.setVariable(varData[4].name.replace(/\s+/g,"_"), varData[4].value);
	this.setVariable(varData[5].name.replace(/\s+/g,"_"), varData[5].value);
	this.setVariable(varData[6].name.replace(/\s+/g,"_"), varData[6].value);
	this.setVariable(varData[7].name.replace(/\s+/g,"_"), varData[7].value);
	this.setVariable(varData[8].name.replace(/\s+/g,"_"), varData[8].value);
	this.setVariable(varData[9].name.replace(/\s+/g,"_"), varData[9].value);

};

exports.storeConfigValues = function(confData,varData) {
	
	varData[0].name = confData.varName1;
	varData[0].value = confData.varBoot1;
	varData[0].bootValue = confData.varBoot1;

	varData[1].name = confData.varName2;
	varData[1].value = confData.varBoot2;
	varData[1].bootValue = confData.varBoot2;

	varData[2].name = confData.varName3;
	varData[2].value = confData.varBoot3;
	varData[2].bootValue = confData.varBoot3;

	varData[3].name = confData.varName4;
	varData[3].value = confData.varBoot4;
	varData[3].bootValue = confData.varBoot4;

	varData[4].name = confData.varName5;
	varData[4].value = confData.varBoot5;
	varData[4].bootValue = confData.varBoot5;

	varData[5].name = confData.varName6;
	varData[5].value = confData.varBoot6;
	varData[5].bootValue = confData.varBoot6;

	varData[6].name = confData.varName7;
	varData[6].value = confData.varBoot7;
	varData[6].bootValue = confData.varBoot7;

	varData[7].name = confData.varName8;
	varData[7].value = confData.varBoot8;
	varData[7].bootValue = confData.varBoot8;

	varData[8].name = confData.varName9;
	varData[8].value = confData.varBoot9;
	varData[8].bootValue = confData.varBoot9;

	varData[9].name = confData.varName10;
	varData[9].value = confData.varBoot10;
	varData[9].bootValue = confData.varBoot10;

};