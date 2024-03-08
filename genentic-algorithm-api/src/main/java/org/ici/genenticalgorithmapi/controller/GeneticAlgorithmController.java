package org.ici.genenticalgorithmapi.controller;

import org.ici.genenticalgorithmapi.data.DTO.ChromosomeDTO;
import org.ici.genenticalgorithmapi.data.model.Chromosome;
import org.ici.genenticalgorithmapi.data.request.geneticAlgorithmRequest.FitnessStatisticsRequestBody;
import org.ici.genenticalgorithmapi.data.request.geneticAlgorithmRequest.PopulationRequestBody;
import org.ici.genenticalgorithmapi.data.request.geneticAlgorithmRequest.SelectionRequestBody;
import org.ici.genenticalgorithmapi.service.GeneticAlgorithmService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
public class GeneticAlgorithmController {

    @Autowired // Dependency injection annotation by Spring Framework
    private GeneticAlgorithmService geneticAlgorithmService;

    @PostMapping("/population")
    public List<Chromosome> generatePopulation(@RequestBody PopulationRequestBody body){
        return this.geneticAlgorithmService.generatePopulation(
                body.getNumberOfCrom(),
                body.getLength()
        );
    }

    @PostMapping("/fitnessstatistics")
    public List<ChromosomeDTO<Integer, Float>> fitnessStatistics(@RequestBody FitnessStatisticsRequestBody body) {
        return this.geneticAlgorithmService.fitnessStatistics(body.getChromosomes());
    }

    @PostMapping("/selection")
    public List<Chromosome> selection(@RequestBody SelectionRequestBody body){
        return this.geneticAlgorithmService.selection(body.getChromosomes(), body.getN());
    }

}
