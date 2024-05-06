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
        [HttpPost]
        public async Task<IActionResult> adminLogin([FromBody]Login data)
        {
            var response = new ResponseApi<Login>();

            try
            {
                response.status = true;
                response.value = data;
                Console.WriteLine("Logged in");
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
