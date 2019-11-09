package br.unisul.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.unisul.domain.Provedor;
import br.unisul.dtos.ProvedorDTO;
import br.unisul.repositories.ProvedorRepository;

@Service
public class ProvedorService {

	@Autowired
	private ProvedorRepository repo;
	
	public Provedor find (Integer id) {
		Optional<Provedor> obj = repo.findById(id);
		return obj.orElse(null);
	}

	public List<Provedor> findAll(){
		return repo.findAll();
	}
	
	public List<Provedor> search (String cep){
		return repo.findDistinctByCepOrderByCep(cep);
	}
	
	public ProvedorDTO searchCnpj (String cnpj){
		return repo.findDistinctByCnpjOrderByCnpj(cnpj);
	}
	
}