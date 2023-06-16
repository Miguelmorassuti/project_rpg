package com.project.ficha.service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;
import org.springframework.stereotype.Service;
import com.project.ficha.model.FichaModel;

@Service
public interface FichaService {

    List<FichaModel> findAllFichas();

    FichaModel createFicha(FichaModel ficha);

    FichaModel updateFicha(UUID id, FichaModel ficha);

    void deleteFicha(UUID id);

    Optional<FichaModel> findFichaById(UUID id);
}
