package br.unisul.services;

import java.text.ParseException;
import java.util.Arrays;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.unisul.domain.Cliente;
import br.unisul.domain.Provedor;
import br.unisul.domain.Solicitacao;
import br.unisul.repositories.ClienteRepository;
import br.unisul.repositories.ProvedorRepository;
import br.unisul.repositories.SolicitacaoRepository;

@Service
public class DbService {

	@Autowired
	private ClienteRepository clienteRepository;

	@Autowired
	private ProvedorRepository provedorRepository;
	
	@Autowired
	private SolicitacaoRepository solicitacaoRepository;
	
	public void inicializaBancoDeDados() throws ParseException {
		
		Date data = new Date();

		Cliente c1 = new Cliente(null, "Lucas", "lucas@gmail.com", "(48) 12345-6789", "88780-000", "123456789101", "", "");

		Provedor p1 = new Provedor(null, "Sul Internet", "Sul Telecom SA", "123456789", "88780-000",
				"(48) 12345-6789", "sul@internet.com", "senha");
		
		Provedor p2 = new Provedor(null, "Snet", "Snet Telecom SA", "987654321", "88780-000",
				"(48) 12345-6789", "snet@internet.com", "senha");
		
		Solicitacao s1 = new Solicitacao(null, "");
		
		s1.setCliente(c1);
		s1.setProvedor(p1);
		s1.setData(data);

		provedorRepository.saveAll(Arrays.asList(p1, p2));
		
		clienteRepository.saveAll(Arrays.asList(c1));
	
		solicitacaoRepository.saveAll(Arrays.asList(s1));
	}
	
}
