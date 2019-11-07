package com.graphnet.project.resources;

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

import com.graphnet.project.domain.Solicitacao;
import com.graphnet.project.services.SolicitacaoService;

@RestController
@RequestMapping(value = "/Solicitacaos")
public class SolicitacaoResource {

	@Autowired
	private SolicitacaoService service;

//	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
//	public ResponseEntity<?> find(@PathVariable Integer id) {
//		Solicitacao obj = service.buscar(id);
//		return ResponseEntity.ok().body(obj);
//	}

//	@RequestMapping(method = RequestMethod.POST)
//	public ResponseEntity<Void> insert(@RequestBody Solicitacao obj) {
//		obj = service.insert(obj);
//		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(obj.getId()).toUri();
//		return ResponseEntity.created(uri).build();
//	}

//	@RequestMapping(value = "/{clienteId}/cliente", method = RequestMethod.GET)
//	ResponseEntity<List<Solicitacao>> findByCliente(@PathVariable Integer clienteId) {
//		List<Solicitacao> list = service.findByCliente(clienteId);
//		return ResponseEntity.ok().body(list);
}
