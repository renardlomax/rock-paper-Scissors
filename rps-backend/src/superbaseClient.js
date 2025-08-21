// supabaseClient.js
import { createClient } from '@supabase/supabase-js'

// 👇 find these in your Supabase dashboard under Project Settings → API
const SUPABASE_URL = "https://pzblvjscwiegsdyaksrc.supabase.co"
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB6Ymx2anNjd2llZ3NkeWFrc3JjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU3ODE5NDUsImV4cCI6MjA3MTM1Nzk0NX0.v_GztErxgJLIchUhpJfA_pMYwmTiV28dQsz8lG5oujc"

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
