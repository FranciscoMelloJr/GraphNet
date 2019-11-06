package br.unisul.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import br.unisul.domain.Provedor;

@Repository
public interface ProvedorRepository  extends JpaRepository<Provedor, Integer> {

	@Transactional(readOnly=true)
	public List<Provedor> findAllByOrderByNomeFantasia();

	List<Provedor> findDistinctByCepOrderByCep(String cep);
	
}
