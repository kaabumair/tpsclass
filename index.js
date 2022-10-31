const express = require('express')
const app = express()
const port = 3003
const path = require('path')

// new branch
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send('Hello World!')
})


//app.get('/image', (req, res) => {
//  let imagePath = path.join(__dirname,'elon.jpg');

//   res.sendFile(imagePath)
//})

// 4
// task 4 - create image name list
app.get('/dynamicimage', (req, res) => {

    let imageone = path.join(__dirname, 'elon.jpg')
    let imagetwo = path.join(__dirname, 'u.png')
    

    console.log(req.query)
    if(req.query.name == 'elon') {
        res.sendFile(imageone)
    }
     else if (req.query.name == 'u') {

        res.sendFile(imagetwo)

    }
    else {
        res.send('not found')
    }


}


)


app.get('/sum',function(req,res){
    var a=Number(req.query.first);
    var b=Number(req.query.sec);
    var c;
    c=a+b;
    response = {
        result: c  
    };
    console.log(response);
    res.end(JSON.stringify(response));
}
);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


