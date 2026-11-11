// API Service for communicating with the Express backend (Experiment 9)
// Uses standard fetch() with async/await and JSON handling

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';

// Helper function to get the stored JWT token
const getAuthHeaders = () => {
  const token = localStorage.getItem('resumeforge_token');
  return {
    'Content-Type': 'application/json',
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };
};

export const api = {
  // Authentication API calls (Experiment 7 & 9)
  async register(name, email, password) {
    const response = await fetch(`${API_BASE_URL}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password }),
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || 'Registration failed');
    }
    return data;
  },

  async login(email, password) {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || 'Login failed');
    }
    return data;
  },

  // Resume CRUD API calls (Experiment 4, 8 & 9)
  async getAllResumes() {
    const response = await fetch(`${API_BASE_URL}/resumes`, {
      method: 'GET',
      headers: getAuthHeaders(),
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || 'Failed to fetch resumes');
    }
    return data;
  },

  async getResumeById(id) {
    const response = await fetch(`${API_BASE_URL}/resumes/${id}`, {
      method: 'GET',
      headers: getAuthHeaders(),
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || 'Failed to fetch resume');
    }
    return data;
  },

  async createResume(resumeData) {
    const response = await fetch(`${API_BASE_URL}/resumes`, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify(resumeData),
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || 'Failed to create resume');
    }
    return data;
  },

  async updateResume(id, resumeData) {
    const response = await fetch(`${API_BASE_URL}/resumes/${id}`, {
      method: 'PUT',
      headers: getAuthHeaders(),
      body: JSON.stringify(resumeData),
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || 'Failed to update resume');
    }
    return data;
  },

  async deleteResume(id) {
    const response = await fetch(`${API_BASE_URL}/resumes/${id}`, {
      method: 'DELETE',
      headers: getAuthHeaders(),
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || 'Failed to delete resume');
    }
    return data;
  },
};
