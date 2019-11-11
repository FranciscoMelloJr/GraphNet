package br.unisul.domain;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Data;

@Data
@Entity
public class Provedor implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	private String nomeFantasia;
	private String razaoSocial;
	private String cnpj;
	private String cep;
	private String telefone;
	private String email;
	private String senha;

	@JsonIgnore
	@OneToMany (mappedBy="provedor")
	private List<Solicitacao> solicitacoes = new ArrayList<>();
	
	@JsonIgnore
	@OneToMany (mappedBy="provedor")
	private List<Caixa> caixas = new ArrayList<>();
	
	@JsonIgnore
	@OneToMany (mappedBy="provedor")
	private List<Analise> analises = new ArrayList<>();

	public Provedor(Integer id, String nomeFantasia, String razaoSocial, String cnpj, String cep,
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

	public Provedor(Provedor p) {
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