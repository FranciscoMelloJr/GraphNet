package br.unisul.resources;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.unisul.domain.Provedor;
import br.unisul.dtos.ProvedorDTO;
import br.unisul.resources.utils.URL;
import br.unisul.services.ProvedorService;

@RestController
@RequestMapping(value="/provedores")
public class ProvedorResource {

	@Autowired
	private ProvedorService service;
	
	@RequestMapping(value="/{id}",method=RequestMethod.GET)
	public ResponseEntity<Provedor> find(@PathVariable Integer id){
		Provedor obj = service.find(id);
		return ResponseEntity.ok().body(obj);
	}
		
	@RequestMapping(method=RequestMethod.GET)
	public ResponseEntity<List<ProvedorDTO>> findAll() {
		List<Provedor> lista = service.findAll();
		
		List<ProvedorDTO> listaDto = new ArrayList<ProvedorDTO>();
		
		for (Provedor p : lista) {
			listaDto.add(new ProvedorDTO(p));
		}
		
		return ResponseEntity.ok().body(listaDto);
	}
	
	@RequestMapping(value = "/filtroCep", method = RequestMethod.GET)
	public ResponseEntity<List<ProvedorDTO>> find(
			@RequestParam(value = "cep", defaultValue = "") String cep
		){
			
	String cepDecoded = URL.decodeParam(cep);
	List<Provedor> list = service.search(cepDecoded);
	List<ProvedorDTO> listDto = new ArrayList<ProvedorDTO>();
	for (Provedor p : list) {
		listDto.add(new ProvedorDTO(p));
	}
		return ResponseEntity.ok().body(listDto);
	}
	
}
