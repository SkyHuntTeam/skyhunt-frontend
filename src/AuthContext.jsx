// AuthContext.js
import React, { createContext, useContext, useReducer } from 'react';

// Definiujemy akcje, które będą modyfikować stan autoryzacji
const actionTypes = {
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
};

// Reducer do obsługi akcji
const authReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.LOGIN:
      return { ...state, isAuthenticated: true, user: action.payload };
    case actionTypes.LOGOUT:
      return { ...state, isAuthenticated: false, user: null };
    default:
      return state;
  }
};

// Domyślny stan autoryzacji
const initialState = {
  isAuthenticated: false,
  user: null,
};

// Tworzymy kontekst autoryzacji
const AuthContext = createContext();

// Komponent dostawcy kontekstu
const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const login = (user) => {
    dispatch({ type: actionTypes.LOGIN, payload: user });
  };

  const logout = () => {
    dispatch({ type: actionTypes.LOGOUT });
  };

  return (
    <AuthContext.Provider value={{ state, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook do użycia kontekstu w komponentach
const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export { AuthProvider, useAuth };