package br.unisul.domain;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@Entity
public class Notificacao implements Serializable {
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	@Column(length = 1000)
	private String descricao;
	
	private String latitude;
	private String longitude;
	
	private String tipo;

	@ManyToOne
	@JoinColumn (name="provedor_id")
	private Provedor provedor;
	
	public Notificacao(Integer id, String descricao, String latitude, String longitude, String tipo) {
		this.id = id;
		this.descricao = descricao;
		this.latitude = latitude;
		this.longitude = longitude;
		this.tipo = tipo;
	}
	
	public Notificacao(Notificacao n) {
		this.id = n.getId();
		this.descricao = n.getDescricao();
		this.latitude = n.getLatitude();
		this.longitude = n.getLongitude();
		this.tipo = n.getTipo();
	}

}
