import { Rule, SchematicContext, Tree, SchematicsException } from '@angular-devkit/schematics';
import { Schema } from './schema';

/**
 * Función factory donde se especifican las reglas de la 
 * colección del schematics con el que vamos a trabajar.
 * Referencia desde collections.json => "factory"
 * @param _options 
 * @returns 
 */
export function hello(_options: Schema): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const { name, age }: Schema = _options;

    if (name === '' || !name) {
      throw new SchematicsException(
        '"name" es obligatorio. Sin nombre no podemos crear el fichero'
      )
    }
    const path = `hello-${name.toLowerCase()}-${age || 0}.js`;
    if (tree.read(path)) {
      console.warn(
        `El fichero ${path} existe y por eso no se va a crear.`
      );
      return tree;
    }
    // SI NO EXISTE crear el fichero
    // Función para alterar en nuestro proyecto
    // para crear el fichero "hello.js" con el log especificado
    // posteriormente
    tree.create(
      path,
      `console.log('¡Hola ${name}!Veo que tienes ${age || 0} años ;)')`
    )
    return tree;
  };
}
