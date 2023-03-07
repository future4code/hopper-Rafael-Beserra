export class Recipe {
    constructor(
      private id: string,
      private name: string,
      private price: number,
      private ingredients: string,
      private cratedAt: Date,
      private author_id: string,
    ){}
    getId():string{
      return this.id
    }
  
    getName():string{
      return this.name
    }
  
    getPrice():number{
      return this.price
    }
  
    getIngredients():string{
      return this.ingredients
    }
    
    getCreateAd():Date{
      return this.cratedAt
    }  

    getAuthorId():string{
      return this.author_id
    }
}

export interface RecipeInfosDTO{
    name: string;
    price: number;
    ingredients: string;
    token: string;
    cratedAt: Date;
    author_id: string;
}

export interface RecipeInputDTO{
    name: string;
    ingredients: string;
    price: number;
    token: string
}

export interface TokenDTO{
    token: string
}

export interface FindIdDTO{
  id: string
}

export interface FindRecipeByID{
  id: string;
  token: string
}