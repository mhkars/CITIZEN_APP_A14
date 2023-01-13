package com.halit.controller;

import com.halit.dto.response.CitizenResponseDto;
import com.halit.repository.entity.Citizens;
import com.halit.service.CitizensService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

import static com.halit.constants.EndPoints.*;

@Controller
@RequestMapping(CITIZEN)
@RequiredArgsConstructor
public class CitizensController {
    private final CitizensService citizensService;

    @CrossOrigin("*")
    @PostMapping(SAVE)
    public ResponseEntity<Citizens> save(@RequestBody Citizens citizen) {
        try {
            Citizens kane =Citizens.builder()
                    .name(citizen.getName())
                    .isCitizen(citizen.getIsCitizen())
                    .hasDrivingLicense(citizen.getHasDrivingLicense()).build();
            citizensService.save(kane);
            System.out.println("Citizen was created.");
            return ResponseEntity.ok(kane);
        }catch (Exception e){
            System.out.println(e.getMessage());
            System.out.println("Failed to create citizen registration.");
            throw  new RuntimeException();
        }
    }

    @CrossOrigin("*")
    @PutMapping(UPDATE)
    public ResponseEntity<Citizens> update(@RequestBody Citizens citizen) {
        try {
            citizensService.updateCitizen(citizen);
            System.out.println("The citizen updated.");
            return ResponseEntity.ok(citizen);
        }catch (Exception e){
            System.out.println(e.getMessage());
            System.out.println("The citizen could not be updated.");
            throw  new RuntimeException();
        }
    }

    @CrossOrigin("*")
    @GetMapping(GETALL)
    public ResponseEntity<List<CitizenResponseDto>> findAll() {
        List<Citizens> citizensList = citizensService.findAll();
        List<CitizenResponseDto> dtoList = citizensList.stream().map(
                x-> CitizenResponseDto.builder()
                        .id(x.getId())
                        .name(x.getName())
                        .isCitizen(x.getIsCitizen())
                        .hasDrivingLicense(x.getHasDrivingLicense())
                        .numberOfChildren(x.getChildrenList().size()).build()).collect(Collectors.toList());
        return ResponseEntity.ok(dtoList);
    }

    @CrossOrigin("*")
    @GetMapping(GETBYID)
    public ResponseEntity<Citizens> findById(@RequestBody Long id) {
        return ResponseEntity.ok(citizensService.findById(id).get());
    }

}
