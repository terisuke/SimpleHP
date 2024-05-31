const fs = require('fs');
const path = require('path');

function copyFiles(srcDir, destDir) {
  fs.readdirSync(srcDir).forEach(file => {
    const srcFile = path.join(srcDir, file);
    const destFile = path.join(destDir, file);

    if (fs.lstatSync(srcFile).isDirectory()) {
      if (file !== 'dist' && file !== '.git') {
        fs.mkdirSync(destFile, { recursive: true });
        copyFiles(srcFile, destFile);
      }
    } else {
      fs.copyFileSync(srcFile, destFile);
    }
  });
}

copyFiles('.', './dist');