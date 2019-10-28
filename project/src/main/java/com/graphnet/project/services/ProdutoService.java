package com.graphnet.project.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import br.unisul.web.sexta.domain.Categoria;
import br.unisul.web.sexta.domain.Produto;
import br.unisul.web.sexta.repositories.CategoriaRepository;
import br.unisul.web.sexta.repositories.ProdutoRepository;

@Service
public class ProdutoService {

	@Autowired
	private SolicitacaoRepository rep;

	@Autowired
	private CategoriaRepository categoriaRepository;

	public Produto find(Integer id) {
		Optional<Produto> obj = rep.findById(id);
		return obj.orElse(null);
	}

	public List<Produto> search(String nome, List<Integer> ids) {
		List<Categoria> categorias = categoriaRepository.findAllById(ids);
		return rep.findDistinctByNomeContainingAndCategoriasIn(nome, categorias);
	}
	
	public Produto insert(Produto obj) {
		obj.setId(null);
		return rep.save(obj);
	}
}
