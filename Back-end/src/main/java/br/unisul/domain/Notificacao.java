package br.unisul.domain;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;

import com.fasterxml.jackson.annotation.JsonIgnore;

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
	
	private String descricao;
	
	private String latitude;
	private String longitude;

	@JsonIgnore
	@JoinColumn (name="provedor_id")
	private Provedor provedor;
	
	public Notificacao(Integer id, String descricao, String latitude, String longitude) {
		this.id = id;
		this.descricao = descricao;
		this.latitude = latitude;
		this.longitude = longitude;
	}
	
	public Notificacao(Notificacao n) {
		this.id = n.getId();
		this.descricao = n.getDescricao();
		this.latitude = n.getLatitude();
		this.longitude = n.getLongitude();
	}

}
