package com.project.ficha.controller;

import java.util.List;
import java.util.Optional;
import java.util.UUID;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.project.ficha.service.FichaService;
import com.project.ficha.model.FichaModel;

@RestController
@CrossOrigin("*")
public class FichaController {

    @Autowired
    private FichaService fichaService;

    @GetMapping("/fichas")
    List<FichaModel> findAllFichas() {
        return fichaService.findAllFichas();
    }

    @GetMapping("/fichas/{id}")
    Optional<FichaModel> findOneFicha(@PathVariable UUID id) {
        return fichaService.findFichaById(id);
    }

    @PostMapping("/fichas")
    FichaModel newFicha(@RequestBody FichaModel newFicha) {
        return fichaService.createFicha(newFicha);
    }

    @PutMapping("/fichas/{id}")
    FichaModel replaceFicha(@RequestBody FichaModel newFicha, @PathVariable UUID id) {
        return fichaService.updateFicha(id, newFicha);
    }

    @DeleteMapping("/fichas/{id}")
    void deleteClassroom(@PathVariable UUID id) {
        fichaService.deleteFicha(id);
    }
}
