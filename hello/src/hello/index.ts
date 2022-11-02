import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';

/**
 * Función factory donde se especifican las reglas de la 
 * colección del schematics con el que vamos a trabajar.
 * Referencia desde collections.json => "factory"
 * @param _options 
 * @returns 
 */
export function hello(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const { name, age } = _options;
    _context.logger.info(`Opciones: NAME: ${name}, AGE: ${age}`);
    // Función para alterar en nuestro proyecto
    // para crear el fichero "hello.js" con el log especificado
    // posteriormente
    tree.create(
      'hello.js',
      `console.log('¡Hola ${name}!Veo que tienes ${age} años ;)')`
    )
    return tree;
  };
}
