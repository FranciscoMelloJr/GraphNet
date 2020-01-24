package br.unisul.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.unisul.domain.Notificacao;
import br.unisul.repositories.NotificacaoRepository;

@Service
public class NotificacaoService {

	@Autowired
	private NotificacaoRepository repo;
	
	@Autowired
	private ProvedorService provedorService;
	
	public Notificacao find (Integer id) {
		Optional<Notificacao> obj = repo.findById(id);
		return obj.orElse(null);
	}
	
	public Notificacao insert (Notificacao obj) {
		obj.setProvedor(provedorService.find(obj.getProvedor().getId()));
		obj.setId(null);
		return repo.save(obj);
	}

	public Notificacao update (Notificacao obj) {
		find(obj.getId());
		return repo.save(obj);
	}
	
	public void delete (Integer id) {
		find(id);
		repo.deleteById(id);
	}
	
	public List<Notificacao> findAll(){
		return repo.findAll();
	}

}
