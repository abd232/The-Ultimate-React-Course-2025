import supabase from "./supabase";

export async function getCabins() {
  let { data: cabin, error } = await supabase.from("cabin").select("*");

  return { cabin, error };
}
