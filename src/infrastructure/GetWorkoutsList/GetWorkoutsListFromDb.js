import { GetWorkoutsListRepository } from '../../application/useCases/GetWorkoutsList/GetWorkoutsListRepository.js'

export class GetWorkoutsList extends GetWorkoutsListRepository{
    constructor(){
        super();
    }

    getWorkoutsListFromDB(userId){
        //call database
        return('soy el getfrom db y funciono lol')
    }
}