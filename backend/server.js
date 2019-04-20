const mysql = require('mysql');
const express = require('express');
var app = express();
const bodyparser = require('body-parser');
const cors = require('cors');
app.use(cors());
app.use(bodyparser.json());

var mysqlConnection = mysql.createConnection({
    host: 'db-intern.ciupl0p5utwk.us-east-1.rds.amazonaws.com',
    user: 'dummyUser',
    password: 'dummyUser01',
    database: 'db_intern',
    multipleStatements: true
});

mysqlConnection.connect((err) => {
    if (!err)
        console.log('DB connection succeded.');
    else
        console.log('DB connection failed \n Error : ' + JSON.stringify(err, undefined, 2));
});


app.listen(3306, () => console.log('Express server is runnig at port no : 3306'));


//Get all user data
app.get('/userData', (req, res) => {
    mysqlConnection.query('SELECT * FROM db_intern.userData', (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
});

//Get an single user data (search parameter)
app.get('/userData/:id', (req, res) => {
    mysqlConnection.query('SELECT * FROM db_intern.userData WHERE emailId = ?', [req.params.id], (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
});

//Delete an user data
app.delete('/userData/:id', (req, res) => {
    mysqlConnection.query('SET @p_EmailId=? ;CALL spDelete(@p_EmailId);', [req.params.id], (err, rows, fields) => {
        if (!err)
        {   res.end(JSON.stringify("Record Deleted"));
            console.log('Deleted successfully.');
    }
        else
            console.log(err);
    })
});

//Insert an employees
app.post('/userData', (req, res) => {
    let usr = req.body;
    var sql = "SET @p_Username = ? ;SET @p_EmailId = ?;SET @p_PhoneNo = ?;SET @p_Password = ?;\
    CALL spCreateUser(@p_Username,@p_EmailId,@p_PhoneNo,@p_Password);";
    mysqlConnection.query(sql,[usr.userName, usr.emailId,  usr.phoneNo, usr.password], (err) => {
        if (!err)
        { 
            res.end(JSON.stringify("Record Updated"));
            console.log("inserted!");
        }
        else
            console.log(err);
    })
});

