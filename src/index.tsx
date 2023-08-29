import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from 'app/App';
import { ThemeProvider } from 'app/providers/ThemeProvider/ui/ThemeProvider';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import 'app/providers/i18n/config/i18n';

const root = createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ThemeProvider>
            <ErrorBoundary>
                <App />
            </ErrorBoundary>
        </ThemeProvider>
    </React.StrictMode>
);
