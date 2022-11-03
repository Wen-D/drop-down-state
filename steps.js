class Steps {

    // list of states with key=>value
    constructor(states) {
        this.states = states;
        this.steps = {};
        for (const objKey of Object.keys(this.states)) {
            this.steps[objKey] = [];
        }

    }

    prepareSteps(stepNumber, stepTitle, stepDescription, stateID) {
        const temp = {
            'stepNumber': stepNumber,
            'stepTitle': stepTitle,
            'stepDescription': stepDescription
        };
        this.steps[stateID].push(temp);
    }

    doOutput(stateID) {
        let toOutput = '';
        for (const [key, value] of Object.entries(this.steps[stateID.value])) {
            toOutput += '<h2>' + value.stepTitle + '</h2>';
            toOutput += '<p>' + value.stepDescription + '</p>';
        }
        document.getElementById('steps').innerHTML = toOutput;
    }

    prepareStatesSelect(idElement) {
        let toOutput = '<select name="states" id="states" onchange="changeHtml(this)">';
        toOutput += '<option value="">Select one</option>';
        for (const [key, value] of Object.entries(this.states)) {
            toOutput += '<option value="' + key + '">' + value + '</option>';
        }
        toOutput += '</select">';

        document.getElementById(idElement).innerHTML = toOutput;
    }

}