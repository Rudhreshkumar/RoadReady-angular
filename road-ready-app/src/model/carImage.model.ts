export interface CarImageModel {
    id: number;       // ID of the car image
    usedcarId: number; // ID of the associated used car
    path: string; 
    images?: string[];    
}