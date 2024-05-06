using System.Security.Cryptography;
using System.Text;

namespace LabCE.Server.Utility
{
    public static class PWEncryption
    {
        public static byte[] MD5Hashing(string PW)
        {
            MD5 md5 = new MD5CryptoServiceProvider();

            md5.ComputeHash(ASCIIEncoding.ASCII.GetBytes(PW));

            byte[] result = md5.Hash;

            StringBuilder sb = new StringBuilder();
            for (int i = 0; i < result.Length; i++)
            {
                sb.Append(result[i].ToString("x2"));
            }

            return result;
        }
    }
}
