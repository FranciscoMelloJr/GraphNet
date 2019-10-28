package com.graphnet.project.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.graphnet.project.domain.Cto;
import com.graphnet.project.repositories.CtoRepository;

@Service
public class CtoService {

	@Autowired
	private CtoRepository CtoRepository;

	public Cto find(Integer id) {
		Optional<Cto> obj = CtoRepository.findById(id);
		return obj.orElse(null);
	}

	public List<Cto> search(String nome, List<Integer> ids) {
		List<Cto> cto = CtoRepository.findAllById(ids);
		return null;	// CtoRepository.findDistinctByNomeContainingAndCategoriasIn(nome);

	}

	public Cto insert(Cto obj) {
		obj.setId(null);
		return CtoRepository.save(obj);
	}
}
