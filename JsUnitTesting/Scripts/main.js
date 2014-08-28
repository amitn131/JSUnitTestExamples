var getSum = function (arg1, arg2) {
    var intArg1 = parseInt(arg1);
    var intArg2 = parseInt(arg2);
    return intArg1 + intArg2;
};

var getSumText = function (arg1, arg2) {
    var sum = getSum(arg1, arg2);
    return 'Client says: The sum of ' + arg1 + ' and ' + arg2 + ' is ' + sum + '.';
};

var getSumTextFromServer = function (arg1, arg2) {
    $.ajax({
        url: '/home?arg1=' + arg1 + '&arg2=' + arg2
    })
        .done(function(xhr) {
            var sumText = 'Server says: The sum of ' + arg1 + ' and ' + arg2 + ' is ' + xhr + '.';
            $("#output1").text(sumText);
        });
};

$(document).ready(function () {
    $("#button1").click(function (e) {
        var sumText = getSumText($("#arg1").val(), $("#arg2").val());
        $("#output1").text(sumText);
        e.stopPropagation();
    });

    $("#button2").click(function (e) {
        getSumTextFromServer($("#arg1").val(), $("#arg2").val());
        e.stopPropagation();
    });
});