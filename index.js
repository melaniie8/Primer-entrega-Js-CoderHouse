class Usuario {
    constructor (nombre, apellido, libros, mascotas){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }
    getFullName(){
        return(`Nombre completo ${this.nombre}} ${this.apellido}`);
    }

    addMascotas(petNames){
        this.mascotas.push(petNames);
    }

    countMascotas(){
        return this.mascotas.lenght;
    }

    addBook(nombre, autor){
        this.libros.push({nombre, autor});
    }

    getBookNames(){
        return this.libros.map(libro => libro.nombre);
    }

}



let usuario = new Usuario('Melanie', 'Aquino', [], []);
    usuario.addBook('Harry Potter and the Chamber of Secrets', 'J.K Rowling');
    usuario.addBook('El Diario de Ana Frank', 'Otto Frank')
    usuario.addMascotas("Perro");
    usuario.addMascotas("Gato");



    console.log(usuario);
    

