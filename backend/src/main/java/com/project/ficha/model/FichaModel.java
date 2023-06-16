package com.project.ficha.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import com.project.ficha.AbstractEntity;
import lombok.Data;

@Data
@Entity
@Table(name = "ficha")
public class FichaModel extends AbstractEntity {

    private static final long serialVersionUID = 1L;

    @NotNull
    @Column(unique = true)
    private String nome;

    @NotNull
    private String descricao;

    @NotNull
    private int nivel;

    @NotNull
    private String classe;

    @NotNull
    private String raca;

    @NotNull
    private int pontosDeVida;

    @NotNull
    private int forca;

    @NotNull
    private int destreza;

    @NotNull
    private int inteligencia;

    @NotNull
    private int sabedoria;

    @NotNull
    private int carisma;

    public FichaModel() {
    }
}