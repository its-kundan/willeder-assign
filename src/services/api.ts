import axios from 'axios';
import { JobApplication } from '../types';

const API_BASE_URL = 'https://asia-northeast1-willeder-official.cloudfunctions.net/api';

export const submitJobApplication = async (applicationData: JobApplication) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/apply/frontend`,
      applicationData,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || 'Failed to submit application');
    }
    throw new Error('An unexpected error occurred');
  }
};

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validateUrl = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};
