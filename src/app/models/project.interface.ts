export interface Project {
  id: number;
  title: string;
  // CAMBIO AQUÍ 👇
  description: {
      es: string;
      en: string;
  }; 
  image: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string; // (Opcional, si tenías este campo)
}