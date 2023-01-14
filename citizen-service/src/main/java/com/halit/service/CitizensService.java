package com.halit.service;

import com.halit.dto.request.CitizenFilterRequestDto;
import com.halit.repository.ICitizenRepository;
import com.halit.repository.entity.Citizens;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CitizensService {
    @Autowired
    private ICitizenRepository repository;
    public Citizens save(Citizens citizen){
        return repository.save(citizen);
    }
    public List<Citizens> findAll() {
        return  repository.findAll();
    }
    public Boolean updateCitizen(Citizens citizen) {
        Optional<Citizens> kane = findById(citizen.getId());
        if (kane.isPresent()) {
            kane.get().setName(citizen.getName());
            kane.get().setIsCitizen(citizen.getIsCitizen());
            kane.get().setHasDrivingLicense(citizen.getHasDrivingLicense());
            kane.get().setChildrenList(citizen.getChildrenList());
            repository.save(kane.get());
            return true;
        } else {
            return false;
        }
    }
    public Optional<Citizens> findById(Long id) {
        return  repository.findOptionalById(id);
    }

//    public Object filter(CitizenFilterRequestDto dto) {
//        return repository.findAll().stream().fi();
//    }
}
