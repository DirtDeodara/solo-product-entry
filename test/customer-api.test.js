const test = QUnit.test;
import compileApi from '../src/customer-api.js';
import customerApi from '../src/customer-api.js';

QUnit.module('compile order');

compileApi.storage = sessionStorage;
const testStorage = sessionStorage;

test('round trip order test', (assert) => {
    testStorage.removeItem('customers')

    const customer = { name: 'tester' };

    compileApi.save(customer);
    const result = compileApi.get();
    
    assert.deepEqual(result, customer);
});

test('no customers in local storage returns an empty array', (assert) => {
    testStorage.removeItem('customers');
    const expected = [];

    const customers = compileApi.getAll();

    assert.deepEqual(customers, expected);
});

