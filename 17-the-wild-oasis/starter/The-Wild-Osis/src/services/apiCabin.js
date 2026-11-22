import supabase from "./supabase";

export async function getCabins() {
  let { data: cabin, error } = await supabase.from("cabin").select("*");

  return { cabin, error };
}

export async function createCabin(cabin) {
  const { data, error } = await supabase.from("cabin").insert([cabin]).select();

  return { data, error };
}
