package com.halit.controller;

import com.halit.dto.request.ChildrenRequestDto;
import com.halit.repository.ICitizenRepository;
import com.halit.repository.entity.Children;
import com.halit.repository.entity.Citizens;
import com.halit.service.ChildrenService;
import com.halit.service.CitizensService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static com.halit.constants.EndPoints.*;

@Controller
@RequestMapping(CHILDREN)
@RequiredArgsConstructor
public class ChildrenController {
    private final ChildrenService childrenService;
    private final CitizensService citizensService;
    @Autowired
    private ICitizenRepository repository;

    @CrossOrigin("*")
    @PostMapping(SAVE)
    public ResponseEntity<Children> save(@RequestBody ChildrenRequestDto dto) {
        Citizens citizen = citizensService.findById(dto.getParentId()).get();
        try {
            Children child1 =Children.builder()
                    .name(dto.getName())
                    .citizens(citizen).build();
            childrenService.save(child1);
            citizen.getChildrenList().add(child1);
            citizensService.updateCitizen(citizen);
            System.out.println(citizen);
            System.out.println("Child was created.");
            return ResponseEntity.ok(child1);
        }catch (Exception e){
            System.out.println(e.getMessage());
            System.out.println("Failed to create citizen registration.");
            throw  new RuntimeException();
        }
    }
    @CrossOrigin("*")
    @PutMapping(UPDATE)
    public ResponseEntity<Children> update(@RequestBody Children child) {
        try {
            childrenService.updateChildren(child);
            System.out.println("The child updated.");
            return ResponseEntity.ok(child);
        }catch (Exception e){
            System.out.println(e.getMessage());
            System.out.println("The child could not be updated.");
            throw  new RuntimeException();
        }
    }

    @CrossOrigin("*")
    @GetMapping(GETALL)
    public ResponseEntity<List<Children>> findAll() {
        return ResponseEntity.ok(childrenService.findAll());
    }

    @CrossOrigin("*")
    @GetMapping(GETBYID)
    public ResponseEntity<Children> findById(@RequestBody Long id) {
        return ResponseEntity.ok(childrenService.findById(id).get());
    }

}
