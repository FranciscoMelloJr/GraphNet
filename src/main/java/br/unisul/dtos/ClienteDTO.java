package br.unisul.dtos;

import java.io.Serializable;

import br.unisul.domain.Cliente;

public class ClienteDTO implements Serializable {
	private static final long serialVersionUID = 1L;

	private Integer id;

	private String nome;
	private String email;
	private String telefone;
	private String cep;
	private String cpf;
	private String longitude;
	private String latitude;
	
	public ClienteDTO() {
	}

	public ClienteDTO(String nome, String email, String telefone, String cep, String cpf,
	String longitude, String latitude) {
		this.nome = nome;
		this.email = email;
		this.telefone = telefone;
		this.cep = cep;
		this.cpf = cpf;
		this.longitude = longitude;
		this.latitude = latitude;
	}
	
	public ClienteDTO(Cliente c) {
		this.nome = c.getNome();
		this.email = c.getEmail();
		this.telefone = c.getTelefone();
		this.cep = c.getCep();
		this.cpf = c.getCpf();
		this.longitude = c.getLongitude();
		this.latitude = c.getLatitude();
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getTelefone() {
		return telefone;
	}

	public void setTelefone(String telefone) {
		this.telefone = telefone;
	}

	public String getCep() {
		return cep;
	}

	public void setCep(String cep) {
		this.cep = cep;
	}

	public String getCpf() {
		return cpf;
	}

	public void setCpf(String cpf) {
		this.cpf = cpf;
	}

	public String getLongitude() {
		return longitude;
	}

	public void setLongitude(String longitude) {
		this.longitude = longitude;
	}

	public String getLatitude() {
		return latitude;
	}

	public void setLatitude(String latitude) {
		this.latitude = latitude;
	}
	
}