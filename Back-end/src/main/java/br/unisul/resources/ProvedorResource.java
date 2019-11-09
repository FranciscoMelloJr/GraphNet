package br.unisul.resources;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.unisul.domain.Provedor;
import br.unisul.domain.Solicitacao;
import br.unisul.dtos.ProvedorDTO;
import br.unisul.dtos.SolicitacaoDTO;
import br.unisul.resources.utils.URL;
import br.unisul.services.ProvedorService;
import br.unisul.services.SolicitacaoService;

@RestController
@RequestMapping(value="/provedores")
public class ProvedorResource {

	@Autowired
	private ProvedorService service;
	
	@Autowired
	private SolicitacaoService solicitacaoService;
	
	@RequestMapping(value="/{id}",method=RequestMethod.GET)
	public ResponseEntity<Provedor> find(@PathVariable Integer id){
		Provedor obj = service.find(id);
		return ResponseEntity.ok().body(obj);
	}
	
	@RequestMapping(value="/{provedorId}/solicitacoes", method=RequestMethod.GET)
	public ResponseEntity<List<Solicitacao>> findCidades(@PathVariable Integer provedorId) {
		List<Solicitacao> list = solicitacaoService.findByProvedor(provedorId);
		return ResponseEntity.ok().body(list);
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
	
	@RequestMapping(value = "/filtroCnpj", method = RequestMethod.GET)
	public ResponseEntity<ProvedorDTO> findCnpj(
			@RequestParam(value = "cnpj", defaultValue = "") String cnpj
		){
			
	String cnpjDecoded = URL.decodeParam(cnpj);
	ProvedorDTO provedor = service.searchCnpj(cnpjDecoded);
	return ResponseEntity.ok().body(provedor);
	
	}
	
}
