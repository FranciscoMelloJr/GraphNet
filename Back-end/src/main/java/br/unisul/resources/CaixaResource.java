package br.unisul.resources;

import java.net.URI;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import br.unisul.domain.Caixa;
import br.unisul.services.CaixaService;


@RestController
@RequestMapping(value="/caixas")
public class CaixaResource {
	

	@Autowired
	private CaixaService service;
	
	@RequestMapping(value="/{id}",method=RequestMethod.GET)
	public ResponseEntity<Caixa> find(@PathVariable Integer id){
		Caixa obj = service.find(id);
		return ResponseEntity.ok().body(obj);
	}
	
	@RequestMapping(method=RequestMethod.POST)
	public ResponseEntity<Void>insert(@RequestBody Caixa obj){
		obj = service.insert(obj);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().
				path("/{id}").buildAndExpand(obj.getId()).toUri();
		return ResponseEntity.created(uri).build();
	}

	@RequestMapping(value="/{id}", method=RequestMethod.DELETE)
	public ResponseEntity<Void> delete(@PathVariable Integer id) {
		service.delete(id);
		return ResponseEntity.noContent().build();
	}
		
	@RequestMapping(method=RequestMethod.GET)
	public ResponseEntity<List<Caixa>> findAll() {
		List<Caixa> lista = service.findAll();

		return ResponseEntity.ok().body(lista);
	}
	
	@RequestMapping(value="/{id}", method=RequestMethod.PUT)
	public ResponseEntity<Caixa> updateVincular(@Valid @RequestBody Caixa caixaB, @PathVariable Integer id){
		Caixa caixaA = this.service.find(id);
		service.addVinculo(caixaA, caixaB);
		return ResponseEntity.ok().body(caixaA);
	}
	
	@RequestMapping(value="/{id}/desvincular", method=RequestMethod.PUT)
	public ResponseEntity<Caixa> updateDesvincular(@Valid @RequestBody Caixa caixaB, @PathVariable Integer id){
		Caixa caixaA = this.service.find(id);
		System.out.println("RESOURCE\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");
		service.removeVinculo(caixaA, caixaB.getId());
		return ResponseEntity.ok().body(caixaA);
	}
	
	

}
