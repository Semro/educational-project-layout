'use strict'

const express = require('express');
const PORT = process.env.PORT || 8080;

const server = express()
	.use(express.static(`${ __dirname }/public`))
	.post('/*', (req, res)=>
	{
		let url = req.originalUrl;
		let path = `public/pages/${ url }/${ url }.html`;
		res.sendFile(path, {root: __dirname}, (err)=>
		{
			if (err) res.send('404');
		});
		console.log(`Client opened ${ url }`);
	})
	.listen(PORT, () => console.log(`Listening on ${ PORT } port`));