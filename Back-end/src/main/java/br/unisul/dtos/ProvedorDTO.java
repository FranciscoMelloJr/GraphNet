package br.unisul.dtos;

import java.io.Serializable;

import br.unisul.domain.Provedor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class ProvedorDTO implements Serializable {
	
	private static final long serialVersionUID = 1L;

	private Integer id;
	private String nomeFantasia;
	private String razaoSocial;
	private String cnpj;
	private String cep;
	private String telefone;
	private String email;
	private String senha;
		
	public  ProvedorDTO(Integer id, String nomeFantasia, String razaoSocial, String cnpj, String cep,
	String telefone, String email, String senha) {
		this.id = id;
		this.nomeFantasia = nomeFantasia;
		this.razaoSocial = razaoSocial;
		this.cnpj = cnpj;
		this.cep = cep;
		this.telefone = telefone;
		this.email = email;
		this.senha = senha;
	}

	public ProvedorDTO(Provedor p) {
		this.id = p.getId();
		this.nomeFantasia = p.getNomeFantasia();
		this.razaoSocial = p.getRazaoSocial();
		this.cnpj = p.getCnpj();
		this.cep = p.getCep();
		this.telefone = p.getTelefone();
		this.email = p.getEmail();
		this.senha = p.getSenha();
	}
	
}