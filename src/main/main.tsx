import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/presentation/styles/global.css'
import { Router } from '@/main/router'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import '@fontsource/roboto/900.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router />
  </StrictMode>,
)
