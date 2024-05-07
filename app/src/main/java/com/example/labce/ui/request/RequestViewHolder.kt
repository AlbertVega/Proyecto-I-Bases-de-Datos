package com.example.labce.ui.request

import android.view.View
import android.widget.ImageView
import android.widget.TextView
import androidx.recyclerview.widget.RecyclerView
import com.example.labce.R

class RequestViewHolder (view: View): RecyclerView.ViewHolder(view) {


    //val request_pic = view.findViewById<ImageView>(R.id.lab_pic)
    val lab_id = view.findViewById<TextView>(R.id.id_lab_txt)
    val requester_name = view.findViewById<TextView>(R.id.name_requester)
    val request_date = view.findViewById<TextView>(R.id.date_txt)
    val request_hour_cant = view.findViewById<TextView>(R.id.hour_back_txt)
    val request_hour_init = view.findViewById<TextView>(R.id.hour_init_txt)
    val request_state = view.findViewById<TextView>(R.id.aprove_txt)
    val btn_aprove = view.findViewById<TextView>(R.id.btn_aprove)
    val btn_deny = view.findViewById<TextView>(R.id.btn_reject)
    fun render(prestamosModel: RequestRegister, adapter: RequestAdapter){

            itemView.visibility = View.VISIBLE // Mostrar la solicitud
            lab_id.text = prestamosModel.id_lab
            requester_name.text ="Nombre del solicitante: ${prestamosModel.name_request}"
            request_date.text = "Fecha de retiro: ${prestamosModel.date}"
            request_hour_cant.text = "Fecha de devolucion: ${prestamosModel.cant_hour}"
            request_hour_init.text = "Activo: ${prestamosModel.date_back}"



            if (prestamosModel.aprove == 0){
                request_state.text = "Estado : Rechazado"
            } else if (prestamosModel.aprove == 1){
                request_state.text = "Estado : Aprobado"
            } else {
                request_state.text = "Estado : Pendiente"
            }


        btn_aprove.setOnClickListener {
            RequestProvider.requestList.find { it.id_lab == prestamosModel.id_lab }?.aprove = 1
            RequestProvider.pendingRequest = RequestProvider.requestList.filter { it.aprove == 2 }
            adapter.notifyDataSetChanged()

        }

        btn_deny.setOnClickListener {
            RequestProvider.requestList.find { it.id_request == prestamosModel.id_request }?.aprove = 0
            RequestProvider.pendingRequest = RequestProvider.requestList.filter { it.aprove == 2 }
            adapter.notifyDataSetChanged()
        }
    }
}