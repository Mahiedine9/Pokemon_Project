

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
        public color: string,
        public stats: { base_stat: number; stat: { name: string; }; }[],
        public abilities: { ability: { name: string; }; is_hidden: boolean; }[],
        public weaknesses?: string[],
    ){} 



} 