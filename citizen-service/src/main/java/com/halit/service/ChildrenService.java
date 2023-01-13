package com.halit.service;
import com.halit.repository.IChildrenRepository;
import com.halit.repository.entity.Children;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ChildrenService {
    @Autowired
    private IChildrenRepository repository;
    public Children save(Children child){
        return repository.save(child);
    }
    public List<Children> findAll() {
        return  repository.findAll();
    }
    public Boolean updateChildren(Children child) {
        Optional<Children> child1 = findById(child.getId());
        if (child1.isPresent()) {
            child1.get().setName(child.getName());
            repository.save(child1.get());
            return true;
        } else {
            return false;
        }
    }
    public Optional<Children> findById(Long id) {
        return  repository.findOptionalById(id);
    }

}
