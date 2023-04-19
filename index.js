import express from 'express';
const app = express();
const students = [
    'Shahd',
    'Yasser',
    'Ahmed',
    'meshrif'
]
const studentfunction =(req, res) => {
    let output = '<ul>';
    for (let i=0; i < students.length; i++){
        output +=  '<li>' + students[i] + '</li>';
    }
    output += '</ul>';
    res.send(output);
};
app.get('/students', studentfunction)

app.listen(3000);