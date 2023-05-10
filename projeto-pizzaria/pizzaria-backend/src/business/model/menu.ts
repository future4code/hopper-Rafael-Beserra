export class Recipe {
    constructor(
      private id: string,
      private title: string,
      private price: number,
      private description: string,
      private image: string,
      private cratedAt: Date,
      private author_id: string,
    ){}
    getId():string{
      return this.id
    }
  
    getName():string{
      return this.title
    }
  
    getPrice():number{
      return this.price
    }
  
    getIngredients():string{
      return this.description
    }
    
    getImage():string{
      return this.image
    }

    getCreateAd():Date{
      return this.cratedAt
    }  

    getAuthorId():string{
      return this.author_id
    }
}

export interface RecipeInfosDTO{
    title: string;
    price: number;
    description: string;
    token: string;
    cratedAt: Date;
    author_id: string;
}

export interface RecipeInputDTO{
    title: string;
    description: string;
    price: number;
    image: string;
    token: string
}

export interface TokenInputDTO{
    token: string;
}

export interface FindIdDTO{
  id: string;
}

export interface FindRecipeByID{
  id: string;
  token: string
}

export interface DeleteRecipeByID{
  id: string;
  token: string;
}