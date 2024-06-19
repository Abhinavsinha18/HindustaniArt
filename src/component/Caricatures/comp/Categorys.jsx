import Image from 'next/image'
import React from 'react'
import "./category.css"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const Categorys = ({data}) => {
  return (
    <div className='catebox'>
        {data && data.length>0 ?  data.map((e,i) =>{
            return <Card component={"a"} href='/caricatures/type' className='catcontainer' key={i+1}>
            <CardActionArea>
              {/* <CardMedia
                component="img"
                height="140"
                image="/static/images/cards/contemplative-reptile.jpg"
                alt="green iguana"
              /> */}
              <Image src={e.img} width={"345"} height={"240"} alt='img'/>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                 {e.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                 {e.discription}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
            
            // <div key={i+1} className='catcontainer'>
            //     <Link href={"/"}>
            //     <div className='imgcate'>
            //     <Image src={e.img} width={"250"} height={"250"} alt='img'/>
            //     </div>
            //     <span>
            //         <h1>{e.title}</h1>
            //         </span>
            //         <span>
            //         {e.discription}
            //         </span>
            //         </Link>
            // </div>
        })  : "No data found" }



    </div>
  )
}

export default Categorys