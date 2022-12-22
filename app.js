//new file
const fs = require('fs');
const express = require('express');
const cors = require('cors');
const app = express();
const convert = require('xml-js');

//local port
const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

//Home api
app.get('/', (req, res) => {
  res.send('Hello there, this is home!');
  console.log('Visit to home page!');
});

//POST-> end point for report
app.post('/quizReport', (req, res) => {
  //quizReport contains all the variables -> checkout dbg.js
  const quizReport = req.body;
  //detailed report in xml format
  const detailedReportXml = req.body.dr;
  //unique file name
  const uniqueSuffix =
    Date.now() + '-' + Math.round(Math.random() * 1e4) + '.json';
  //converting xml to json using "xml-js" library functions
  quizReport.jsonDR = convert.xml2json(detailedReportXml, {
    compact: true,
  });
  //writing json report in reports folder
  fs.writeFileSync('./reports/' + uniqueSuffix, quizReport.jsonDR, (err) => {
    if (err) console.log(err);
  });
  console.log(`Received a quiz: ${uniqueSuffix}`);
  console.log(quizReport.jsonDR);
  res.send(`Received your quiz: ${uniqueSuffix}`);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
