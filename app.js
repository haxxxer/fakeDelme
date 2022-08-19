const express = require('express')
const app = express()

const PORT = process.env.PORT || 3000


app.get('/myCloud/backupCode/instagram', (req,res) => {
    res.setHeader('Content-Type', 'text/html')
    res.send("<html><head><title>Recovery Codes</title></head><body><img src='http://canarytokens.com/traffic/4lizq8u3130qkwuutnva72jhc/post.jsp'/></body></html>")
})



app.listen(PORT, ()=> console.log(`Server has successfully started on port ${PORT}..!!`))