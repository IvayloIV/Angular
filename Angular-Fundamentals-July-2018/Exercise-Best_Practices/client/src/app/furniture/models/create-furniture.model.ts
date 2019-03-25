export class CreateFurniture {
    constructor(
        public make: string,
        public model: string,
        public description: string,
        public price: number,
        public image: string,
        public year: number,
        public material?: string
    ) {}
}