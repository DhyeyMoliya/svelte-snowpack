type Unsubscriber = () => void;

export class Subscription {
    private list: Unsubscriber[] = [];

    constructor(unsubscriber?: Unsubscriber) {
        if (unsubscriber) {
            this.list.push(unsubscriber);
        }
    }

    public add(unsubscriber: Unsubscriber): void {
        this.list.push(unsubscriber);
    }

    public static add(unsubscribers: Unsubscriber[] = []) {
        const subs = new Subscription();
        for (let unsubscriber of unsubscribers) {
            subs.add(unsubscriber);
        }
        return subs;
    }

    public unsubscribe(): void {
        if (this.list?.length) {
            for (let unsubscriber of this.list) {
                unsubscriber();
            }
        }
    }

}