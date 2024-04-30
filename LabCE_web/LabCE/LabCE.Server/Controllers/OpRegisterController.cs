using LabCE.Server.Models;
using LabCE.Server.Utility;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace LabCE.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OpRegisterController : ControllerBase
    {
        [EnableCors("Policy1")]
        [HttpPost]
        public async Task<IActionResult> registroOP([FromBody]Operador data)
        {
            var response = new ResponseApi<Operador>();

            try
            {
                response.status = true;
                response.value = data;
                Console.WriteLine(data.pNombre);
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
