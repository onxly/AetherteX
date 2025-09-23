using Microsoft.CodeAnalysis.Scripting;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Web;
using BCrypt.Net;

namespace AeatherteX_API.Functions
{
    public static class Secrecy
    {
        public static string AdminPassword = "AcsseAetherInfo:code25"; // Default admin password

        public static string HashPassword(string password)
        {
            using (SHA256 sha256 = SHA256.Create())
            {
                byte[] bytes = Encoding.UTF8.GetBytes(password);
                byte[] hash = sha256.ComputeHash(bytes);

                StringBuilder builder = new StringBuilder();
                foreach (byte b in hash)
                {
                    builder.Append(b.ToString("x2")); // hex format
                }

                return builder.ToString();
            }
        }

        // Verify password against stored hash
        public static bool VerifyPassword(string password, string hashedPassword)
        {
            string hashedInput = HashPassword(password);
            return hashedInput.Equals(hashedPassword);
        }

        // Generate a secure 4-digit PIN
        public static string GeneratePin()
        {
            // Generates a secure random number between 0 and 9999
            using (var rng = RandomNumberGenerator.Create())
            {
                byte[] bytes = new byte[4];
                rng.GetBytes(bytes);
                int value = BitConverter.ToInt32(bytes, 0) & int.MaxValue; // make non-negative
                int pin = value % 10000; // ensure 4 digits max
                return pin.ToString("D4"); // pad with leading zeros if needed
            }
        }
    }
}