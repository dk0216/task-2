export class Task {
    public Id: number;
    public Description: string;
    public Priority: number;
    public Status: 'STARTED'|'IN_PROGRESS'|'COMPLETED'|'FAILED';
    public CustomerId: number;   
}