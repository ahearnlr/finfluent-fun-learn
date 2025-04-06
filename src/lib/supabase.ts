import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Check for missing environment variables
if (!supabaseUrl || !supabaseKey) {
  const errorMessage = 'Missing Supabase credentials. Please set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in your .env.local file.';
  console.error(errorMessage);
  // In development, throw a more visible error
  if (!import.meta.env.PROD) {
    throw new Error(errorMessage);
  }
}

export const supabase = createClient(supabaseUrl, supabaseKey);