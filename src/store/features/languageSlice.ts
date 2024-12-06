import { createSlice } from '@reduxjs/toolkit';

interface LanguageState {
  currentLanguage: 'es' | 'en';
}

const initialState: LanguageState = {
  currentLanguage: 'es',
};

export const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    toggleLanguage: (state) => {
      state.currentLanguage = state.currentLanguage === 'es' ? 'en' : 'es';
    },
    setLanguage: (state, action: { payload: 'es' | 'en' }) => {
      state.currentLanguage = action.payload;
    },
  },
});

export const { toggleLanguage, setLanguage } = languageSlice.actions;
export default languageSlice.reducer; 