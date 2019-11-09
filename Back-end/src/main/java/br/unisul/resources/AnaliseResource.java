package br.unisul.resources;

import java.net.URI;
import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import br.unisul.domain.Analise;
import br.unisul.domain.Cliente;
import br.unisul.dtos.ProvedorDTO;
import br.unisul.services.AnaliseService;
import br.unisul.services.ClienteService;
import br.unisul.services.ProvedorService;

@RestController
@RequestMapping(value="/analise")
public class AnaliseResource {

	@Autowired
	private AnaliseService analiseService;
	
	@Autowired
	private ClienteService clienteService;
	
	@Autowired
	private ProvedorService provedorService;
	
	@RequestMapping(method = RequestMethod.POST)
	public ResponseEntity<Void> insert(@RequestBody Analise analise) {
		Cliente cliente = clienteService.findByCpf(analise.getCpf());
		ProvedorDTO provedor = provedorService.searchCnpj(analise.getCnpj());

		if (Objects.nonNull(cliente) && Objects.nonNull(provedor)) {
			analise = analiseService.insert(analise);
		}

		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{cpf}")
				.buildAndExpand(analise.getId()).toUri();
		return ResponseEntity.created(uri).build();
	}
}
