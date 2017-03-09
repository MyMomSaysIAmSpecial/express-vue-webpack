const http = require('http');
const request = require('request');
const express = require('express')();

express.get('/', function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');

    let todoList = [];
    todoList.push('Setup node.js');
    todoList.push('Setup express.js');
    todoList.push('Setup webpack');
    todoList.push('Do magic with vue.js');

    res.send(todoList);
});

express.listen(9615);
