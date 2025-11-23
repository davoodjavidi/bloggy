"use server";

export async function createUser(formData) {
  const rawFormData = {
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
    confirmPassword: formData.get("confirmPassword"),
  };
  console.log(rawFormData);
}
