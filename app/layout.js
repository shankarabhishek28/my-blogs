// src/app/layout.js
import Header from '../components/Header';

import './globals.css';
export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
