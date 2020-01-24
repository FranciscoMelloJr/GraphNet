package br.unisul.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import br.unisul.domain.Cliente;

@Repository
public interface ClienteRepository  extends JpaRepository<Cliente, Integer> {

	@Transactional(readOnly=true)
	public List<Cliente> findAllByOrderByNome();
	
	@Transactional(readOnly = true)
	public List<Cliente> findByCpf(String cpf);
	
}
