var shell = require('shelljs');

// 1、删除dist/*.css

shell.rm('-rf', 'dist/output.css')

// 2、重新编译

// a、修改变量
shell.cd('style')
shell.ls('*.less').forEach((file) => {
    shell.sed('-i', '/vars', '/temp-vars', file)
})
shell.cd('..')
// b、 重新编译
shell.exec('node rebuild.js', function() {
    console.log('********')
})

