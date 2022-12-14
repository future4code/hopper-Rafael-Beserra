export class Recipe {
    constructor(
      private id: string,
      private title: string,
      private description: string,
      private createAt: Date,
      private author_id: string,
    ){}
    getId():string{
      return this.id
    }
  
    getTitle():string{
      return this.title
    }
  
    getDescription():string{
      return this.description
    }
  
    getCreateAd():Date{
      return this.createAt
    }
  
    getAuthorId():string{
      return this.author_id
    }
}

export interface RecipeInfosDTO{
    title: string;
    description: string;
    token: string;
}

export interface RecipeInputDTO{
    title:string,
    description: string
}

export interface TokenDTO{
    token: string
}