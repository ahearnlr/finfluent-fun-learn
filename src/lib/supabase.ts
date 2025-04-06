import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Validate environment variables are set in production
if (import.meta.env.PROD && (!supabaseUrl || !supabaseKey)) {
  console.error('Missing Supabase credentials in production environment');
}

export const supabase = createClient(supabaseUrl, supabaseKey);