const express = require('express');
const router = express();
router.get('/',(req,res)=>{
    res.send('Abhinav bull task');
})
module.exports=router;