package br.unisul.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.unisul.domain.Analise;
import br.unisul.repositories.AnaliseRepository;

@Service
public class AnaliseService {

	@Autowired
	private AnaliseRepository analiseRepository;
	
	public Analise insert(Analise analise) {
		analise.setId(null);
		return analiseRepository.save(analise);
	}
}
