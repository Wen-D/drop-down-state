states = {
    1: 'Alabama',
    2: 'Florida',
    3: 'New York'
}

stepsObj = new Steps(states);

stepsObj.prepareSteps(1, 'Alabama Step 1', 'Some Amazing Description for Step 1', 1);
stepsObj.prepareSteps(2, 'Alabama Step 2', 'Some Amazing Description for Step 2', 1);
stepsObj.prepareSteps(3, 'Alabama Step 3', 'Some Amazing Description for Step 3', 1);
stepsObj.prepareSteps(4, 'Alabama Step 4', 'Some Amazing Description for Step 4', 1);
stepsObj.prepareSteps(5, 'Alabama Step 5', 'Some Amazing Description for Step 5', 1);

stepsObj.prepareSteps(1, 'Florida Step 1', 'Some Amazing Description for Step 1', 2);
stepsObj.prepareSteps(2, 'Florida Step 2', 'Some Amazing Description for Step 2', 2);
stepsObj.prepareSteps(3, 'Florida Step 3', 'Some Amazing Description for Step 3', 2);
stepsObj.prepareSteps(4, 'Florida Step 4', 'Some Amazing Description for Step 4', 2);
stepsObj.prepareSteps(5, 'Florida Step 5', 'Some Amazing Description for Step 5', 2);

stepsObj.prepareSteps(1, 'New York Step 1', 'Some Amazing Description for Step 1', 3);
stepsObj.prepareSteps(2, 'New York Step 2', 'Some Amazing Description for Step 2', 3);
stepsObj.prepareSteps(3, 'New York Step 3', 'Some Amazing Description for Step 3', 3);
stepsObj.prepareSteps(4, 'New York Step 4', 'Some Amazing Description for Step 4', 3);
stepsObj.prepareSteps(5, 'New York Step 5', 'Some Amazing Description for Step 5', 3);

function doSelect(idElement) {
    stepsObj.prepareStatesSelect(idElement);
}

function changeHtml(element) {
    stepsObj.doOutput(element);
}