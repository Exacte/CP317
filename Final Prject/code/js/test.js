$('.deleteMe').live('click', function () {
    $(this).parent().remove();
    $('#contributionList').listview('refresh');
});

$('#addContribution').click(function () {
    var newAmount = $('#contributionAmount').val();

    if (newAmount != '') {
        $('#contributionList').append('<li><a>' + newAmount + '</a><a class="deleteMe"></a></li>').listview('refresh');
        $('#contributionAmount').val('');
    } else {
        alert('Nothing to add');
    }
});