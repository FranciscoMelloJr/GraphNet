package br.unisul.services;

import java.text.ParseException;
import java.util.Arrays;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.unisul.domain.Caixa;
import br.unisul.domain.Cliente;
import br.unisul.domain.Provedor;
import br.unisul.domain.Solicitacao;
import br.unisul.repositories.CaixaRepository;
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
	
	@Autowired
	private CaixaRepository caixaRepository;
	
	public void inicializaBancoDeDados() throws ParseException {
		
		Date data = new Date();

		Cliente c1 = new Cliente(null, "Lucas", "lucas@gmail.com", "(48) 12345-6789", "88780-000", "123456789101", "-49.5112", "-28.9395");
		Cliente c2 = new Cliente(null, "Jack", "Jack@gmail.com", "(48) 12345-6789", "88780-000", "12345678923", "-49.51467614288333", "-28.932326449873397");

		Provedor p1 = new Provedor(null, "Sul Internet", "Sul Telecom SA", "123456789", "88780-000",
				"(48) 12345-6789", "sul@internet.com", "senha");
		
		Provedor p2 = new Provedor(null, "Snet", "Snet Telecom SA", "987654321", "88780-000",
				"(48) 12345-6789", "snet@internet.com", "senha");
		
		Solicitacao s1 = new Solicitacao(null, "");
		Solicitacao s2 = new Solicitacao(null, "");
		
		Caixa ca1 = new Caixa(null, "Caixa 1", "-49.51875310058597", "-28.933190306812516");
		Caixa ca2 = new Caixa(null, "Caixa 2", "-49.51248746032718", "-28.94025112836157");
		
		s1.setCliente(c1);
		s1.setProvedor(p1);
		s1.setData(data);
		s2.setCliente(c2);
		s2.setProvedor(p1);
		s2.setData(data);
		
		provedorRepository.saveAll(Arrays.asList(p1, p2));
		
		ca1.setProvedor(p1);
		ca2.setProvedor(p1);

		caixaRepository.saveAll(Arrays.asList(ca1, ca2));
		
		s1.setCaixa(ca1);
		s2.setCaixa(ca1);
			
		clienteRepository.saveAll(Arrays.asList(c1, c2));
	
		solicitacaoRepository.saveAll(Arrays.asList(s1, s2));
		
	}
	
}
