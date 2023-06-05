#!/usr/bin/env node
console.log('link 成功');

const program = require('commander');

program
  // 创建create 命令，用户可以通过 qiuck-start-project create appName 来创建项目
  .command('create <app-name>')
  // 命名的描述
  .description('create a new project')
  // create命令的选项
  .option('-f, --force', 'overwrite target if it exist')
  .action((name, options) => {
    // 执行'./create.js'，传入项目名称和 用户选项
    require('./create')(name, options);
  });

program.parse();

