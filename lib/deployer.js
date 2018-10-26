'use strict';

var fs = require('fs');
var path = require('path');
var spawn = require('./spawn');

const message = new Date();

module.exports = function(args) {
  var deployDir = args.deployDir
  
  function git() {
    var len = arguments.length;
    var args = new Array(len);

    for (var i = 0; i < len; i++) {
      args[i] = arguments[i];
    }

    return spawn('git', args, {
      cwd: deployDir,
      verbose: true,
      stdio: 'inherit'
    });
  }
// 初始化
  function setup() {
    var userName = args.name  ||'';
    var userEmail = args.email|| '';
    return git('init').then(function() {
        return userName && git('config', 'user.name', userName);
      }).then(function() {
        return userEmail && git('config', 'user.email', userEmail);
      }).then(function() {
        return git('add', '-A');
      }).then(function() {
        return git('commit', '-m', 'Date:'+new Date());
      });
}
    function push(){
      return git('add', '-A').then(function() {
        return git('commit', '-m', message).catch(function() {
          // Do nothing. It's OK if nothing to commit.
        });
      }).then(function() {
        return git('push', '-u', args.url, 'HEAD:' + args.branch, '--force');
      });
    }
  return setup().then(function(err){
    push();
  })
}