package br.unisul.services;

import java.util.ArrayList;
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
	
	@Autowired
	private ProvedorService provedorService;
	
	public Caixa find (Integer id) {
		Optional<Caixa> obj = repo.findById(id);
		return obj.orElse(null);
	}
	
	public Caixa insert (Caixa obj) {
		obj.setProvedor(provedorService.find(obj.getProvedor().getId()));
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
	
	public Caixa addVinculo (Caixa caixaA, Caixa caixaB) {
		ArrayList<Integer> vinculos = new ArrayList<Integer>();
		
		vinculos = caixaA.getVinculos();
		vinculos.add(caixaB.getId());
		caixaA.setVinculos(vinculos);
		return repo.save(caixaA);
	}
	
	public Caixa removeVinculo (Caixa caixaA, Integer caixaB) {
		ArrayList<Integer> vinculos = new ArrayList<Integer>();
		vinculos = caixaA.getVinculos();
		System.out.println("SERVICE\n\n\n\n\n\n\n\n\n");
		for (int i = 0; i < caixaA.getVinculos().size(); i++) {
			System.out.println(vinculos.get(i));
			System.out.println(caixaB);
			if (vinculos.get(i).equals(caixaB)) {
				System.out.println("removeu");
				vinculos.remove(i);
			}
		}
		System.out.println("\n\n\n\n\n\n\n\n\nFINALSERVICE");
		caixaA.setVinculos(null);
		caixaA.setVinculos(vinculos);
		return repo.save(caixaA);
	}
	
	
}