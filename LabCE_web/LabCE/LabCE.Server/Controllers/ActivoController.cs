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
