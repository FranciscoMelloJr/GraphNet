package br.unisul.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import br.unisul.domain.Solicitacao;

@Repository
public interface SolicitacaoRepository extends JpaRepository<Solicitacao, Integer>{

	@Transactional(readOnly=true)
	@Query("SELECT obj FROM Solicitacao obj WHERE obj.provedor.id = :provedorId")
	public List<Solicitacao> findSolicitacoes(@Param("provedorId") Integer provedorId);

}
