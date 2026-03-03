import React from 'react';
import { motion } from 'framer-motion';

// Stil za inpute koji se deli
const commonInputStyle = {
    background: 'transparent',
    border: 'none',
    borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
    padding: '15px 10px',
    color: '#fff',
    fontSize: '16px',
    outline: 'none',
    width: '100%',
    boxSizing: 'border-box',
    fontFamily: 'inherit',
    transition: 'border-color 0.3s'
};

export const HBInput = (props) => (
    <input 
        {...props} 
        style={{ ...commonInputStyle, ...props.style }} 
        onFocus={(e) => e.target.style.borderBottom = '1px solid #fff'}
        onBlur={(e) => e.target.style.borderBottom = '1px solid rgba(255, 255, 255, 0.2)'}
    />
);

export const HBTextArea = (props) => (
    <textarea 
        {...props} 
        style={{ ...commonInputStyle, minHeight: '120px', resize: 'vertical', ...props.style }} 
        onFocus={(e) => e.target.style.borderBottom = '1px solid #fff'}
        onBlur={(e) => e.target.style.borderBottom = '1px solid rgba(255, 255, 255, 0.2)'}
    />
);

export const HBSelect = (props) => (
    <select 
        {...props} 
        style={{ ...commonInputStyle, cursor: 'pointer', appearance: 'none', ...props.style }}
    >
        {props.children}
    </select>
);

export const HBButton = ({ children, isLoading, ...props }) => (
    <motion.button
        // Na hover ga pravimo providnim sa belim okvirom (kao što je bilo ranije)
        whileHover={{ 
            scale: 1.01, 
            backgroundColor: 'transparent', 
            color: '#fff',
            borderColor: '#fff' 
        }}
        whileTap={{ scale: 0.98 }}
        {...props}
        style={{
            width: '100%',
            padding: '20px',
            // Inicijalno je skroz belo sa crnim tekstom
            background: '#fff', 
            border: '1px solid #fff',
            color: '#000', 
            fontSize: '14px',
            fontWeight: '900',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            cursor: 'pointer',
            transition: 'background-color 0.3s, color 0.3s, border-color 0.3s',
            marginTop: '20px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            ...props.style
        }}
    >
        {isLoading ? '...' : children}
    </motion.button>
);