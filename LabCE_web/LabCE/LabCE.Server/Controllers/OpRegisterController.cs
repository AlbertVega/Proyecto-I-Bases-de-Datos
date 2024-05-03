using LabCE.Server.Data;
using LabCE.Server.Models;
using LabCE.Server.Utility;
using Microsoft.AspNetCore.Mvc;

namespace LabCE.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OpRegisterController : ControllerBase
    {
        private readonly LabCE_DB_Context _dbContext;
        private OpRegister OpRegister;

        public OpRegisterController(LabCE_DB_Context context)
        {
            _dbContext = context;
            OpRegister = new OpRegister(context);
        }

        [HttpPost]
        public async Task<IActionResult> registroOP([FromBody]OPERADOR_DTO data)
        {
            var response = new ResponseApi<OPERADOR_DTO>();

            try
            {
                response.status = true;
                response.value = data;
                await OpRegister.StoreRegisterDataAsync(data);
                Console.WriteLine(data.nombre);
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
