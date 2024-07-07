

export class Pokemon{


    constructor(
        public name : string, 
        public sprites: {
            front_default: string;
          }, 
        public types : { slot: number; type: { name: string; }; }[], 
        public height : number, 
        public weight : number, 
        public id : number,
        public color: string
    ){} 





} 