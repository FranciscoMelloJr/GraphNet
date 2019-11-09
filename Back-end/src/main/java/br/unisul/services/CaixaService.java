package br.unisul.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.unisul.domain.Caixa;
import br.unisul.repositories.CaixaRepository;


@Service
public class CaixaService {

	@Autowired
	private CaixaRepository repo;
	
	public Caixa find (Integer id) {
		Optional<Caixa> obj = repo.findById(id);
		return obj.orElse(null);
	}
	
	public Caixa insert (Caixa obj) {
		obj.setId(null);
		return repo.save(obj);
	}

	public Caixa update (Caixa obj) {
		find(obj.getId());
		return repo.save(obj);
	}
	
	public void delete (Integer id) {
		find(id);
		repo.deleteById(id);
	}
	
	public List<Caixa> findAll(){
		return repo.findAll();
	}
}