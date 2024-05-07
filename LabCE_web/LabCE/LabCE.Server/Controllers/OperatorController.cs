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

        public OperatorController(LabCE_DB_Context context)
        {
            _dbContext = context;
            OperatorData = new OperatorData(context);
        }

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
