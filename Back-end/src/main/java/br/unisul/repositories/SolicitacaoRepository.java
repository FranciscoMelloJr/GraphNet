package br.unisul.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import br.unisul.domain.Solicitacao;

@Repository
public interface SolicitacaoRepository extends JpaRepository<Solicitacao, Integer>{

	@Transactional(readOnly=true)
	@Query(value = "SELECT * FROM Solicitacao s WHERE s.provedor_id=?",
	nativeQuery = true)
	public List<Solicitacao> findSolicitacoes(Integer provedor_id);

}
