package com.example.labce.ui.gallery

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Button
import android.widget.TextView
import androidx.fragment.app.Fragment
import androidx.lifecycle.ViewModelProvider
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView
import com.example.labce.R
import com.example.labce.databinding.FragmentGalleryBinding
import com.example.labce.ui.request.RequestAdapter
import com.example.labce.ui.request.RequestProvider
import com.example.labce.ui.request.RequestRegister

class GalleryFragment : Fragment() {

    private var _binding: FragmentGalleryBinding? = null

    // This property is only valid between onCreateView and
    // onDestroyView.
    private val binding get() = _binding!!

    override fun onCreateView(
        inflater: LayoutInflater,
        container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View {
        val galleryViewModel =
            ViewModelProvider(this).get(GalleryViewModel::class.java)

        _binding = FragmentGalleryBinding.inflate(inflater, container, false)
        val root: View = binding.root


        //Crea el RyclerView de Request
        initRecyclerView()


        println("Lista Request"+RequestProvider.requestList.toString())

        println("Lista Pending"+RequestProvider.pendingRequest.toString())

        println("Size pending"+RequestProvider.pendingRequest.size)


        return root
    }

    override fun onDestroyView() {
        super.onDestroyView()
        _binding = null
    }


    private fun initRecyclerView(){
        //val recyclerView = findViewById<RecyclerView>(R.id.list_solis)
        val recyclerView = binding.listSolis
        recyclerView.layoutManager = LinearLayoutManager(this.context)
        recyclerView.adapter = RequestAdapter(RequestProvider.pendingRequest)

    }


}