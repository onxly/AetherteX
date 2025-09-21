export async function hashPassword(password) {
  // Encode password as UTF-8
  const encoder = new TextEncoder();
  const data = encoder.encode(password);

  // Hash with SHA-256
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);

  // Convert ArrayBuffer to hex string
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
}
