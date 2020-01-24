package br.unisul.dtos;

import java.io.Serializable;

import br.unisul.domain.Cliente;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
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

}