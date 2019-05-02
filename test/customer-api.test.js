const test = QUnit.test;
import customerApi from '../src/customer-api.js';

QUnit.module('compile order');

customerApi.storage = sessionStorage;
const testStorage = sessionStorage;

test('round trip order test', (assert) => {
    testStorage.removeItem('customers');

    const customer = { name: 'tester' };

    customerApi.save(customer);
    const result = customerApi.get();
    
    assert.deepEqual(result, customer);
});

test('no customers in local storage returns an empty array', (assert) => {
    testStorage.removeItem('customers');
    const expected = [];

    const customers = customerApi.getAll();

    assert.deepEqual(customers, expected);
});

test('two saves return an array with two items', (assert) => {
    testStorage.removeItem('customers');
    //arrange
    const customer1 = { name: 'tester1' };
    const customer2 = { name: 'tester2' };
    const expected = [customer1, customer2];

    customerApi.save(customer1);
    customerApi.save(customer2);

    //act
    const customers = customerApi.getAll();

    //assert
    assert.deepEqual(customers, expected);
});


