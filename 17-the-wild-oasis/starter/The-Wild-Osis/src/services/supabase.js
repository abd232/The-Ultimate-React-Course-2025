import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://uremlocsgpqnfavrteei.supabase.co";
export const supabaseKey = "sb_publishable_D29a4qDItgXEXluKSKUXKQ_jNefBWsj";
// Create a single supabase client for interacting with your database
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
