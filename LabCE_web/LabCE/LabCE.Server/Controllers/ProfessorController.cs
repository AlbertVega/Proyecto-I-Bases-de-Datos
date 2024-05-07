using LabCE.Server.Data;
using LabCE.Server.Models;
using LabCE.Server.Utility;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace LabCE.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProfessorController : ControllerBase
    {
        private readonly LabCE_DB_Context _dbContext;
        private ProfessorData ProfessorData;
        /* 
         * Constructor de la clase
         */
        public ProfessorController(LabCE_DB_Context context)
        {
            _dbContext = context;
            ProfessorData = new ProfessorData(context);
        }
        /*
         * GetProfessor
         * Entradas: ninguna
         * Salidas: respuesta de la petición
         * Este metodo se encarga de obtener la lista de profesores de la base de datos y retorna una respuesta de la petición
         *  */
        [HttpGet]
        public async Task<IActionResult> GetProfessor()
        {
            var response = new ResponseApi<List<PROFESSORINFO>>();

            try
            {
                response.status = true;
                response.value = await ProfessorData.GetProfessors();
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
