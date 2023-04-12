import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://xjqzsaaoyqknoaeroteu.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhqcXpzYWFveXFrbm9hZXJvdGV1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzk5MjMyMjgsImV4cCI6MTk5NTQ5OTIyOH0.dA8_C6Xp2Py1wHr7tkc4bVWsPkSxi81VNSVaQhzGnvc'

const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase