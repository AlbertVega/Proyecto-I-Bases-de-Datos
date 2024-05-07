using LabCE.Server.Models;

namespace LabCE.Server.Data
{
    public class ActivoData
    {
        private readonly LabCE_DB_Context _dbContext;
        private ACTIVO activo = new ACTIVO();
        /* 
         * Constructor de la clase
         */
        public ActivoData(LabCE_DB_Context context)
        {
            _dbContext = context;
        }
        /*
         * GetActivos
         * Entradas: ninguna
         * Salidas: lista de activos
         * Este metodo se encarga de obtener la lista de activos de la base de datos y retorna una lista de activos
         */
        public async Task<List<ACTIVO>> GetActivos()
        {
            try
            {
                var actives = _dbContext.ACTIVO
                    .Select(a => new ACTIVO
                    {
                        tipo = a.tipo,
                        marca = a.marca,
                        fecha_compra = a.fecha_compra,
                        placa = a.placa,
                        id_lab_fk = a.id_lab_fk,
                    }).ToList();

                return actives;
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.ToString());
                return null;
            }
        }
    }
}
