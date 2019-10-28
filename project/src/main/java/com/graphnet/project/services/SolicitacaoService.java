package com.graphnet.project.services;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.graphnet.project.domain.Cliente;
import com.graphnet.project.domain.Solicitacao;
import com.graphnet.project.repositories.CtoRepository;

@Service
public class SolicitacaoService {

	@Autowired
	private CtoRepository repo;

	@Autowired
	private ClienteService clienteService;

//	public Solicitacao buscar(Integer id) {
//		Optional<Solicitacao> obj = repo.findById(id);
//		return obj.orElse(null);
//	}

//	public Solicitacao insert(Solicitacao obj) {
//		obj.setId(null);
//		obj.setInstante(new Date());
//		obj.setCliente(clienteService.find(obj.getCliente().getId()));
//		obj = repo.save(obj);
//		CtoRepository.saveAll(obj.getItens());
//		return obj;
//	}

//	public List<Solicitacao> findByCliente(Integer idCliente) {
//		Cliente cliente = clienteService.find(idCliente);
//		return repo.findByCliente(cliente);
//	}

}
