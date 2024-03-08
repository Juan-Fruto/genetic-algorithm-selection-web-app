package org.ici.genenticalgorithmapi.data.model;

import java.io.Serializable;
import java.util.Random;

public class Chromosome implements Serializable {

    private String value;
    private int fitness;

    private Chromosome(String value, int fitness){
        this.value = value;
        this.fitness = fitness;
    }

    public Chromosome(int length){
        this.createChromosome(length);
        this.setFitness();
    }

    private void createChromosome(int length){
        Random random = new Random();
        StringBuilder chromosome = new StringBuilder();

        for(int i = 0; i < length; i++){
            chromosome.append(random.nextInt(2));
        }
        this.value = chromosome.toString();
    }

    private void setFitness(){
        int counter = 0, fitness = 0;

        for(char e : this.value.toCharArray()){
            if(e == '1'){
                counter++;
            } else {
                if(counter > fitness) fitness = counter;
                counter = 0;
            }
        }

        if(counter > fitness) fitness = counter; // for chromosomes which ends with 1

        this.fitness = fitness;
    }

    public String getValue() {
        return this.value;
    }

    public int getFitness(){
        return this.fitness;
    }
}

