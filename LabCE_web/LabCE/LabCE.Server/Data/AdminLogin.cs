using LabCE.Server.Models;
using LabCE.Server.Utility;
using Microsoft.AspNetCore.Mvc.ModelBinding.Binders;
using Microsoft.EntityFrameworkCore;

namespace LabCE.Server.Data
{
    public class AdminLogin
    {
        private readonly LabCE_DB_Context _dbContext;
        /*
         * Constructor de la clase AdminLogin
         */
        public AdminLogin(LabCE_DB_Context context)
        {
            _dbContext = context;
            
        }
        /*
         * ValidateAdminLogin
         * Entradas : Login admin
         * Salidas: bool 
         * Este metodo se encarga de validar si el usuario que intenta loguearse es un administrador mediante la comparacion de la contraseña y el email
         */
        public async Task<bool> ValidateAdminLogin(Login admin)
        {
            try
            {
                byte[] PW = PWEncryption.SHA256Encoding(admin.password);
                PROFESOR login = await _dbContext.PROFESOR.Where(p => p.email == admin.email && p.es_admin == true && p.p_password == PW)
                    .FirstOrDefaultAsync();

                await _dbContext.SaveChangesAsync();
                Console.WriteLine(login);

                if (login == null)
                {
                    return false;
                }
                return true;
            }catch (Exception ex)
            {
                Console.WriteLine(ex);
                return false;
            }
        }     
    }
}
