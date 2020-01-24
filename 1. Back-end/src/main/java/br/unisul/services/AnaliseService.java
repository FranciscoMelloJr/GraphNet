package br.unisul.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.unisul.domain.Analise;
import br.unisul.repositories.AnaliseRepository;

@Service
public class AnaliseService {

	@Autowired
	private AnaliseRepository repo;
	
	public Analise find (Integer id) {
		Optional<Analise> obj = repo.findById(id);
		return obj.orElse(null);
	}
	
	public Analise insert (Analise obj) {
		obj.setId(null);
		return repo.save(obj);
	}

	public Analise update (Analise obj) {
		find(obj.getId());
		return repo.save(obj);
	}
	
	public void delete (Integer id) {
		find(id);
		repo.deleteById(id);
	}
	
	public List<Analise> findAll(){
		return repo.findAll();
	}

}
