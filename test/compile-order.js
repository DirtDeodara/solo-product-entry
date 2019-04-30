const test = QUnit.test;
//import my function here

//QUnit.module('compile order');

test('round trip order test', (assert) => {

    const customer = { name: 'tester' };

    orderFormApi.save(costumer);
    const result = orderFormApi.get();
    
    assert.deepEqual(result, customer);
});