import { CounterRepository } from "../repositories/CounterRepository"
import {Counter} from "../models/Counter"

export class CounterService {
    private readonly repository = new CounterRepository();
    constructor(){}

    getCounter(){
        return this.repository.get();
    }

    addCount(value: number){
        let currentCount = this.repository.get().count;
        if(currentCount + value < 0){
            console.warn("Count is a positive integer.")
            return;
        } 
        let newCounter = new Counter(currentCount + value);
        this.repository.updateCount(newCounter);
    }
}