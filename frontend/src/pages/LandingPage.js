import React from 'react';
import { Container, Typography, Box, Button, Grid, Card, CardContent, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TimelineIcon from '@mui/icons-material/Timeline';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

function LandingPage() {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const theme = useTheme();

  const goToDashboard = () => {
    navigate('/dashboard');
  };

  const goToLogin = () => {
    navigate('/login');
  };

  const goToSignup = () => {
    navigate('/signup');
  };

  // If user is already authenticated, redirect to dashboard
  React.useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard');
    }
  }, [isAuthenticated, navigate]);

  return (
    <Box sx={(theme) => ({ minHeight: '100vh', background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)` })}>
      {/* Hero Section */}
      <Container maxWidth="lg">
        <Box sx={{ pt: 12, pb: 8, textAlign: 'center', color: 'white' }}>
          <Typography 
            variant="h2" 
            component="h1" 
            gutterBottom
            sx={{ fontWeight: 800, fontSize: { xs: '2.5rem', md: '4rem' }, letterSpacing: '-1px' }}
          >
            Transform Your Data Into Power
          </Typography>
          <Typography 
            variant="h6" 
            paragraph
            sx={{ fontSize: '1.25rem', fontWeight: 300, mb: 4, opacity: 0.95 }}
          >
            Advanced visualization and analytics platform for data-driven decision making
          </Typography>
          
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button 
              variant="contained" 
              size="large"
              onClick={goToSignup}
                sx={{ 
                background: 'white', 
                color: 'primary.main',
                fontWeight: 600,
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                '&:hover': { background: 'grey.100' }
              }}
            >
              Get Started
            </Button>
            <Button 
              variant="outlined" 
              size="large"
              onClick={goToLogin}
              sx={{ 
                borderColor: 'white',
                color: 'white',
                fontWeight: 600,
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                '&:hover': { background: 'rgba(255,255,255,0.1)' }
              }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Container>

      {/* Features Section */}
      <Box sx={{ background: 'white', py: 10 }}>
        <Container maxWidth="lg">
          <Typography 
            variant="h3" 
            sx={{ textAlign: 'center', mb: 8, fontWeight: 700, color: 'text.primary' }}
          >
            Powerful Features
          </Typography>
          
          <Grid container spacing={4}>
            {/* Feature 1 */}
            <Grid item xs={12} md={6} lg={3}>
              <Card 
                sx={{ 
                  height: '100%', 
                  borderRadius: '12px',
                  boxShadow: '0 4px 20px rgba(102, 126, 234, 0.15)',
                  border: '1px solid',
                  borderColor: 'grey.100',
                  transition: 'transform 0.3s ease, boxShadow 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 40px rgba(102, 126, 234, 0.25)'
                  }
                }}
              >
                <CardContent sx={{ p: 3, textAlign: 'center' }}>
                  <TimelineIcon 
                    sx={{ fontSize: 50, color: 'primary.main', mb: 2 }} 
                  />
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, color: 'text.primary' }}>
                    Interactive Charts
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Design stunning, interactive visualizations with advanced charting capabilities and real-time updates.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Feature 2 */}
            <Grid item xs={12} md={6} lg={3}>
              <Card 
                sx={{ 
                  height: '100%', 
                  borderRadius: '12px',
                  boxShadow: '0 4px 20px rgba(118, 75, 162, 0.15)',
                  border: '1px solid',
                  borderColor: 'grey.100',
                  transition: 'transform 0.3s ease, boxShadow 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 40px rgba(118, 75, 162, 0.25)'
                  }
                }}
              >
                <CardContent sx={{ p: 3, textAlign: 'center' }}>
                  <CloudUploadIcon 
                    sx={{ fontSize: 50, color: 'secondary.main', mb: 2 }} 
                  />
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, color: 'text.primary' }}>
                    Seamless Upload
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Upload data in multiple formats and let our smart system automatically parse and organize it for analysis.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Feature 3 */}
            <Grid item xs={12} md={6} lg={3}>
              <Card 
                sx={{ 
                  height: '100%', 
                  borderRadius: '12px',
                  boxShadow: '0 4px 20px rgba(102, 126, 234, 0.15)',
                  border: '1px solid',
                  borderColor: 'grey.100',
                  transition: 'transform 0.3s ease, boxShadow 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 40px rgba(102, 126, 234, 0.25)'
                  }
                }}
              >
                <CardContent sx={{ p: 3, textAlign: 'center' }}>
                  <AnalyticsIcon 
                    sx={{ fontSize: 50, color: 'primary.main', mb: 2 }} 
                  />
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, color: 'text.primary' }}>
                    Deep Insights
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Uncover hidden patterns with AI-powered analytics and predictive modeling tools designed for professionals.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Feature 4 */}
            <Grid item xs={12} md={6} lg={3}>
              <Card 
                sx={{ 
                  height: '100%', 
                  borderRadius: '12px',
                  boxShadow: '0 4px 20px rgba(118, 75, 162, 0.15)',
                  border: '1px solid',
                  borderColor: 'grey.100',
                  transition: 'transform 0.3s ease, boxShadow 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 40px rgba(118, 75, 162, 0.25)'
                  }
                }}
              >
                <CardContent sx={{ p: 3, textAlign: 'center' }}>
                  <TrendingUpIcon 
                    sx={{ fontSize: 50, color: 'secondary.main', mb: 2 }} 
                  />
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, color: 'text.primary' }}>
                    Growth Tracking
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Monitor trends and performance metrics with customizable dashboards and comprehensive reporting tools.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box sx={(theme) => ({ background: `linear-gradient(135deg, ${theme.palette.secondary.main} 0%, ${theme.palette.primary.main} 100%)`, py: 12, color: 'white' })}>
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
          <Typography variant="h3" sx={{ fontWeight: 700, mb: 3 }}>
            Ready to Visualize Your Data?
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, fontWeight: 300, opacity: 0.95 }}>
            Join thousands of professionals who make data-driven decisions with DataViz Pro
          </Typography>
          <Button 
            variant="contained" 
            size="large"
            onClick={goToSignup}
            sx={{ 
              background: 'white', 
              color: 'secondary.main',
              fontWeight: 700,
              px: 5,
              py: 2,
              fontSize: '1.1rem',
              '&:hover': { background: 'grey.100' }
            }}
          >
            Create Your Account Today
          </Button>
        </Container>
      </Box>

      {/* Footer */}
      <Box sx={{ background: 'grey.900', py: 4, color: 'grey.300', textAlign: 'center' }}>
        <Container maxWidth="lg">
          <Typography variant="body2">
            © 2026 DataViz Pro. All rights reserved. Transforming data into insights.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}

export default LandingPage; 