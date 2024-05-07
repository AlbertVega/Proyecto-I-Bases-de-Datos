package com.example.labce.ui.request


class RequestProvider {
    companion object{
        val requestList = mutableListOf<RequestRegister>(

            //APROVE: 0 = RECHAZADO, 1 = APROBADO, 2 = PENDIENTE
            RequestRegister(
                "0001",
                "Proyector",
                "juan@gmail.com",
                "Juan",
                "10/5/2024",
                "15/5/2024",
                "15:00",
                2,
                2,

            ),
            RequestRegister(
                "0002",
                "Pantalla",
                "pedro@outlook.com",
                "Pedro",
                "15/5/2024",
                "15/5/2024",
                "15:00",
                3,
                2,
            ),

            RequestRegister(
                "0003",
                "FPGA (de1-soc)",
                "paco@estudiantec.com",
                "Paco",
                "22/5/2024",
                "22/5/2024",
                "13:00",
                1,
                2,
            ),
        )

        var pendingRequest = requestList.filter { it.aprove == 2 }
    }
}