import { Box, Typography } from '@mui/material'
import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  return (
    <>
    <Box sx={{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItem:'center',
        bgcolor:'#C7C8CC',
        pt:15,
    }} >
        <Typography sx={{ fontFamily:'Teko', fontSize:'25px',display:'flex', justifyContent:'center',}} >©️  Your E-learning platform. All rights reserved</Typography>
        <Typography sx={{ fontFamily:'Teko', fontSize:'22px',display:'flex', justifyContent:'center',gap:1, mt:1}} >Made By <span style={{fontFamily:'Teko', color:'#000000'}} >Kareena</span></Typography>
        <Box sx={{display:'flex', justifyContent:'center', gap:2, m:2}} >
            <FaLinkedin size={25} 
                        style={{cursor:'pointer'}} onClick={()=>window.open('https://www.linkedin.com/in/kareena-bhade-b914a7260/')} /> 
            <FaGithub size={25} 
                      style={{cursor:'pointer'}} onClick={()=>window.open('https://github.com/kareenabhade')}  /> 
            <FaInstagram size={25} 
                         style={{cursor:'pointer'}} onClick={()=>window.open('https://www.instagram.com/kareena_bhade_001/')} />
            <SiGmail size={25} 
                    style={{cursor:'pointer'}}  onClick={() => window.location.href = 'mailto:kareenabhade16@gmail.com'}/>
        </Box>
    </Box>
    </>
  )
}

export default Footer