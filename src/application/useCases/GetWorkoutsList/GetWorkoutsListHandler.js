export class GetWorkoutListHandler{
    constructor(userWorkouts){
        this.userWorkouts = userWorkouts
    }

    handle(getWorkoutListCommand){
        this.userWorkouts.GetWorkoutListFromDB(getWorkoutListCommand.userId)
    }
}