const exec = require('child_process').exec;

function	runCmd(command, callback){
		exec(command, (error, stdout, stderr) => { 
			callback(stdout); 
		});
	};
