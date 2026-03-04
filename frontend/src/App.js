import React, { useState, useMemo, createContext, useContext, useEffect } from 'react';
import { Routes, Route, Navigate, useLocation, HashRouter } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import Layout from './components/layout/Layout';
import Dashboard from './pages/Dashboard';
import FileManager from './pages/FileManager';
import Visualizations from './pages/Visualizations';
import SavedVisualizations from './pages/SavedVisualizations';
import Settings from './pages/Settings';
import Help from './pages/Help';
import AboutUs from './pages/AboutUs';
import Login from './pages/Login';
import Signup from './pages/Signup';
import LandingPage from './pages/LandingPage';
import { AuthProvider } from './contexts/AuthContext';
import { DataProvider } from './contexts/DataContext';
import { useDataContext } from './contexts/DataContext';
import ProtectedRoute from './components/auth/ProtectedRoute';

// Create Theme Context
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
  mode: 'light',
});

// Custom hook to use the color mode context
export const useColorMode = () => useContext(ColorModeContext);

function AppRoutes() {
  const location = useLocation();

  // Log current route for debugging
  useEffect(() => {
    console.log('Current route:', location.pathname);
  }, [location]);

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/landing" element={<LandingPage />} />
      <Route 
        path="/dashboard" 
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/files" 
        element={
          <ProtectedRoute>
            <FileManager />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/visualizations" 
        element={
          <ProtectedRoute>
            <Visualizations />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/saved-visualizations" 
        element={
          <ProtectedRoute>
            <SavedVisualizations />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/settings" 
        element={
          <ProtectedRoute>
            <Settings />
          </ProtectedRoute>
        } 
      />
      <Route path="/help" element={<Help />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/" element={<Navigate to="/landing" replace />} />
      <Route path="*" element={<Navigate to="/landing" replace />} />
    </Routes>
  );
}

function App() {
  // Initialize theme from localStorage or default to 'light'
  const [mode, setMode] = useState(() => {
    const savedMode = localStorage.getItem('themeMode');
    return savedMode || 'light';
  });

  // Update localStorage when theme changes
  useEffect(() => {
    localStorage.setItem('themeMode', mode);
  }, [mode]);

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => {
          const newMode = prevMode === 'light' ? 'dark' : 'light';
          return newMode;
        });
      },
      mode,
    }),
    [mode]
  );

  // Create theme based on mode
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: '#667eea',
          },
          secondary: {
            main: '#764ba2',
          },
          background: {
            default: mode === 'light' ? '#f7fafc' : '#071026',
            paper: mode === 'light' ? '#ffffff' : '#0f1724',
          },
        },
        shape: {
          borderRadius: 10,
        },
        typography: {
          fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
          h1: { fontWeight: 700 },
          h2: { fontWeight: 700 },
          h3: { fontWeight: 600 },
          h4: { fontWeight: 600 },
          h5: { fontWeight: 600 },
          h6: { fontWeight: 600 },
        },
        components: {
          MuiButton: {
            styleOverrides: {
              root: {
                textTransform: 'none',
                borderRadius: 8,
              },
              containedPrimary: {
                backgroundColor: 'primary.main',
                color: 'common.white',
                '&:hover': { backgroundColor: 'primary.dark' },
              },
            },
          },
          MuiPaper: {
            styleOverrides: {
              root: {
                backgroundImage: 'none',
              },
            },
          },
          MuiAppBar: {
            styleOverrides: {
              colorPrimary: {
                backgroundColor: mode === 'light' ? '#ffffff' : '#0b1220',
                color: mode === 'light' ? '#111827' : '#e6eef8',
              },
            },
          },
        },
      }),
    [mode]
  );

  return (
    <HashRouter>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <AuthProvider>
            <DataProvider>
              <Layout>
                <AppRoutes />
              </Layout>
            </DataProvider>
          </AuthProvider>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </HashRouter>
  );
}

export default App; 