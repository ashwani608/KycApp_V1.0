$(document).ready(function() {
   
    $.ajax(
    {
         type: "GET",
         url: "data.json",
         data: "{}",
         contentType: "application/json; charset=utf-8",
         dataType: "json",
         cache: false,
         success: function (data) {
              $.each(data, function (i,v) {
                  $("#custDataTable tbody").append("<tr>"+"<td>"+data[i].name+"</td>"
                                 +"<td>"+data[i].id+"</td>"
                                 +"</tr>" )

    //     trHTML += '<tr><td>' + data.id[i] + '</td><td>' + data.name[i] + '</td><td>' + data.password[i] + '</td><td>' + data.role[i] + '</td><td>' + data.privileges[i] + '</td><td>' + data.status[i] + '</td></tr>';
    })
},
    error: function (msg) {

        alert(msg.responseText);
      }
   });

 /*  $.post("http://localhost:8080/newRequest",
        {
            name: "agent1"
            
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
        });*/
});