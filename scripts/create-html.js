#!/usr/bin/env node
const path = require('path');
const fs = require('fs');


function buildHTML(template, target) {
  const filesToReplace = ['main.js', 'css/ui.css'];
  const manifest = require(path.join(target, 'manifest.json'));
  var html = fs.readFileSync(template).toString();

  filesToReplace.forEach(file => {
    if (manifest[file]) {
      html = html.replace(file, manifest[file]);
    }
  });

  fs.writeFileSync(path.join(target, 'index.html'), html);
}

const cwd = process.cwd();

if (!process.env.OUTPUT_PATH) {
  process.env.OUTPUT_PATH = path.join(cwd, 'dist');
}

buildHTML(path.join(cwd, 'index.html'), process.env.OUTPUT_PATH);
