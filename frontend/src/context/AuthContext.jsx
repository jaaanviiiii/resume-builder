import React, { createContext, useContext, useState, useEffect } from 'react';

// Authentication Context (Experiment 2 - React State & Hooks)
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  // Load user & token from localStorage when app starts
  useEffect(() => {
    try {
      const storedToken = localStorage.getItem('resumeforge_token');
      const storedUser = localStorage.getItem('resumeforge_user');

      if (storedToken && storedUser) {
        setToken(storedToken);
        setUser(JSON.parse(storedUser));
      }
    } catch (err) {
      console.error('Failed to restore auth session:', err);
      localStorage.removeItem('resumeforge_token');
      localStorage.removeItem('resumeforge_user');
    } finally {
      setLoading(false);
    }
  }, []);

  // Save auth state on successful login or register
  const login = (newToken, newUser) => {
    localStorage.setItem('resumeforge_token', newToken);
    localStorage.setItem('resumeforge_user', JSON.stringify(newUser));
    setToken(newToken);
    setUser(newUser);
  };

  // Clear auth state on logout
  const logout = () => {
    localStorage.removeItem('resumeforge_token');
    localStorage.removeItem('resumeforge_user');
    setToken(null);
    setUser(null);
  };

  const isAuthenticated = !!token && !!user;

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        isAuthenticated,
        loading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook for accessing auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

