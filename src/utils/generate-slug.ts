export const geraSlug = (texto: string) => {
    return texto.toLowerCase()
      .normalize("NFD")
      .replace(/[^\w\s]/g, '')
      .replace(/\s+/g, '-') 
      .trim(); 
}

