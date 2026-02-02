import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'

import { LanguageProvider } from './i18n/LanguageProvider'

import App from './App.tsx'

import './index.css'

// Initialization of PostHog
if (import.meta.env.VITE_POSTHOG_KEY) {
  posthog.init(import.meta.env.VITE_POSTHOG_KEY, {
    api_host: import.meta.env.VITE_POSTHOG_HOST || 'https://us.i.posthog.com',
    person_profiles: 'identified_only', // Privacy optimization for anonymous users
  })
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PostHogProvider client={posthog}>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </PostHogProvider>
  </StrictMode>
)
