import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Grid,
  Switch,
  FormControlLabel,
  Button,
  Divider,
  useTheme,
  Alert,
  CircularProgress
} from '@mui/material';
import { useColorMode } from '../App';
import PageHeader from '../components/common/PageHeader';
import SettingsIcon from '@mui/icons-material/Settings';
import NetworkCheckIcon from '@mui/icons-material/NetworkCheck';
import { testApiConnection } from '../services/api';

function Settings() {
  const theme = useTheme();
  const colorMode = useColorMode();
  const [connectionStatus, setConnectionStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleTestConnection = async () => {
    setLoading(true);
    setConnectionStatus(null);
    try {
      const result = await testApiConnection();
      setConnectionStatus(result);
      console.log('Connection test result:', result);
    } catch (error) {
      console.error('Error testing connection:', error);
      setConnectionStatus({
        success: false,
        error: error.message,
        timestamp: new Date().toISOString()
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="lg">
      <PageHeader
        title="Settings"
        subtitle="Configure your application preferences"
        icon={<SettingsIcon />}
      />
      
      <Paper 
        sx={{ 
          p: 3, 
          mb: 3,
          bgcolor: 'background.paper',
          backgroundImage: 'none'
        }}
      >
        <Typography variant="h6" gutterBottom>
          Appearance
        </Typography>
        <Divider sx={{ mb: 2 }} />
        
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={6}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <FormControlLabel
                control={
                  <Switch
                    checked={theme.palette.mode === 'dark'}
                    onChange={colorMode.toggleColorMode}
                    color="primary"
                  />
                }
                label="Dark Mode"
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body2" color="text.secondary">
              Switch between light and dark themes
            </Typography>
          </Grid>
        </Grid>
      </Paper>
      
      <Paper 
        sx={{ 
          p: 3,
          mb: 3,
          bgcolor: 'background.paper',
          backgroundImage: 'none'
        }}
      >
        <Typography variant="h6" gutterBottom>
          Data Preferences
        </Typography>
        <Divider sx={{ mb: 2 }} />
        
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <FormControlLabel
              control={<Switch defaultChecked color="primary" />}
              label="Auto-analyze uploaded files"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body2" color="text.secondary">
              Automatically analyze data when files are uploaded
            </Typography>
          </Grid>
        </Grid>
      </Paper>
      
      {/* API Connection Test Paper */}
      <Paper 
        sx={{ 
          p: 3,
          mb: 3,
          bgcolor: 'background.paper',
          backgroundImage: 'none'
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
          <Typography variant="h6" gutterBottom>
            API Connection Test
          </Typography>
          <Button 
            startIcon={loading ? <CircularProgress size={20} /> : <NetworkCheckIcon />}
            variant="outlined" 
            color="primary"
            onClick={handleTestConnection}
            disabled={loading}
          >
            {loading ? 'Testing...' : 'Test Connection'}
          </Button>
        </Box>
        <Divider sx={{ mb: 2 }} />
        
        <Typography variant="body2" color="text.secondary" paragraph>
          Test the connection to the backend API server. This can help diagnose issues with file uploads, 
          visualization creation, and other functionalities.
        </Typography>
        
        {connectionStatus && (
          <Alert 
            severity={connectionStatus.success ? "success" : "error"}
            sx={{ mb: 2 }}
          >
            {connectionStatus.success ? 
              "API connection successful!" : 
              `Connection failed: ${connectionStatus.error || 'Unknown error'}`
            }
          </Alert>
        )}
      </Paper>
    </Container>
  );
}

export default Settings; 