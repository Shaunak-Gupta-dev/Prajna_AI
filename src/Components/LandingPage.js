import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import '../Style/LandingPage.css'; // Import the CSS for styling
import Navbar from './NavBar';
import { Card, CardContent, Typography, Grid, IconButton } from '@mui/material'; // Import necessary components
import LinkedInIcon from '@mui/icons-material/LinkedIn'; // LinkedIn icon
import GitHubIcon from '@mui/icons-material/GitHub'; // GitHub icon
import team from '../Assets/team.jpg'

import RoundedButton from "./RoundedButton";
const LandingPage = () => {
  const teamMembers = [
    { 
      name: 'John Doe', 
      role: 'Lead Developer', 
      linkedIn: '#', 
      github: '#', 
      image: team,  // Replace with the actual image path
      description: 'Passionate about building innovative web applications.' 
    },
    { 
      name: 'Jane Smith', 
      role: 'UI/UX Designer', 
      linkedIn: '#', 
      github: '#', 
      image: team,  // Replace with the actual image path
      description: 'Dedicated to creating user-friendly interfaces.' 
    },
    { 
      name: 'Alice Johnson', 
      role: 'Backend Engineer', 
      linkedIn: '#', 
      github: '#', 
      image: team,  // Replace with the actual image path
      description: 'Experienced in building scalable server-side applications.' 
    },
    { 
      name: 'Bob Brown', 
      role: 'Frontend Developer', 
      linkedIn: '#', 
      github: '#', 
      image: team,  // Replace with the actual image path
      description: 'Enthusiastic about creating dynamic and responsive web pages.' 
    },
    { 
      name: 'Charlie Davis', 
      role: 'Product Manager', 
      linkedIn: '#', 
      github: '#', 
      image: team,  // Replace with the actual image path
      description: 'Focused on delivering high-quality products and features.' 
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="landing-container">
        <h1 style={{marginBottom : 0}} class="gradient-heading">Welcome to PDF Genie</h1>
        <h1 className="typing-effect">
          <TypeAnimation
            sequence={[
              'Innovative.', 1000,
              'Creative.', 1000,
              'Reliable.', 1000,
              'Efficient.', 1000,
              'Future-ready.', 1000,
            ]}
            wrapper="span"
            cursor={true}
            repeat={0}  // or use Infinity for looping
            style={{ fontSize: '100px' }}
          />
        </h1>
      </div>
        <h4 style={{ fontSize :'30px'}} class="gradient-heading">One Stop Destination for PDF Uploading</h4>
        <div class="info-box-container">
          <div class="info-box">
            <h2 class="info-box-heading">How Our Application Works</h2>
            <p class="info-box-text">
              With PDF Genie, you can easily upload multiple PDF files at once, and it will quickly analyze them, providing helpful insights and questions, all in a simple and easy-to-use interface.
            </p>
            <div style={{marginBottom : '10px'}}><RoundedButton routeLink = "/upload" label = "Try PDF Genie"/>  </div>
          </div>
        </div>

      {/* Grid for team member cards */}
      <div className="team-container">
        <Grid container spacing={3} justifyContent="center">
          {teamMembers.map((member, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Card>
                <CardContent>
                  {/* Member Image */}
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    style={{ width: '100%', borderRadius: '8px' }} 
                  />
                  <Typography variant="h5" component="div" style={{ marginTop: '10px' }}>
                    {member.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {member.role}
                  </Typography>
                  <Typography variant="body2" style={{ marginTop: '5px' }}>
                    {member.description}
                  </Typography>
                  {/* Links for LinkedIn and GitHub */}
                  <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'flex-start' }}>
                    <IconButton 
                      color="primary" 
                      onClick={() => window.open(member.linkedIn, '_blank')} 
                      aria-label="LinkedIn"
                    >
                      <LinkedInIcon />
                    </IconButton>
                    <IconButton 
                      color="primary" 
                      onClick={() => window.open(member.github, '_blank')} 
                      aria-label="GitHub"
                    >
                      <GitHubIcon />
                    </IconButton>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default LandingPage;
