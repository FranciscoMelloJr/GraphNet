package br.unisul.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import br.unisul.domain.Caixa;

@Repository
public interface CaixaRepository  extends JpaRepository<Caixa, Integer> {

	@Transactional(readOnly=true)
	public List<Caixa> findAllByOrderByNome();
	
}
