package com.example.labce.ui.request

import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.TextView
import androidx.recyclerview.widget.RecyclerView
import com.example.labce.R

class RequestAdapter (private val requestList:List<RequestRegister>): RecyclerView.Adapter<RequestViewHolder>() {
    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): RequestViewHolder {
        val layoutInflater = LayoutInflater.from(parent.context)
        return RequestViewHolder(layoutInflater.inflate(R.layout.item_request,parent,false))
    }
    override fun getItemCount(): Int = requestList.size

    override fun onBindViewHolder(holder: RequestViewHolder, position: Int) {
        val item = requestList[position]

        holder.render(item,this)
    }


}