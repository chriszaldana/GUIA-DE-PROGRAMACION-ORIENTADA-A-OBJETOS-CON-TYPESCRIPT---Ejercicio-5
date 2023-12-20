abstract class Persona {
  constructor(
      protected nombre: string,
      protected apellido: string,
      protected direccion: string,
      protected telefono: string,
      protected edad: number
  ) {}

  esMayorDeEdad(): void {
      if (this.edad >= 18) {
          console.log(`${this.nombre} es mayor de edad.`);
      } else {
          console.log(`${this.nombre} no es mayor de edad.`);
      }
  }

  abstract mostrarDatos(): void; 
}

class Empleado extends Persona {
  private sueldo: number;

  constructor(
      nombre: string,
      apellido: string,
      direccion: string,
      telefono: string,
      edad: number,
      sueldo: number
  ) {
      super(nombre, apellido, direccion, telefono, edad);
      this.sueldo = sueldo;
  }

  cargarSueldo(nuevoSueldo: number): void {
      this.sueldo = nuevoSueldo;
  }

  imprimirSueldo(): void {
      console.log(`${this.nombre} tiene un sueldo de $${this.sueldo}`);
  }

  mostrarDatos(): void {
      console.log("Datos personales:");
      console.log("Nombre:", this.nombre);
      console.log("Apellido:", this.apellido);
      console.log("Dirección:", this.direccion);
      console.log("Teléfono:", this.telefono);
      console.log("Edad:", this.edad);
      this.esMayorDeEdad();
  }
}


const empleado1 = new Empleado("Juan", "Pérez", "Calle 123", "555-1234", 15, 30000);


empleado1.mostrarDatos();


empleado1.imprimirSueldo();


empleado1.cargarSueldo(35000);
empleado1.imprimirSueldo();
