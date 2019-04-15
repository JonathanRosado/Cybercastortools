import { Router } from 'express';
import facets from './facets';
import * as fs from 'fs';

export default ({ config, db }) => {
	let api = Router();

	api.use('/facets', facets({ config, db }));

	api.post('/', (req, res) => {
		// Utility method for running windows commands
		function run_cmd(cmd, args, callBack ) {
			require('child_process').exec(cmd, function (error, stdout, stderr) {
					callBack(error, stdout, stderr);
				}
			)
		}
		console.log(req.body);
		fs.writeFile('..\\hashcat\\hashes.txt', req.body.join('\n'), function(err) {
			run_cmd( 'cmd /c "cd /d ..\\hashcat\\ && hashcat64.exe -m 0 -a 0 hashes.txt -o cracked.txt dictionaries\\rockyou.txt"', [], function(error, stdout, stderr) {
				fs.readFile('..\\hashcat\\cracked.txt', 'utf8', function(err, contents) {
					fs.writeFile('..\\hashcat\\cracked.txt', '', function(err) {
						fs.writeFile('..\\hashcat\\hashcat.potfile', '', function(err) {
							fs.writeFile('..\\hashcat\\hashes.txt', '', function(err) {
								if(err) {
									res.end(err);
								} else {
									contents = contents.replace(/\r/g, "");
									res.end(JSON.stringify(contents.split("\n")));
								}
							});
						});
					});
				});
			});
		});
	});

	return api;
}
