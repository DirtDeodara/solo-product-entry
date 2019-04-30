import getAnswers from '../src/getAnswers.js';
const test = QUnit.test;

test('do my forms work', function(assert) {
    //Arrange
    const expected ={
        name: 'dirt',
        experience: 'yes',
        destination:'ski',
        duration: '3',
        addOns: 'super-powers',
        medical: 'no'
    };
    // Set up your parameters and expectations
    const formData = new FormData();
    formData.set('name', expected.name);
    formData.set('experience', 'yes');
    formData.set('destination', expected.destination);
    formData.set('duration', expected.duration);
    formData.set('add-ons', expected.addOns[1]);
    formData.append('add-ons', expected.addOns[2]);
    formData.set('medical', 'no');

    //Act 
    // Call the function you're testing and set the result to a const
    const answers = getAnswers(formData);

    //Assert
    assert.deepEqual(answers, expected);
});