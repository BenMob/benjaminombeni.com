/**
 * The Project interface
 */

 export interface Project{
     name: string,
     description: string,
     source: string,
     demo: string | null,
     tools: Array<string>
 }