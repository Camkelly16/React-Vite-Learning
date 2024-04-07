import React, { useState, useEffect } from 'react';

function WaitingForTimeout() {
  const [content, setContent] = useState('Waiting...');

  useEffect(() => {
    async function myDisplay() {
      let myPromise = new Promise(function(resolve) {
        setTimeout(function() {resolve("I love You !!");}, 3000);
      });
      setContent(await myPromise);
    }

    myDisplay();
  }, []);

  return (
    <div id="demo">
      {content}
    </div>
  );
}

function WaitingForFile() {
  const [content, setContent] = useState('Waiting...');

  useEffect(() => {
    async function getFile() {
      let myPromise = new Promise(function(resolve) {
        let req = new XMLHttpRequest();
        req.open('GET', "mycar.html");
        req.onload = function() {
          if (req.status === 200) {
            resolve(req.response);
          } else {
            resolve("File not Found");
          }
        };
        req.send();
      });
      setContent(await myPromise);
    }

    getFile();
  }, []);

  return (
    <div id="demo">
      {content}
    </div>
  );
}

function App() {
  return (
    <div>
      <h2>Waiting for Timeout</h2>
      <WaitingForTimeout />
      <h2>Waiting for File</h2>
      <WaitingForFile />
    </div>
  );
}

export default App;
