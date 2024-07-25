import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CourseData } from '../../../../Context/CourseContext';
import { Box, Button, Typography } from '@mui/material';
import { Load } from '../../../Load';
import { UserData } from '../../../../Context/UserContext';


const CourseDescription = () => {
  const params = useParams();
  const { course, fetchCourse } = CourseData();
  const {user} = UserData();
  const [loading, setLoading]  = useState(true);

  const navigate = useNavigate();

  
  useEffect(() => {
    const loadCourse = async () => {
      setLoading(true);
      await fetchCourse(params.id);
      setLoading(false);
    };

    loadCourse();
  }, []);


  return (
    (loading)? <Load /> :
    <Box className="course-description-container" sx={{ p: 4,ml:{md:30}, mr:{md:30},height:"90vh", bgcolor:'#EEEDEB' }}>
      <Typography variant="h4" sx={{ fontFamily: 'Rajdhani', fontWeight: 700 }}>
        {course.title}
      </Typography>
      <Typography variant="h6" sx={{ fontFamily: 'Rajdhani', mt: 2 }}>
        Category: {course.category}
      </Typography>
      <Typography variant="body1" sx={{ fontFamily: 'Rajdhani',fontWeight:'600',fontSize:'20px', mt: 2 }}>
        {course.description}
      </Typography>
      <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="body1" sx={{ fontFamily: 'Rajdhani', fontWeight: 700, color: 'blue' }}>
          Price: ${course.price}
        </Typography>
        <Typography variant="body1" sx={{ fontFamily: 'Rajdhani', fontWeight: 700, color: 'blue' }}>
          Duration: {course.duration} hours
        </Typography>
      </Box>
      <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
        <img
          src={`http://localhost:5000/${course.image}`}
          alt={course.title}
          style={{ maxHeight: '250px', maxWidth: '100%' }}
        />
      </Box>
      {(user && user.subscription.includes(params.id))?<>
              <Button
                  variant="contained"
                  sx={{
                    mt: 4,
                    bgcolor: 'black',
                    color: 'white',
                    fontFamily: 'Rajdhani',
                    fontWeight: 700,
                    ':hover': {
                      bgcolor: 'white',
                      color: 'black',
                      border: '1px solid black',
                    },
                  }}
                  onClick={() => navigate(`/course/study/${params.id}`)}
                > Study
             </Button>
       </>:
          <Button
              variant="contained"
              sx={{
                mt: 4,
                bgcolor: 'black',
                color: 'white',
                fontFamily: 'Rajdhani',
                fontWeight: 700,
                ':hover': {
                  bgcolor: 'white',
                  color: 'black',
                  border: '1px solid black',
                },
              }}
              onClick={() => console.log('Get Started')}
            > Buy Now
          </Button>
       }
      </Box>
      
  );
};

export default CourseDescription;
