package com.graphnet.project.domain.enums;

public enum TipoCTO {

	X8(1, "Caixa de atendimento com 8 vagas"), X16(2, "Caixa de atendimento com 16 vagas");

	private int cod;
	private String descricao;

	private TipoCTO(int cod, String descricao) {
		this.cod = cod;
		this.descricao = descricao;
	}

	public int getCod() {
		return cod;
	}

	public String getDescricao() {
		return descricao;
	}

	public static TipoCTO toEnum(Integer cod) {

		if (cod == null) {
			return null;
		}

		for (TipoCTO x : TipoCTO.values()) {
			if (cod.equals(x.getCod())) {
				return x;
			}
		}

		throw new IllegalArgumentException("Id inválido: " + cod);
	}

}
