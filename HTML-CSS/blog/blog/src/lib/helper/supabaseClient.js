import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://pjgnxlumxvqaybeptycd.supabase.co/",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBqZ254bHVteHZxYXliZXB0eWNkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjcyODU0MTAsImV4cCI6MjA0Mjg2MTQxMH0.UYXzPrK0KGgosLa450yJL4RpIGFaEJChcH5m4QLxPP4"
);
