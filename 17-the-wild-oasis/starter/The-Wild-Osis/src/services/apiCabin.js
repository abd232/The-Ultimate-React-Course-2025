import supabase from "./supabase";

export async function getCabins() {
  let { data: cabin, error } = await supabase.from("cabin").select("*");

  return { cabin, error };
}

export async function createCabin({ image: imageFile, ...cabin }) {
  const bucket = supabase.storage.from("cabin_image");
  const imageFileName = `${crypto.randomUUID()}-${imageFile.name}`;
  const {
    data: { publicUrl },
  } = bucket.getPublicUrl(imageFileName);

  const { data: createdCabin, error } = await supabase
    .from("cabin")
    .insert({ ...cabin, image: publicUrl })
    .select()
    .single();

  if (error) {
    throw new Error(`Cabin could not be created: ${error.message}`);
  }

  const { error: uploadError } = await bucket.upload(imageFileName, imageFile);

  if (uploadError) {
    const { data: deletedCabin, error: deleteError } = await supabase
      .from("cabin")
      .delete()
      .eq("id", createdCabin.id)
      .select("id")
      .maybeSingle();

    if (deleteError || !deletedCabin) {
      console.error("Could not roll back cabin:", createdCabin.id, deleteError);
    }

    throw new Error(
      `Cabin image could not be uploaded: ${uploadError.message}`,
    );
  }

  return createdCabin;
}
