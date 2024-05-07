using LabCE.Server.Data;
using LabCE.Server.Models;
using LabCE.Server.Utility;
using Microsoft.AspNetCore.Mvc;

namespace LabCE.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ActivoController : ControllerBase
    {
        private readonly LabCE_DB_Context _dbContext;
        private ActivoData ActivoData;

        public ActivoController(LabCE_DB_Context context)
        {
            _dbContext = context;
            ActivoData = new ActivoData(context);
        }
        /*
         * Funcion: GetActivo.
         * Entradas: No.
         * Salidas: Ok() un objeto con la lista de activos y un mensaje de error si es que ocurre.
         * Este metodo se encarga de obtener la lista de activos de la base de datos y enviarla al cliente.
         */
        [HttpGet]
        public async Task<IActionResult> GetActivo()
        {
            var response = new ResponseApi<List<ACTIVO>>();

            try
            {
                response.status = true;
                response.value = await ActivoData.GetActivos();
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
