package br.unisul.dtos;

import java.io.Serializable;

import br.unisul.domain.Provedor;

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

	public ProvedorDTO() {
	}	
		
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

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getNomeFantasia() {
		return nomeFantasia;
	}

	public void setNomeFantasia(String nomeFantasia) {
		this.nomeFantasia = nomeFantasia;
	}

	public String getRazaoSocial() {
		return razaoSocial;
	}

	public void setRazaoSocial(String razaoSocial) {
		this.razaoSocial = razaoSocial;
	}

	public String getCnpj() {
		return cnpj;
	}

	public void setCnpj(String cnpj) {
		this.cnpj = cnpj;
	}
	
	public String getCep() {
		return cep;
	}

	public void setCep(String cep) {
		this.cep = cep;
	}

	public String getTelefone() {
		return telefone;
	}

	public void setTelefone(String telefone) {
		this.telefone = telefone;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}
	
}