var express = require('express');
var app = express();
var path = require('path');
var qs = require('querystring');
app.use(express.static(__dirname));
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});
app.post('/login', function(req, res) {
    console.log(req.method);
    var jsonString = '';
    //debugger;
    //sys.puts(sys.inspect(data));
    req.on('data', function (data) {
        jsonString += data;
    });

    req.on('end', function () {
        var logindata = qs.parse(jsonString);
        console.log(logindata);
        //debugger;
        /*if(logindata.name == 'user' && logindata.password == 'user') {
            res.send({'success':true});
        }
        else {
            res.send({'success':false});
        }*/

        if(validateLogin(logindata.name, logindata.password)) {
            res.send({'success':true});
        }
        else {
            res.send({'success':false});
        }
    });
    
    
});

function validateLogin(user, pwd)
{
    var mysql      = require('mysql');
    var connection = mysql.createConnection
    ({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'kyc'
    });

    connection.connect();
    var query = 'SELECT password from customer where customerID='+user;
    console.log(query);
    var validation = false;

    connection.query(query, function(err, rows, fields) 
    {
        if (!err)
          {  
            console.log('The solution is: ', rows);
            console.log('The fields are : ', fields);
            //var xyz = rows[0].get('password');
            //console.log('The value is  : ', xyz);
            console.log('The row value is  : ', rows[0].password);
            if (pwd === rows[0].password)
            {
                console.log(' validates');
                validation = true;
            }
            else
            {
                console.log("wrong creds");
            }
          }
        else
            console.log('Error while performing Query:- '+err.stack);
    });

    connection.end();

    return validation;
}

app.listen(8080);
console.log('listening at 8080');
