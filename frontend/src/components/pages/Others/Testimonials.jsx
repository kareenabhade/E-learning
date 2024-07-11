import { Grid, Box,Typography } from '@mui/material'
import React from 'react'
import TestimonialCard from './TestimonialCard'

const TestimonialData = [
  {
    id: 1,
    name:'Jane Doe',
    img:'https://teenlife.blogs.pressdemocrat.com/files/2010/09/codding.jpg',
    description:"This e-learning platform has been a game-changer for me. The quality of the courses has been incredibly beneficial.",
    bg:'FFE6E6',
  },
  {
    id: 2,
    name:'Kaney Marchel',
    img:'https://thumbs.dreamstime.com/b/beautiful-student-9525869.jpg',
    description:"I've greatly improved my skills thanks to this platform. The comprehensive content and organized curriculum are outstanding.",
    bg:'F6FFDE'
  },
  {
    id: 3,
    name:'Lorey Mane',
    img:'https://dailyillini.com/wp-content/uploads/2018/02/A1_Visa.jpg',
    description:"This platform has boosted my learning experience. The courses are detailed and the material provided is exceptional.",
    bg:'FEECE2'
  },
  {
    id: 4,
    name:'Ajit Saxena',
    img:'https://img.freepik.com/premium-photo/portrait-young-happy-latin-student-standing-classroom-looking-camera_562687-3027.jpg',
    description:"The e-learning platform has been instrumental in my development. The course structure and quality of content are simply top-notch.",
    bg:'CDF5FD'
  },
];


const Testimonials = () => {
  return (
    <>    
      <Grid container spacing={3}   justifyContent="center"  alignItems="center"  >
        { TestimonialData.map((student)=>{
            return  <TestimonialCard name={student.name} img={student.img} description={student.description} bg={student.bg} />
          })         
        }
      </Grid>
    </>
  )
}

export default Testimonials