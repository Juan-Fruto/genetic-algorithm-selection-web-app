package org.ici.genenticalgorithmapi.service;

import org.ici.genenticalgorithmapi.data.DTO.ChromosomeDTO;
import org.ici.genenticalgorithmapi.data.model.Chromosome;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.ArrayList;
import java.util.Random;
import java.util.Set;
import java.util.stream.Collectors;

@Component
public class GeneticAlgorithmService {

    public List<Chromosome> generatePopulation(int numberCrom, int length){
        List<Chromosome> chromosomes = new ArrayList<>();

        for(int i= 0 ; i < numberCrom; i++){
            chromosomes.add(new Chromosome(length));
        }

        System.out.println("numberCrom" + numberCrom);
        System.out.println("length" + length);

        return chromosomes;
    }

    public List<ChromosomeDTO<Integer, Float>> fitnessStatistics(List<Chromosome> chromosomes){
         Set<Integer> fitnessFounded =  chromosomes.stream()
                .map(chromosome -> chromosome.getFitness())
                .collect(Collectors.toSet());
        int numberOfChromosomes = chromosomes.size();

        List<ChromosomeDTO<Integer, Float>> statistics = new ArrayList<>();

        // O(n * m) solution
        for(int fitness : fitnessFounded){
            int counter = 0;

            for(int i = 0; i < numberOfChromosomes; i++){
                if(fitness == chromosomes.get(i).getFitness()){
                    counter++;
                }
            }

            Float percent = (float) counter / numberOfChromosomes;
            statistics.add(new ChromosomeDTO<>(fitness, percent));
        }

        return statistics;
    }

    public List<Chromosome> selection(List<Chromosome> chromosomes, int n){
        List<Chromosome> newPopulation = new ArrayList<>();

        Random random = new Random();
        for(int i = 0; i < n; i++){
            int selectedItem = random.nextInt();

            newPopulation.add(chromosomes.get(i));
            chromosomes.remove(i);
        }

        return newPopulation;
    }

    private String toString(List<Chromosome> chromosomes){
        return chromosomes.stream()
                .map(chromosome -> STR."{ Value: \{chromosome.getValue()}, fitness: \{chromosome.getFitness()} }")
                .collect(Collectors.joining("\n"));
    }

}
