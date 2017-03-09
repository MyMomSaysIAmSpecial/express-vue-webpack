const http = require('http');
const request = require('request');
const express = require('express')();

express.get('/', function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', 'http://192.168.33.33');

    res.send(
        {
            "user": {
                "name": "Roman"
            }
        }
    );
});

express.listen(9615);
