using System.Security.Cryptography;
using System.Text;

namespace LabCE.Server.Utility
{
    public static class PWEncryption
    {
        public static byte[] SHA256Encoding(string PW)
        {
            using (SHA256 sHA256 = SHA256.Create())
            {
                byte[] result = sHA256.ComputeHash(Encoding.UTF8.GetBytes(PW));

                StringBuilder sb = new StringBuilder();
                for (int i = 0; i < result.Length; i++)
                {
                    sb.Append(result[i].ToString("x2"));
                }

                return result;
            }            
        }
    }
}
