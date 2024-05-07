using LabCE.Server.Data;
using LabCE.Server.Models;
using LabCE.Server.Utility;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace LabCE.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OperatorController : ControllerBase
    {
        private readonly LabCE_DB_Context _dbContext;
        private OperatorData OperatorData;
        /*
         * Constructor de la clase.
         */
        public OperatorController(LabCE_DB_Context context)
        {
            _dbContext = context;
            OperatorData = new OperatorData(context);
        }
        /*
         * Funcion: GetOperator.
         * Entradas: No.
         * Salidas: Ok() un objeto con la lista de operadores y un mensaje de error si es que ocurre.
         * Este metodo se encarga de obtener la lista de operadores de la base de datos y enviarla al cliente.
         */
        [HttpGet]
        public async Task<IActionResult> GetOperator()
        {
            var response = new ResponseApi<List<OPERATORINFO>>();

            try
            {
                response.status = true;
                response.value = await OperatorData.GetOperators();
            }
            catch (Exception ex)
            {
                response.status = false;
                response.message = ex.Message;
            }
            return Ok(response);
        }
        /*
         * Funcion: AproveOperator.
         * Entradas: Un objeto de tipo OperatorAproved.
         * Salidas: Ok() un objeto con el objeto de tipo OperatorAproved y un mensaje de error si es que ocurre.
         * Este metodo se encarga de aprobar un operador.
         */
        [HttpPost]
        public async Task<IActionResult> AproveOperator([FromBody]OperatorAproved data) 
        {
            var response = new ResponseApi<OperatorAproved>();

            try
            {
                await OperatorData.SetOperator(data);
                response.status = true;
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
