$(document).ready(function () {
    $('#send').click(function (event) {
        event.preventDefault();
        var name = $('#name');
        var mail = $('#email');
        var topic = $('#topic');
        var msg =$('#msg');
        var note = $('#note');
        if (name.val() == '') {
            note.text('Enter Name');
        }
        else if(mail.val()=='')
        {
            note.text('Enter Email');
        }
        else if(topic.val()=='')
        {
            note.text('Select Topic');
            
        }
        else if(msg.val()=='')
        {
            note.text('Enter Messege');
        }
        else
        {
            $('#sendmsg').text('Message Sent ....');
            setTimeout(function(){
                $('#msgform').submit();
            },3000);
        }

    });

});