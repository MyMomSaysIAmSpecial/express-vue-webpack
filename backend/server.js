const http = require('http');
const request = require('request');
const express = require('express')();

express.get('/', function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');

    const todoList = [];
    todoList.push(
        'Setup node.js',
        'Setup express.js',
        'Setup webpack',
        'Do magic with vue.js'
    );

    res.send(todoList);
});

express.listen(9615);
