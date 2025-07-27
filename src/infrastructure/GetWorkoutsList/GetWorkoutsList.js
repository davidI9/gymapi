import {GetWorkoutsList} from './GetWorkoutsListFromDb.js'
import { GetWorkoutListCommand } from '../../application/useCases/GetWorkoutsList/GetWorkoutsListCommand.js'
import { GetWorkoutListHandler } from '../../application/useCases/GetWorkoutsList/GetWorkoutsListHandler.js'

export function getWorkoutsList(userId){
    const userWorkouts = new GetWorkoutsList
    const command = new GetWorkoutListCommand(userId)
    const handler = new GetWorkoutListHandler(userWorkouts)

    return handler.handle(command)
}
