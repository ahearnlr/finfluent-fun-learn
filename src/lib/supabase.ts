import { createClient } from '@supabase/supabase-js';

// Mock implementation for development without Supabase
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://example.com';
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'dummy_key';

// Create client with mocked behavior
export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    persistSession: false
  }
}); 