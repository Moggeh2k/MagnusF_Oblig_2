QUnit.test('Choose a Column', function (assert) {                    // Choose a column
    var chosenBar = 0;
    var value = 5;
    const actual = setElementSelection(value, chosenBar);
    const expected = 5;
    assert.equal(actual, expected, 'Sent: ' + value + 'Expected: ' + expected + 'Actual: ' + actual);
});

QUnit.test('Choose another Column', function (assert) {             // Choose different column
    var chosenBar = 5;
    var value = 5;
    const actual = setElementSelection(value, chosenBar);
    const expected = -1;
    assert.equal(actual, expected, 'Sent: ' + value + 'Expected: ' + expected + 'Actual: ' + actual);
});

QUnit.test('Remove Selection of Column', function (assert) {           // Remove Selection of Column
    var array = [3, 1, 8];
    var value = 0;
    const actual = removeElement(value, array);
    const expected = 3;
    assert.equal(actual, expected, 'Sent: ' + value + 'Expected: ' + expected + 'Actual: ' + actual);
});

QUnit.test('Remove Selection of Column', function (assert) {           // Change Selected Column
    var value = 10;
    const actual = modifyElement(value);
    const expected = true;
    assert.equal(actual, expected, 'Sent: ' + value + 'Expected: ' + expected + 'Actual: ' + actual);
});

QUnit.test('Add Column', function (assert) {           // Add Column
    var array = [3, 1, 8];
    var value = 10;
    const actual = addElement(array, 9);
    const expected = 4;
    assert.equal(actual, expected, 'Sent: ' + value + 'Expected: ' + expected + 'Actual: ' + actual);
});

