using LabCE.Server.Data;
using LabCE.Server.Models;
using LabCE.Server.Utility;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace LabCE.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdminLoginController : ControllerBase
    {
        private readonly LabCE_DB_Context _dbContext;
        private AdminLogin AdminLogin;

        public AdminLoginController(LabCE_DB_Context context)
        {
            _dbContext = context;
            AdminLogin = new AdminLogin(context);
        }

        [HttpPost]
        public async Task<IActionResult> adminLogin([FromBody]Login data)
        {
            var response = new ResponseApi<Login>();

            try
            {
                response.value = data;
                response.status = await AdminLogin.ValidateAdminLogin(data);
                //Console.WriteLine("Logged in");
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
