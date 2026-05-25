const fs = require('fs');

const files = [
    './src/components/SelectedWork.tsx',
    './src/components/Services.tsx',
    './src/components/HowIHelp.tsx',
    './src/components/Testimonials.tsx'
];

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    content = content.replace(/key=\{index\r?\n/g, 'key={index}\n');
    fs.writeFileSync(file, content);
    console.log("Fixed " + file);
});
