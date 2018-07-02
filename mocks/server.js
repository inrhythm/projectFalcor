const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(3001, () => console.log('Example app listening on port 3001!'))

app.get('/people/list',(req,res) => {
	res.json({
		people:[
		{
			image1: "url",
			image2: "url",
			name: "foo",
			job_title: "bar"
		},
		{
			image1: "url",
			image2: "url",
			name: "foo1",
			job_title: "bar1"
		},
		{
			image1: "url",
			image2: "url",
			name: "foo2",
			job_title: "bar2"
		}],
		count:3
	})
})

app.get('/people/:id',(req,res) => {
	res.json({
		"Person":"Detail"
	})
})

app.get('/people/admin/list',(req,res) => {
	res.json({
		people:[
		{
			image1: "url",
			image2: "url",
			name: "foo",
			job_title: "bar"
		},
		{
			image1: "url",
			image2: "url",
			name: "foo1",
			job_title: "bar1"
		},
		{
			image1: "url",
			image2: "url",
			name: "foo2",
			job_title: "bar2"
		}],
		count:3
	})
})

app.post('/people/:id',(res,req) => {
	res.json({
		Person:req.body,
		status:"add Succufully"
	})
})

