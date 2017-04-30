$(document).ready(function(){
   $('#agentbtn').click(function() {
        $("#cust-sbt-btn").hide();
        $("#cust-sbt-btn").prop("disabled", true);
        $("#agent-sbt-btn").removeAttr('disabled');
        $("#agent-sbt-btn").show();
    });
     $('#custtbtn').click(function() {
        $("#agent-sbt-btn").hide();
        $("#agent-sbt-btn").prop("disabled", true);
        $("#cust-sbt-btn").removeAttr('disabled');
        $("#cust-sbt-btn").show();
    });
    $('#agent-sbt-btn').click(function() {
        //debugger;
        var uname = $('#username').val();
        var pwd = $('#pwd').val();
        console.log("agent click");
        //debugger;
        $.post("http://localhost:8080/login",
        {
            name: uname,
            password: pwd
        },
        function(data, status){
            console.log("Data: " + data + "\nStatus: " + status);
            //debugger;
            console.log("agent client");
            if(status == 'success') {
                if(data.success) {
                    //debugger;
                    window.location.href='agentHome.html';
                }
                else {
                    alert('Pease enter valid username and password');
                }
            }
        });
    });
    $('#cust-sbt-btn').click(function() {
         var uname = $('#username').val();
        var pwd = $('#pwd').val();
        console.log("customer click");
        $.post("http://localhost:8080/login",
        {
            name: uname,
            password: pwd
        },
        function(data, status){
            console.log("Data: " + data + "\nStatus: " + status);
            console.log("customer client");
            if(status == 'success') {
                if(data.success) {
                    window.location.href='custHome.html';
                }
                else {
                    alert('Pease enter valid username and password');
                }
            }
        });
    });
     
});

