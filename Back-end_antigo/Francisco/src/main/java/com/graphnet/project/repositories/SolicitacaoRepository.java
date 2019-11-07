package com.graphnet.project.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.graphnet.project.domain.Cto;
import com.graphnet.project.domain.Solicitacao;

@Repository
public interface SolicitacaoRepository extends JpaRepository<Solicitacao, Integer> {

	List<Cto> findDistinctByNomeContainingAndCategoriasIn(String nome, List<Solicitacao> categorias);

}
