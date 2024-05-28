import React, { useEffect, useState } from 'react';
import { Container, Box, Typography, LinearProgress, Grid, Button, CircularProgress } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const CompleteProfile = () => {
  const { id } = useParams(); // Access user ID from URL parameters
  const [profileData, setProfileData] = useState({
    username: '',
    email: '',
    hobbie: '',
    age: '',
    gender: '',
    profession: ''
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:8181/getuser/${id}`);
        setProfileData(response.data.user);
        setLoading(false);
      } catch (error) {
        setError('Error fetching user data. Please try again later.');
        setLoading(false);
      }
    };
    fetchUserData();
  }, [id]);

  const calculateCompletion = (data) => {
    const totalFields = Object.keys(data).length;
    const filledFields = Object.values(data).filter(value => value).length;
    return (filledFields / totalFields) * 100;
  };

  const completionPercentage = profileData ? calculateCompletion(profileData) : 0;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:8181/updateuser/${id}`, profileData);
      console.log('Form submitted!');
      navigate('/')
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <Container maxWidth="md">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Profile Completion
        </Typography>
        {loading && <CircularProgress />} {/* Show loading indicator */}
        {error && <Typography color="error">{error}</Typography>} {/* Show error message */}
        {!loading && !error && (
          <>
            <LinearProgress variant="determinate" value={completionPercentage} />
            <Typography variant="h6" component="p" mt={2}>
              {completionPercentage.toFixed(2)}% completed
            </Typography>

            <form onSubmit={handleFormSubmit}>
              <Box mt={4}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <input
                      className='textWhite form-control'
                      type="text"
                      name="username"
                      placeholder="Username"
                      value={profileData.username || ''}
                      onChange={handleInputChange}
                      aria-label="Username"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <input
                      className='textWhite form-control'
                      type="text"
                      name="email"
                      placeholder="Email"
                      value={profileData.email || ''}
                      onChange={handleInputChange}
                      aria-label="Email"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <input
                      className='textWhite form-control'
                      type="text"
                      name="hobbie"
                      placeholder="Hobbies"
                      value={profileData.hobbie || ''}
                      onChange={handleInputChange}
                      aria-label="Hobbies"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <input
                      className='textWhite form-control'
                      type="text"
                      name="age"
                      placeholder="Age"
                      value={profileData.age || ''}
                      onChange={handleInputChange}
                      aria-label="Age"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <input
                      className='textWhite form-control'
                      type="text"
                      name="gender"
                      placeholder="Gender"
                      value={profileData.gender || ''}
                      onChange={handleInputChange}
                      aria-label="Gender"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <input
                      className='textWhite form-control'
                      type="text"
                      name="profession"
                      placeholder="Profession"
                      value={profileData.profession || ''}
                      onChange={handleInputChange}
                      aria-label="Profession"
                    />
                  </Grid>
                </Grid>

                <Box mt={4}>
                  <Button variant="contained" color="primary" type="submit">
                    Update Profile
                  </Button>
                </Box>
              </Box>
            </form>
          </>
        )}
      </Box>
    </Container>
  );
};

export default CompleteProfile;
