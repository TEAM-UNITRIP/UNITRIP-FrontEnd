import { createClient } from '@supabase/supabase-js';

// supabase client 생성
export const supabaseClient = createClient(
  import.meta.env.VITE_PROJECT_URL,
  import.meta.env.VITE_ANON_KEY,
);
