//module('Simple test');
//test('basic test', function () {
//    var actual = '1';
//    var expected = 1;
//    ok(actual == expected, 'Truthy!');
//    equal(actual, expected, '... are Equal');
//});

module('Sum tests');
test('should add correctly', 1, function () {
    var sum = getSum('2', '1');
    strictEqual(sum, 3, 'sum is correct');
});

test('should display text correctly', 1, function () {
    var sumText = getSumText('3', '5');
    equal(sumText, 'Client says: The sum of 3 and 5 is 8.', 'sum text is correct');
});

module('DOM tests');
test('should add correctly on client side', 1, function () {
    $('#arg1').val('2');
    $('#arg2').val('5');
    $('#button1').trigger('click');
    var output = $('#output1').text();

    equal(output, 'Client says: The sum of 2 and 5 is 7.', 'sum text is correct');
});

test('should add correctly on server side', 1, function () {
    // good practice.. just so you don't 'spill' into other tests
    $.mockjaxClear();
    // clear previous test output
    $("#output").text('');

    $.ajaxSetup({
        async: false
    });

    $.mockjax({
        url: '/home?arg1=2&arg2=5',
        dataType: 'json',
        responseText: '7',
    });

    $('#arg1').val('2');
    $('#arg2').val('5');
    $('#button2').click();

    var output = $('#output1').text();
    equal(output, 'Server says: The sum of 2 and 5 is 7.', 'sum text is correct');
});