package com.project.ficha.repository;

import com.project.ficha.model.FichaModel;
import java.util.UUID;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FichaRepository extends JpaRepository<FichaModel, UUID> {

}

