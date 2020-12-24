/**
 * The Project interface
 */

 export interface Project_i{
     id: number,
     name: string,
     description: string,
     source: string,
     demo: string | null,
     tools: Array<string> | null,
     category: string
 }