import { createClient } from '@supabase/supabase-js';

// Use environment variables for Supabase credentials
// You'll need to add these to your environment or .env file
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Create a single supabase client for interacting with your database
export const supabase = createClient(supabaseUrl, supabaseKey); 