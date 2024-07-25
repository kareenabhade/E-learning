import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CourseCard.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import Modal from '@mui/material/Modal';
import { UserData } from '../../../../Context/UserContext';
import { MdDelete } from "react-icons/md";


const btnStyle = { 
              height: '40px', 
              width: '190px', 
              bgcolor: 'transparent',
              border: '3px solid black',
              color: 'black',
              fontSize: '13px',
              fontWeight: '900',
              m: 2, 
              ":hover": {
                bgcolor: 'black',
                color: 'white',
                border: '3px solid', 
                borderColor: 'black',
                borderRadius: '5px'
              }
            }

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  height: 700,
  bgcolor: '#EAEAEA',
  border: '1px solid #000',
  p: 4,
  display: 'flex',
  flexDirection: 'column',
  alignItem: 'center',
};

const CourseCard = ({ course, onModalOpen, onModalClose }) => {
  const [open, setOpen] = useState(false);
  const {user, isAuth} = UserData();

  const navigate = useNavigate();

  const handleOpen = () => {
    setOpen(true);
    if (onModalOpen) {
      onModalOpen();
    }
  };

  const handleClose = () => {
    setOpen(false);
    if (onModalClose) {
      onModalClose();
    }
  };


  return (
    <>
      <div className="course-card" onClick={handleOpen}>
        <img 
          className="course-image" 
          src={`http://localhost:5000/${course.image}`} 
          alt={course.category} 
        />
        <div className="course-info">
          <h3>{course.title}</h3>
          <p>{course.category}</p>
        </div>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h5" component="h2"
                      sx={{display: 'flex', justifyContent: "center", fontFamily: 'Rajdhani', fontWeight: '700'}}>
            {course.title}
          </Typography>
          <img height={300} width={500} style={{ margin: '10px' }}
               src={`http://localhost:5000/${course.image}`} 
               alt={course.category} 
          />
          <Box sx={{ m: 2, display: 'flex', justifyContent: 'space-between' }}>
            <p style={{ color: 'blue' }}>Price - ${course.price}</p>
            <p style={{ color: 'blue' }}>Duration - {course.duration} h</p>
          </Box>

          {isAuth?<>
            {(user && user.role !== 'admin')?
              <>{(user.subscription.includes(course._id))?
                <Button 
                   variant='contained' 
                   onClick={()=>{
                    navigate(`/course/study/${course._id}`)
                   }}
                   sx={btnStyle}
                   >
                   Study 
                </Button>:<>
                <Button 
                   variant='contained' 
                   onClick={()=>{
                    navigate(`/course/${course._id}`)
                   }}
                   sx={btnStyle}
                   >
                   Get Started 
                </Button>
                </>
               }
            </>:
            <Box sx={{display:'flex', 
                      justifyContent:'space-between'
            }} >
              <Button 
                  variant='contained' 
                  onClick={()=>{
                    navigate(`/course/study/${course._id}`)
                  }}
                  sx={btnStyle}
                  >
                  Study 
               </Button>
               <Button 
                 variant='contained' 
                 onClick={()=>{
                 }}
                 sx={btnStyle}
                 >
                  <span style={{color:'red', display:'flex', justifyContent:'center', alignItems:'center'}} ><MdDelete size={16} />Delete</span>
               </Button>
            </Box>
           }
        </>:<>
             <Button 
             variant='contained' 
             onClick={()=>{
                 navigate('/login')
             }}
             sx={btnStyle}
             >
             Get Started 
           </Button>
          
          </>
          }
        </Box>
      </Modal>
    </>
  );
};

export default CourseCard;
