using LabCE.Server.Models;
using LabCE.Server.Utility;

namespace LabCE.Server.Data
{
    public class OpRegister
    {
        private readonly LabCE_DB_Context _dbContext;
        private OPERADOR operador = new OPERADOR(); 

        public OpRegister(LabCE_DB_Context context)
        {
            _dbContext = context;
        }

        public async Task<bool> StoreRegisterDataAsync(OPERADOR_DTO op)
        {
            try
            {
                byte[] pw = PWEncryption.SHA256Encoding(op.op_password);
                DateOnly fecha_nacimiento = DateOnly.FromDateTime(op.nacimiento);

                operador.nombre = op.nombre;
                operador.apellido1 = op.apellido1;
                operador.apellido2 = op.apellido2;
                operador.carnet = op.carnet;
                operador.aprobado = op.aprobado;
                operador.email = op.email;
                operador.cedula = op.cedula;
                operador.fecha_nacimiento = fecha_nacimiento;
                operador.op_password = pw;

                _dbContext.OPERADOR.Add(operador);
                await _dbContext.SaveChangesAsync();

                return true;

            } catch (Exception ex)
            {
                Console.WriteLine(ex.ToString());
                return false;
            }
            
        }
    }
}
