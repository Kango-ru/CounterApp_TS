import { CounterService } from "../services/CounterService"

export class CounterViewModel {
    private readonly service = new CounterService();
    constructor(){}
    getCounter(){
        return this.service.getCounter();
    }
    addCount(value: number){
        this.service.addCount(value);
    }
}