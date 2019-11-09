package br.unisul.services;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.unisul.domain.Solicitacao;
import br.unisul.repositories.SolicitacaoRepository;

@Service
public class SolicitacaoService {

	@Autowired
	private SolicitacaoRepository repo;

	@Autowired
	private ClienteService clienteService;
	
	@Autowired
	private ProvedorService provedorService;
	
	public Solicitacao find (Integer id) {
		Optional<Solicitacao> obj = repo.findById(id);
		return obj.orElse(null);
	}
	
	public void delete (Integer id) {
	find(id);
	repo.deleteById(id);
	}

	public List<Solicitacao> findByProvedor(Integer provedorId) {
		return repo.findSolicitacoes(provedorId);
	}
	
	
	public Solicitacao insert(Solicitacao obj) {
		Date data = new Date();
		obj.setId(null);
		obj.setData(data);
		obj.setCliente(clienteService.find(obj.getCliente().getId()));
		obj.setProvedor(provedorService.find(obj.getProvedor().getId()));
		obj = repo.save(obj);
		return obj;
	}

	public List<Solicitacao> findAll() {
		return repo.findAll();
	}
}