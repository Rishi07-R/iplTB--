import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://cchomqzhcusxpdvfxrph.supabase.co";
const supabaseKey = "sb_publishable_XSZgFFBda_vdRuiDZq_gGw_Sfkupyry";

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);
