import { error } from "console";

export class Exercise{
    constructor(exerciseTitle, exerciseDescription, weight, repetitions){
        this.exerciseDescription = exerciseDescription;
        this.exerciseTitle = exerciseTitle;
        this.weight = weight;
        this.repetitions = repetitions;
    }

    setWeight(newWeight){
        if(newWeight < 0){
            error('El peso introducido no es valido.');
        }else{
            this.weight = newWeight;
        }
    }

    setRepetitions(newRepetitions){
        if(newRepetitions < 0){
            error('El numero de repeticiones introducido no es valido.');
        }else{
            this.repetitions = newRepetitions;
        }
    }
}