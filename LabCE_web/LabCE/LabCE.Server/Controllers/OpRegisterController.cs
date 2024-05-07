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
        /* 
         * Constructor de la clase
         */
        public OpRegisterController(LabCE_DB_Context context)
        {
            _dbContext = context;
            OpRegister = new OpRegister(context);
        }
        /*
         * registroOP
         * Entradas: datos de un operador
         * Salidas: respuesta de la petición
         * Este metodo se encarga de registrar un operador en la base de datos y retorna una respuesta de la petición
         */
        [HttpPost]
        public async Task<IActionResult> registroOP([FromBody]OPERADOR_DTO data)
        {
            var response = new ResponseApi<OPERADOR_DTO>();

            try
            {
                response.status = true;
                response.value = data;
                await OpRegister.StoreRegisterDataAsync(data);
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
