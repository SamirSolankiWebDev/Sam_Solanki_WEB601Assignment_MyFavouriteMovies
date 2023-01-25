import { Content } from "./content-interface";
export class ContentList {
    MovieListarray: Array<Content>;


    constructor () 
    {
      this.MovieListarray=[];
    } 

    MovielistConst(){
       return this.MovieListarray;
    }

    AddMoviesFunction(newmovies:Content){
        this.MovieListarray.push(newmovies);
    }

    MovieListCount(){
        return this.MovieListarray.length;
    }

    MovieInputFunction(id:number){
        const movie= this.MovieListarray[id];
        return "<h1> MovieListDisplay </h1>" + movie.title;
    }
}