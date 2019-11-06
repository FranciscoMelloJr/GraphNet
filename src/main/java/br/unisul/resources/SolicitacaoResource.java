package br.unisul.resources;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import br.unisul.domain.Solicitacao;
import br.unisul.services.SolicitacaoService;

@RestController
@RequestMapping(value="/solicitacoes")
public class SolicitacaoResource {

	@Autowired
	private SolicitacaoService service;

	@RequestMapping(value="/{id}",method=RequestMethod.GET)
	public ResponseEntity<Solicitacao> find(@PathVariable Integer id){
	Solicitacao obj = service.find(id);
	return ResponseEntity.ok().body(obj);
	}
	
	@RequestMapping(value="/{id}", method=RequestMethod.DELETE)
	public ResponseEntity<Void> delete(@PathVariable Integer id) {
	service.delete(id);
	return ResponseEntity.noContent().build();
	}
	
	@RequestMapping(method=RequestMethod.POST)
	public ResponseEntity<Void>insert(@RequestBody Solicitacao obj){
		obj = service.insert(obj);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().
				path("/{id}").buildAndExpand(obj.getId()).toUri();
		return ResponseEntity.created(uri).build();
	} 
	
	@RequestMapping(method=RequestMethod.GET)
	public ResponseEntity<List<Solicitacao>> findAll() {
		List<Solicitacao> lista = service.findAll();
		return ResponseEntity.ok().body(lista);
	}
}
