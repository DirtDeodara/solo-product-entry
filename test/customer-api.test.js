const test = QUnit.test;
import compileApi from '../src/customer-api.js';

QUnit.module('compile order');

test('round trip order test', (assert) => {

    const customer = { name: 'tester' };

    compileApi.save(customer);
    const result = compileApi.get();
    
    assert.deepEqual(result, customer);
});