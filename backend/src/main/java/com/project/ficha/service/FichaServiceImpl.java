package com.project.ficha.service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.project.ficha.model.FichaModel;
import com.project.ficha.repository.FichaRepository;

@Service
public class FichaServiceImpl implements FichaService {

	private FichaRepository fichaRepository;

	@Autowired
	public void setFichaRepository(FichaRepository fichaRepository) {
		this.fichaRepository = fichaRepository;
	}

	@Override
	public List<FichaModel> findAllFichas() {
		return fichaRepository.findAll();
	}

    @Override
    public FichaModel createFicha(FichaModel fichaModel) {
        return fichaRepository.save(fichaModel);
    }

    @Override
    public FichaModel updateFicha(UUID id, FichaModel updateFicha) {
        FichaModel ficha = fichaRepository.findById(id)
                .orElseGet(() -> {
                    updateFicha.setId(id);
                    return fichaRepository.save(updateFicha);
                });

                ficha.setNome(updateFicha.getNome());
                ficha.setNivel(updateFicha.getNivel());
                ficha.setClasse(updateFicha.getClasse());
                ficha.setRaca(updateFicha.getRaca());
                ficha.setPontosDeVida(updateFicha.getPontosDeVida());
                ficha.setForca(updateFicha.getForca());
                ficha.setDestreza(updateFicha.getDestreza());
                ficha.setDescricao(updateFicha.getDescricao());
                ficha.setInteligencia(updateFicha.getInteligencia());
                ficha.setSabedoria(updateFicha.getSabedoria());
                ficha.setCarisma(updateFicha.getCarisma());
        return fichaRepository.save(ficha);
    }
 
    @Override
    public void deleteFicha(UUID id) {
        FichaModel ficha = fichaRepository.findById(id)
                .orElseThrow();

                fichaRepository.delete(ficha);
    }

    @Override
    public Optional<FichaModel> findFichaById(UUID id) {
        return fichaRepository.findById(id);
    }
}
