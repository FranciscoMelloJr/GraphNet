package com.graphnet.project.resources;

import java.net.URI;
import java.util.ArrayList;
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

import com.graphnet.project.domain.Cliente;
import com.graphnet.project.dtos.ClienteDTO;
import com.graphnet.project.dtos.ClienteNewDTO;
import com.graphnet.project.services.ClienteService;

@RestController
@RequestMapping(value = "/clientes")
public class ClienteResource {

	@Autowired
	private ClienteService service;

	// Lista DTO
	@RequestMapping(method = RequestMethod.GET)
	public ResponseEntity<List<ClienteDTO>> findAll() {
		List<Cliente> list = service.findAll();
		List<ClienteDTO> listDto = new ArrayList<ClienteDTO>();
		for (Cliente c : list) {
			listDto.add(new ClienteDTO(c));
		}
		return ResponseEntity.ok().body(listDto);
	}

	// Buscar por código
	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public ResponseEntity<?> find(@PathVariable Integer id) {
		Cliente obj = service.find(id);
		return ResponseEntity.ok().body(obj);
	}

	@RequestMapping(value = "/{email}/email", method = RequestMethod.GET)
	public ResponseEntity<Cliente> find(@PathVariable String email) {
		Cliente obj = service.findByEmail(email);
		return ResponseEntity.ok().body(obj);
	}

	// Alterar
	@RequestMapping(value = "/{id}", method = RequestMethod.PUT)
	public ResponseEntity<Void> update(@Valid @RequestBody ClienteDTO objDto, @PathVariable Integer id) {
		Cliente obj = service.fromDTO(objDto);
		obj.setId(id);
		obj = service.update(obj);
		return ResponseEntity.noContent().build();
	}

	// Salvar
	@RequestMapping(method = RequestMethod.POST)
	// Enviar no body ou Postman ClienteNewDTO
	public ResponseEntity<Void> insert(@Valid @RequestBody ClienteNewDTO objDto) {
		// Conversão de ClienteDTO para Cliente
		Cliente obj = service.fromDTO(objDto);
		// Inserir
		obj = service.insert(obj);
		// Recuperar URL
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(obj.getId()).toUri();
		return ResponseEntity.created(uri).build();
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Void> delete(@PathVariable Integer id) {
		service.delete(id);
		return ResponseEntity.noContent().build();
	}

}
