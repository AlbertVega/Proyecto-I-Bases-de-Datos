using LabCE.Server.Data;
using LabCE.Server.Models;
using LabCE.Server.Utility;
using Microsoft.AspNetCore.Mvc;

namespace LabCE.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdminLoginController : ControllerBase
    {
        private readonly LabCE_DB_Context _dbContext;
        private AdminLogin AdminLogin;
        /*
         *Constructor de la clase.
         */
        public AdminLoginController(LabCE_DB_Context context)
        {
            _dbContext = context;
            AdminLogin = new AdminLogin(context);
        }
        /*
         * Funcion: adminLogin.
         * Entradas: Un objeto de tipo Login.
         * Salidas: Ok() un objeto con el objeto de tipo Login y un mensaje de error si es que ocurre.
         * Este metodo se encarga de validar el login de un administrador.
         */
        [HttpPost]
        public async Task<IActionResult> adminLogin([FromBody]Login data)
        {
            var response = new ResponseApi<Login>();

            try
            {
                response.value = data;
                response.status = await AdminLogin.ValidateAdminLogin(data);
            }
            catch (Exception ex)
            {
                response.status = false;
                response.message = ex.Message;
            }
            return Ok(response);
        }
    }
}
