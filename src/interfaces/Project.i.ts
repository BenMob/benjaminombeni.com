/**
 * The Project interface
 */

 export interface Tool_i{
     name:string,
     color:string
 }

 export interface Project_i{
     id: number,
     name: string,
     description: string,
     source: string,
     demo: string | null,
     tools: Array<Tool_i> | null,
     category: string
 }