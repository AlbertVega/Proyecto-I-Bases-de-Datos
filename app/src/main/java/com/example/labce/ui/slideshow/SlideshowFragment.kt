package com.example.labce.ui.slideshow

import android.content.Intent
import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.TextView
import androidx.fragment.app.Fragment
import androidx.lifecycle.ViewModelProvider
import com.example.labce.ChangePwdActivity
import com.example.labce.MainActivity
import com.example.labce.databinding.FragmentSlideshowBinding

class SlideshowFragment : Fragment() {

    private var _binding: FragmentSlideshowBinding? = null

    // This property is only valid between onCreateView and
    // onDestroyView.
    private val binding get() = _binding!!

    override fun onCreateView(
        inflater: LayoutInflater,
        container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View {
        val slideshowViewModel =
            ViewModelProvider(this).get(SlideshowViewModel::class.java)

        _binding = FragmentSlideshowBinding.inflate(inflater, container, false)
        val root: View = binding.root
        binding.cedula.text = "Cedula: "+ MainActivity.GlobalProfesor.cedula
        binding.nameS.text = "Nombre: "+ MainActivity.GlobalProfesor.nombre
        binding.emailS.text = "Email: "+ MainActivity.GlobalProfesor.email

        binding.chpwd.setOnClickListener {
            val intent = Intent(this.context, ChangePwdActivity::class.java)
            startActivity(intent)
        }

        binding.logout.setOnClickListener {
            MainActivity.GlobalProfesor.logeado = false
            val intent = Intent(this.context, MainActivity::class.java)
            startActivity(intent)
        }


        return root
    }

    override fun onDestroyView() {
        super.onDestroyView()
        _binding = null
    }
}