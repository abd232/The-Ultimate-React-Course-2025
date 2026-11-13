import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
const supabase = createClient(
  "https://uremlocsgpqnfavrteei.supabase.co",
  "sb_publishable_D29a4qDItgXEXluKSKUXKQ_jNefBWsj",
);

export default supabase;
