import { createClient } from '@supabase/supabase-js'

const URL = 'https://qztnsdfkfphwwroxqpdc.supabase.co'
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF6dG5zZGZrZnBod3dyb3hxcGRjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI4NTQyNjUsImV4cCI6MjAyODQzMDI2NX0.0i4Y_aKVzW12u95DU98JSCdDbHQgq2HdohH3u8DL3J0'
export const supabase = createClient(URL, API_KEY)