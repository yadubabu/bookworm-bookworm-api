import express, { request } from 'express';
import authenticate from '../middlewares/authenticate';
import {parseString} from 'xml2js';


const router =express.Router();
//router.use(authenticate);

router.get('/search',(req,res)=>{
      res.json({
         books:[
             {
                 goodreadsId:1,
                 title:"1984",
                 authors:"Orwell",
                 covers:[
                     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf_E3nHxRN-cE9Eu1ZlydAhH9wu6Y8Iy9IJA&usqp=CAU",
                     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQPACqqle-qV3JHI8OWy75HOVQYxTtmFc0Lw&usqp=CAU"
                 ],
                 pages:198
             },
             {
                 goodreadsId:2,
                title:"Three men in boat",
                 authors:"Jerone k.Jerone",
                 covers:[
                     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCoBadzY7W-wqFYMcjbAitHxeJ-pDh0ZivBQ&usqp=CAU",
                     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo7XvGnm-wBfCVEhPzDeVRoClQXntF0fffvw&usqp=CAU"
                 ],
                 pages:256
             }
         ]
     })
 });

export default router;