export const API_TOKEN = 'trial_33936721_7e0de344d0b480cb8727a581dfe40176';
export const BASE_URL = 'https://stapubox.com/trial';
export const API_ENDPOINTS = {SEND_OTP:`${BASE_URL}/sendOtp`,RESEND_OTP:`${BASE_URL}/resendOtp`,VERIFY_OTP:`${BASE_URL}/verifyOtp`};
export const getApiHeaders=()=>({'Content-Type':'application/json','X-Api-Token':API_TOKEN});
