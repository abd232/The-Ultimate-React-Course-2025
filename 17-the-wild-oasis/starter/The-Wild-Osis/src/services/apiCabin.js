import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  let { data: cabin, error } = await supabase.from("cabin").select("*");

  return { cabin, error };
}

export async function createCabin(cabin) {
  if (error) {
    console.error(error);
    throw new Error("Cabin could not be created");
  }

  const imageFile = cabin.image;

  const imageFileName = `cabin-${data[0].id}.jpg`;
  const imageFilePath = `${supabaseUrl}/storage/v1/object/public/cabin_image/${imageFileName}`;

  const { data, error } = await supabase
    .from("cabin")
    .insert([{ ...cabin, image: imageFilePath }]);

  const { error: uploadError } = await supabase.storage
    .from("cabin_image")
    .upload(imageFileName, imageFile);

  if (uploadError) {
    await supabase.from("cabin").delete().eq("id", data[0].id);

    console.error(uploadError);
    throw new Error(
      "Cabin image could not be uploaded: " + uploadError.message,
    );
  }

  return { data, error };
}
